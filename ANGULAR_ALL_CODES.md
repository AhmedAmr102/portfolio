# Ahmed Amr Portfolio - Angular Version

## Project Structure
```
angular-portfolio/
├── angular.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
└── src/
    ├── index.html
    ├── main.ts
    ├── styles.scss
    ├── favicon.ico
    └── app/
        ├── app.component.ts
        ├── components/
        │   ├── contact-form/
        │   │   └── contact-form.component.ts
        │   ├── header/
        │   │   └── header.component.ts
        │   ├── particle-background/
        │   │   └── particle-background.component.ts
        │   ├── project-card/
        │   │   └── project-card.component.ts
        │   ├── sidebar/
        │   │   └── sidebar.component.ts
        │   ├── social-links/
        │   │   └── social-links.component.ts
        │   ├── tech-cube/
        │   │   └── tech-cube.component.ts
        │   └── type-writer/
        │       └── type-writer.component.ts
        └── sections/
            ├── about-section/
            │   └── about-section.component.ts
            ├── contact-section/
            │   └── contact-section.component.ts
            ├── home-section/
            │   └── home-section.component.ts
            └── projects-section/
                └── projects-section.component.ts
```

---

## 1. package.json

```json
{
  "name": "ahmed-amr-portfolio",
  "version": "1.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^17.0.0",
    "@angular/common": "^17.0.0",
    "@angular/compiler": "^17.0.0",
    "@angular/core": "^17.0.0",
    "@angular/forms": "^17.0.0",
    "@angular/platform-browser": "^17.0.0",
    "@angular/platform-browser-dynamic": "^17.0.0",
    "@angular/router": "^17.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^17.0.0",
    "@angular/cli": "^17.0.0",
    "@angular/compiler-cli": "^17.0.0",
    "@types/node": "^18.18.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "typescript": "~5.2.0"
  }
}
```

---

## 2. angular.json

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "ahmed-amr-portfolio": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss"
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/ahmed-amr-portfolio",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": ["zone.js"],
            "tsConfig": "tsconfig.app.json",
            "inlineStyleLanguage": "scss",
            "assets": ["src/favicon.ico", "src/assets"],
            "styles": ["src/styles.scss"],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "buildOptimizer": false,
              "optimization": false,
              "vendorChunk": true,
              "extractLicenses": false,
              "sourceMap": true,
              "namedChunks": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "ahmed-amr-portfolio:build:production"
            },
            "development": {
              "buildTarget": "ahmed-amr-portfolio:build:development"
            }
          },
          "defaultConfiguration": "development"
        }
      }
    }
  }
}
```

---

## 3. tsconfig.json

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "sourceMap": true,
    "declaration": false,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": ["ES2022", "dom"]
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}
```

---

## 4. tsconfig.app.json

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": []
  },
  "files": ["src/main.ts"],
  "include": ["src/**/*.d.ts"]
}
```

---

## 5. tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#00f0ff',
          glow: 'rgba(0, 240, 255, 0.5)',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          light: '#1a1a1a',
        }
      },
      fontFamily: {
        logo: ['"Black Ops One"', 'cursive'],
        body: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px #00f0ff, 0 0 10px #00f0ff' },
          '50%': { boxShadow: '0 0 20px #00f0ff, 0 0 30px #00f0ff' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
```

---

## 6. postcss.config.js

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## 7. src/index.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Ahmed Amr | Full Stack Developer</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Ahmed Amr Gomaa - Full Stack Developer from Egypt. Specialized in ASP.NET Core, Laravel, Angular, and more.">
  <meta name="keywords" content="Full Stack Developer, ASP.NET Core, Laravel, Angular, Web Developer, Egypt">
  <meta name="author" content="Ahmed Amr Gomaa">
  <meta name="theme-color" content="#00f0ff">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90' fill='%2300f0ff'%3EAG%3C/text%3E%3C/svg%3E">
  
  <style>
    body {
      margin: 0;
      padding: 0;
      background: #0a0a0a;
      font-family: 'Poppins', sans-serif;
    }
  </style>
</head>
<body class="bg-dark text-white">
  <app-root></app-root>
</body>
</html>
```

---

## 8. src/main.ts

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([])
  ]
}).catch(err => console.error(err));
```

---

## 9. src/styles.scss

