import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeWriterComponent } from '../../components/type-writer/type-writer.component';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [CommonModule, TypeWriterComponent],
  template: `
    <section class="min-h-screen flex items-center justify-center relative px-4 sm:px-8 lg:px-16"
      [class.home-loaded]="isLoaded">
      <div class="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-6">
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold home-enter-left" style="animation-delay: 120ms;">
            <span class="text-white">Hi,</span><br>
            <span class="text-white">I'm </span>
            <span class="text-cyan">Ahmed</span>
            <span class="text-white"> Amr</span>
          </h1>

          <h2 class="text-2xl sm:text-3xl lg:text-4xl home-enter-left" style="animation-delay: 260ms;">
            <span class="text-white">I'm a </span>
            <app-type-writer [texts]="titles" [typingSpeed]="80" [deletingSpeed]="40" [pauseDuration]="1500"></app-type-writer>
          </h2>

          <div class="pt-4 home-enter-left" style="animation-delay: 400ms;">
            <button (click)="onNavigate('contact')" class="btn-primary text-lg">
              Let's Talk
            </button>
          </div>
        </div>

        <!-- Right Content - Floating Code Symbol -->
        <div class="hidden lg:flex justify-center items-center home-enter-right" style="animation-delay: 240ms;">
          <div class="relative">
            <!-- Main Code Symbol -->
            <div class="floating text-cyan glow-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>

            <!-- Floating Squares -->
            <div class="absolute -top-10 -right-10 w-16 h-16 border-2 border-cyan/50 rounded-lg animate-pulse"></div>
            <div class="absolute top-20 -right-20 w-12 h-12 border-2 border-cyan/30 rounded-lg animate-pulse" 
              style="animation-delay: 0.5s"></div>
            <div class="absolute -bottom-10 right-10 w-20 h-20 border-2 border-cyan/40 rounded-lg animate-pulse"
              style="animation-delay: 1s"></div>
            <div class="absolute bottom-20 -left-10 w-14 h-14 border-2 border-cyan/35 rounded-lg animate-pulse"
              style="animation-delay: 1.5s"></div>

            <!-- Glow Effect -->
            <div class="absolute inset-0 bg-cyan/10 blur-3xl rounded-full -z-10"></div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-cyan/50 rounded-full flex justify-center pt-2">
          <div class="w-1 h-2 bg-cyan rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .home-enter-left,
    .home-enter-right {
      opacity: 0;
      animation-duration: 780ms;
      animation-fill-mode: both;
      animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
      will-change: transform, opacity;
    }

    .home-loaded .home-enter-left {
      animation-name: homeSlideInLeft;
    }

    .home-loaded .home-enter-right {
      animation-name: homeSlideInRight;
    }

    @keyframes homeSlideInLeft {
      from {
        opacity: 0;
        transform: translateX(-64px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes homeSlideInRight {
      from {
        opacity: 0;
        transform: translateX(64px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `]
})
export class HomeSectionComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();

  isLoaded = false;

  titles = [
    'Full Stack Developer',
    '.NET Developer',
    'Laravel Developer',
    'Backend Developer',
  ];

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }

  onNavigate(section: string) {
    this.navigate.emit(section);
  }
}
