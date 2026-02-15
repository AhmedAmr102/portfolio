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
              fontFamily="'Poppins', sans-serif" class="loading-letter">
              A
            </text>
            <text x="95" y="75" fill="none" stroke="url(#cyanGradient)" strokeWidth="3" fontSize="70"
              fontFamily="'Poppins', sans-serif" class="loading-letter" style="animation-delay: 0.5s">
              G
            </text>
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
      to {
        stroke-dashoffset: 0;
      }
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
