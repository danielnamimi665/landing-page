import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const LEADS_FILE_PATH = path.join(process.cwd(), 'data', 'leads.json');

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.dirname(LEADS_FILE_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Read leads from file
function readLeads() {
  try {
    ensureDataDirectory();
    if (fs.existsSync(LEADS_FILE_PATH)) {
      const data = fs.readFileSync(LEADS_FILE_PATH, 'utf8');
      return JSON.parse(data);
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
  } catch (error) {
    console.error('Error writing leads:', error);
  }
}

// GET - Retrieve all leads
export async function GET() {
  try {
    const leads = readLeads();
    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

// POST - Add new lead
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;
    
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
    writeLeads(leads);

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