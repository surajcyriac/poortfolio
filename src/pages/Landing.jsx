import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Github, Linkedin, Mail, Phone, MessageCircle, Download, ExternalLink,
  Lock, Menu, X, MapPin, GraduationCap, Layers,
} from 'lucide-react';

// Tech icons (only the ones you have; the rest render as text chips)
import Reacticon from '../assets/icons/React.png';
import JavaScript from '../assets/icons/JavaScript.png';
import TypeScript from '../assets/icons/TypeScript.png';
import html5 from '../assets/icons/HTML5.png';
import css3 from '../assets/icons/CSS3.png';
import nodejs from '../assets/icons/Nodejs.png';
import mongodb from '../assets/icons/MongoDB.png';
import git from '../assets/icons/Git.png';
import github from '../assets/icons/GitHub.png';
import gitLab from '../assets/icons/GitLab.png';
import tailwind from '../assets/icons/Tailwind CSS.png';
import postman from '../assets/icons/Postman.png';

// Project images
import book from '../assets/images/book.png';
import spectrum from '../assets/images/spectrum.png';
import dietcraft from '../assets/images/dietcraft.png';
import weather from '../assets/images/weather.png';
import poster from '../assets/images/poster.png';
import landing from '../assets/images/landing.png';
import adminQuiz from '../assets/images/admin_quiz.png';
import adminAnnouncements from '../assets/images/admin_announcements.png';
// import adminHome from '../assets/images/admin_home.png'; // shows "0 videos" -> retake with real data before using

import resumePdf from '../assets/resume/suraj_cyriac.pdf';

/* ---------------------------------- DATA ---------------------------------- */

const ME = {
  name: 'Suraj Cyriac Jes',
  email: 'surajcyriacjes@gmail.com',
  phone: '+91 90728 31678',
  whatsapp: 'https://wa.me/919072831678',
  github: 'https://github.com/surajcyriac',
  linkedin: 'https://www.linkedin.com/in/surajcyriacjes/',
};