```scss
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Poppins:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom Scrollbar */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #1a1a1a; }
::-webkit-scrollbar-thumb { background: #00f0ff; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #00d0e0; }

/* Selection color */
::selection { background: rgba(0, 240, 255, 0.3); color: #fff; }

/* Focus styles */
*:focus-visible { outline: 2px solid #00f0ff; outline-offset: 2px; }

/* Smooth scrolling */
html { scroll-behavior: smooth; }

body {
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
}

/* Logo Font */
.font-logo { font-family: 'Black Ops One', cursive; }

/* Typing Animation */
.typing-cursor::after {
  content: '|';
  animation: blink 1s infinite;
  color: #00f0ff;
}
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Glow Effects */
.glow-text { text-shadow: 0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.5), 0 0 30px rgba(0, 240, 255, 0.5); }
.glow-icon { filter: drop-shadow(0 0 8px #00f0ff); }

/* Button Styles */
.btn-primary {
  background: transparent;
  border: 2px solid #00f0ff;
  color: #00f0ff;
  padding: 12px 30px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.btn-primary:hover {
  background: #00f0ff;
  color: #000;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.5);
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
  border: 2px solid #00f0ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
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
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.5);
}

/* Filter Button */
.filter-btn {
  padding: 10px 24px;
  border-radius: 8px;
  border: 1px solid #333;
  background: transparent;
  color: #fff;
  transition: all 0.3s ease;
  cursor: pointer;
}
.filter-btn:hover, .filter-btn.active {
  background: #00f0ff;
  color: #000;
  border-color: #00f0ff;
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
  border-color: #00f0ff;
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
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
  color: #00f0ff;
  transition: all 0.3s ease;
  position: relative;
  text-decoration: none;
}
.social-icon:hover {
  background: #00f0ff;
  color: #000;
  border-color: #00f0ff;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.5);
}

/* Floating Animation */
.floating { animation: float 3s ease-in-out infinite; }
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* Sidebar Icon */
.sidebar-icon { transition: all 0.3s ease; }
.sidebar-icon:hover, .sidebar-icon.active {
  background: #00f0ff;
  color: #000;
  box-shadow: 0 0 15px #00f0ff;
}

/* Responsive */
@media (max-width: 768px) {
  .cube-container { width: 150px; height: 150px; }
  .cube-face { width: 150px; height: 150px; font-size: 30px; }
  .cube-face.front  { transform: rotateY(0deg) translateZ(75px); }
  .cube-face.back   { transform: rotateY(180deg) translateZ(75px); }
  .cube-face.right  { transform: rotateY(90deg) translateZ(75px); }
  .cube-face.left   { transform: rotateY(-90deg) translateZ(75px); }
  .cube-face.top    { transform: rotateX(90deg) translateZ(75px); }
  .cube-face.bottom { transform: rotateX(-90deg) translateZ(75px); }
}
```

---

## 10. src/app/app.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticleBackgroundComponent } from './components/particle-background/particle-background.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeSectionComponent } from './sections/home-section/home-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { ProjectsSectionComponent } from './sections/projects-section/projects-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';

