# Ahmed Amr Portfolio - All Source Codes

## Project Structure
```
app/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── postcss.config.js
├── tsconfig.json
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   ├── components/
│   │   ├── ParticleBackground.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   ├── Logo.tsx
│   │   ├── TypeWriter.tsx
│   │   ├── TechCube.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ContactForm.tsx
│   │   └── SocialLinks.tsx
│   └── sections/
│       ├── HomeSection.tsx
│       ├── AboutSection.tsx
│       ├── ProjectsSection.tsx
│       └── ContactSection.tsx
```

---

## 1. index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Ahmed Amr Gomaa - Full Stack Developer from Egypt. Specialized in ASP.NET Core, Laravel, Angular, and more." />
    <meta name="keywords" content="Full Stack Developer, ASP.NET Core, Laravel, Angular, Web Developer, Egypt" />
    <meta name="author" content="Ahmed Amr Gomaa" />
    <meta name="theme-color" content="#00f0ff" />
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90' fill='%2300f0ff'%3EAG%3C/text%3E%3C/svg%3E" />
    
    <title>Ahmed Amr | Full Stack Developer</title>
    
    <style>
      body {
        margin: 0;
        padding: 0;
        background: #0a0a0a;
        font-family: 'Poppins', sans-serif;
      }
      #root {
        min-height: 100vh;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## 2. package.json

```json
{
  "name": "ahmed-amr-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.562.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.4.0"
  },
  "devDependencies": {
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.23",
    "eslint": "^9.39.1",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.19",
    "tailwindcss-animate": "^1.0.7",
    "typescript": "~5.9.3",
    "vite": "^7.2.4"
  }
}
```

---

## 3. tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

---

## 4. vite.config.ts

```typescript
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

---

## 5. postcss.config.js

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## 6. tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

## 7. src/main.tsx

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

## 8. src/App.tsx

```typescript
import { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import './App.css';

type Section = 'home' | 'about' | 'projects' | 'contact';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isLoading, setIsLoading] = useState(true);

  const handleNavigate = (section: string) => {
    setActiveSection(section as Section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50">
        <div className="text-center">
          <svg width="200" height="100" viewBox="0 0 200 100" className="mx-auto">
            <defs>
              <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f0ff" />
                <stop offset="100%" stopColor="#00a0ff" />
              </linearGradient>
            </defs>
            <text x="30" y="75" fill="none" stroke="url(#cyanGradient)" strokeWidth="3" fontSize="70"
              fontFamily="'Black Ops One', cursive" style={{ strokeDasharray: '500', strokeDashoffset: '500',
              animation: 'drawLetter 1s ease forwards' }}>A</text>
            <text x="95" y="75" fill="none" stroke="url(#cyanGradient)" strokeWidth="3" fontSize="70"
              fontFamily="'Black Ops One', cursive" style={{ strokeDasharray: '500', strokeDashoffset: '500',
              animation: 'drawLetter 1s ease 0.5s forwards' }}>G</text>
          </svg>
          <style>{`@keyframes drawLetter { to { stroke-dashoffset: 0; } }`}</style>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <ParticleBackground />
      <Header onNavigate={handleNavigate} />
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="relative z-10 ml-0 md:ml-16">
        {activeSection === 'home' && <HomeSection onNavigate={handleNavigate} />}
        {activeSection === 'about' && <AboutSection onNavigate={handleNavigate} />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>
      <footer className="relative z-10 py-8 text-center border-t border-gray-800 ml-0 md:ml-16">
        <p className="text-gray-500 text-sm">
          &copy; 2024 <span className="text-[#00f0ff]">Ahmed Amr</span>. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
```

---

## 9. src/App.css

```css
/* Smooth scrolling */
html { scroll-behavior: smooth; }

/* Selection color */
::selection { background: rgba(0, 240, 255, 0.3); color: #fff; }

/* Focus styles */
*:focus-visible { outline: 2px solid #00f0ff; outline-offset: 2px; }

/* Section transitions */
section { position: relative; }

/* Mobile sidebar adjustment */
@media (max-width: 768px) { .sidebar-icon .tooltip { display: none; } }

/* Custom animations */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}

/* Hover lift effect */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 240, 255, 0.2);
}

/* Glass morphism effect */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, #00f0ff 0%, #00a0ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Neon border */
.neon-border {
  border: 1px solid #00f0ff;
  box-shadow: 0 0 5px #00f0ff, 0 0 10px #00f0ff, inset 0 0 5px rgba(0, 240, 255, 0.2);
}

/* Pulse animation */
.pulse-glow {
  animation: pulseGlow 2s ease-in-out infinite;
}
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 5px #00f0ff, 0 0 10px #00f0ff; }
  50% { box-shadow: 0 0 20px #00f0ff, 0 0 30px #00f0ff; }
}

/* Tech badge */
.tech-badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  background: rgba(0, 240, 255, 0.1);
  color: #00f0ff;
  border: 1px solid rgba(0, 240, 255, 0.3);
}

/* Card hover effect */
.card-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 240, 255, 0.1);
}