const NAV = [
  ['Catalyst PSC', '#catalyst'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['About', '#about'],
  ['Contact', '#contact'],
];

const GALLERY = [
  { label: 'Overview', src: poster, fit: 'contain', alt: 'Catalyst PSC web, mobile and admin panel overview' },
  { label: 'Landing page', src: landing, fit: 'cover', alt: 'Catalyst PSC public landing page' },
  { label: 'Quiz management', src: adminQuiz, fit: 'cover', alt: 'Admin panel quiz management screen' },
  { label: 'Announcements', src: adminAnnouncements, fit: 'cover', alt: 'Admin panel announcements screen' },
];

const CHALLENGES = [
  {
    title: 'Some Android users could not reach the app',
    text: 'The backend was on Railway\'s free default link, and some mobile carriers kept blocking it. I spoke to affected students, reproduced the problem, traced it to the link itself, and fixed it by moving the backend to a custom domain.',
  },
  {
    title: 'Sessions that survive token expiry',
    text: 'I built the auth system with a 24-hour access token and a 30-day refresh token that rotates. On the mobile app tokens live in expo-secure-store, and an axios interceptor queues requests that hit a 401 until the token refresh finishes.',
  },
  {
    title: 'A lighter home screen',
    text: 'The first version fetched up to 200 videos to build category previews. Both clients now load 5 videos per category and fetch more only when a student taps "view all".',
  },
  {
    title: 'Videos on a small budget',
    text: 'The client already had their lectures on YouTube and could not afford to re-upload everything, so videos are served through YouTube instead of paid storage.',
  },
  {
    title: 'A Mongoose enum issue after release',
    text: 'A schema enum problem showed up in production after launch. I diagnosed and fixed it.',
  },
];

const EXPERIENCE = [
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Catalyst PSC (remote)',
    when: 'May 2026 to July 2026',
    points: [
      'Built the authentication system used by the web portal and the mobile app, with JWT access and refresh tokens.',
      'Turned designs made in Google Stitch into working React and TypeScript screens.',
      'Wrote MongoDB models, student-data controllers and REST API endpoints.',
      'Fixed a carrier-level connectivity problem that blocked some Android users, then shipped the fix to production.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'UnaireSync',
    when: 'February 2025 to January 2026',
    points: [
      'Built a product page for an electronics shop (spectrumvisionary.com) on my own, matching the Figma design exactly and working with the design team.',
      'Optimised that photo and animation heavy page so it stays smooth.',
      'Built a webpage-to-PDF feature and explored a WhatsApp integration prototype.',
      'Helped finish the UI of an online shopping site, then joined a three-person React Native team on frontend and some backend work.',
    ],
  },
  {
    role: 'Full-Stack Developer Intern',
    company: 'Luminar Technolab',
    when: 'June 2024 to December 2024',
    points: [
      'Built and deployed full-stack MERN applications with CRUD operations and REST APIs.',
      'Took part in code reviews and delivered work in agile cycles.',
    ],
  },
];

const PROJECTS = [
  {
    title: 'DietCraft',
    text: 'Generates diet and workout plans with an LLM. The Express API is rate limited and returns schema-checked JSON, with a fallback when no API key is set. A six-step form calculates BMR and TDEE live and filters food by country and state.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'OpenRouter'],
    image:dietcraft,
    github: 'https://github.com/surajcyriac/dietmaker',
  },
  {
    title: 'Open Library',
    text: 'Readers sign up, upload, edit and read books. An admin workflow controls what gets published.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: book,
    live: 'https://my-project-coral-six.vercel.app/',
    github: 'https://github.com/surajcyriac/my-project',
  },
  {
    title: 'Spectrum Visionary',
    text: 'Client product page for an electronics shop, built from a Figma design and optimised for its many photos and animations.',
    tech: ['Client work', 'Figma to code', 'Performance'],
    image: spectrum,
    live: 'https://spectrumvisionary.com/',
  },
  {
    title: 'Weather App',
    text: 'Search any city and see live conditions from the OpenWeatherMap API.',
    tech: ['React', 'Material-UI', 'OpenWeatherMap API'],
    image: weather,
    live: 'https://react-weather-app-ruby-two.vercel.app/',
    github: 'https://github.com/surajcyriac/react-weatherApp',
  },
];

const SKILLS = [
  ['Frontend', [['React', Reacticon], ['TypeScript', TypeScript], ['JavaScript', JavaScript], ['HTML5', html5], ['CSS3', css3], ['Tailwind CSS', tailwind], ['React Router'], ['Vite']]],
  ['Mobile', [['React Native'], ['Expo'], ['expo-secure-store']]],
  ['Backend', [['Node.js', nodejs], ['Express.js'], ['MongoDB', mongodb], ['REST APIs'], ['JWT auth'], ['Mongoose']]],
  ['Tools and deployment', [['Git', git], ['GitHub', github], ['GitLab', gitLab], ['Postman', postman], ['Vercel'], ['Railway'], ['MongoDB Atlas']]],
];

/* ------------------------------- SHARED BITS ------------------------------- */

const Chip = ({ name, icon }) => (
  <span className="inline-flex items-center gap-2 rounded-md border border-[#22324d] bg-[#111e33] px-3 py-1.5 text-sm text-[#e8edf5]">
    {icon && <img src={icon} alt="" className="h-5 w-5 object-contain" />}
    {name}
  </span>
);

const H2 = ({ children, sub }) => (
  <Slide className="mb-10 max-w-2xl">
    <h2 className="font-display text-3xl font-bold tracking-tight text-[#f4f6fb] md:text-4xl">{children}</h2>
    {sub && <p className="mt-3 text-[#93a1b8]">{sub}</p>}
  </Slide>
);

const Section = ({ id, children, tone }) => (
  <section id={id} className={`scroll-mt-24 py-20 ${tone || ''}`}>
    <div className="mx-auto max-w-6xl px-5 md:px-8">{children}</div>
  </section>
);

const LinkBtn = ({ href, children, solid, ...rest }) => (
  <a
    href={href}
    {...rest}
    className={`inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors ${
      solid
        ? 'bg-[#f2b441] text-[#0a1424] hover:bg-[#ffc85c]'
        : 'border border-[#2f4468] text-[#e8edf5] hover:border-[#f2b441]'
    }`}
  >
    {children}
  </a>
);

/* ---------------------- MOTION HELPERS (tune timings here) ---------------------- */

const STEP = 1.5; // seconds between each hero reveal
const FADE = 0.6; // seconds for each hero fade (opacity 0 to 100)

// Hero reveal: step 0 = first, step 1 = 1.5s later, and so on
const Fade = ({ step = 0, className, children }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={{ willChange: 'opacity' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={reduce ? { duration: 0 } : { duration: FADE, delay: step * STEP, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

// Text that slides in from the left when it enters the viewport
const Slide = ({ as = 'div', i = 0, className, children }) => {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, x: -56 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: Math.min(i, 5) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
};

const Li = ({ i = 0, className, children }) => (
  <Slide as="li" i={i} className={className}>{children}</Slide>
);

// "Loading..." meme for the skills section
const LOADING_LINES = [
  'Downloading more RAM...',
  'Reading the App Router docs for the 4th time...',
  'Waiting for node_modules to finish...',
  'Almost there... (every progress bar lies at 99%)',
];

const LearningBar = () => {
  const [n, setN] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setN((v) => (v + 1) % LOADING_LINES.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <Slide className="mt-12 max-w-xl overflow-hidden rounded-lg border border-[#22324d] bg-[#0d1a2e] font-mono text-sm">
      <div className="flex items-center gap-2 border-b border-[#22324d] px-4 py-2 text-[#93a1b8]">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-2">skills.exe</span>
      </div>
      <div className="p-4">
        <p className="text-[#e8edf5]">Loading Next.js...</p>
        <div className="mt-3 h-3 overflow-hidden rounded-sm border border-[#2f4468] bg-[#0a1424]">
          <motion.div
            className="h-full bg-[#f2b441]"
            initial={{ width: '0%' }}
            whileInView={{ width: '99%' }}
            viewport={{ once: true }}
            transition={{ duration: 5, ease: 'easeOut' }}
          />
        </div>
        <div className="mt-2 flex justify-between gap-4 text-[#93a1b8]">
          <span>{LOADING_LINES[n]}</span>
          <span>99%</span>
        </div>
        <p className="mt-3 text-xs text-[#6b7a92]">Status: learning Next.js, stuck at 99% like every progress bar.</p>
      </div>
    </Slide>
  );
};

/* --------------------------------- SECTIONS -------------------------------- */

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const lock = useRef(false);
  const timer = useRef(null);

  // Scroll spy: highlight the section that is in the middle of the screen
  useEffect(() => {
    const ids = ['top', ...NAV.map(([, h]) => h.slice(1))];
    const obs = new IntersectionObserver(
      (entries) => {
        if (lock.current) return;
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id === 'top' ? '' : `#${e.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    const onScroll = () => {
      if (lock.current) return;
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) setActive('#contact');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // On click, jump the highlight straight to the target and ignore the scroll spy
  // while the page scrolls there, so the pill glides once instead of flickering.
  const go = (h) => {
    setActive(h);
    setOpen(false);
    lock.current = true;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => { lock.current = false; }, 1000);
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-3">
      <div className="w-full md:w-[70%]">
        <div className="rounded-full border border-white/15 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          {/* Desktop */}
          <nav className="hidden items-center justify-center gap-1 p-1.5 md:flex" aria-label="Main">
            {NAV.map(([t, h]) => (
              <a
                key={h}
                href={h}
                onClick={() => go(h)}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${active === h ? 'text-white' : 'text-[#b4c0d3] hover:text-white'}`}
              >
                {active === h && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: 'spring', stiffness: 260, damping: 30, mass: 0.8 }}
                    className="absolute inset-0 rounded-full border border-white/25 bg-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
                  />
                )}
                <span className="relative">{t}</span>
              </a>
            ))}
            <a href={resumePdf} download="suraj_cyriac.pdf" className="rounded-full px-4 py-2 text-sm font-semibold text-[#f2b441] hover:text-[#ffc85c]">Resume</a>
          </nav>
          {/* Mobile */}
          <div className="flex items-center justify-between px-5 py-2.5 md:hidden">
            <a href={resumePdf} download="suraj_cyriac.pdf" className="text-sm font-semibold text-[#f2b441]">Resume</a>
            <button className="text-[#e8edf5]" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="mt-2 rounded-3xl border border-white/15 bg-white/10 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl md:hidden" aria-label="Mobile">
            {NAV.map(([t, h]) => (
              <a
                key={h}
                href={h}
                onClick={() => go(h)}
                className={`block rounded-2xl px-4 py-2.5 ${active === h ? 'bg-white/20 text-white' : 'text-[#b4c0d3]'}`}
              >
                {t}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

const ROLES = ['Full-stack developer', 'React developer', 'React Native developer'];

// Types and deletes the role words, with a blinking cursor
const Typewriter = () => {
  const reduce = useReducedMotion();
  const [on, setOn] = useState(false);
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState(reduce ? ROLES[0] : '');
  const [del, setDel] = useState(false);

  // start only after the hero text has faded in
  useEffect(() => {
    if (reduce) return undefined;
    const t = setTimeout(() => setOn(true), (STEP + FADE) * 1000);
    return () => clearTimeout(t);
  }, [reduce]);

  useEffect(() => {
    if (!on || reduce) return undefined;
    const word = ROLES[idx];
    let t;
    if (!del && txt === word) t = setTimeout(() => setDel(true), 1800);
    else if (del && txt === '') { setDel(false); setIdx((idx + 1) % ROLES.length); }
    else t = setTimeout(() => setTxt(del ? word.slice(0, txt.length - 1) : word.slice(0, txt.length + 1)), del ? 40 : 75);
    return () => clearTimeout(t);
  }, [on, txt, del, idx, reduce]);

  return (
    <p className="mt-4 h-9 font-display text-2xl font-semibold text-[#f2b441] md:h-11 md:text-3xl">
      <span className="sr-only">Full-stack, React and React Native developer</span>
      <span aria-hidden="true">{txt}<span className="hero-caret" /></span>
    </p>
  );
};

const IconLink = ({ href, label, children, ...rest }) => (
  <a
    href={href}
    aria-label={label}
    title={label}
    {...rest}
className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#17253d]/90 text-[#e8edf5] transition-colors hover:border-[#f2b441] hover:text-[#f2b441]"  >
    {children}
  </a>
);

const StatChip = ({ n, label, className, delay }) => (
  <div
className={`hero-float absolute rounded-xl border border-white/20 bg-[#17253d]/90 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] ${className}`}    style={{ animationDelay: delay }}
  >
    <span className="font-display text-xl font-bold text-[#f4f6fb]">{n}</span>{' '}
    <span className="text-sm text-[#b4c0d3]">{label}</span>
  </div>
);

// Tilted browser frame with a slowly scrolling site, floating stat chips and mouse parallax
const ProductShot = () => {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-15, -5]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, 0]);

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <div className="relative mx-auto w-full max-w-xl py-6" style={{ perspective: 1200 }} onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div
        style={reduce ? { rotateY: -10, rotateX: 4 } : { rotateX, rotateY }}
        className="overflow-hidden rounded-xl border border-white/15 bg-[#0d1a2e] shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="mx-auto rounded-md bg-black/30 px-4 py-1 text-xs text-[#93a1b8]">catalysingyourfuture.com</span>
        </div>
        <div className="h-64 overflow-hidden sm:h-80 lg:h-[22rem]">
          <img src={landing} alt="The Catalyst PSC website" className="hero-pan w-full" />
        </div>
      </motion.div>

      <a
        href="#catalyst"
className="absolute left-4 top-0 flex items-center gap-2 rounded-full border border-white/20 bg-[#17253d]/90 px-4 py-2 text-sm text-[#f4f6fb] shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#f2b441]"      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
        Catalyst PSC is live
      </a>
      <StatChip n="232" label="students" className="-right-2 top-14 sm:-right-5" delay="0s" />
      <StatChip n="230" label="videos" className="-left-2 bottom-20 sm:-left-6" delay="1.2s" />
      <StatChip n="150" label="quizzes" className="bottom-1 right-6" delay="2.4s" />
    </div>
  );
};

const Hero = () => (
  <section id="top" className="relative overflow-hidden">
    {/* depth: glows and a faded dot grid for the glass to blur */}
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute -right-24 top-10 h-[28rem] w-[28rem] rounded-full bg-[#f2b441]/20 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-blue-500/20 blur-3xl" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          maskImage: 'radial-gradient(ellipse at 60% 40%, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 60% 40%, black 20%, transparent 70%)',
        }}
      />
    </div>

    <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-28 md:px-8 lg:grid-cols-[1fr_1.05fr] lg:pb-24 lg:pt-36">
      <div>
        {/* step 1 (shown above the name, but fades in after it) */}
        <Fade step={1}>
          <p className="mb-4 inline-flex items-center gap-2 text-sm text-[#b4c0d3]">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to full-time roles in Kerala or remote
          </p>
        </Fade>

        {/* step 0: name first */}
        <Fade step={0}>
          <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-[#f4f6fb] md:text-7xl">{ME.name}</h1>
        </Fade>

        {/* step 1: role, intro and contact icons */}
        <Fade step={1}>
          <Typewriter />
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#b4c0d3]">
            I build web and mobile apps from design to deployment with React, React Native and Node.js.
            My latest project, Catalyst PSC, is live and used by students every day.
          </p>
          <div className="mt-6 flex gap-3">
            <IconLink href={`mailto:${ME.email}`} label="Email me"><Mail size={18} /></IconLink>
            <IconLink href={ME.whatsapp} label="WhatsApp" target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /></IconLink>
            <IconLink href={ME.linkedin} label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></IconLink>
            <IconLink href={ME.github} label="GitHub" target="_blank" rel="noopener noreferrer"><Github size={18} /></IconLink>
          </div>
        </Fade>

        {/* step 2: the two buttons */}
        <Fade step={2} className="mt-8 flex flex-wrap gap-3">
          <LinkBtn solid href={resumePdf} download="suraj_cyriac.pdf"><Download size={18} /> Download resume</LinkBtn>
          <LinkBtn href="#catalyst">Read the Catalyst PSC case study</LinkBtn>
        </Fade>
      </div>

      {/* step 3: product shot last */}
      <Fade step={3}>
        <ProductShot />
      </Fade>
    </div>
  </section>
);

const Gallery = () => {
  const [i, setI] = useState(0);
  const cur = GALLERY[i];
  return (
    <div>
      <div role="tablist" aria-label="Catalyst PSC screens" className="mb-3 flex flex-wrap gap-2">
        {GALLERY.map((g, idx) => (
          <button
            key={g.label}
            role="tab"
            aria-selected={i === idx}
            onClick={() => setI(idx)}
            className={`rounded-md px-4 py-2 text-sm ${i === idx ? 'bg-[#f2b441] font-semibold text-[#0a1424]' : 'border border-[#22324d] text-[#b4c0d3] hover:border-[#f2b441]'}`}
          >
            {g.label}
          </button>
        ))}
      </div>
      <a href={cur.src} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-xl border border-[#22324d] bg-black/40" title="Open full size">
        <img
          src={cur.src}
          alt={cur.alt}
          className={`h-72 w-full sm:h-[28rem] ${cur.fit === 'contain' ? 'object-contain' : 'object-cover object-top'}`}
        />
      </a>
    </div>
  );
};

const Flow = () => {
  const Box = ({ title, lines }) => (
    <div className="rounded-lg border border-[#22324d] bg-[#111e33] p-4">
      <p className="font-display font-semibold text-[#f4f6fb]">{title}</p>
      <ul className="mt-2 space-y-1 text-sm text-[#93a1b8]">{lines.map((l) => <li key={l}>{l}</li>)}</ul>
    </div>
  );
  const Arrow = () => <div className="text-center text-xl text-[#f2b441] md:rotate-0 rotate-90" aria-hidden="true">&#8594;</div>;
  return (
    <div className="grid items-center gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
      <div className="space-y-3">
        <Box title="Admin and student web portal" lines={['React 19, TypeScript, Vite', 'React Router v7, Tailwind v4', 'Hosted on Vercel']} />
        <Box title="Mobile app" lines={['React Native with Expo Router', 'Shared with students as a direct APK']} />
      </div>
      <Arrow />
      <Box title="One REST API for both apps" lines={['Node.js and Express on Railway', 'Custom domain', 'JWT access and refresh tokens']} />
      <Arrow />
      <div className="space-y-3">
        <Box title="MongoDB Atlas" lines={['Users, students, quizzes, announcements']} />
        <Box title="YouTube" lines={['Hosts the lecture videos']} />
      </div>
    </div>
  );
};

const Catalyst = () => (
  <Section id="catalyst" tone="border-y border-[#22324d] bg-[#0d1a2e]">
    <H2 sub="A coaching center in Kerala needed one place for recorded classes, daily quizzes and student progress, for online and offline batches alike. I worked on it as a freelance full-stack developer.">
      Catalyst PSC, a learning platform for PSC exam students
    </H2>

    <div className="mb-8 flex flex-wrap items-center gap-3">
      <LinkBtn solid href="https://catalysingyourfuture.com" target="_blank" rel="noopener noreferrer"><ExternalLink size={18} /> Visit the live site</LinkBtn>
      <span className="inline-flex items-center gap-2 text-sm text-[#93a1b8]"><Lock size={15} /> Private repository. I am happy to walk through the code in an interview.</span>
    </div>

    <Gallery />

    <Slide as="p" className="mt-8 text-lg text-[#e8edf5]">
      Right now it has <strong className="text-[#f2b441]">232 students</strong>, <strong className="text-[#f2b441]">230 videos</strong> and <strong className="text-[#f2b441]">150 quizzes</strong>, with content in Malayalam and English.
    </Slide>

    <div className="mt-10 grid gap-10 md:grid-cols-2">
      <div>
        <Slide as="h3" className="font-display text-xl font-semibold text-[#f4f6fb]">What students and teachers get</Slide>
        <ul className="mt-4 space-y-2 text-[#b4c0d3]">
          <Li i={0}>Recorded classes sorted by category</Li>
          <Li i={1}>Daily quizzes with weekly, monthly and all-time leaderboards</Li>
          <Li i={2}>Announcements and a gallery of posters and resources</Li>
          <Li i={3}>Admin tools for videos, quizzes, students and engagement analytics</Li>
        </ul>
      </div>
      <div>
        <Slide as="h3" className="font-display text-xl font-semibold text-[#f4f6fb]">What I built</Slide>
        <ul className="mt-4 space-y-2 text-[#b4c0d3]">
          <Li i={0}>The authentication system for web and mobile</Li>
          <Li i={1}>MongoDB data models, student-data controllers and API endpoints</Li>
          <Li i={2}>Working screens from the designs we made in Google Stitch</Li>
          <Li i={3}>Fixes for the issues that appeared after release (below)</Li>
        </ul>
      </div>
    </div>

    <Slide as="h3" className="mb-4 mt-14 font-display text-xl font-semibold text-[#f4f6fb]">How it fits together</Slide>
    <Flow />

    <Slide as="h3" className="mb-4 mt-14 font-display text-xl font-semibold text-[#f4f6fb]">Problems I solved along the way</Slide>
    <dl className="space-y-6">
      {CHALLENGES.map((c, i) => (
        <Slide key={c.title} i={i} className="border-l-2 border-[#f2b441] pl-5">
          <dt className="font-semibold text-[#f4f6fb]">{c.title}</dt>
          <dd className="mt-1 max-w-3xl text-[#b4c0d3]">{c.text}</dd>
        </Slide>
      ))}
    </dl>
  </Section>
);

const Experience = () => (
  <Section id="experience">
    <H2 sub="Most recent first.">Experience</H2>
    <div className="space-y-12 border-l border-[#22324d] pl-6 md:pl-10">
      {EXPERIENCE.map((e) => (
        <article key={e.company} className="relative">
          <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-[#f2b441] md:-left-[47px]" />
          <Slide as="h3" className="font-display text-xl font-semibold text-[#f4f6fb]">{e.role}, {e.company}</Slide>
          <Slide as="p" className="mb-3 text-sm text-[#93a1b8]">{e.when}</Slide>
          <ul className="max-w-3xl list-disc space-y-2 pl-5 text-[#b4c0d3]">
            {e.points.map((p, i) => <Li key={p} i={i}>{p}</Li>)}
          </ul>
        </article>
      ))}
    </div>
  </Section>
);

const Projects = () => (
  <Section id="projects" tone="border-y border-[#22324d] bg-[#0d1a2e]">
    <H2 sub="Smaller projects that show how I work outside client jobs.">More projects</H2>
    <div className="grid gap-6 md:grid-cols-2">
      {PROJECTS.map((p, idx) => (
        <Slide as="article" key={p.title} i={idx} className="flex flex-col overflow-hidden rounded-lg border border-[#22324d] bg-[#111e33]">
          {p.image ? (
            <img src={p.image} alt={`${p.title} screenshot`} className="h-48 w-full object-cover object-top" loading="lazy" />
          ) : (
            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-[#14253f] to-[#0a1424]" aria-hidden="true">
              <Layers size={40} className="text-[#f2b441]" />
            </div>
          )}
          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-display text-xl font-semibold text-[#f4f6fb]">{p.title}</h3>
            <p className="mt-2 flex-1 text-[#b4c0d3]">{p.text}</p>
            <p className="mt-4 text-sm text-[#93a1b8]">{p.tech.join(', ')}</p>
            <div className="mt-4 flex gap-3">
              {p.live && <LinkBtn solid href={p.live} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> Live demo</LinkBtn>}
              {p.github && <LinkBtn href={p.github} target="_blank" rel="noopener noreferrer"><Github size={16} /> Source</LinkBtn>}
            </div>
          </div>
        </Slide>
      ))}
    </div>
  </Section>
);

const Skills = () => (
  <Section id="skills">
    <H2>Skills</H2>
    <div className="space-y-8">
      {SKILLS.map(([group, items], idx) => (
        <Slide key={group} i={idx} className="grid gap-3 md:grid-cols-[11rem_1fr]">
          <h3 className="font-display font-semibold text-[#f2b441]">{group}</h3>
          <div className="flex flex-wrap gap-2">{items.map(([n, ic]) => <Chip key={n} name={n} icon={ic} />)}</div>
        </Slide>
      ))}
    </div>
    <LearningBar />
  </Section>
);

const About = () => (
  <Section id="about" tone="border-t border-[#22324d] bg-[#0d1a2e]">
    <H2>About me</H2>
    <div className="grid max-w-4xl gap-8 md:grid-cols-[1fr_16rem]">
      <Slide as="p" className="text-lg leading-relaxed text-[#b4c0d3]">
        I am a full-stack developer who likes owning a feature from the design file to production. I have built UIs from Figma designs, worked on a React Native team,
        and shipped a backend that real students depend on every day. I am looking for a full-time role where I can keep building React and Node products with a team that reviews code and ships often.
      </Slide>
      <ul className="space-y-3 text-[#b4c0d3]">
        <Li i={0} className="flex gap-3"><MapPin size={18} className="mt-1 shrink-0 text-[#f2b441]" /> Kottayam, Kerala, India</Li>
        <Li i={1} className="flex gap-3"><GraduationCap size={18} className="mt-1 shrink-0 text-[#f2b441]" /> BCA, BVM Holy Cross College, Cherpunkal, 2024</Li>
      </ul>
    </div>
  </Section>
);

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xwkzqgqv', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _replyto: form.email, _subject: 'Portfolio contact form' }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const input = 'w-full rounded-md border border-[#2f4468] bg-[#0a1424] px-4 py-3 text-[#e8edf5] placeholder-[#6b7a92] focus:border-[#f2b441] focus:outline-none';
  return (
    <Section id="contact">
      <H2 sub="I reply within a day. Email or WhatsApp is the fastest way to reach me.">Let's talk about a role</H2>
      <div className="grid gap-10 md:grid-cols-2">
        <ul className="space-y-4 text-[#e8edf5]">
          <Li i={0}><a className="inline-flex items-center gap-3 hover:text-[#f2b441]" href={`mailto:${ME.email}`}><Mail size={20} /> {ME.email}</a></Li>
          <Li i={1}><a className="inline-flex items-center gap-3 hover:text-[#f2b441]" href={`tel:${ME.phone.replace(/\s/g, '')}`}><Phone size={20} /> {ME.phone}</a></Li>
          <Li i={2}><a className="inline-flex items-center gap-3 hover:text-[#f2b441]" href={ME.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /> Message on WhatsApp</a></Li>
          <Li i={3}><a className="inline-flex items-center gap-3 hover:text-[#f2b441]" href={ME.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /> LinkedIn</a></Li>
          <Li i={4}><a className="inline-flex items-center gap-3 hover:text-[#f2b441]" href={ME.github} target="_blank" rel="noopener noreferrer"><Github size={20} /> GitHub</a></Li>
        </ul>
        <form onSubmit={submit} className="space-y-4">
          <label className="block"><span className="mb-1 block text-sm text-[#b4c0d3]">Your name</span>
            <input className={input} type="text" required value={form.name} onChange={set('name')} placeholder="Name" /></label>
          <label className="block"><span className="mb-1 block text-sm text-[#b4c0d3]">Your email</span>
            <input className={input} type="email" required value={form.email} onChange={set('email')} placeholder="you@company.com" /></label>
          <label className="block"><span className="mb-1 block text-sm text-[#b4c0d3]">Message</span>
            <textarea className={input} rows="5" required value={form.message} onChange={set('message')} placeholder="Tell me about the role or project" /></label>
          <button type="submit" disabled={status === 'sending'} className="rounded-md bg-[#f2b441] px-6 py-3 font-semibold text-[#0a1424] hover:bg-[#ffc85c] disabled:opacity-60">
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
          <p role="status" className={`text-sm ${status === 'error' ? 'text-red-400' : 'text-emerald-400'}`}>
            {status === 'success' && 'Message sent. I will reply soon.'}
            {status === 'error' && `Message not sent. Please email me directly at ${ME.email}.`}
          </p>
        </form>
      </div>
    </Section>
  );
};

const Footer = () => (
  <footer className="border-t border-[#22324d] py-8 text-center text-sm text-[#93a1b8]">
    &copy; {new Date().getFullYear()} {ME.name}
  </footer>
);

/* ----------------------------------- APP ----------------------------------- */

const App = () => {
  useEffect(() => {
    document.title = 'Suraj Cyriac Jes | Full-Stack React Developer';
  }, []);

  return (
    <div className="bg-[#0a1424] font-body text-[#e8edf5]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700;800&family=IBM+Plex+Sans:wght@400;500;600&display=swap');
        html { scroll-behavior: smooth; }
        .font-display { font-family: 'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif; }
        .font-body { font-family: 'IBM Plex Sans', 'Segoe UI', system-ui, sans-serif; }
        @keyframes hero-pan { 0%, 10% { transform: translateY(0); } 50%, 60% { transform: translateY(-50%); } 100% { transform: translateY(0); } }
        @keyframes hero-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes hero-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .hero-pan { animation: hero-pan 40s ease-in-out infinite; }
        .hero-float { animation: hero-float 6s ease-in-out infinite; }
        .hero-caret { display: inline-block; width: 3px; height: 0.9em; margin-left: 4px; background: #f2b441; vertical-align: -0.08em; animation: hero-blink 1s step-end infinite; }
        a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible { outline: 2px solid #f2b441; outline-offset: 2px; }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } * { transition: none !important; } .hero-pan, .hero-float, .hero-caret { animation: none !important; } }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <Catalyst />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;