type Section = 'home' | 'about' | 'projects' | 'contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ParticleBackgroundComponent,
    SidebarComponent,
    HeaderComponent,
    HomeSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent
  ],
  template: `
    <div class="relative min-h-screen bg-[#0a0a0a]">
      <!-- Loading Screen -->
      <div *ngIf="isLoading" class="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50">
        <div class="text-center">
          <svg width="200" height="100" viewBox="0 0 200 100" class="mx-auto">
            <defs>
              <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f0ff" />
                <stop offset="100%" stopColor="#00a0ff" />
              </linearGradient>
            </defs>
            <text x="30" y="75" fill="none" stroke="url(#cyanGradient)" strokeWidth="3" fontSize="70"
              fontFamily="'Black Ops One', cursive" class="loading-letter">A</text>
            <text x="95" y="75" fill="none" stroke="url(#cyanGradient)" strokeWidth="3" fontSize="70"
              fontFamily="'Black Ops One', cursive" class="loading-letter" style="animation-delay: 0.5s">G</text>
          </svg>
        </div>
      </div>

      <!-- Main Content -->
      <ng-container *ngIf="!isLoading">
        <app-particle-background></app-particle-background>
        <app-header (navigate)="onNavigate($event)"></app-header>
        <app-sidebar [activeSection]="activeSection" (navigate)="onNavigate($event)"></app-sidebar>
        
        <main class="relative z-10 ml-0 md:ml-16">
          <app-home-section *ngIf="activeSection === 'home'" (navigate)="onNavigate($event)"></app-home-section>
          <app-about-section *ngIf="activeSection === 'about'" (navigate)="onNavigate($event)"></app-about-section>
          <app-projects-section *ngIf="activeSection === 'projects'"></app-projects-section>
          <app-contact-section *ngIf="activeSection === 'contact'"></app-contact-section>
        </main>

        <footer class="relative z-10 py-8 text-center border-t border-gray-800 ml-0 md:ml-16">
          <p class="text-gray-500 text-sm">
            &copy; 2024 <span class="text-[#00f0ff]">Ahmed Amr</span>. All rights reserved.
          </p>
        </footer>
      </ng-container>
    </div>
  `,
  styles: [`
    .loading-letter {
      stroke-dasharray: 500;
      stroke-dashoffset: 500;
      animation: drawLetter 1s ease forwards;
    }
    @keyframes drawLetter {
      to { stroke-dashoffset: 0; }
    }
  `]
})
export class AppComponent implements OnInit {
  activeSection: Section = 'home';
  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  onNavigate(section: string) {
    this.activeSection = section as Section;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
```

---

## 11. src/app/components/particle-background/particle-background.component.ts

```typescript
import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

@Component({
  selector: 'app-particle-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <canvas #canvas class="fixed inset-0 pointer-events-none z-0"
      style="background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)">
    </canvas>
  `
})
export class ParticleBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private ctx!: CanvasRenderingContext2D;
  private animationFrameId!: number;
  private particles: Particle[] = [];

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    
    this.resizeCanvas();
    this.createParticles();
    this.animate();
    
    window.addEventListener('resize', this.handleResize);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationFrameId);
    window.removeEventListener('resize', this.handleResize);
  }

  private handleResize = () => {
    this.resizeCanvas();
    this.createParticles();
  };

  private resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private createParticles() {
    const canvas = this.canvasRef.nativeElement;
    this.particles = [];
    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
    
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
  }

  private animate() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.particles.forEach((particle) => {
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
      this.ctx.fill();

      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;
    });

    this.particles.forEach((p1, i) => {
      this.particles.slice(i + 1).forEach((p2) => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          this.ctx.beginPath();
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(0, 240, 255, ${0.1 * (1 - distance / 100)})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      });
    });

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }
}
```

---

## 12. src/app/components/sidebar/sidebar.component.ts

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      <button *ngFor="let item of menuItems"
        (click)="onNavigate(item.id)"
        class="sidebar-icon relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
        [class.bg-cyan]="activeSection === item.id"
        [class.text-black]="activeSection === item.id"
        [class.shadow-cyan-glow]="activeSection === item.id"
        [class.bg-transparent]="activeSection !== item.id"
        [class.text-gray-400]="activeSection !== item.id"
        [class.hover:text-cyan]="activeSection !== item.id"
        [class.hover:bg-cyan/10]="activeSection !== item.id"
        [title]="item.label">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path *ngIf="item.id === 'home'" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline *ngIf="item.id === 'home'" points="9 22 9 12 15 12 15 22"></polyline>
          <path *ngIf="item.id === 'about'" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle *ngIf="item.id === 'about'" cx="12" cy="7" r="4"></circle>
          <path *ngIf="item.id === 'projects'" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
          <circle *ngIf="item.id === 'projects'" cx="12" cy="12" r="3"></circle>
          <path *ngIf="item.id === 'contact'" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline *ngIf="item.id === 'contact'" points="22,6 12,13 2,6"></polyline>
        </svg>
      </button>
      
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"
        class="sidebar-icon w-12 h-12 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-500/10 transition-all duration-300"
        title="YouTube">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
          <path d="m10 15 5-3-5-3z"></path>
        </svg>
      </a>
    </div>
  `,
  styles: [`
    .shadow-cyan-glow {
      box-shadow: 0 0 15px #00f0ff;
    }
  `]
})
export class SidebarComponent {
  @Input() activeSection = 'home';
  @Output() navigate = new EventEmitter<string>();

  menuItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  onNavigate(section: string) {
    this.navigate.emit(section);
  }
}
```

---

## 13. src/app/components/header/header.component.ts

```typescript
import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div class="flex items-center justify-between max-w-7xl mx-auto">
        <button (click)="onNavigate('home')" class="cursor-pointer">
          <svg width="60" height="40" viewBox="0 0 200 100">
            <defs>
              <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f0ff" />
                <stop offset="100%" stopColor="#00a0ff" />
              </linearGradient>
            </defs>
            <text x="30" y="75" fill="none" stroke="url(#cyanGradient)" strokeWidth="2" fontSize="28"
              fontFamily="'Black Ops One', cursive">A</text>
            <text x="95" y="75" fill="none" stroke="url(#cyanGradient)" strokeWidth="2" fontSize="28"
              fontFamily="'Black Ops One', cursive">G</text>
          </svg>
        </button>

        <div class="hidden md:flex items-center gap-4">
          <a *ngFor="let link of socialLinks" [href]="link.href" target="_blank" rel="noopener noreferrer"
            class="text-gray-400 hover:text-cyan transition-colors duration-300" [attr.aria-label]="link.label">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              [innerHTML]="link.icon">
            </svg>
          </a>
          <button (click)="toggleMobileMenu()" class="ml-4 text-gray-400 hover:text-cyan transition-colors duration-300">
            <svg *ngIf="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg *ngIf="mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <button (click)="toggleMobileMenu()" class="md:hidden text-gray-400 hover:text-cyan transition-colors duration-300">
          <svg *ngIf="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg *ngIf="mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div *ngIf="mobileMenuOpen" class="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-800 md:hidden">
        <nav class="flex flex-col p-6">
          <button *ngFor="let item of navItems" (click)="onNavigate(item.id); toggleMobileMenu()"
            class="text-left py-3 text-gray-400 hover:text-cyan transition-colors duration-300 border-b border-gray-800 last:border-0">
            {{ item.label }}
          </button>
          <div class="flex items-center gap-4 mt-6 pt-6 border-t border-gray-800">
            <a *ngFor="let link of socialLinks" [href]="link.href" target="_blank" rel="noopener noreferrer"
              class="text-gray-400 hover:text-cyan transition-colors duration-300" [attr.aria-label]="link.label">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                [innerHTML]="link.icon">
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  `
})
export class HeaderComponent {
  @Output() navigate = new EventEmitter<string>();
  
  mobileMenuOpen = false;

  navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  socialLinks = [
    { href: 'https://linkedin.com', label: 'LinkedIn',
      icon: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>' },
    { href: 'https://github.com', label: 'GitHub',
      icon: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>' },
    { href: 'https://youtube.com', label: 'YouTube',
      icon: '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path>' },
    { href: 'mailto:ahmed.amr1000100@gmail.com', label: 'Email',
      icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>' },
    { href: 'tel:+201000000000', label: 'Phone',
      icon: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>' },
  ];

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  onNavigate(section: string) {
    this.navigate.emit(section);
  }
}
```

---

## 14. src/app/components/type-writer/type-writer.component.ts

```typescript
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-type-writer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="typing-cursor text-cyan">{{ currentText }}</span>
  `
})
export class TypeWriterComponent implements OnInit, OnDestroy {
  @Input() texts: string[] = [];
  @Input() typingSpeed = 100;
  @Input() deletingSpeed = 50;
  @Input() pauseDuration = 2000;

  currentText = '';
  private currentTextIndex = 0;
  private isTyping = true;
  private isPaused = false;
  private timer: any;

  ngOnInit() {
    this.typeWriter();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  private typeWriter() {
    const targetText = this.texts[this.currentTextIndex];

    if (this.isPaused) {
      this.timer = setTimeout(() => {
        this.isPaused = false;
        this.isTyping = false;
        this.typeWriter();
      }, this.pauseDuration);
      return;
    }

    if (this.isTyping) {
      if (this.currentText.length < targetText.length) {
        this.timer = setTimeout(() => {
          this.currentText = targetText.slice(0, this.currentText.length + 1);
          this.typeWriter();
        }, this.typingSpeed);
      } else {
        this.isPaused = true;
        this.typeWriter();
      }
    } else {
      if (this.currentText.length > 0) {
        this.timer = setTimeout(() => {
          this.currentText = this.currentText.slice(0, -1);
          this.typeWriter();
        }, this.deletingSpeed);
      } else {
        this.isTyping = true;
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
        this.typeWriter();
      }
    }
  }
}
```

---

## 15. src/app/components/tech-cube/tech-cube.component.ts

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-cube',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cube-container" style="perspective: 1000px">
      <div class="cube" [style.transform]="'rotateX(' + rotation.x + 'deg) rotateY(' + rotation.y + 'deg)'"
        style="width: 200px; height: 200px; position: relative; transform-style: preserve-3d; transition: transform 0.1s linear">
        <div *ngFor="let face of faces; let i = index" class="cube-face"
          [style.transform]="face.transform"
          [style.color]="technologies[i].color">
          <div class="text-center">
            <div class="text-5xl mb-2">{{ technologies[i].icon }}</div>
            <div class="text-sm text-white">{{ technologies[i].name }}</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .cube-face {
      position: absolute;
      width: 200px;
      height: 200px;
      border: 2px solid #00f0ff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      font-weight: bold;
      background: rgba(0, 240, 255, 0.1);
      backface-visibility: visible;
    }
  `]
})
export class TechCubeComponent implements OnInit, OnDestroy {
  rotation = { x: 0, y: 0 };
  private intervalId: any;

  technologies = [
    { name: 'Angular', icon: 'A', color: '#dd0031' },
    { name: 'Laravel', icon: 'L', color: '#ff2d20' },
    { name: '.NET', icon: '.NET', color: '#512bd4' },
    { name: 'JS', icon: 'JS', color: '#f7df1e' },
    { name: 'SQL', icon: 'SQL', color: '#00758f' },
    { name: 'Git', icon: 'Git', color: '#f05032' },
  ];

  faces = [
    { transform: 'rotateY(0deg) translateZ(100px)' },
    { transform: 'rotateY(180deg) translateZ(100px)' },
    { transform: 'rotateY(90deg) translateZ(100px)' },
    { transform: 'rotateY(-90deg) translateZ(100px)' },
    { transform: 'rotateX(90deg) translateZ(100px)' },
    { transform: 'rotateX(-90deg) translateZ(100px)' },
  ];

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.rotation.x += 0.5;
      this.rotation.y += 0.5;
    }, 50);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
```

---

## 16. src/app/components/project-card/project-card.component.ts

```typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="project-card relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800 group">
      <div class="aspect-video overflow-hidden">
        <img [src]="image" [alt]="title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
      </div>
      <div class="absolute inset-0 bg-black/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
        <h3 class="text-2xl font-bold text-cyan mb-4 text-center">{{ title }}</h3>
        <div class="flex flex-wrap justify-center gap-2 mb-6">
          <span *ngFor="let tech of technologies" 
            class="px-3 py-1 text-xs bg-cyan/20 text-cyan rounded-full border border-cyan/30">
            {{ tech }}
          </span>
        </div>
        <div class="flex gap-4">
          <a *ngIf="codeLink" [href]="codeLink" target="_blank" rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg text-white hover:border-cyan hover:text-cyan transition-colors duration-300">
            <span>Code</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a *ngIf="demoLink" [href]="demoLink" target="_blank" rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg text-white hover:border-cyan hover:text-cyan transition-colors duration-300">
            <span>Details</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `
})
export class ProjectCardComponent {
  @Input() title = '';
  @Input() image = '';
  @Input() technologies: string[] = [];
  @Input() codeLink?: string;
  @Input() demoLink?: string;
}
```

---

## 17. src/app/components/contact-form/contact-form.component.ts

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()" class="space-y-6">
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <input type="text" name="name" [(ngModel)]="formData.name"
            placeholder="YOUR NAME" required class="form-input">
        </div>
        <div>
          <input type="email" name="email" [(ngModel)]="formData.email"
            placeholder="YOUR EMAIL" required class="form-input">
        </div>
      </div>
      <div>
        <input type="text" name="subject" [(ngModel)]="formData.subject"
          placeholder="YOUR SUBJECT" required class="form-input">
      </div>
      <div>
        <textarea name="message" [(ngModel)]="formData.message"
          placeholder="YOUR MESSAGE" required rows="6" class="form-input resize-none"></textarea>
      </div>
      <button type="submit" [disabled]="isSubmitting"
        class="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
        <span *ngIf="isSubmitting">Sending...</span>
        <span *ngIf="submitted">Message Sent!</span>
        <ng-container *ngIf="!isSubmitting && !submitted">
          <span>Send Message</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </ng-container>
      </button>
    </form>
  `
})
export class ContactFormComponent {
  formData = { name: '', email: '', subject: '', message: '' };
  isSubmitting = false;
  submitted = false;

  async onSubmit() {
    this.isSubmitting = true;
    await new Promise(resolve => setTimeout(resolve, 1500));
    this.isSubmitting = false;
    this.submitted = true;
    this.formData = { name: '', email: '', subject: '', message: '' };
    setTimeout(() => this.submitted = false, 3000);
  }
}
```

---

## 18. src/app/components/social-links/social-links.component.ts

```typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  href: string;
  label: string;
  color: string;
  icon: string;
}

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center justify-center gap-4 flex-wrap">
      <a *ngFor="let link of socialLinks" [href]="link.href" target="_blank" rel="noopener noreferrer"
        class="social-icon group relative" [style.--hover-color]="link.color">
        <span *ngIf="showLabels" 
          class="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded text-xs font-semibold opacity-0 invisible transition-all duration-300 whitespace-nowrap group-hover:opacity-100 group-hover:visible group-hover:-top-14"
          [style.background-color]="link.color" style="color: black">
          {{ link.label }}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          [innerHTML]="link.icon">
        </svg>
      </a>
    </div>
  `
})
export class SocialLinksComponent {
  @Input() showLabels = true;

  socialLinks: SocialLink[] = [
    { href: 'https://www.linkedin.com/in/ahmed-amr-89867923b', label: 'LinkedIn', color: '#0077b5',
      icon: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>' },
    { href: 'https://github.com/AhmedAmr102', label: 'GitHub', color: '#333',
      icon: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>' },
    { href: '#', label: 'YouTube', color: '#ff0000',
      icon: '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path>' },
    { href: 'mailto:ahmed.amr1000100@gmail.com', label: 'Gmail', color: '#ea4335',
      icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>' },
    { href: 'https://wa.me/201000000000', label: 'WhatsApp', color: '#25d366',
      icon: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>' },
  ];
}
```

---

## 19. src/app/sections/home-section/home-section.component.ts

```typescript
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeWriterComponent } from '../../components/type-writer/type-writer.component';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [CommonModule, TypeWriterComponent],
  template: `
    <section class="min-h-screen flex items-center justify-center relative px-4 sm:px-8 lg:px-16">
      <div class="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6" [class.opacity-0]="!isLoaded" [class.-translate-x-20]="!isLoaded"
          [class.opacity-100]="isLoaded" [class.translate-x-0]="isLoaded" style="transition: all 1s ease">
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold">
            <span class="text-white">Hi,</span><br>
            <span class="text-white">I'm </span>
            <span class="text-cyan">Ahmed</span>
            <span class="text-white"> Amr</span>
          </h1>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl">
            <span class="text-white">I'm a </span>
            <app-type-writer [texts]="titles" [typingSpeed]="80" [deletingSpeed]="40" [pauseDuration]="1500"></app-type-writer>
          </h2>
          <div class="pt-4">
            <button (click)="onNavigate('contact')" class="btn-primary text-lg">Let's Talk</button>
          </div>
        </div>

