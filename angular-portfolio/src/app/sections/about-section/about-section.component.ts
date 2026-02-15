import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechCubeComponent } from '../../components/tech-cube/tech-cube.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, TechCubeComponent],
  animations: [
    trigger('fadeInUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('500ms ease-out'))
    ]),
    trigger('fadeInLeft', [
      state('hidden', style({ opacity: 0, transform: 'translateX(-30px)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', animate('500ms ease-out'))
    ]),
    trigger('fadeInRight', [
      state('hidden', style({ opacity: 0, transform: 'translateX(30px)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', animate('500ms ease-out'))
    ])
  ],
  template: `
    <section class="min-h-screen flex items-center justify-center relative px-4 sm:px-8 lg:px-16 py-20">
      <div class="max-w-6xl w-full">
        <!-- Section Title -->
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan mb-12"
          [@fadeInUp]="isVisible ? 'visible' : 'hidden'">
          About Me
        </h2>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="space-y-6" [@fadeInLeft]="isVisible ? 'visible' : 'hidden'">
            <p class="text-lg text-gray-300 leading-relaxed">
              <span class="text-cyan">👋</span> Hey there, internet traveler!
            </p>

            <p class="text-lg text-gray-300 leading-relaxed">
              I'm <span class="text-cyan font-semibold">Ahmed Amr Gomaa</span> — a 
              <span class="text-cyan font-semibold">Full Stack Developer</span> from 
              <span class="text-cyan">Egypt</span> who loves turning caffeine, creativity, and
              clean code into smooth, high-performing web experiences.
            </p>

            <p class="text-lg text-gray-300 leading-relaxed">
              Over the years, I've built diverse web projects 
              <span class="text-cyan">🚀</span>, from full-scale applications to
              sleek, tailored solutions that make both clients and servers happy.
            </p>

            <p class="text-lg text-gray-300 leading-relaxed">
              My goal? To write code so clean that future me actually thanks present me (hasn't
              happened yet, but I'm working on it <span class="text-cyan">😉</span>).
            </p>

            <div class="space-y-3">
              <p class="text-lg text-gray-300">
                <span class="text-cyan">💡</span> I'm all about:
              </p>
              <ul class="space-y-2 ml-6">
                <li *ngFor="let skill of skills" class="text-gray-400 flex items-start gap-2">
                  <span class="text-cyan mt-1">•</span>
                  {{ skill }}
                </li>
              </ul>
            </div>

            <!-- Education -->
            <div class="pt-4">
              <p class="text-lg text-gray-300">
                <span class="text-cyan">🎓</span> Computer Engineering - 2024
              </p>
            </div>

            <!-- Buttons -->
            <div class="flex flex-wrap gap-4 pt-4">
              <a href="https://drive.google.com/file/d/1whL2kKMxkvZ4u5Y1LltuRJTako_b77MS/view?usp=sharing"
                target="_blank" rel="noopener noreferrer"
                class="btn-primary flex items-center gap-2">
                <span>Download CV</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
              <button (click)="onNavigate('contact')" class="btn-primary flex items-center gap-2">
                <span>Let's Talk</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Right Content - 3D Cube -->
          <div class="flex justify-center items-center" [@fadeInRight]="isVisible ? 'visible' : 'hidden'">
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
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }

  onNavigate(section: string) {
    this.navigate.emit(section);
  }
}
