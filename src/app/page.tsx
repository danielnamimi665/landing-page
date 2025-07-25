"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from './page.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, isSameDay, isToday, isYesterday, parseISO } from 'date-fns';

// RotatingTextStatic component for the hero section
function RotatingTextStatic() {
  const slides = [
    "הכנת מודעות",
    "פרסום ושיווק דיגיטלי",
    "בניית אתרים",
    "דפי נחיתה ממירים"
  ];
  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setSlide(true);
      }, 300);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <span className={`rotating-text logo-style${slide ? " in" : " out"}`}>{slides[index]}</span>
  );
}

// RotatingTextStatic for hero section (slide-up, 1.5s interval)
function RotatingTextHero() {
  const slides = [
    "הכנת מודעות",
    "פרסום ושיווק דיגיטלי",
    "בניית אתרים",
    "יצירת דפי נחיתה"
  ];
  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setSlide(true);
      }, 300);
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <span className={`rotating-text${slide ? " in" : " out"}`}>
        {slides[index]}
      </span>
      <style jsx>{`
        .rotating-text {
          color: #00F0FF !important;
          font-family: 'Assistant', Arial, sans-serif !important;
        }
      `}</style>
    </>
  );
}

// RotatingText for hero section (custom slides, 2.5s interval, logo style)
function RotatingTextHeroLogo() {
  const slides = [
    "בניית מודעות",
    "פרסום ושיווק דיגיטלי",
    "בניית אתרים",
    "יצירת דפי נחיתה",
    "יצירת לוגו לאתר"
  ];
  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setSlide(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <span className={`hero-logo-rotating-text${slide ? " in" : " out"}`}>{slides[index]}</span>
  );
}

// RotatingTextFeatureCard for feature card (fade in/out)
function RotatingTextFeatureCard() {
  const slides = [
    "בניית אתרים",
    "יצירת דפי נחיתה ממירים",
    "יצירת לוגו מבוסס Ai"
  ];
  const [localIndex, localSetIndex] = useState(0);
  const [localSlide, localSetSlide] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      localSetSlide(false);
      setTimeout(() => {
        localSetIndex((prev) => (prev + 1) % slides.length);
        localSetSlide(true);
      }, 2000); // היה 1500
    }, 2000); // היה 1500
    return () => clearInterval(interval);
  }, []);
  return (
    <span className={`feature-card-title feature-rotating-text${localSlide ? " in" : " out"}`}>{slides[localIndex]}
      <style jsx>{`
        .feature-rotating-text {
          color: #00F0FF !important;
          font-size: 1.7rem;
          font-weight: 800;
          font-family: inherit;
          letter-spacing: 2px;
          text-shadow: none;
          text-align: center;
          display: inline-block;
          text-transform: uppercase;
          margin: 0;
          transition: opacity 0.6s cubic-bezier(.4,2,.6,1);
        }
        .feature-rotating-text.in {
          opacity: 1;
        }
        .feature-rotating-text.out {
          opacity: 0;
        }
      `}</style>
    </span>
  );
}

// RotatingTextFeatureCard2 for feature card (fade in/out)
function RotatingTextFeatureCard2() {
  const slides = [
    "פרסום דיגיטלי ברשתות",
    "בפייסבוק",
    "באינסטנגרם"
  ];
  const [localIndex, localSetIndex] = useState(0);
  const [localSlide, localSetSlide] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      localSetSlide(false);
      setTimeout(() => {
        localSetIndex((prev) => (prev + 1) % slides.length);
        localSetSlide(true);
      }, 2000); // היה 1500
    }, 2000); // היה 1500
    return () => clearInterval(interval);
  }, []);
  return (
    <span className={`feature-card-title feature-rotating-text${localSlide ? " in" : " out"}`}>{slides[localIndex]}
      <style jsx>{`
        .feature-rotating-text {
          color: #00F0FF !important;
          font-size: 1.7rem;
          font-weight: 800;
          font-family: inherit;
          letter-spacing: 2px;
          text-shadow: none;
          text-align: center;
          display: inline-block;
          text-transform: uppercase;
          margin: 0;
          transition: opacity 0.6s cubic-bezier(.4,2,.6,1);
        }
        .feature-rotating-text.in {
          opacity: 1;
        }
        .feature-rotating-text.out {
          opacity: 0;
        }
      `}</style>
    </span>
  );
}

// RotatingTextHeroDigital for hero section (slide-up, 1.5s interval)
function RotatingTextHeroDigital() {
  const slides = [
    "יצירת מודעות",
    "פרסום ושיווק דיגיטלי",
    "בניית אתרים",
    "יצירת דפי נחיתה"
  ];
  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setSlide(true);
      }, 300);
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  return (
    <span className={`feature-card-title feature-rotating-text hero-rotating-text${slide ? " in" : " out"}`}>{slides[index]}
      <style jsx>{`
        .hero-rotating-text {
          color: #00F0FF !important;
          font-size: 1.7rem;
          font-weight: 800;
          font-family: inherit;
          letter-spacing: 2px;
          text-shadow: none;
          text-align: center;
          display: inline-block;
          text-transform: uppercase;
          margin: 0;
          transition: transform 0.3s cubic-bezier(.4,2,.6,1), opacity 0.3s;
        }
        .hero-rotating-text.in {
          opacity: 1;
          transform: translateY(0);
        }
        .hero-rotating-text.out {
          opacity: 0;
          transform: translateY(-32px);
        }
      `}</style>
    </span>
  );
}

