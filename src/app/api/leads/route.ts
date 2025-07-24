import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const LEADS_FILE_PATH = path.join(process.cwd(), 'data', 'leads.json');

// Log the file path on startup
console.log('Leads file path:', LEADS_FILE_PATH);

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.dirname(LEADS_FILE_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
    console.log(`Created data directory: ${dataDir}`);
  }
}

// Read leads from file
function readLeads() {
  try {
    ensureDataDirectory();
    if (fs.existsSync(LEADS_FILE_PATH)) {
      const data = fs.readFileSync(LEADS_FILE_PATH, 'utf8');
      const leads = JSON.parse(data);
      console.log(`Successfully read ${leads.length} leads from ${LEADS_FILE_PATH}`);
      return leads;
    } else {
      console.log(`Leads file does not exist at ${LEADS_FILE_PATH}, returning empty array`);
    }
  } catch (error) {
    console.error('Error reading leads:', error);
  }
  return [];
}

// Write leads to file
function writeLeads(leads: any[]) {
  try {
    ensureDataDirectory();
    fs.writeFileSync(LEADS_FILE_PATH, JSON.stringify(leads, null, 2));
    console.log(`Successfully wrote ${leads.length} leads to ${LEADS_FILE_PATH}`);
  } catch (error) {
    console.error('Error writing leads:', error);
    throw error; // Throw error to handle it in the API route
  }
}

// GET - Retrieve all leads
export async function GET() {
  try {
    const leads = readLeads();
    console.log(`API GET: Returning ${leads.length} leads`);
    return NextResponse.json(leads);
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

// POST - Add new lead
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;
    
    console.log('Received new lead data:', { name, phone, email, message });
    
    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    const newLead = {
      id: Date.now().toString(),
      name,
      phone,
      email: email || '',
      message: message || '',
      date: new Date().toISOString(),
      timestamp: Date.now()
    };

    const leads = readLeads();
    leads.push(newLead);
    
    // Try to write leads and handle any errors
    try {
      writeLeads(leads);
      console.log('Successfully saved lead with ID:', newLead.id);
    } catch (writeError) {
      console.error('Failed to write leads to file:', writeError);
      return NextResponse.json({ error: 'Failed to save lead to file' }, { status: 500 });
    }

    return NextResponse.json({ success: true, lead: newLead });
  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
  }
}

// DELETE - Delete a lead by ID
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Lead ID is required' }, { status: 400 });
    }

    const leads = readLeads();
    const filteredLeads = leads.filter((lead: any) => lead.id !== id);
    writeLeads(filteredLeads);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete lead' }, { status: 500 });
  }
} 