import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../lib/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';

// GET - קבלת כל הלידים
export async function GET() {
  try {
    const leadsRef = collection(db, 'leads');
    const q = query(leadsRef, orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const leads = querySnapshot.docs.map(doc => ({
      _id: doc.id,
      ...doc.data()
    }));

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
      name,
      phone,
      email: email || '',
      message: message || '',
      date: now.toISOString(),
      timestamp: now.getTime()
    };

    // שמירת הליד ב-Firestore
    const docRef = await addDoc(collection(db, 'leads'), newLead);

    // החזרת הליד עם ה-ID שנוצר
    const savedLead = {
      _id: docRef.id,
      ...newLead
    };

    return NextResponse.json({ 
      success: true, 
      lead: savedLead,
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

    // מחיקת הליד מ-Firestore
    await deleteDoc(doc(db, 'leads', id));

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