// Rotating text for mobile card 1
function RotatingTextMobileCard1() {
  const slides = ['פרסום ושיווק דיגיטלי', 'בפייסבוק', 'באינסטנגרם'];
  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setSlide(true);
      }, 300);
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  return (
    <span className={`feature-card-title feature-rotating-text${slide ? ' in' : ' out'}`}
      style={{
        color:'#00F0FF',
        fontWeight:800,
        fontSize:'1.7rem',
        textAlign:'center',
        display:'block',
        marginTop:'0.5em',
        textShadow:'0 0 12px #00F0FF99, 0 0 24px #00F0FFcc'
      }}>
      {slides[index]}
      <style jsx>{`
        @media (max-width: 600px) {
          .feature-rotating-text {
            text-shadow: 0 0 12px #00F0FF99, 0 0 24px #00F0FFcc;
          }
        }
        .feature-rotating-text {
          transition: opacity 0.6s cubic-bezier(.4,2,.6,1);
        }
        .feature-rotating-text.in {
          opacity: 1;
        }
        .feature-rotating-text.out {
          opacity: 0;
        }
      `}</style>
    </span>
  );
}
// Rotating text for mobile card 2
function RotatingTextMobileCard2() {
  const slides = ['בניית אתרים', 'יצירת דפי נחיתה ממירים', 'יצירת לוגו מבוסס Ai'];
  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setSlide(true);
      }, 300);
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  return (
    <span className={`feature-card-title feature-rotating-text${slide ? ' in' : ' out'}`}
      style={{
        color:'#00F0FF',
        fontWeight:800,
        fontSize:'1.7rem',
        textAlign:'center',
        display:'block',
        marginTop:'0.5em',
        textShadow:'0 0 12px #00F0FF99, 0 0 24px #00F0FFcc'
      }}>
      {slides[index]}
      <style jsx>{`
        @media (max-width: 600px) {
          .feature-rotating-text {
            text-shadow: 0 0 12px #00F0FF99, 0 0 24px #00F0FFcc;
          }
        }
        .feature-rotating-text {
          transition: opacity 0.6s cubic-bezier(.4,2,.6,1);
        }
        .feature-rotating-text.in {
          opacity: 1;
        }
        .feature-rotating-text.out {
          opacity: 0;
        }
      `}</style>
    </span>
  );
}