/* Responsive typography */
@media (max-width: 640px) {
  .responsive-heading { font-size: clamp(2rem, 8vw, 4rem); }
}
```

---

## 10. src/index.css

```css
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Poppins:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 8%;
    --foreground: 0 0% 98%;
    --card: 0 0% 10%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 10%;
    --popover-foreground: 0 0% 98%;
    --primary: 180 100% 50%;
    --primary-foreground: 0 0% 0%;
    --secondary: 0 0% 15%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 20%;
    --muted-foreground: 0 0% 60%;
    --accent: 180 100% 50%;
    --accent-foreground: 0 0% 0%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 20%;
    --input: 0 0% 20%;
    --ring: 180 100% 50%;
    --radius: 0.625rem;
    --cyan: #00f0ff;
    --cyan-glow: rgba(0, 240, 255, 0.5);
  }
}

@layer base {
  * { @apply border-border; }
  body {
    @apply bg-background text-foreground;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
  }
}

/* Custom Scrollbar */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #1a1a1a; }
::-webkit-scrollbar-thumb { background: var(--cyan); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #00d0e0; }

/* Logo Font */
.logo-font { font-family: 'Black Ops One', cursive; }

/* Typing Animation */
.typing-cursor::after {
  content: '|';
  animation: blink 1s infinite;
  color: var(--cyan);
}
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Glow Effects */
.glow-text { text-shadow: 0 0 10px var(--cyan-glow), 0 0 20px var(--cyan-glow), 0 0 30px var(--cyan-glow); }
.glow-box { box-shadow: 0 0 15px var(--cyan-glow), 0 0 30px rgba(0, 240, 255, 0.2); }
.glow-icon { filter: drop-shadow(0 0 8px var(--cyan)); }

/* Sidebar Active State */
.sidebar-icon { transition: all 0.3s ease; }
.sidebar-icon:hover, .sidebar-icon.active {
  background: var(--cyan);
  color: #000;
  box-shadow: 0 0 15px var(--cyan);
}

/* Button Styles */
.btn-primary {
  background: transparent;
  border: 2px solid var(--cyan);
  color: var(--cyan);
  padding: 12px 30px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-primary:hover {
  background: var(--cyan);
  color: #000;
  box-shadow: 0 0 20px var(--cyan-glow);
}
.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s ease;
}
.btn-primary:hover::before { left: 100%; }

/* 3D Cube */
.cube-container { perspective: 1000px; width: 200px; height: 200px; }
.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: rotateCube 10s infinite linear;
}
.cube-face {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid var(--cyan);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  background: rgba(0, 240, 255, 0.1);
  backface-visibility: visible;
}
.cube-face.front  { transform: rotateY(0deg) translateZ(100px); }
.cube-face.back   { transform: rotateY(180deg) translateZ(100px); }
.cube-face.right  { transform: rotateY(90deg) translateZ(100px); }
.cube-face.left   { transform: rotateY(-90deg) translateZ(100px); }
.cube-face.top    { transform: rotateX(90deg) translateZ(100px); }
.cube-face.bottom { transform: rotateX(-90deg) translateZ(100px); }
@keyframes rotateCube {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}

