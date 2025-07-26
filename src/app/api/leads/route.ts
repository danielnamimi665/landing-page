import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const LEADS_FILE_PATH = path.join(process.cwd(), 'data', 'leads.json');

// Log the file path on startup
console.log('נתיב קובץ הלידים:', LEADS_FILE_PATH);

// וידוא שתיקיית הנתונים קיימת עם הרשאות מתאימות
function ensureDataDirectory() {
  const dataDir = path.dirname(LEADS_FILE_PATH);
  if (!fs.existsSync(dataDir)) {
    try {
      fs.mkdirSync(dataDir, { recursive: true });
      fs.chmodSync(dataDir, 0o777);
      console.log(`נוצרה תיקיית נתונים: ${dataDir}`);
    } catch (error) {
      console.error('שגיאה ביצירת תיקיית נתונים:', error);
      throw new Error('לא ניתן ליצור את תיקיית הנתונים');
    }
  }
}

// קריאת לידים מהקובץ
function readLeads() {
  try {
    ensureDataDirectory();
    if (fs.existsSync(LEADS_FILE_PATH)) {
      const data = fs.readFileSync(LEADS_FILE_PATH, 'utf8');
      const leads = JSON.parse(data);
      console.log(`נקראו ${leads.length} לידים מהקובץ ${LEADS_FILE_PATH}`);
      return leads;
    } else {
      console.log(`קובץ הלידים לא קיים ב-${LEADS_FILE_PATH}, מחזיר מערך ריק`);
      return [];
    }
  } catch (error) {
    console.error('שגיאה בקריאת לידים:', error);
    throw new Error('לא ניתן לקרוא את קובץ הלידים');
  }
}

// כתיבת לידים לקובץ
function writeLeads(leads: any[]) {
  try {
    ensureDataDirectory();
    
    // בדיקת הרשאות כתיבה
    try {
      fs.accessSync(path.dirname(LEADS_FILE_PATH), fs.constants.W_OK);
    } catch {
      fs.chmodSync(path.dirname(LEADS_FILE_PATH), 0o777);
    }

    // כתיבת הנתונים לקובץ
    fs.writeFileSync(LEADS_FILE_PATH, JSON.stringify(leads, null, 2));
    console.log(`נכתבו ${leads.length} לידים לקובץ ${LEADS_FILE_PATH}`);
  } catch (error) {
    console.error('שגיאה בכתיבת לידים:', error);
    throw new Error('לא ניתן לכתוב את קובץ הלידים');
  }
}

// GET - קבלת כל הלידים
export async function GET() {
  try {
    const leads = readLeads();
    return NextResponse.json({ success: true, leads });
  } catch (error) {
    console.error('שגיאה בקבלת לידים:', error);
    return NextResponse.json(
      { success: false, error: 'שגיאה בקבלת הלידים' },
      { status: 500 }
    );
  }
}

// POST - הוספת ליד חדש
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;
    
    // וידוא שדות חובה
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'שם וטלפון הם שדות חובה' },
        { status: 400 }
      );
    }

    // יצירת ליד חדש
    const now = new Date();
    const newLead = {
      id: now.getTime().toString(),
      name,
      phone,
      email: email || '',
      message: message || '',
      date: now.toISOString(),
      timestamp: now.getTime()
    };

    // קריאת הלידים הקיימים והוספת החדש
    const leads = readLeads();
    leads.push(newLead);
    
    // שמירת הלידים המעודכנים
    writeLeads(leads);

    return NextResponse.json({ 
      success: true, 
      lead: newLead,
      message: 'הליד נשמר בהצלחה'
    });
  } catch (error) {
    console.error('שגיאה בשמירת ליד:', error);
    return NextResponse.json(
      { success: false, error: 'שגיאה בשמירת הליד' },
      { status: 500 }
    );
  }
}

// DELETE - מחיקת ליד לפי מזהה
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'נדרש מזהה ליד למחיקה' },
        { status: 400 }
      );
    }

    const leads = readLeads();
    const filteredLeads = leads.filter((lead: any) => lead.id !== id);
    
    if (leads.length === filteredLeads.length) {
      return NextResponse.json(
        { success: false, error: 'הליד לא נמצא' },
        { status: 404 }
      );
    }

    writeLeads(filteredLeads);

    return NextResponse.json({ 
      success: true,
      message: 'הליד נמחק בהצלחה'
    });
  } catch (error) {
    console.error('שגיאה במחיקת ליד:', error);
    return NextResponse.json(
      { success: false, error: 'שגיאה במחיקת הליד' },
      { status: 500 }
    );
  }
} 