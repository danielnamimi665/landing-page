"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from './page.module.css';

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
          color: #e5ff00 !important;
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

// RotatingTextFeatureCard for feature card (slide-up, 1.5s interval, receives index/slide as props)
function RotatingTextFeatureCard(props: { index: number; slide: boolean }) {
  const { index, slide } = props;
  const slides = [
    "בניית אתרים",
    "יצירת דפי נחיתה ממירים",
    "יצירת לוגו מבוסס Ai"
  ];
  return (
    <span className={`feature-card-title feature-rotating-text${slide ? " in" : " out"}`}>{slides[index]}
      <style jsx>{`
        .feature-rotating-text {
          color: #e5ff00 !important;
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
        .feature-rotating-text.in {
          opacity: 1;
          transform: translateY(0);
        }
        .feature-rotating-text.out {
          opacity: 0;
          transform: translateY(-32px);
        }
      `}</style>
    </span>
  );
}

// RotatingTextFeatureCard2 for feature card (slide-up, 1.5s interval, receives index/slide as props)
function RotatingTextFeatureCard2(props: { index: number; slide: boolean }) {
  const { index, slide } = props;
  const slides = [
    "פרסום דיגיטלי ברשתות",
    "בפייסבוק",
    "באינסטנגרם"
  ];
  return (
    <span className={`feature-card-title feature-rotating-text${slide ? " in" : " out"}`}>{slides[index]}
      <style jsx>{`
        .feature-rotating-text {
          color: #e5ff00 !important;
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
        .feature-rotating-text.in {
          opacity: 1;
          transform: translateY(0);
        }
        .feature-rotating-text.out {
          opacity: 0;
          transform: translateY(-32px);
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
          color: #e5ff00 !important;
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
        color:'#e5ff00',
        fontWeight:800,
        fontSize:'1.7rem',
        textAlign:'center',
        display:'block',
        marginTop:'0.5em',
        textShadow:'0 0 12px #e5ff88, 0 0 24px #e5ff00cc'
      }}>
      {slides[index]}
      <style jsx>{`
        @media (max-width: 600px) {
          .feature-rotating-text {
            text-shadow: 0 0 12px #e5ff88, 0 0 24px #e5ff00cc;
          }
        }
        .feature-rotating-text {
          transition: transform 0.3s cubic-bezier(.4,2,.6,1), opacity 0.3s;
        }
        .feature-rotating-text.in {
          opacity: 1;
          transform: translateY(0);
        }
        .feature-rotating-text.out {
          opacity: 0;
          transform: translateY(-32px);
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
        color:'#e5ff00',
        fontWeight:800,
        fontSize:'1.7rem',
        textAlign:'center',
        display:'block',
        marginTop:'0.5em',
        textShadow:'0 0 12px #e5ff88, 0 0 24px #e5ff00cc'
      }}>
      {slides[index]}
      <style jsx>{`
        @media (max-width: 600px) {
          .feature-rotating-text {
            text-shadow: 0 0 12px #e5ff88, 0 0 24px #e5ff00cc;
          }
        }
        .feature-rotating-text {
          transition: transform 0.3s cubic-bezier(.4,2,.6,1), opacity 0.3s;
        }
        .feature-rotating-text.in {
          opacity: 1;
          transform: translateY(0);
        }
        .feature-rotating-text.out {
          opacity: 0;
          transform: translateY(-32px);
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
  const [audioOn, setAudioOn] = useState(false);
  
  // Handle audio loop and play/pause
  useEffect(() => {
    const audio = document.querySelector<HTMLAudioElement>("#bg-audio");
    if (!audio) return;
    
    // Ensure audio is paused on initial load
    audio.pause();
    
    const handleTimeUpdate = () => {
      if (audio.duration - audio.currentTime < 0.05 && !audio.paused) {
        audio.currentTime = 0;
        audio.play();
      }
    };
    
    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  
  // Handle play/pause based on audioOn state
  useEffect(() => {
    const audio = document.querySelector<HTMLAudioElement>("#bg-audio");
    if (!audio) return;
    
    // Ensure audio is paused on initial load
    audio.pause();
    
    if (audioOn) {
      audio.play().catch(err => console.log('Audio play failed:', err));
    } else {
      audio.pause();
      audio.currentTime = 0; // reset audio position
    }
  }, [audioOn]);
  
  // Handle page visibility changes and app state changes - pause when page is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setAudioOn(false);
      }
    };
    
    const handleBeforeUnload = () => {
      setAudioOn(false);
    };
    
    // Handle mobile app state changes (when app goes to background)
    const handlePageHide = () => {
      setAudioOn(false);
    };
    
    const handlePageShow = () => {
      // Don't auto-resume, user needs to click button
      // Ensure audio is paused when page becomes visible again
      const audio = document.querySelector<HTMLAudioElement>("#bg-audio");
      if (audio) {
        audio.pause();
      }
    };
    
    // Handle mobile browser app switching
    const handleBlur = () => {
      if (isMobile) {
        setAudioOn(false);
      }
    };
    
    const handleFocus = () => {
      // Don't auto-resume, user needs to click button
      // Ensure audio is paused when window gains focus
      const audio = document.querySelector<HTMLAudioElement>("#bg-audio");
      if (audio) {
        audio.pause();
      }
    };
    
    // Handle mobile app state changes more aggressively
    const handleAppStateChange = () => {
      if (isMobile && document.hidden) {
        setAudioOn(false);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pagehide', handlePageHide);
    window.addEventListener('pageshow', handlePageShow);
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    
    // Additional mobile-specific handling
    if (isMobile) {
      // Handle when user switches apps or minimizes browser
      const handleResize = () => {
        if (window.innerHeight < window.outerHeight * 0.8) {
          setAudioOn(false);
        }
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('beforeunload', handleBeforeUnload);
        window.removeEventListener('pagehide', handlePageHide);
        window.removeEventListener('pageshow', handlePageShow);
        window.removeEventListener('blur', handleBlur);
        window.removeEventListener('focus', handleFocus);
        window.removeEventListener('resize', handleResize);
      };
    }
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pagehide', handlePageHide);
      window.removeEventListener('pageshow', handlePageShow);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, [isMobile]);
  const [selectedNav, setSelectedNav] = useState('home');
  const [isRotating, setIsRotating] = useState(false);
  // State for modal image
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  // דמו נתוני לידים
  const [leads, setLeads] = useState([
    { name: "דני כהן", phone: "050-1234567", occupation: "עיצוב גרפי" },
    { name: "רוני לוי", phone: "052-7654321", occupation: "קוסמטיקה" },
  ]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const newLead = {
      name: formData.get('fullName') as string,
      phone: formData.get('phone') as string,
      occupation: formData.get('businessField') as string
    };
    
    // Add new lead to the array
    setLeads(prevLeads => [...prevLeads, newLead]);
    
    // Show success modal
    setShowSuccessModal(true);
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  if (showAdmin) {
    return (
      <div style={{ minHeight: '100vh', background: '#1e1e1e', color: '#fff', padding: 32 }}>
        <button
          onClick={() => setShowAdmin(false)}
          style={{ marginBottom: 24, background: '#e5ff00', color: '#232323', fontWeight: 800, border: 'none', borderRadius: 16, padding: '12px 28px', fontSize: 18, cursor: 'pointer' }}
        >
          דף הבית
        </button>
        <h2 style={{ color: '#e5ff00', marginBottom: 24 }}>טבלת לידים</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#232323', borderRadius: 12 }}>
          <thead>
            <tr style={{ background: '#e5ff00', color: '#232323' }}>
              <th style={{ padding: 12 }}>שם מלא</th>
              <th style={{ padding: 12 }}>מספר טלפון</th>
              <th style={{ padding: 12 }}>תחום עיסוק</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #444' }}>
                <td style={{ padding: 12 }}>{lead.name}</td>
                <td style={{ padding: 12 }}>{lead.phone}</td>
                <td style={{ padding: 12 }}>{lead.occupation}</td>
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
      <audio id="bg-audio" src="/30sec.mp3" loop hidden />
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
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100vw', position: 'relative', padding: '0 8px' }}>
              <div className="mobile-portfolio-title"
                style={{
                  color: '#e5ff00',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  textAlign: 'left',
                  display: 'block',
                  background: '#232323',
                  border: '2px solid #e5ff00',
                  borderRadius: 18,
                  padding: '6px 18px',
                  marginLeft: 0,
                  marginRight: 'auto',
                }}
              >Portfolio</div>
              <button
                onClick={() => setAudioOn((on) => !on)}
                style={{
                  background: '#232323',
                  border: '2px solid #e5ff00',
                  borderRadius: '50%',
                  boxShadow: audioOn ? '0 0 4px 1.5px #e5ff00, 0 0 8px 3px #e5ff00aa' : '0 2px 12px #e5ff0033',
                  cursor: 'pointer',
                  zIndex: 1000,
                  padding: 0,
                  width: 44,
                  height: 44,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'box-shadow 0.2s',
                  marginLeft: 12,
                }}
                aria-label={audioOn ? 'כבה מוזיקה' : 'נגן מוזיקה'}
              >
                {audioOn || isMobile ? (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#e5ff00" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9v6h4l5 5V4L7 9H3z"/>
                    <path d="M16.5 12c0-1.77-1-3.29-2.5-4.03v8.06A4.978 4.978 0 0016.5 12z"/>
                    <path d="M14 3.23v2.06c3.39.49 6 3.39 6 6.71s-2.61 6.22-6 6.71v2.06c4.5-.52 8-4.31 8-8.77s-3.5-8.25-8-8.77z"/>
                  </svg>
                ) : (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#e5ff00" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 12c0-1.77-1-3.29-2.5-4.03v8.06A4.978 4.978 0 0016.5 12z"/>
                    <path d="M3 9v6h4l5 5V4L7 9H3z"/>
                  </svg>
                )}
              </button>
            </div>
            <nav className="nav" style={{ width: '100vw', display: 'flex', justifyContent: 'center', gap: 24, marginTop: 8 }}>
              <a
                href="#hero"
                className={selectedNav === 'home' ? 'nav-selected' : ''}
                onClick={() => setSelectedNav('home')}
              >home</a>
              <a
                href="#works"
                className={selectedNav === 'works' ? 'nav-selected' : ''}
                onClick={() => setSelectedNav('works')}
              >works</a>
              <a
                href="#about"
                className={selectedNav === 'about' ? 'nav-selected' : ''}
                onClick={() => setSelectedNav('about')}
              >about</a>
              <a
                href="#contact"
                className={selectedNav === 'contact' ? 'nav-selected' : ''}
                onClick={() => setSelectedNav('contact')}
              >contact</a>
            </nav>
          </>
        ) : (
          <>
            <div>
              <div className="mobile-portfolio-title"
                style={{
                  color: '#e5ff00',
                  fontWeight: 'bold',
                  fontSize: '1.8rem',
                  textAlign: 'left',
                  display: 'block',
                  background: '#232323',
                  border: '2px solid #e5ff00',
                  borderRadius: 16,
                  padding: '4px 16px',
                }}
              >Portfolio</div>
              <div className={`${styles.logo} ${styles['mobile-only']}`}>
                <span style={{
                  color: '#e5ff00',
                  fontWeight: 'bold',
                  fontFamily: 'inherit',
                  fontSize: '1.8rem',
                  textAlign: 'left',
                  display: 'block',
                  background: '#232323',
                  border: '2px solid #e5ff00',
                  borderRadius: 16,
                  padding: '4px 16px',
                }}>Portfolio</span>
              </div>
            </div>
            <nav className="nav" style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 40 }}>
              <a
                href="#hero"
                className={selectedNav === 'home' ? 'nav-selected' : ''}
                onClick={() => setSelectedNav('home')}
              >home</a>
              <a
                href="#works"
                className={selectedNav === 'works' ? 'nav-selected' : ''}
                onClick={() => setSelectedNav('works')}
              >works</a>
              <a
                href="#about"
                className={selectedNav === 'about' ? 'nav-selected' : ''}
                onClick={() => setSelectedNav('about')}
              >about</a>
              <a
                href="#contact"
                className={selectedNav === 'contact' ? 'nav-selected' : ''}
                onClick={() => setSelectedNav('contact')}
              >contact</a>
            </nav>
            <button
              onClick={() => setAudioOn((on) => !on)}
              style={{
                position: 'absolute',
                top: 12,
                right: 18,
                background: '#232323',
                border: '2px solid #e5ff00',
                borderRadius: '50%',
                boxShadow: audioOn
                  ? '0 0 8px 3px #e5ff00, 0 0 16px 6px #e5ff00aa'
                  : '0 2px 12px #e5ff0033',
                cursor: 'pointer',
                zIndex: 1000,
                padding: 0,
                width: 44,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'box-shadow 0.2s',
              }}
              aria-label={audioOn ? 'כבה מוזיקה' : 'נגן מוזיקה'}
            >
              {audioOn ? (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#e5ff00" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9v6h4l5 5V4L7 9H3z"/>
                  <path d="M16.5 12c0-1.77-1-3.29-2.5-4.03v8.06A4.978 4.978 0 0016.5 12z"/>
                  <path d="M14 3.23v2.06c3.39.49 6 3.39 6 6.71s-2.61 6.22-6 6.71v2.06c4.5-.52 8-4.31 8-8.77s-3.5-8.25-8-8.77z"/>
                </svg>
              ) : (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#e5ff00" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 12c0-1.77-1-3.29-2.5-4.03v8.06A4.978 4.978 0 0016.5 12z"/>
                  <path d="M3 9v6h4l5 5V4L7 9H3z"/>
                </svg>
              )}
            </button>
          </>
        )}
      </header>

      {/* HERO */}
      <section className="hero" id="hero">
        <h1 className="main-title">DANIEL NAMIMI-DIGITAL MARKETING</h1>
        <div className="hero-img-glow" style={{ position: 'relative', width: 230, height: 230 }}>
          <div
            className="hero-img-circle"
            // הסרתי את ref והאנימציה של העיגול
            style={{
              width: 230,
              height: 230,
              borderRadius: '50%',
              border: '6px solid #e5ff00',
              boxShadow: '0 0 40px 8px #e5ff00cc, 0 0 80px 16px #e5ff0066',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1,
              background: '#232323',
            }}
          />
          <Image
            src="/user-photo.png"
            alt="User photo"
            width={200}
            height={200}
            className="hero-img"
            priority
            style={{
              position: 'absolute',
              top: 15,
              left: 15,
              width: 200,
              height: 200,
              borderRadius: '50%',
              objectFit: 'cover',
              zIndex: 2,
              pointerEvents: 'none',
              background: '#232323',
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
          }}>לקבלת לידים חמים 🚀</button>
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
          }}>לקבלת לידים חמים 🚀</button>
        </div>
        {/* שינוי כאן: עוטף את ריבוע 'על עצמי' ב-section עם id="about" */}
        <section id="about">
          <div className="visual-separator-box" style={{margin:'120px auto 0 auto',width:'600px',height:'auto',border:'2px solid #fff',borderRadius:'24px',background:'#1e1e1e',padding:'32px',boxSizing:'border-box',display:'flex',alignItems:'flex-start',justifyContent:'center'}}>
            <div style={{width:'100%',maxWidth:'520px',margin:'0 auto',color:'#fff',fontWeight:500,fontSize:'1.13rem',letterSpacing:'0.5px',textAlign:'right',lineHeight:'1.85',background:'none',border:'none',padding:0, fontFamily: "Assistant, Arial, sans-serif"}}>
              <div style={{fontSize:'36px',fontWeight:800,color:'#fff',textAlign:'center',marginBottom:'24px'}}>על עצמי</div>
              <p style={{margin:'0 0 18px 0', color:'#e5ff00'}}>.היי, נעים להכיר – דניאל נמימי</p>
              <p style={{margin:'0 0 18px 0', direction: 'rtl', unicodeBidi: 'isolate'}}>מומחה לפרסום ושיווק דיגיטלי, בניית אתרים, דפי נחיתה ולוגואים חכמים מבוססי <span dir="ltr" style={{display: 'inline-block', whiteSpace: 'nowrap', unicodeBidi: 'isolate'}}>.Ai</span></p>
              <p style={{margin:'0 0 18px 0', color:'#e5ff00'}}>
                <span className="hide-on-mobile">אני עוזר לעסקים לא רק להיראות מקצועיים – אלא לבלוט, לגדול ולהביא תוצאות אמיתיות‮!‬</span>
                <span className="show-on-mobile">אני עוזר לעסקים לא רק להיראות מקצועיים אלא לבלוט, לגדול ולהביא תוצאות אמיתיות‮!‬</span>
              </p>
              <p style={{margin:'0 0 18px 0'}}>,בין אם זה קמפיינים בפייסבוק או באינסטגרם<br/>:אני בונה עבורך מערכת שלמה שעובדת בקליק<br/>
                <span style={{color:'#e5ff00'}}>
                  <span className="hide-on-mobile">פרסום ממומן ← קבלת לידים חמים ← ועד לסגירה אוטומטית של לקוחות</span>
                  <span className="show-on-mobile" dir="rtl">פרסום ממומן ← קבלת לידים חמים ←<br/>ועד לסגירה אוטומטית של לקוחות</span>
                </span>
              </p>
              <p style={{margin:'0 0 18px 0'}}>היום כבר לא צריך לרדוף אחרי לקוחות ולידים-שיווק חכם ומדוייק גורם להם להגיע אליך</p>
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
                  <img src="/arik.png" alt="arik" className="feature-img-half feature-img-half-right" onClick={() => setModalImg('/arik.png')} style={{ cursor: 'pointer' }} />
                  <img src="/arik1.png" alt="arik1" className="feature-img-half feature-img-half-left" onClick={() => setModalImg('/arik1.png')} style={{ cursor: 'pointer' }} />
                </div>
                <RotatingTextMobileCard1 />
              </div>
              {/* Card 2: lia.png + adir.png, text: בניית אתרים (rotating) */}
              <div className="feature-card feature-card-img">
                <div className="feature-img-split">
                  <img src="/lia.png" alt="lia" className="feature-img-half feature-img-half-right" onClick={() => setModalImg('/lia.png')} style={{ cursor: 'pointer' }} />
                  <img src="/adir.png" alt="adir" className="feature-img-half feature-img-half-left" onClick={() => setModalImg('/adir.png')} style={{ cursor: 'pointer' }} />
                </div>
                <RotatingTextMobileCard2 />
              </div>
            </>
          ) : (
            <>
              <div className="feature-card-group">
                <div className="feature-card feature-card-img">
                  <div className="feature-img-split">
                    <img src="/adir.png" alt="אתרים" className="feature-img-half feature-img-half-right" onClick={() => setModalImg('/adir.png')} style={{ cursor: 'pointer' }} />
                    <img src="/lia.png" alt="דפי נחיתה" className="feature-img-half feature-img-half-left" onClick={() => setModalImg('/lia.png')} style={{ cursor: 'pointer' }} />
                  </div>
                </div>
                <RotatingTextFeatureCard index={featureIndex} slide={featureSlide} />
              </div>
              <div className="feature-card-group">
                <div className="feature-card feature-card-img">
                  <div className="feature-img-split">
                    <img src="/arik.png" alt="קמפיין 1" className="feature-img-half feature-img-half-right" onClick={() => setModalImg('/arik.png')} style={{ cursor: 'pointer' }} />
                    <img src="/arik1.png" alt="קמפיין 2" className="feature-img-half feature-img-half-left" onClick={() => setModalImg('/arik1.png')} style={{ cursor: 'pointer' }} />
                  </div>
                </div>
                <RotatingTextFeatureCard2 index={featureIndex} slide={featureSlide} />
              </div>
            </>
          )}
        </div>
      </section>
      {/* מודאל תמונה */}
      {modalImg && (
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
          onClick={() => setModalImg(null)}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }} onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setModalImg(null)}
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
            <img src={modalImg} alt="תמונה מוגדלת" style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: 16, boxShadow: '0 4px 32px #0008' }} />
          </div>
        </div>
      )}

      {/* GROWTH/LEAD FORM */}
      <section id="contact">
        <section className="lead-form-section" id="lead-form-section">
          <form className="lead-form" onSubmit={handleFormSubmit}>
            <div className="lead-form-title-row">
              <span className="lead-form-colon">:</span>
              <span className="lead-form-title">השאירו פרטים</span>
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
            <button type="submit" className="cta-primary lead-form-submit">שלח</button>
          </form>
        </section>
        {/* שורת תמונות מתחת לטופס לידים */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', margin: '32px 0' }}>
          <img src="/messenger.png" alt="Messenger" style={{ width: 68, height: 68, objectFit: 'cover', borderRadius: '16px' }} />
          <a href="https://www.facebook.com/daniel%20namimi" target="_blank" rel="noopener noreferrer">
            <img src="/meta.png" alt="Meta" style={{ width: 68, height: 68, objectFit: 'cover', borderRadius: '16px', cursor: 'pointer' }} />
          </a>
          <a href="https://instagram.com/daniel.namimi" target="_blank" rel="noopener noreferrer">
            <img src="/instangram.png" alt="Instagram" style={{ width: 68, height: 68, objectFit: 'cover', borderRadius: '16px', cursor: 'pointer' }} />
          </a>
          <a href="https://wa.me/972544920882?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%94%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%D7%9D%20%D7%A9%D7%90%D7%AA%D7%94%20%D7%9E%D7%A6%D7%99%D7%A2." target="_blank" rel="noopener noreferrer">
            <img src="/WhatsApp.png" alt="WhatsApp" style={{ width: 68, height: 68, objectFit: 'cover', borderRadius: '16px', cursor: 'pointer' }} />
          </a>
        </div>
      </section>

      {/* STANDARDS */}
      {/* נמחקה הקטגוריה 'אנחנו בונים הכל בסטנדרטים' וכל התתי קטגוריות שלה */}

      {/* FOOTER */}
      <footer className="footer">
        {/* הסרתי את המלל והריבוע של 'אפליקציות שניתן ליצור קשר' */}
      </footer>

      {/* נגן שמע אוטומטי מוסתר - הוסר כדי למנוע הפעלה אוטומטית */}
      {/* כפתור קוד מנהל בתחתית האתר */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 0 0 0' }}>
        <button
          onClick={() => { setShowPassword(true); setError(""); setPassword(""); }}
          style={{ background: '#e5ff00', color: '#232323', fontWeight: 800, border: 'none', borderRadius: 16, padding: '14px 36px', fontSize: 20, cursor: 'pointer', boxShadow: '0 2px 16px 0 #e5ff0033' }}
        >
          קוד מנהל
        </button>
      </div>
      {/* תיבת קלט לסיסמה */}
      {showPassword && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: '#000a', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#232323', borderRadius: 18, padding: 32, boxShadow: '0 4px 32px #0008', minWidth: 320 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 18, color: '#e5ff00' }}>הזן קוד מנהל</div>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ width: '100%', padding: 12, fontSize: 18, borderRadius: 10, border: '1px solid #e5ff00', marginBottom: 16, direction: 'ltr' }}
              autoFocus
              onKeyDown={e => { if (e.key === 'Enter') { if (password === 'namimi') { setShowAdmin(true); setShowPassword(false); } else { setError('סיסמה שגויה'); } } }}
            />
            <button
              onClick={() => {
                if (password === 'namimi') { setShowAdmin(true); setShowPassword(false); }
                else { setError('סיסמה שגויה'); }
              }}
              style={{ background: '#e5ff00', color: '#232323', fontWeight: 800, border: 'none', borderRadius: 12, padding: '10px 24px', fontSize: 18, cursor: 'pointer', marginRight: 8 }}
            >
              אישור
            </button>
            <button
              onClick={() => setShowPassword(false)}
              style={{ background: 'transparent', color: '#e5ff00', fontWeight: 700, border: 'none', borderRadius: 12, padding: '10px 24px', fontSize: 16, cursor: 'pointer' }}
            >
              ביטול
            </button>
            {error && <div style={{ color: 'red', marginTop: 12 }}>{error}</div>}
          </div>
        </div>
      )}
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
            border: '2px solid #e5ff00'
          }}>
            <div style={{ 
              fontWeight: 700, 
              fontSize: 20, 
              marginBottom: 24, 
              color: '#e5ff00' 
            }}>
              הפרטים נשמרו, תודה!
            </div>
            <button
              onClick={() => setShowSuccessModal(false)}
              style={{ 
                background: '#e5ff00', 
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
          color: #e5ff00;
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
          color: #e5ff00;
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
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: transparent;
          box-shadow: 0 0 120px 32px #e5ff00cc, 0 0 240px 64px #e5ff0066;
          margin-bottom: 56px;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 600px) {
          .hero-img-glow {
            box-shadow: 0 0 40px 10px #e5ff00cc, 0 0 80px 20px #e5ff0066;
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
          border: 6px solid #e5ff00;
.feature-rotating-text,
.feature-rotating-text.in,
.feature-rotating-text.out,
.feature-card .feature-rotating-text {
  color: #e5ff00 !important;
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
  color: #e5ff00 !important;
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
          background: #e5ff00;
          color: #1e1e1e;
          font-weight: 800;
          font-size: 16px;
          border: none;
          border-radius: 24px;
          padding: 16px 36px;
          text-transform: uppercase;
          box-shadow: 0 2px 16px 0 #e5ff0033;
          cursor: pointer;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .cta-primary:hover {
          box-shadow: 0 4px 32px 0 #e5ff0066;
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
          color: #e5ff00;
          border-color: #e5ff00;
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
          box-shadow: 0 8px 32px 0 #e5ff0033;
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
          border: 4px solid #e5ff00 !important;
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
          box-shadow: 0 8px 32px 0 #e5ff0033;
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
          color: #e5ff00;
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
          color: #e5ff00;
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
          border: 2.5px solid #e5ff00;
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
          border: 2px solid #e5ff00;
          background: #fff;
          color: #232323;
          font-size: 18px;
          outline: none;
          margin-top: 0;
          transition: border 0.2s;
          direction: rtl;
        }
        .lead-form input:focus {
          border: 2.5px solid #e5ff00;
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
          color: #e5ff00;
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
          color: #e5ff00;
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
          color: #e5ff00;
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
          color: #e5ff00;
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
          color: #e5ff00 !important;
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