export default function Home() {
  // Rotating index and slide for feature cards
  const [featureIndex, setFeatureIndex] = useState(0);
  const [featureSlide, setFeatureSlide] = useState(true);
  // Detect mobile/desktop
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setFeatureSlide(false);
      setTimeout(() => {
        setFeatureIndex((prev) => (prev + 1) % 3);
        setFeatureSlide(true);
      }, 300);
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  const [selectedNav, setSelectedNav] = useState('home');
  const [isRotating, setIsRotating] = useState(false);
  // State for modal image
  const [modalImgIndex, setModalImgIndex] = useState<number | null>(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  // סטייט ללידים
  const [leads, setLeads] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // סטייט ללוח שנה וסינון
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [filterMode, setFilterMode] = useState<'all' | 'today' | 'yesterday' | 'date'>('all');
  // For swipe
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState({ adir: false, lia: false });

  // 1. Add galleryImages array at the top of Home
  const galleryImages = [
    '/arik.png',
    '/arik1.png',
    '/lia.png',
    '/adir.png',
  ];

  // טוען לידים מהזיכרון המקומי
  const loadLeads = () => {
    try {
      const savedLeads = localStorage.getItem('leads');
      if (savedLeads) {
        const parsedLeads = JSON.parse(savedLeads);
        console.log(`Loaded ${parsedLeads.length} leads from localStorage`);
        setLeads(parsedLeads.map((lead: any) => ({ ...lead, date: new Date(lead.date) })));
      }
    } catch (error) {
      console.error('Error loading leads:', error);
    }
  };

  // טוען לידים בטעינת הדף
  useEffect(() => {
    console.log('Component mounted - loading leads for the first time');
    loadLeads();
  }, []);

  // סינון לידים
  const filteredLeads = leads.filter(lead => {
    if (filterMode === 'all') return true;
    if (filterMode === 'today') return isToday(lead.date);
    if (filterMode === 'yesterday') return isYesterday(lead.date);
    if (filterMode === 'date' && selectedDate) return isSameDay(lead.date, selectedDate);
    return true;
  });

  // שמירת ליד חדש
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      // בדיקת תקינות השדות
      const name = formData.get('fullName') as string;
      const phone = formData.get('phone') as string;
      const businessField = formData.get('businessField') as string;
      
      if (!name || !phone || !businessField) {
        alert('נא למלא את כל השדות');
        setIsLoading(false);
        return;
      }

      const newLead = {
        id: Date.now().toString(),
        name,
        phone,
        email: '',
        message: businessField,
        date: new Date().toISOString(),
        timestamp: Date.now()
      };

      console.log('Saving new lead:', newLead);

      // שמירת הליד החדש בזיכרון המקומי
      setLeads(prevLeads => {
        const newLeads = [...prevLeads, { ...newLead, date: new Date(newLead.date) }];
        // שמירה ב-localStorage
        localStorage.setItem('leads', JSON.stringify(newLeads));
        console.log(`Updated leads - now has ${newLeads.length} leads`);
        return newLeads;
      });

      // איפוס הטופס והצגת הודעת הצלחה
      form.reset();
      setShowSuccessModal(true);
      
    } catch (error) {
      console.error('Error saving lead:', error);
      alert('אירעה שגיאה בשמירת הפרטים. נא לנסות שוב.');
    } finally {
      setIsLoading(false);
    }
  };

  // מחיקת ליד
  const deleteLead = (id: string) => {
    try {
      setLeads(prevLeads => {
        const newLeads = prevLeads.filter(lead => lead.id !== id);
        localStorage.setItem('leads', JSON.stringify(newLeads));
        return newLeads;
      });
    } catch (error) {
      console.error('Error deleting lead:', error);
      alert('אירעה שגיאה במחיקת הפרטים');
    }
  };

  const scrollTargetRef = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    if (isMobile && modalImgIndex !== null && scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    // eslint-disable-next-line
  }, [modalImgIndex, isMobile]);

  if (showAdmin) {
    return (
      <div style={{ minHeight: '100vh', background: '#1e1e1e', color: '#fff', padding: 32 }}>
        <button
          onClick={() => setShowAdmin(false)}
          style={{ marginBottom: 24, background: '#00F0FF', color: '#232323', fontWeight: 800, border: 'none', borderRadius: 16, padding: '12px 28px', fontSize: 18, cursor: 'pointer' }}
        >
          דף הבית
        </button>
        <h2 style={{ color: '#00F0FF', marginBottom: 24 }}>טבלת לידים</h2>
        {/* לוח שנה וכפתורי סינון */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <DatePicker
            selected={selectedDate}
            onChange={date => { setSelectedDate(date); setFilterMode('date'); }}
            dateFormat="dd/MM/yyyy"
            placeholderText="בחר תאריך..."
            isClearable
            calendarStartDay={0}
            className="datepicker-input"
          />
          <button style={{ background: '#00F0FF', color: '#232323', fontWeight: 700, border: 'none', borderRadius: 8, padding: '8px 18px', cursor: 'pointer' }} onClick={() => { setFilterMode('today'); setSelectedDate(null); }}>היום</button>
          <button style={{ background: '#00F0FF', color: '#232323', fontWeight: 700, border: 'none', borderRadius: 8, padding: '8px 18px', cursor: 'pointer' }} onClick={() => { setFilterMode('yesterday'); setSelectedDate(null); }}>אתמול</button>
          <button style={{ background: '#00F0FF', color: '#232323', fontWeight: 700, border: 'none', borderRadius: 8, padding: '8px 18px', cursor: 'pointer' }} onClick={() => { setFilterMode('all'); setSelectedDate(null); }}>מקסימום</button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#232323', borderRadius: 12 }}>
          <thead>
            <tr style={{ background: '#00F0FF', color: '#232323' }}>
              <th style={{ padding: 12 }}>שם מלא</th>
              <th style={{ padding: 12 }}>מספר טלפון</th>
              <th style={{ padding: 12 }}>תחום עיסוק</th>
              <th style={{ padding: 12 }}>תאריך</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #444' }}>
                <td style={{ padding: 12 }}>{lead.name}</td>
                <td style={{ padding: 12 }}>{lead.phone}</td>
                <td style={{ padding: 12 }}>{lead.message || lead.occupation || '-'}</td>
                <td style={{ padding: 12 }}>{format(lead.date, 'dd/MM/yyyy')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (!isMounted) {
    return null;
  }
  return (
    <div className="landing-root">
      <header
        className="header"
        style={
          !isMobile
            ? { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100vw', padding: 0, position: 'relative' }
            : { width: '100vw', padding: 0 }
        }
      >
        {isMobile ? (
          <>

            <nav
  className="nav"
  style={{
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    gap: 24,
    marginTop: 8,
    flexDirection: 'row-reverse',
    padding: '20px 40px',
    background: '#232323',
    border: '2px solid #00F0FF',
    borderRadius: '16px',
    margin: '8px 20px',
    fontSize: '12px',
  }}
>
  <a
    href="#hero"
    className={selectedNav === 'home' ? 'nav-selected' : ''}
    onClick={() => setSelectedNav('home')}
    style={{ fontSize: '15px' }}
  >
    דף הבית
  </a>
  <a
    href="#works"
    className={selectedNav === 'works' ? 'nav-selected' : ''}
    onClick={() => setSelectedNav('works')}
    style={{ fontSize: '15px' }}
  >
    עבודות
  </a>
  <a
    href="#about"
    className={selectedNav === 'about' ? 'nav-selected' : ''}
    onClick={() => setSelectedNav('about')}
    style={{ fontSize: '15px' }}
  >
    על עצמי
  </a>
  <a
    href="#contact"
    className={selectedNav === 'contact' ? 'nav-selected' : ''}
    onClick={() => setSelectedNav('contact')}
    style={{ fontSize: '15px' }}
  >
    צרו קשר
  </a>
</nav>
          </>
        ) : (

            <nav className="nav" style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', gap: 40, flexDirection: 'row-reverse', padding: '20px 40px', background: '#232323', border: '2px solid #00F0FF', borderRadius: '16px', margin: '8px 20px', fontSize: '48px' }}>
              <a
                href="#hero"
                className={selectedNav === 'home' ? 'nav-selected' : ''}
                onClick={() => setSelectedNav('home')}
                style={{ fontSize: '22px' }}
              >דף הבית</a>
              <a
                href="#works"
                className={selectedNav === 'works' ? 'nav-selected' : ''}
                onClick={() => setSelectedNav('works')}
                style={{ fontSize: '22px' }}
              >עבודות</a>
              <a
                href="#about"
                className={selectedNav === 'about' ? 'nav-selected' : ''}
                onClick={() => setSelectedNav('about')}
                style={{ fontSize: '22px' }}
              >על עצמי</a>
              <a
                href="#contact"
                className={selectedNav === 'contact' ? 'nav-selected' : ''}
                onClick={() => setSelectedNav('contact')}
                style={{ fontSize: '22px' }}
              >צרו קשר</a>
            </nav>

        )}
      </header>

      {/* HERO */}
      <section className="hero" id="hero">
        <h1 className="main-title">פרסום ושיווק דיגיטלי</h1>
        <div className="hero-img-glow" style={{ position: 'relative', width: 200, height: 200 }}>
          <div
            className="hero-img-circle"
            style={{
              width: 200,
              height: 200,
              borderRadius: '50%',
              border: '6px solid #00F0FF',
              boxShadow: isMobile 
                ? '0 0 8px 2px #00F0FFcc, 0 0 16px 4px #00F0FF66'
                : '0 0 40px 8px #00F0FFcc, 0 0 80px 16px #00F0FF66',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1,
              background: '#00F0FF',
            }}
          />
          <Image
            src="/profilecircle.png"
            alt="User photo"
            width={200}
            height={200}
            className="hero-img"
            priority
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 200,
              height: 200,
              borderRadius: '50%',
              objectFit: 'cover',
              zIndex: 2,
              pointerEvents: 'none',
              background: '#00F0FF',
            }}
          />
        </div>
        {/* Rotating text between image and buttons - logo style */}
        {/* Rotating text between image and buttons - now animated */}
        {/* Rotating text between image and buttons - digital marketing */}
        <div className="hero-rotating-text-wrap" style={{ marginBottom: '40px' }}>
          <RotatingTextHeroDigital />
        </div>
        <div className="hero-ctas hero-ctas-desktop">
          <button className="cta-primary" onClick={() => {
            const el = document.getElementById('lead-form-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>🚀 לקבלת לידים חמים</button>
          <button className="cta-outline" onClick={() => {
            const el = document.getElementById('features');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>הצצה לפרוייקטים מצליחים</button>
        </div>
        {/* Mobile-only buttons below rotating text (moved above the rectangle for mobile) */}
        <div className="hero-ctas hero-ctas-mobile show-on-mobile">
          <button className="cta-outline" style={{ marginBottom: 8 }} onClick={() => {
            const el = document.getElementById('features');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>הצצה לפרוייקטים מצליחים</button>
          <button className="cta-primary" onClick={() => {
            const el = document.getElementById('lead-form-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>🚀 לקבלת לידים חמים</button>
        </div>
        {/* שינוי כאן: עוטף את ריבוע 'על עצמי' ב-section עם id="about" */}
        <section id="about">
          <div className="visual-separator-box" style={{margin:'120px auto 0 auto',width:'600px',height:'auto',border:'2px solid #fff',borderRadius:'24px',background:'#1e1e1e',padding:'32px',boxSizing:'border-box',display:'flex',alignItems:'flex-start',justifyContent:'center'}}>
            <div style={{width:'100%',maxWidth:'520px',margin:'0 auto',color:'#fff',fontWeight:900,fontSize:'1.13rem',letterSpacing:'0.5px',textAlign:'right',lineHeight:'1.85',background:'none',border:'none',padding:0, fontFamily: "Arial, sans-serif"}}>
              <div style={{fontSize:'36px',fontWeight:900,color:'#fff',textAlign:'center',marginBottom:'24px', fontFamily: 'Arial, sans-serif'}}>על עצמי</div>
              <p style={{margin:'0 0 18px 0', color:'#00F0FF', fontWeight:900, fontFamily: 'Arial, sans-serif'}}>.היי, נעים להכיר – דניאל נמימי</p>
              <p style={{margin:'0 0 18px 0', direction: 'rtl', unicodeBidi: 'isolate', fontWeight:900, fontFamily: 'Arial, sans-serif'}}>מומחה לפרסום ושיווק דיגיטלי, בניית אתרים, דפי נחיתה ולוגואים חכמים מבוססי <span dir="ltr" style={{display: 'inline-block', whiteSpace: 'nowrap', unicodeBidi: 'isolate'}}>Ai</span></p>
              <p style={{margin:'0 0 18px 0', color:'#00F0FF'}}>
                <span className="hide-on-mobile" style={{fontWeight:900, fontFamily: 'Arial, sans-serif'}}>אני עוזר לעסקים לא רק להיראות מקצועיים – אלא לבלוט, לגדול ולהביא תוצאות אמיתיות‮!‬</span>
                <span className="show-on-mobile" style={{fontWeight:900, fontFamily: 'Arial, sans-serif'}}>אני עוזר לעסקים לא רק להיראות מקצועיים אלא לבלוט, לגדול ולהביא תוצאות אמיתיות‮!‬</span>
              </p>
              <p style={{margin:'0 0 18px 0', fontWeight:900, fontFamily: 'Arial, sans-serif'}}>,בין אם זה קמפיינים בפייסבוק או באינסטגרם<br/>:אני בונה עבורך מערכת שלמה שעובדת בקליק<br/>
                <span style={{color:'#00F0FF'}}>
                  <span className="hide-on-mobile">פרסום ממומן ← קבלת לידים חמים ← ועד לסגירה אוטומטית של לקוחות</span>
                  <span className="show-on-mobile" dir="rtl">פרסום ממומן ← קבלת לידים חמים ←<br/>ועד לסגירה אוטומטית של לקוחות</span>
                </span>
              </p>
              <p style={{margin:'0 0 18px 0', fontWeight:900, fontFamily: 'Arial, sans-serif'}}>היום כבר לא צריך לרדוף אחרי לקוחות ולידים-שיווק חכם ומדוייק גורם להם להגיע אליך</p>
            </div>
          </div>
        </section>
      </section>

      {/* IMAGE GRID / CAROUSEL */}
      <section className="carousel" id="works">
        <div className="carousel-grid">
          {/* כל הריבועים של הגלריה הוסרו לפי בקשת המשתמש */}
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
        <h2 className="features-title-responsive">:השירותים שאני מציע</h2>
        <div className="features-grid features-grid-centered">
          {isMobile ? (
            <>
              {/* Card 1: arik.png + arik1.png, text: פירסום ושיווק דיגיטלי (rotating) */}
              <div className="feature-card feature-card-img">
                <div className="feature-img-split">
                  <img src="/arik.png" alt="arik" className="feature-img-half feature-img-half-right" onClick={() => setModalImgIndex(0)} style={{ cursor: 'pointer' }} />
                  <img src="/arik1.png" alt="arik1" className="feature-img-half feature-img-half-left" onClick={() => setModalImgIndex(1)} style={{ cursor: 'pointer' }} />
                </div>
                <RotatingTextMobileCard1 />
              </div>
              {/* Card 2: lia.png + adir.png, text: בניית אתרים (rotating) */}
              <div className="feature-card feature-card-img">
                <div className="feature-img-split">
                  <img src="/lia.png" alt="lia" className="feature-img-half feature-img-half-right" onClick={() => setModalImgIndex(2)} style={{ cursor: 'pointer' }} />
                  <img src="/adir.png" alt="adir" className="feature-img-half feature-img-half-left" onClick={() => setModalImgIndex(3)} style={{ cursor: 'pointer' }} />
                </div>
                <RotatingTextMobileCard2 />
              </div>
            </>
          ) : (
            <>
              <div className="feature-card-group">
                <div className="feature-card feature-card-img">
                  <div className="feature-img-split">
                    <img src="/adir.png" alt="אתרים" className="feature-img-half feature-img-half-right" onClick={() => setModalImgIndex(0)} style={{ cursor: 'pointer' }} />
                    <img src="/lia.png" alt="דפי נחיתה" className="feature-img-half feature-img-half-left" onClick={() => setModalImgIndex(1)} style={{ cursor: 'pointer' }} />
                  </div>
                </div>
                <RotatingTextFeatureCard />
              </div>
              <div className="feature-card-group">
                <div className="feature-card feature-card-img">
                  <div className="feature-img-split">
                    <img src="/arik.png" alt="קמפיין 1" className="feature-img-half feature-img-half-right" onClick={() => setModalImgIndex(2)} style={{ cursor: 'pointer' }} />
                    <img src="/arik1.png" alt="קמפיין 2" className="feature-img-half feature-img-half-left" onClick={() => setModalImgIndex(3)} style={{ cursor: 'pointer' }} />
                  </div>
                </div>
                <RotatingTextFeatureCard2 />
              </div>
            </>
          )}
        </div>
      </section>
      {/* מודאל תמונה */}
      {/* 4. Modal with swipe support */}
      {modalImgIndex !== null && (
        isMobile ? (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.92)',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              overflowY: 'auto',
              paddingTop: 24,
            }}
            onClick={() => setModalImgIndex(null)}
          >
            <button
              onClick={e => { e.stopPropagation(); setModalImgIndex(null); }}
              style={{
                position: 'fixed',
                top: 16,
                left: 16,
                background: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                fontWeight: 900,
                cursor: 'pointer',
                boxShadow: '0 2px 8px #0002',
                zIndex: 10000,
              }}
              aria-label="סגור"
            >
              ×
            </button>
            <div style={{ width: '100%', marginTop: 48 }}>
              {galleryImages.slice().reverse().map((img, idx) => (
                img === '/adir.png' ? (
                  <div key="barber-shop-iframe-wrap" style={{ position: 'relative', width: '100vw', height: '70vh', margin: '32px 0' }}>
                    <style>{spinnerStyle}</style>
                    <iframe
                      src="https://app--adir-barber-shop-2756bc66.base44.app/"
                      style={{
                        width: '100vw',
                        height: '70vh',
                        border: 'none',
                        borderRadius: 16,
                        boxShadow: '0 4px 32px #00F0FF',
                        background: '#fff',
                        display: iframeLoaded.adir ? 'block' : 'none',
                      }}
                      title="תספורת גברים"
                      allowFullScreen
                      onLoad={() => setIframeLoaded(l => ({ ...l, adir: true }))}
                    />
                    {!iframeLoaded.adir && (
                      <div style={{ position: 'absolute', top:0, left:0, width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', background:'#fff' }}>
                        <div className="iframe-spinner" />
                      </div>
                    )}
                  </div>
                ) : img === '/lia.png' ? (
                  <div key="lia-nails-iframe-wrap" style={{ position: 'relative', width: '100vw', height: '70vh', margin: '32px 0' }}>
                    <style>{spinnerStyle}</style>
                    <iframe
                      src="https://app--adir-barber-shop-copy-b6585698.base44.app/"
                      style={{
                        width: '100vw',
                        height: '70vh',
                        border: 'none',
                        borderRadius: 16,
                        boxShadow: '0 4px 32px #00F0FF',
                        background: '#fff',
                        display: iframeLoaded.lia ? 'block' : 'none',
                      }}
                      title="lia nails"
                      allowFullScreen
                      onLoad={() => setIframeLoaded(l => ({ ...l, lia: true }))}
                    />
                    {!iframeLoaded.lia && (
                      <div style={{ position: 'absolute', top:0, left:0, width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', background:'#fff' }}>
                        <div className="iframe-spinner" />
                      </div>
                    )}
                  </div>
                ) : (
                  <img
                    key={img}
                    src={img}
                    alt={`תמונה ${galleryImages.length - 1 - idx + 1}`}
                    ref={(galleryImages.length - 1 - idx) === modalImgIndex ? scrollTargetRef : null}
                    style={{
                      width: '100vw',
                      maxWidth: '100vw',
                      height: 'auto',
                      margin: '32px 0',
                      borderRadius: 16,
                      boxShadow: '0 4px 32px #00F0FF',
                      border: '2px solid #00F0FF',
                      opacity: (galleryImages.length - 1 - idx) === modalImgIndex ? 1 : 0.8,
                      transition: 'all 0.4s cubic-bezier(.77,0,.18,1)',
                    }}
                    onClick={e => e.stopPropagation()}
                  />
                )
              ))}
            </div>
          </div>
        ) : (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.85)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => setModalImgIndex(null)}
            onTouchStart={e => setTouchStartX(e.touches[0].clientX)}
            onTouchEnd={e => {
              if (touchStartX !== null) {
                const touchEndX = e.changedTouches[0].clientX;
                if (touchStartX - touchEndX > 50 && modalImgIndex < galleryImages.length - 1) {
                  setModalImgIndex(modalImgIndex + 1);
                } else if (touchEndX - touchStartX > 50 && modalImgIndex > 0) {
                  setModalImgIndex(modalImgIndex - 1);
                }
              }
              setTouchStartX(null);
            }}
          >
            <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }} onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setModalImgIndex(null)}
                style={{
                  position: 'absolute',
                  top: -24,
                  left: -24,
                  background: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 24,
                  fontWeight: 900,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px #0002',
                  zIndex: 10000,
                }}
                aria-label="סגור"
              >
                ×
              </button>
              {/* 6. Add left/right arrows for desktop */}
              {modalImgIndex > 0 && (
                <button
                  onClick={() => setModalImgIndex(modalImgIndex - 1)}
                  style={{ position: 'absolute', top: '50%', left: -40, transform: 'translateY(-50%)', fontSize: 32, background: 'none', border: 'none', color: '#fff', cursor: 'pointer', zIndex: 10001 }}
                  aria-label="הקודם"
                >
                  {'<'}
                </button>
              )}
              {modalImgIndex < galleryImages.length - 1 && (
                <button
                  onClick={() => setModalImgIndex(modalImgIndex + 1)}
                  style={{ position: 'absolute', top: '50%', right: -40, transform: 'translateY(-50%)', fontSize: 32, background: 'none', border: 'none', color: '#fff', cursor: 'pointer', zIndex: 10001 }}
                  aria-label="הבא"
                >
                  {'>'}
                </button>
              )}
              {/* Show iframe for adir.png or lia.png, else show image */}
              {galleryImages[modalImgIndex] === '/adir.png' ? (
                <div key="barber-shop-iframe-desktop-wrap" style={{ position: 'relative', width: '80vw', height: '70vh' }}>
                  <style>{spinnerStyle}</style>
                  <iframe
                    src="https://app--adir-barber-shop-2756bc66.base44.app/"
                    style={{
                      width: '80vw',
                      height: '70vh',
                      border: 'none',
                      borderRadius: 16,
                      boxShadow: '0 4px 32px #00F0FF',
                      background: '#fff',
                      display: iframeLoaded.adir ? 'block' : 'none',
                    }}
                    title="תספורת גברים"
                    allowFullScreen
                    onLoad={() => setIframeLoaded(l => ({ ...l, adir: true }))}
                  />
                  {!iframeLoaded.adir && (
                    <div style={{ position: 'absolute', top:0, left:0, width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', background:'#fff' }}>
                      <div className="iframe-spinner" />
                    </div>
                  )}
                </div>
              ) : galleryImages[modalImgIndex] === '/lia.png' ? (
                <div key="lia-nails-iframe-desktop-wrap" style={{ position: 'relative', width: '80vw', height: '70vh' }}>
                  <style>{spinnerStyle}</style>
                  <iframe
                    src="https://app--adir-barber-shop-copy-b6585698.base44.app/"
                    style={{
                      width: '80vw',
                      height: '70vh',
                      border: 'none',
                      borderRadius: 16,
                      boxShadow: '0 4px 32px #00F0FF',
                      background: '#fff',
                      display: iframeLoaded.lia ? 'block' : 'none',
                    }}
                    title="lia nails"
                    allowFullScreen
                    onLoad={() => setIframeLoaded(l => ({ ...l, lia: true }))}
                  />
                  {!iframeLoaded.lia && (
                    <div style={{ position: 'absolute', top:0, left:0, width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', background:'#fff' }}>
                      <div className="iframe-spinner" />
                    </div>
                  )}
                </div>
              ) : (
                <img src={galleryImages[modalImgIndex]} alt="תמונה מוגדלת" style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: 16, boxShadow: '0 4px 32px #00F0FF', border: '2px solid #00F0FF' }} />
              )}
            </div>
          </div>
        )
      )}

      {/* GROWTH/LEAD FORM */}
      <section id="contact">
        <section className="lead-form-section" id="lead-form-section">
          <form className="lead-form" onSubmit={handleFormSubmit}>
            <div className="lead-form-title-row">
              <span className="lead-form-colon">:</span>
              <span
                className="lead-form-title"
                style={{ cursor: 'pointer', color: showPassword ? '#00F0FF' : undefined, textDecoration: 'underline' }}
                onClick={() => { setShowPassword(true); setError(""); setPassword(""); }}
                title="כניסת מנהל"
              >
                השאירו פרטים
              </span>
            </div>
            <div className="form-group">
              <label htmlFor="fullName">שם מלא</label>
              <input type="text" id="fullName" name="fullName" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">מספר טלפון</label>
              <input type="tel" id="phone" name="phone" required />
            </div>

            <div className="form-group">
              <label htmlFor="businessField">תחום העסק</label>
              <input type="text" id="businessField" name="businessField" required />
            </div>
            <button 
              type="submit" 
              className="cta-primary lead-form-submit"
              disabled={isLoading}
            >
              {isLoading ? 'שולח...' : 'שלח'}
            </button>
          </form>
        </section>
        {/* שורת תמונות מתחת לטופס לידים */}
        {/* נמחקו אייקוני האפליקציות Messenger, Facebook/Meta, Instagram, WhatsApp לפי בקשת המשתמש */}
      </section>

      {/* STANDARDS */}
      {/* נמחקה הקטגוריה 'אנחנו בונים הכל בסטנדרטים' וכל התתי קטגוריות שלה */}

      {/* FOOTER */}
      <footer className="footer">
        {/* הסרתי את המלל והריבוע של 'אפליקציות שניתן ליצור קשר' */}
      </footer>

      {/* נגן שמע אוטומטי מוסתר - הוסר כדי למנוע הפעלה אוטומטית */}
      {/* כפתור קוד מנהל בתחתית האתר */}
      {/* <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 0 0 0' }}>
        <button
          onClick={() => { setShowPassword(true); setError(""); setPassword(""); }}
          style={{ background: '#00F0FF', color: '#232323', fontWeight: 800, border: 'none', borderRadius: 16, padding: '14px 36px', fontSize: 20, cursor: 'pointer', boxShadow: '0 2px 16px 0 #00F0FF33' }}
        >
          קוד מנהל
        </button>
      </div> */}
      {/* תיבת קלט לסיסמה */}
      {showPassword ? (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: '#000a', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#232323', borderRadius: 18, padding: 32, boxShadow: '0 4px 32px #0008', minWidth: 320 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 18, color: '#00F0FF', textAlign: 'center' }}>הזן קוד מנהל</div>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ width: '100%', padding: 12, fontSize: 18, borderRadius: 10, border: '1px solid #00F0FF', marginBottom: 16, direction: 'ltr' }}
              autoFocus
              onKeyDown={e => { if (e.key === 'Enter') { if (password === 'namimi') { setShowAdmin(true); setShowPassword(false); } else { setError('סיסמה שגויה'); } } }}
            />
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
              <button
                type="button"
                onClick={() => {
                  if (password === 'namimi') { setShowAdmin(true); setShowPassword(false); }
                  else { setError('סיסמה שגויה'); }
                }}
                style={{ background: '#00F0FF', color: '#232323', fontWeight: 800, border: 'none', borderRadius: 12, padding: '10px 24px', fontSize: 18, cursor: 'pointer' }}
              >
                אישור
              </button>
              <button
                type="button"
                onClick={() => setShowPassword(false)}
                style={{ background: 'transparent', color: '#00F0FF', fontWeight: 700, border: 'none', borderRadius: 12, padding: '10px 24px', fontSize: 16, cursor: 'pointer' }}
              >
                ביטול
              </button>
            </div>
            {error && <div style={{ color: 'red', marginTop: 12, textAlign: 'center' }}>{error}</div>}
          </div>
        </div>
      ) : null}
      {/* Success Modal */}
      {showSuccessModal && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          background: 'rgba(0,0,0,0.8)', 
          zIndex: 9999, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <div style={{ 
            background: '#232323', 
            borderRadius: 18, 
            padding: 32, 
            boxShadow: '0 4px 32px #0008', 
            minWidth: 320,
            maxWidth: 400,
            textAlign: 'center',
            border: '2px solid #00F0FF'
          }}>
            <div style={{ 
              fontWeight: 700, 
              fontSize: 20, 
              marginBottom: 24, 
              color: '#00F0FF' 
            }}>
              הפרטים נשמרו, תודה!
            </div>
            <button
              onClick={() => setShowSuccessModal(false)}
              style={{ 
                background: '#00F0FF', 
                color: '#232323', 
                fontWeight: 800, 
                border: 'none', 
                borderRadius: 12, 
                padding: '12px 32px', 
                fontSize: 18, 
                cursor: 'pointer' 
              }}
            >
              אוקיי
            </button>
          </div>
        </div>
      )}
      <style jsx>{`
        :global(html) {
          scroll-behavior: smooth;
        }
        .landing-root {
          background: #1e1e1e;
          color: #fff;
          font-family: 'General Sans', sans-serif;
          min-height: 100vh;
        }
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 40px;
          background: rgba(30,30,30,0.95);
          border-bottom: 1px solid #232323;
          transition: background 0.3s;
        }
        .logo {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #00F0FF;
        }
        .nav {
          display: flex;
          gap: 32px;
        }
        .nav a {
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav a:hover {
          color: #00F0FF;
        }
        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 100px 16px 80px 16px;
          text-align: center;
        }
        .main-title {
          font-size: 56px;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 18px;
          letter-spacing: 1px;
          position: relative;
          z-index: 2;
        }
        .hero-img-glow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: transparent;
          box-shadow: 0 0 120px 32px #00F0FFcc, 0 0 240px 64px #00F0FF66;
          margin-bottom: 56px;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 600px) {
          .hero-img-glow {
            box-shadow: 0 0 40px 10px #00F0FFcc, 0 0 80px 20px #00F0FF66;
          }
        }
        .hero-img-circle {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: #232323;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 6px solid #00F0FF;
.feature-rotating-text,
.feature-rotating-text.in,
.feature-rotating-text.out,
.feature-card .feature-rotating-text {
  color: #00F0FF !important;
  font-size: 1.7rem;
  font-weight: 800;
  font-family: inherit;
  letter-spacing: 2px;
  text-shadow: none;
  text-align: center;
  display: inline-block;
  text-transform: uppercase;
  margin: 0;
  transition: transform 0.3s cubic-bezier(.4,2,.6,1), opacity 0.3s;
}         overflow: hidden;
        }
        .hero-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          object-position: center 5%;
          background: #232323;
          display: block;
          border: none;
        }
        .hero-rotating-text-logo {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          margin-top: 12px;
          margin-bottom: 18px;
          position: relative;
          top: -18px;
        }
   
.rotating-text.in {
  opacity: 1;
  transform: translateY(0);
}

.rotating-text.out {
  opacity: 0;
  transform: translateY(-32px);
}
  .rotating-text {
  color: #00F0FF !important;
  font-family: 'Assistant', Arial, sans-serif !important;
  font-weight: bold !important;
  font-size: 2.2rem !important;
  letter-spacing: 0.04em !important;
  text-align: center !important;
}
        .hero-ctas {
          margin-top: 24px;
          display: flex;
          gap: 18px;
        }
        .hero-ctas-desktop {
          display: flex;
          gap: 18px;
        }
        .hero-ctas-mobile {
          display: none;
        }
        @media (max-width: 600px) {
          .hero-ctas-desktop {
            display: none;
          }
          .hero-ctas-mobile {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 100%;
            align-items: stretch;
            margin: 0 auto;
            max-width: 400px;
          }
          .hero-ctas-mobile .cta-primary,
          .hero-ctas-mobile .cta-outline {
            width: 100%;
            min-width: 0;
            font-size: 17px;
            padding: 12px 0;
            height: 44px;
            border-radius: 18px;
            white-space: nowrap;
          }
        }
        .cta-primary {
          background: #00F0FF;
          color: #1e1e1e;
          font-weight: 800;
          font-size: 16px;
          border: none;
          border-radius: 24px;
          padding: 16px 36px;
          text-transform: uppercase;
          box-shadow: 0 2px 16px 0 #00F0FF33;
          cursor: pointer;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .cta-primary:hover {
          box-shadow: 0 4px 32px 0 #00F0FF66;
          transform: scale(1.04);
        }
        .cta-outline {
          background: none;
          color: #fff;
          font-weight: 800;
          font-size: 16px;
          border: 2px solid #fff;
          border-radius: 24px;
          padding: 16px 36px;
          text-transform: uppercase;
          cursor: pointer;
          transition: border 0.2s, color 0.2s, background 0.2s;
        }
        .cta-outline:hover {
          color: #00F0FF;
          border-color: #00F0FF;
          background: #232323;
        }
        .carousel {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px 80px 16px;
        }
        .carousel-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .carousel-item {
          background: #232323;
          border-radius: 24px;
          box-shadow: 0 2px 16px 0 #0004;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .carousel-item:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 8px 32px 0 #00F0FF33;
        }
        .carousel-img-wrap {
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #191919;
        }
        .carousel-caption {
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          text-align: center;
          padding: 18px 0 12px 0;
        }
        .features {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 16px;
          text-align: center;
        }
        .features-title-responsive {
          background: #fff;
          color: #111;
          border-radius: 32px;
          border: 4px solid #fff;
          box-shadow: 0 2px 16px 0 #0002;
          padding: 18px 36px;
          font-size: 32px;
          font-weight: 800;
          letter-spacing: 1px;
          display: inline-block;
        }
        .features-grid {
          display: flex;
          justify-content: center;
          gap: 48px;
        }
        .features-grid-centered .feature-card {
          flex: 0 1 420px;
          max-width: 420px;
          min-width: 320px;
        }
        .feature-card-img {
          position: relative;
          overflow: hidden;
          padding: 0;
        }
        .feature-img-split {
          display: flex;
          width: 100%;
          height: 380px;
          overflow: hidden;
          border: 4px solid #00F0FF !important;
          background: #191919 !important;
          border-radius: 18px !important;
        }
        .feature-img-half {
          width: 50%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
          background: transparent !important;
        }
        @media (max-width: 600px) {
          .feature-img-split { height: 240px; }
        }
        .main-pages {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 16px;
          text-align: center;
        }
        .main-pages h2 {
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 48px;
        }
        .pages-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        .page-card {
          background: #232323;
          border-radius: 20px;
          box-shadow: 0 2px 16px 0 #0004;
          padding: 18px 12px 16px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
        }
        .page-card:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 8px 32px 0 #00F0FF33;
        }
        .page-thumb {
          margin-bottom: 12px;
        }
        .page-title {
          color: #fff;
          font-size: 17px;
          font-weight: 700;
        }
        .social-boost {
          max-width: 900px;
          margin: 0 auto;
          padding: 80px 16px 60px 16px;
          text-align: center;
        }
        .boost-content {
          background: #232323;
          border-radius: 32px;
          box-shadow: 0 2px 16px 0 #0004;
          padding: 48px 24px 36px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .boost-content h3 {
          color: #fff;
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 24px;
        }
        .boost-blob {
          margin-top: 12px;
        }
        .standards {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 16px;
          text-align: center;
        }
        .standards h2 {
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 48px;
        }
        .standards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .standards-card {
          background: #232323;
          border-radius: 20px;
          box-shadow: 0 2px 16px 0 #0004;
          padding: 32px 18px 24px 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .standards-thumb {
          margin-bottom: 16px;
        }
        .standards-title {
          color: #00F0FF;
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 6px;
        }
        .standards-desc {
          color: #bbbbbb;
          font-size: 15px;
        }
        .footer {
          background: #191919;
          padding: 64px 16px 32px 16px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 32px;
          border-top: 1px solid #232323;
        }
        .footer-cta-left, .footer-cta-right {
          background: #232323;
          border-radius: 20px;
          padding: 32px 24px;
          min-width: 260px;
          flex: 1 1 320px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .footer-cta-left h4, .footer-cta-right h4 {
          color: #fff;
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 18px;
        }
        .footer-cta-left button {
          background: #1f1fff;
          color: #fff;
          font-weight: 800;
          font-size: 15px;
          border: none;
          border-radius: 24px;
          padding: 12px 28px;
          text-transform: uppercase;
          box-shadow: 0 2px 16px 0 #1f1fff33;
          cursor: pointer;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .footer-cta-left button:hover {
          box-shadow: 0 4px 32px 0 #1f1fff66;
          transform: scale(1.04);
        }
        .footer-templates-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .footer-template-thumb {
          background: #232323;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #fff2;
        }
        .footer-links {
          display: flex;
          gap: 24px;
          align-items: flex-end;
          margin-top: 32px;
        }
        .footer-links a {
          color: #bbbbbb;
          font-size: 15px;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: #00F0FF;
        }
        .lead-form-section {
          max-width: 500px;
          margin: 0 auto;
          padding: 80px 16px;
          text-align: center;
        }
        .lead-form {
          background: #111;
          border-radius: 32px;
          padding: 48px 32px 36px 32px;
          display: flex;
          flex-direction: column;
          gap: 28px;
          box-shadow: 0 2px 24px 0 #0008;
          border: 2.5px solid #00F0FF;
        }
        .lead-form-title-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 32px;
        }
        .lead-form-title {
          font-size: 28px;
          font-weight: 800;
          color: #fff;
          text-align: center;
          margin: 0;
        }
        .lead-form-colon {
          font-size: 28px;
          font-weight: 800;
          color: #fff;
        }
        .form-group {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
          margin-bottom: 12px;
        }
        .form-group label {
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          align-self: flex-end;
          text-align: right;
          margin-bottom: 2px;
        }
        .lead-form input {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: 2px solid #00F0FF;
          background: #fff;
          color: #232323;
          font-size: 18px;
          outline: none;
          margin-top: 0;
          transition: border 0.2s;
          direction: rtl;
        }
        .lead-form input:focus {
          border: 2.5px solid #00F0FF;
        }
        .lead-form button.cta-primary {
          margin-top: 24px;
          width: 100%;
          font-size: 26px;
          font-family: 'Varela Round', 'Arial Rounded MT Bold', Arial, sans-serif;
          border-radius: 32px;
        }
        .lead-form-submit {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cta-primary, .cta-outline {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-static-text {
          color: #00F0FF;
          font-size: 4.2rem;
          font-weight: 900;
          text-align: center;
          margin: 18px 0 18px 0;
          letter-spacing: 1.5px;
          font-family: inherit;
          display: inline-block;
          transition: transform 0.3s cubic-bezier(.4,2,.6,1), opacity 0.3s;
        }
        .hero-static-text.in {
          opacity: 1;
          transform: translateY(0);
        }
        .hero-static-text.out {
          opacity: 0;
          transform: translateY(-32px);
        }
        @media (min-width: 601px) {
          .cta-primary, .cta-outline {
            font-size: 24px;
            padding: 20px 48px;
            height: 56px;
            border-radius: 28px;
          }
        }
        @media (max-width: 1100px) {
          .carousel-grid, .features-grid, .pages-grid, .standards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 700px) {
          .header {
            flex-direction: column;
            gap: 12px;
            padding: 16px 8px;
          }
          .carousel-grid, .features-grid, .pages-grid, .standards-grid {
            grid-template-columns: 1fr;
          }
          .footer {
            flex-direction: column;
            gap: 24px;
            align-items: stretch;
          }
        }
        @media (max-width: 500px) {
          .main-title {
            font-size: 32px;
          }
          .features h2, .main-pages h2, .standards h2 {
            font-size: 24px;
          }
        }
        @media (max-width: 600px) {
          .cta-primary, .cta-outline {
            width: 100%;
            min-width: 0;
            font-size: 17px;
            padding: 12px 0;
            height: 44px;
            border-radius: 18px;
            white-space: nowrap;
          }
        }
        .features-grid.features-grid-centered {
          display: flex;
          justify-content: center;
          gap: 48px;
          margin-top: 40px;
        }
        @media (max-width: 600px) {
          .features-grid.features-grid-centered {
            flex-direction: column;
            align-items: center;
            gap: 32px;
            margin-top: 28px;
          }
        }
        .feature-card.feature-card-img {
          position: relative;
          overflow: hidden;
          padding: 0;
          width: 420px;
          height: 340px;
          min-width: 320px;
          max-width: 520px;
          min-height: 320px;
          max-height: 420px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #232323;
          border-radius: 24px;
          box-shadow: 0 2px 16px 0 #0004;
        }
        .feature-card-title {
          color: #00F0FF;
          font-size: 1.5rem;
          font-weight: 800;
          margin-top: 18px;
          text-align: center;
        }
        @media (max-width: 600px) {
          .features-grid.features-grid-centered {
            flex-direction: column;
            align-items: center;
            gap: 32px;
          }
          .feature-card.feature-card-img {
            width: 100%;
            max-width: 420px;
            min-width: 220px;
            height: 260px;
            max-height: 320px;
          }
          .hero-static-text {
            font-size: 1.5rem;
          }
        }
        .rotating-text {
          color: #00F0FF;
          font-size: 3.2rem;
          font-weight: 800;
          font-family: inherit;
          letter-spacing: 2px;
          text-shadow: none;
          text-align: center;
          display: inline-block;
          text-transform: uppercase;
          margin: 18px 0 18px 0;
          transition: transform 0.3s cubic-bezier(.4,2,.6,1), opacity 0.3s;
        }
        .rotating-text.in {
          opacity: 1;
          transform: translateY(0);
        }
        .rotating-text.out {
          opacity: 0;
          transform: translateY(-32px);
        }
        @media (max-width: 600px) {
          .rotating-text {
            font-size: 2.1rem;
          }
        }
        .hero-logo-rotating-text-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 24px 0 12px 0;
        }
        .hero-logo-rotating-text {
          color: #00F0FF;
          font-size: 2.1rem;
          font-weight: 800;
          font-family: inherit;
          letter-spacing: 2px;
          text-shadow: none;
          text-align: center;
          display: inline-block;
          text-transform: uppercase;
          margin: 0;
          transition: transform 0.3s cubic-bezier(.4,2,.6,1), opacity 0.3s;
        }
        .hero-logo-rotating-text.in {
          opacity: 1;
          transform: translateY(0);
        }
        .hero-logo-rotating-text.out {
          opacity: 0;
          transform: translateY(-32px);
        }
        @media (max-width: 600px) {
          .hero-logo-rotating-text {
            font-size: 1.3rem;
          }
        }
        .hero-rotating-text-wrap {
          margin-top: -32px;
        }
        .nav-selected {
          color: #00F0FF !important;
        }
        @media (max-width: 600px) {
          .visual-separator-box {
            width: 96vw !important;
            max-width: 100vw !important;
            padding: 12px !important;
          }
        }
        .show-on-mobile { display: none; }
        @media (max-width: 600px) {
          .show-on-mobile { display: inline; }
          .hide-on-mobile { display: none; }
        }
      `}</style>
    </div>
  );
}

const spinnerStyle = `
@keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }
.iframe-spinner { border: 6px solid #e0f7fa; border-top: 6px solid #00F0FF; border-radius: 50%; width: 48px; height: 48px; animation: spin 1s linear infinite; }
`;