        <div class="hidden lg:flex justify-center items-center" [class.opacity-0]="!isLoaded" [class.translate-x-20]="!isLoaded"
          [class.opacity-100]="isLoaded" [class.translate-x-0]="isLoaded" style="transition: all 1s ease 0.5s">
          <div class="relative">
            <div class="floating text-cyan glow-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <div class="absolute -top-10 -right-10 w-16 h-16 border-2 border-cyan/50 rounded-lg animate-pulse"></div>
            <div class="absolute top-20 -right-20 w-12 h-12 border-2 border-cyan/30 rounded-lg animate-pulse" style="animation-delay: 0.5s"></div>
            <div class="absolute -bottom-10 right-10 w-20 h-20 border-2 border-cyan/40 rounded-lg animate-pulse" style="animation-delay: 1s"></div>
            <div class="absolute bottom-20 -left-10 w-14 h-14 border-2 border-cyan/35 rounded-lg animate-pulse" style="animation-delay: 1.5s"></div>
            <div class="absolute inset-0 bg-cyan/10 blur-3xl rounded-full -z-10"></div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-cyan/50 rounded-full flex justify-center pt-2">
          <div class="w-1 h-2 bg-cyan rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  `
})
export class HomeSectionComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();
  isLoaded = false;
  
  titles = [
    'Full Stack Developer',
    'Backend Developer',
    'Frontend Developer',
    'ASP.NET Core Developer',
    'Laravel Developer',
  ];

  ngOnInit() {
    setTimeout(() => this.isLoaded = true, 100);
  }

  onNavigate(section: string) {
    this.navigate.emit(section);
  }
}
```

---

## 20. src/app/sections/about-section/about-section.component.ts

```typescript
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechCubeComponent } from '../../components/tech-cube/tech-cube.component';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, TechCubeComponent],
  template: `
    <section class="min-h-screen flex items-center justify-center relative px-4 sm:px-8 lg:px-16 py-20">
      <div class="max-w-6xl w-full">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan mb-12"
          [class.opacity-0]="!isVisible" [class.translate-y-10]="!isVisible"
          [class.opacity-100]="isVisible" [class.translate-y-0]="isVisible" style="transition: all 0.7s ease">
          About Me
        </h2>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6" [class.opacity-0]="!isVisible" [class.-translate-x-20]="!isVisible"
            [class.opacity-100]="isVisible" [class.translate-x-0]="isVisible" style="transition: all 0.7s ease 0.2s">
            <p class="text-lg text-gray-300 leading-relaxed">
              <span class="text-cyan">👋</span> Hey there, internet traveler!
            </p>
            <p class="text-lg text-gray-300 leading-relaxed">
              I'm <span class="text-cyan font-semibold">Ahmed Amr Gomaa</span> — a 
              <span class="text-cyan font-semibold">Full Stack Developer</span> from 
              <span class="text-cyan">Egypt</span> who loves turning caffeine, creativity, and clean code into smooth, high-performing web experiences.
            </p>
            <p class="text-lg text-gray-300 leading-relaxed">
              Over the years, I've built diverse web projects 
              <span class="text-cyan">🚀</span>, from full-scale applications to sleek, tailored solutions.
            </p>
            <p class="text-lg text-gray-300 leading-relaxed">
              My goal? To write code so clean that future me actually thanks present me (hasn't happened yet, but I'm working on it <span class="text-cyan">😉</span>).
            </p>

            <div class="space-y-3">
              <p class="text-lg text-gray-300"><span class="text-cyan">💡</span> I'm all about:</p>
              <ul class="space-y-2 ml-6">
                <li *ngFor="let skill of skills" class="text-gray-400 flex items-start gap-2">
                  <span class="text-cyan mt-1">•</span>{{ skill }}
                </li>
              </ul>
            </div>

            <div class="pt-4">
              <p class="text-lg text-gray-300"><span class="text-cyan">🎓</span> Computer Engineering - 2024</p>
            </div>

            <div class="flex flex-wrap gap-4 pt-4">
              <button class="btn-primary flex items-center gap-2">
                <span>Download CV</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </button>
              <button (click)="onNavigate('contact')" class="btn-primary flex items-center gap-2">
                <span>Let's Talk</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="flex justify-center items-center" [class.opacity-0]="!isVisible" [class.translate-x-20]="!isVisible"
            [class.opacity-100]="isVisible" [class.translate-x-0]="isVisible" style="transition: all 0.7s ease 0.4s">
            <app-tech-cube></app-tech-cube>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutSectionComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();
  isVisible = false;

  skills = [
    'Building dynamic, scalable web applications.',
    'Bringing ideas to life — from concept to deployment.',
    'Solving problems before they even realize they exist.',
  ];

  ngOnInit() {
    setTimeout(() => this.isVisible = true, 100);
  }

  onNavigate(section: string) {
    this.navigate.emit(section);
  }
}
```