/* Project Card */
.project-card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  transition: all 0.3s ease;
}
.project-card:hover {
  transform: scale(1.02);
  box-shadow: 0 0 30px var(--cyan-glow);
}

/* Filter Button */
.filter-btn {
  padding: 10px 24px;
  border-radius: 8px;
  border: 1px solid #333;
  background: transparent;
  color: #fff;
  transition: all 0.3s ease;
}
.filter-btn:hover, .filter-btn.active {
  background: var(--cyan);
  color: #000;
  border-color: var(--cyan);
}

/* Form Inputs */
.form-input {
  background: transparent;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 15px;
  color: #fff;
  width: 100%;
  transition: all 0.3s ease;
}
.form-input:focus {
  outline: none;
  border-color: var(--cyan);
  box-shadow: 0 0 10px var(--cyan-glow);
}
.form-input::placeholder { color: #666; }

/* Social Icons */
.social-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid #444;
  color: var(--cyan);
  transition: all 0.3s ease;
  position: relative;
}
.social-icon:hover {
  background: var(--cyan);
  color: #000;
  border-color: var(--cyan);
  box-shadow: 0 0 20px var(--cyan-glow);
}
.social-icon .tooltip {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--cyan);
  color: #000;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  white-space: nowrap;
}
.social-icon:hover .tooltip {
  opacity: 1;
  visibility: visible;
  top: -50px;
}

/* Floating Code Symbol */
.floating-code { animation: floatCode 3s ease-in-out infinite; }
@keyframes floatCode {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* Responsive */
@media (max-width: 768px) {
  .cube-container { width: 150px; height: 150px; }
  .cube-face { width: 150px; height: 150px; font-size: 40px; }
  .cube-face.front  { transform: rotateY(0deg) translateZ(75px); }
  .cube-face.back   { transform: rotateY(180deg) translateZ(75px); }
  .cube-face.right  { transform: rotateY(90deg) translateZ(75px); }
  .cube-face.left   { transform: rotateY(-90deg) translateZ(75px); }
  .cube-face.top    { transform: rotateX(90deg) translateZ(75px); }
  .cube-face.bottom { transform: rotateX(-90deg) translateZ(75px); }
}
```

---

## 11. src/components/ParticleBackground.tsx

```typescript
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    resizeCanvas();
    createParticles();
    drawParticles();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}
    />
  );
};

export default ParticleBackground;
```

---

## 12. src/components/Sidebar.tsx

```typescript
import { Home, User, Eye, Youtube, Mail } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Sidebar = ({ activeSection, onNavigate }: SidebarProps) => {
  const menuItems = [
    { id: 'home', icon: Home, label: 'HOME' },
    { id: 'about', icon: User, label: 'ABOUT' },
    { id: 'projects', icon: Eye, label: 'PROJECTS' },
    { id: 'contact', icon: Mail, label: 'CONTACT' },
  ];

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`sidebar-icon relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              isActive
                ? 'bg-[#00f0ff] text-black shadow-[0_0_15px_#00f0ff]'
                : 'bg-transparent text-gray-400 hover:text-[#00f0ff] hover:bg-[#00f0ff]/10'
            }`}
          >
            <Icon size={20} />
          </button>
        );
      })}
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="sidebar-icon w-12 h-12 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-500/10 transition-all duration-300"
      >
        <Youtube size={20} />
      </a>
    </div>
  );
};