---

## 21. src/app/sections/projects-section/projects-section.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

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

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <section class="min-h-screen flex items-center justify-center relative px-4 sm:px-8 lg:px-16 py-20">
      <div class="max-w-7xl w-full">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan mb-8"
          [class.opacity-0]="!isVisible" [class.translate-y-10]="!isVisible"
          [class.opacity-100]="isVisible" [class.translate-y-0]="isVisible" style="transition: all 0.7s ease">
          My Recent Work
        </h2>

        <div class="flex flex-wrap justify-center gap-3 mb-12"
          [class.opacity-0]="!isVisible" [class.translate-y-10]="!isVisible"
          [class.opacity-100]="isVisible" [class.translate-y-0]="isVisible" style="transition: all 0.7s ease 0.2s">
          <button *ngFor="let filter of filters" (click)="setFilter(filter)"
            class="filter-btn" [class.active]="activeFilter === filter"
            [class.bg-cyan]="activeFilter === filter"
            [class.text-black]="activeFilter === filter"
            [class.border-cyan]="activeFilter === filter">
            {{ filter }}
          </button>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          [class.opacity-0]="!isVisible" [class.translate-y-10]="!isVisible"
          [class.opacity-100]="isVisible" [class.translate-y-0]="isVisible" style="transition: all 0.7s ease 0.4s">
          <app-project-card *ngFor="let project of filteredProjects"
            [title]="project.title" [image]="project.image" [technologies]="project.technologies"
            [codeLink]="project.codeLink" [demoLink]="project.demoLink">
          </app-project-card>
        </div>

        <div *ngIf="filteredProjects.length === 0" class="text-center py-20">
          <p class="text-gray-400 text-lg">No projects found in this category.</p>
        </div>
      </div>
    </section>
  `
})
export class ProjectsSectionComponent implements OnInit {
  isVisible = false;
  activeFilter: FilterCategory = 'All';
  filters: FilterCategory[] = ['All', 'JavaScript', 'React', 'PHP', 'Laravel', 'Others'];

  projects: Project[] = [
    { id: 1, title: 'E-Commerce System', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop',
      category: ['Laravel', 'PHP', 'JavaScript'], technologies: ['Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      codeLink: 'https://github.com', demoLink: '#' },
    { id: 2, title: 'Hospital Management System', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=450&fit=crop',
      category: ['Laravel', 'PHP', 'Others'], technologies: ['Laravel', 'MySQL', 'RESTful API', 'Multiple Guards', 'Design Patterns'],
      codeLink: 'https://github.com', demoLink: '#' },
    { id: 3, title: 'School Management System', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=450&fit=crop',
      category: ['Others', 'React'], technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'JWT', 'AutoMapper'],
      codeLink: 'https://github.com', demoLink: '#' },
    { id: 4, title: 'Company Management System', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=450&fit=crop',
      category: ['Others'], technologies: ['ASP.NET Core', 'SQL Server', 'Identity', 'AutoMapper', 'Design Patterns'],
      codeLink: 'https://github.com', demoLink: '#' },
    { id: 5, title: 'Hotel Booking System', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=450&fit=crop',
      category: ['Laravel', 'PHP'], technologies: ['Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      codeLink: 'https://github.com', demoLink: '#' },
    { id: 6, title: 'Authentication System', image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=450&fit=crop',
      category: ['Laravel', 'PHP'], technologies: ['Laravel', 'MySQL', 'Socialite', '2FA'],
      codeLink: 'https://github.com', demoLink: '#' },
  ];

  ngOnInit() {
    setTimeout(() => this.isVisible = true, 100);
  }

  setFilter(filter: FilterCategory) {
    this.activeFilter = filter;
  }

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'All') return this.projects;
    return this.projects.filter(p => p.category.includes(this.activeFilter));
  }
}
```

---

## 22. src/app/sections/contact-section/contact-section.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ContactFormComponent, SocialLinksComponent],
  template: `
    <section class="min-h-screen flex items-center justify-center relative px-4 sm:px-8 lg:px-16 py-20">
      <div class="max-w-4xl w-full">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan mb-12"
          [class.opacity-0]="!isVisible" [class.translate-y-10]="!isVisible"
          [class.opacity-100]="isVisible" [class.translate-y-0]="isVisible" style="transition: all 0.7s ease">
          Contact Me
        </h2>

        <div [class.opacity-0]="!isVisible" [class.translate-y-10]="!isVisible"
          [class.opacity-100]="isVisible" [class.translate-y-0]="isVisible" style="transition: all 0.7s ease 0.2s">
          <app-contact-form></app-contact-form>
        </div>

        <div class="mt-16" [class.opacity-0]="!isVisible" [class.translate-y-10]="!isVisible"
          [class.opacity-100]="isVisible" [class.translate-y-0]="isVisible" style="transition: all 0.7s ease 0.4s">
          <app-social-links [showLabels]="true"></app-social-links>
        </div>

        <div class="mt-12 grid sm:grid-cols-2 gap-6" [class.opacity-0]="!isVisible" [class.translate-y-10]="!isVisible"
          [class.opacity-100]="isVisible" [class.translate-y-0]="isVisible" style="transition: all 0.7s ease 0.6s">
          <div class="text-center p-6 border border-gray-800 rounded-xl hover:border-cyan/50 transition-colors duration-300">
            <p class="text-gray-400 mb-2">Email</p>
            <a href="mailto:ahmed.amr1000100@gmail.com" class="text-cyan hover:underline">ahmed.amr1000100@gmail.com</a>
          </div>
          <div class="text-center p-6 border border-gray-800 rounded-xl hover:border-cyan/50 transition-colors duration-300">
            <p class="text-gray-400 mb-2">Location</p>
            <p class="text-white">Egypt</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactSectionComponent implements OnInit {
  isVisible = false;

  ngOnInit() {
    setTimeout(() => this.isVisible = true, 100);
  }
}
```

---

## How to Run the Project

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm start
# or
ng serve
```

### 3. Open in Browser
Navigate to `http://localhost:4200`

### 4. Build for Production
```bash
npm run build
```

---

## Technologies Used

- **Angular 17** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Standalone Components** - Modern Angular architecture