export default Sidebar;
```

---

## 13. src/components/Header.tsx

```typescript
import { Linkedin, Github, Youtube, Mail, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Mail, href: 'mailto:ahmed.amr1000100@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+201000000000', label: 'Phone' },
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <button onClick={() => onNavigate('home')} className="cursor-pointer">
          <Logo size="small" />
        </button>

        <div className="hidden md:flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00f0ff] transition-colors duration-300"
                aria-label={link.label}
              >
                <Icon size={20} />
              </a>
            );
          })}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-4 text-gray-400 hover:text-[#00f0ff] transition-colors duration-300"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-400 hover:text-[#00f0ff] transition-colors duration-300"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-800 md:hidden">
          <nav className="flex flex-col p-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className="text-left py-3 text-gray-400 hover:text-[#00f0ff] transition-colors duration-300 border-b border-gray-800 last:border-0"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-800">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#00f0ff] transition-colors duration-300"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
```

---

## 14. src/components/Logo.tsx

```typescript
import { useState, useEffect } from 'react';

interface LogoProps {
  size?: 'small' | 'large';
  animated?: boolean;
}

const Logo = ({ size = 'small', animated = false }: LogoProps) => {
  const [isAnimating, setIsAnimating] = useState(animated);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setIsAnimating(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [animated]);

  const dimensions = size === 'large' ? { width: 200, height: 100 } : { width: 60, height: 40 };
  const strokeWidth = size === 'large' ? 4 : 2;
  const fontSize = size === 'large' ? '80px' : '28px';

  return (
    <div className={`logo-font ${size === 'large' ? 'text-8xl' : 'text-3xl'} text-[#00f0ff]`}>
      <svg width={dimensions.width} height={dimensions.height} viewBox="0 0 200 100">
        <defs>
          <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="100%" stopColor="#00a0ff" />
          </linearGradient>
        </defs>
        <text x="30" y="75" fill="none" stroke="url(#cyanGradient)" strokeWidth={strokeWidth}
          fontSize={fontSize} fontFamily="'Black Ops One', cursive"
          style={{ strokeDasharray: isAnimating ? '0 1000' : '1000 0',
            animation: isAnimating ? 'drawStroke 2s ease forwards' : 'none' }}>A</text>
        <text x="95" y="75" fill="none" stroke="url(#cyanGradient)" strokeWidth={strokeWidth}
          fontSize={fontSize} fontFamily="'Black Ops One', cursive"
          style={{ strokeDasharray: isAnimating ? '0 1000' : '1000 0',
            animation: isAnimating ? 'drawStroke 2s ease 0.5s forwards' : 'none' }}>G</text>
      </svg>
      <style>{`@keyframes drawStroke { to { stroke-dasharray: 1000 0; } }`}</style>
    </div>
  );
};

export default Logo;
```

---

## 15. src/components/TypeWriter.tsx

```typescript
import { useState, useEffect } from 'react';

interface TypeWriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const TypeWriter = ({ texts, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000 }: TypeWriterProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const targetText = texts[currentTextIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsTyping(false);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (isTyping) {
      if (currentText.length < targetText.length) {
        const typingTimer = setTimeout(() => {
          setCurrentText(targetText.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(typingTimer);
      } else {
        setIsPaused(true);
      }
    } else {
      if (currentText.length > 0) {
        const deletingTimer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(deletingTimer);
      } else {
        setIsTyping(true);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [currentText, currentTextIndex, isTyping, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return <span className="typing-cursor text-[#00f0ff]">{currentText}</span>;
};

export default TypeWriter;
```

---

## 16. src/components/TechCube.tsx

```typescript
import { useState, useEffect } from 'react';

const TechCube = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => ({ x: prev.x + 0.5, y: prev.y + 0.5 }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const technologies = [
    { name: 'Angular', icon: 'A', color: '#dd0031' },
    { name: 'Laravel', icon: 'L', color: '#ff2d20' },
    { name: '.NET', icon: '.NET', color: '#512bd4' },
    { name: 'JS', icon: 'JS', color: '#f7df1e' },
    { name: 'SQL', icon: 'SQL', color: '#00758f' },
    { name: 'Git', icon: 'Git', color: '#f05032' },
  ];

  const faces = [
    { transform: 'rotateY(0deg) translateZ(100px)', tech: 0 },
    { transform: 'rotateY(180deg) translateZ(100px)', tech: 1 },
    { transform: 'rotateY(90deg) translateZ(100px)', tech: 2 },
    { transform: 'rotateY(-90deg) translateZ(100px)', tech: 3 },
    { transform: 'rotateX(90deg) translateZ(100px)', tech: 4 },
    { transform: 'rotateX(-90deg) translateZ(100px)', tech: 5 },
  ];

  return (
    <div className="cube-container" style={{ perspective: '1000px' }}>
      <div className="cube" style={{
        width: '200px', height: '200px', position: 'relative',
        transformStyle: 'preserve-3d',
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.1s linear'
      }}>
        {faces.map((face, index) => (
          <div key={index} style={{
            position: 'absolute', width: '200px', height: '200px',
            border: '2px solid #00f0ff', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            fontSize: '40px', fontWeight: 'bold',
            background: 'rgba(0, 240, 255, 0.1)',
            backfaceVisibility: 'visible',
            transform: face.transform,
            color: technologies[face.tech].color
          }}>
            <div className="text-center">
              <div className="text-5xl mb-2">{technologies[face.tech].icon}</div>
              <div className="text-sm text-white">{technologies[face.tech].name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCube;
```

---

## 17. src/components/ProjectCard.tsx

```typescript
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  image: string;
  technologies: string[];
  codeLink?: string;
  demoLink?: string;
}

const ProjectCard = ({ title, image, technologies, codeLink, demoLink }: ProjectCardProps) => {
  return (
    <div className="project-card relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800 group">
      <div className="aspect-video overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
        <h3 className="text-2xl font-bold text-[#00f0ff] mb-4 text-center">{title}</h3>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs bg-[#00f0ff]/20 text-[#00f0ff] rounded-full border border-[#00f0ff]/30">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg text-white hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors duration-300">
              <span>Code</span><Github size={16} />
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg text-white hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors duration-300">
              <span>Details</span><ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
```

---

## 18. src/components/ContactForm.tsx

```typescript
import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <input type="text" name="name" value={formData.name} onChange={handleChange}
            placeholder="YOUR NAME" required className="form-input" />
        </div>
        <div>
          <input type="email" name="email" value={formData.email} onChange={handleChange}
            placeholder="YOUR EMAIL" required className="form-input" />
        </div>
      </div>
      <div>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange}
          placeholder="YOUR SUBJECT" required className="form-input" />
      </div>
      <div>
        <textarea name="message" value={formData.message} onChange={handleChange}
          placeholder="YOUR MESSAGE" required rows={6} className="form-input resize-none" />
      </div>
      <button type="submit" disabled={isSubmitting}
        className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
        {isSubmitting ? <span>Sending...</span> : submitted ? <span>Message Sent!</span> : (
          <><span>Send Message</span><Send size={18} /></>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
```

---

## 19. src/components/SocialLinks.tsx

```typescript
import { Linkedin, Github, Youtube, Mail, Phone } from 'lucide-react';

interface SocialLinksProps {
  showLabels?: boolean;
}

const SocialLinks = ({ showLabels = true }: SocialLinksProps) => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ahmed-amr-89867923b', label: 'LinkedIn', color: '#0077b5' },
    { icon: Github, href: 'https://github.com/AhmedAmr102', label: 'GitHub', color: '#333' },
    { icon: Youtube, href: '#', label: 'YouTube', color: '#ff0000' },
    { icon: Mail, href: 'mailto:ahmed.amr1000100@gmail.com', label: 'Gmail', color: '#ea4335' },
    { icon: Phone, href: 'https://wa.me/201000000000', label: 'WhatsApp', color: '#25d366' },
  ];

  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
            className="social-icon group" style={{ '--hover-color': link.color } as React.CSSProperties}>
            {showLabels && (
              <span className="tooltip" style={{ backgroundColor: link.color }}>{link.label}</span>
            )}
            <Icon size={24} className="transition-colors duration-300 group-hover:text-white" style={{ color: 'inherit' }} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
```

---

## 20. src/sections/HomeSection.tsx

```typescript
import { useEffect, useState } from 'react';
import TypeWriter from '../components/TypeWriter';
import { Code2 } from 'lucide-react';

interface HomeSectionProps {
  onNavigate: (section: string) => void;
}

const HomeSection = ({ onNavigate }: HomeSectionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => { setIsLoaded(true); }, []);

  const titles = ['Full Stack Developer', 'Backend Developer', 'Frontend Developer', 'ASP.NET Core Developer', 'Laravel Developer'];

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className={`space-y-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            <span className="text-white">Hi,</span><br />
            <span className="text-white">I'm </span>
            <span className="text-[#00f0ff]">Ahmed</span>
            <span className="text-white"> Amr</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl">
            <span className="text-white">I'm a </span>
            <TypeWriter texts={titles} typingSpeed={80} deletingSpeed={40} pauseDuration={1500} />
          </h2>
          <div className="pt-4">
            <button onClick={() => onNavigate('contact')} className="btn-primary text-lg">Let's Talk</button>
          </div>
        </div>

        <div className={`hidden lg:flex justify-center items-center transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <div className="relative">
            <div className="floating-code text-[#00f0ff] glow-icon"><Code2 size={200} strokeWidth={1} /></div>
            <div className="absolute -top-10 -right-10 w-16 h-16 border-2 border-[#00f0ff]/50 rounded-lg animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="absolute top-20 -right-20 w-12 h-12 border-2 border-[#00f0ff]/30 rounded-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute -bottom-10 right-10 w-20 h-20 border-2 border-[#00f0ff]/40 rounded-lg animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-20 -left-10 w-14 h-14 border-2 border-[#00f0ff]/35 rounded-lg animate-pulse" style={{ animationDelay: '1.5s' }} />
            <div className="absolute inset-0 bg-[#00f0ff]/10 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#00f0ff]/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#00f0ff] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
```

---

## 21. src/sections/AboutSection.tsx

```typescript
import { useEffect, useState } from 'react';
import TechCube from '../components/TechCube';
import { Download, MessageCircle } from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (section: string) => void;
}

const AboutSection = ({ onNavigate }: AboutSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

  const skills = [
    'Building dynamic, scalable web applications.',
    'Bringing ideas to life — from concept to deployment.',
    'Solving problems before they even realize they exist.',
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-8 lg:px-16 py-20">
      <div className="max-w-6xl w-full">
        <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[#00f0ff] mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-[#00f0ff]">👋</span> Hey there, internet traveler!
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm <span className="text-[#00f0ff] font-semibold">Ahmed Amr Gomaa</span> — a{' '}
              <span className="text-[#00f0ff] font-semibold">Full Stack Developer</span> from{' '}
              <span className="text-[#00f0ff]">Egypt</span> who loves turning caffeine, creativity, and clean code into smooth, high-performing web experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Over the years, I've built diverse web projects{' '}
              <span className="text-[#00f0ff]">🚀</span>, from full-scale applications to sleek, tailored solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My goal? To write code so clean that future me actually thanks present me (hasn't happened yet, but I'm working on it <span className="text-[#00f0ff]">😉</span>).
            </p>

            <div className="space-y-3">
              <p className="text-lg text-gray-300"><span className="text-[#00f0ff]">💡</span> I'm all about:</p>
              <ul className="space-y-2 ml-6">
                {skills.map((skill, index) => (
                  <li key={index} className="text-gray-400 flex items-start gap-2">
                    <span className="text-[#00f0ff] mt-1">•</span>{skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <p className="text-lg text-gray-300"><span className="text-[#00f0ff]">🎓</span> Computer Engineering - 2024</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="btn-primary flex items-center gap-2"><span>Download CV</span><Download size={18} /></button>
              <button onClick={() => onNavigate('contact')} className="btn-primary flex items-center gap-2"><span>Let's Talk</span><MessageCircle size={18} /></button>
            </div>
          </div>

          <div className={`flex justify-center items-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <TechCube />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
```

---

## 22. src/sections/ProjectsSection.tsx

```typescript
import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

type FilterCategory = 'All' | 'JavaScript' | 'React' | 'PHP' | 'Laravel' | 'Others';

interface Project {
  id: number;
  title: string;
  image: string;
  category: FilterCategory[];
  technologies: string[];
  codeLink?: string;
  demoLink?: string;
}

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  useEffect(() => { setIsVisible(true); }, []);

  const filters: FilterCategory[] = ['All', 'JavaScript', 'React', 'PHP', 'Laravel', 'Others'];

  const projects: Project[] = [
    {
      id: 1, title: 'E-Commerce System',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop',
      category: ['Laravel', 'PHP', 'JavaScript'],
      technologies: ['Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      codeLink: 'https://github.com', demoLink: '#'
    },
    {
      id: 2, title: 'Hospital Management System',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=450&fit=crop',
      category: ['Laravel', 'PHP', 'Others'],
      technologies: ['Laravel', 'MySQL', 'RESTful API', 'Multiple Guards', 'Design Patterns'],
      codeLink: 'https://github.com', demoLink: '#'
    },
    {
      id: 3, title: 'School Management System',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=450&fit=crop',
      category: ['Others', 'React'],
      technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'JWT', 'AutoMapper'],
      codeLink: 'https://github.com', demoLink: '#'
    },
    {
      id: 4, title: 'Company Management System',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=450&fit=crop',
      category: ['Others'],
      technologies: ['ASP.NET Core', 'SQL Server', 'Identity', 'AutoMapper', 'Design Patterns'],
      codeLink: 'https://github.com', demoLink: '#'
    },
    {
      id: 5, title: 'Hotel Booking System',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=450&fit=crop',
      category: ['Laravel', 'PHP'],
      technologies: ['Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      codeLink: 'https://github.com', demoLink: '#'
    },
    {
      id: 6, title: 'Authentication System',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=450&fit=crop',
      category: ['Laravel', 'PHP'],
      technologies: ['Laravel', 'MySQL', 'Socialite', '2FA'],
      codeLink: 'https://github.com', demoLink: '#'
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category.includes(activeFilter));

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-8 lg:px-16 py-20">
      <div className="max-w-7xl w-full">
        <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[#00f0ff] mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          My Recent Work
        </h2>

        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filters.map((filter) => (
            <button key={filter} onClick={() => setActiveFilter(filter)}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}>
              {filter}
            </button>
          ))}
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} title={project.title} image={project.image}
              technologies={project.technologies} codeLink={project.codeLink} demoLink={project.demoLink} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
```

---

## 23. src/sections/ContactSection.tsx

```typescript
import { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-8 lg:px-16 py-20">
      <div className="max-w-4xl w-full">
        <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[#00f0ff] mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Contact Me
        </h2>

        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <ContactForm />
        </div>

        <div className={`mt-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SocialLinks showLabels={true} />
        </div>

        <div className={`mt-12 grid sm:grid-cols-2 gap-6 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center p-6 border border-gray-800 rounded-xl hover:border-[#00f0ff]/50 transition-colors duration-300">
            <p className="text-gray-400 mb-2">Email</p>
            <a href="mailto:ahmed.amr1000100@gmail.com" className="text-[#00f0ff] hover:underline">
              ahmed.amr1000100@gmail.com
            </a>
          </div>
          <div className="text-center p-6 border border-gray-800 rounded-xl hover:border-[#00f0ff]/50 transition-colors duration-300">
            <p className="text-gray-400 mb-2">Location</p>
            <p className="text-white">Egypt</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
```

---

## How to Run the Project

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

---

## Technologies Used

- **React 19** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
