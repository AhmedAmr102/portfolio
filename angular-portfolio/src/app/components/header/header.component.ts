import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div class="flex items-center justify-between max-w-7xl mx-auto">
        <!-- Logo -->
        <button (click)="onNavigate('home')" class="cursor-pointer">
          <svg width="60" height="40" viewBox="0 0 200 100">
            <defs>
              <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f0ff" />
                <stop offset="100%" stopColor="#00a0ff" />
              </linearGradient>
            </defs>
            <text x="30" y="75" fill="none" stroke="url(#cyanGradient)" strokeWidth="2" fontSize="28"
              fontFamily="'Poppins', sans-serif">A</text>
            <text x="95" y="75" fill="none" stroke="url(#cyanGradient)" strokeWidth="2" fontSize="28"
              fontFamily="'Poppins', sans-serif">G</text>
          </svg>
        </button>

        <!-- Social Icons - Desktop -->
        <div class="hidden md:flex items-center gap-4">
          <a *ngFor="let link of socialLinks" [href]="link.href" target="_blank" rel="noopener noreferrer"
            class="text-gray-400 hover:text-cyan transition-colors duration-300" [attr.aria-label]="link.label">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              [innerHTML]="link.safeIcon">
            </svg>
          </a>
          
          <!-- Menu Button -->
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

        <!-- Mobile Menu Button -->
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

      <!-- Mobile Menu -->
      <div *ngIf="mobileMenuOpen" class="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-800 md:hidden">
        <nav class="flex flex-col p-6">
          <button *ngFor="let item of navItems" (click)="onNavigate(item.id); toggleMobileMenu()"
            class="text-left py-3 text-gray-400 hover:text-cyan transition-colors duration-300 border-b border-gray-800 last:border-0">
            {{ item.label }}
          </button>
          
          <!-- Social Links in Mobile Menu -->
          <div class="flex items-center gap-4 mt-6 pt-6 border-t border-gray-800">
            <a *ngFor="let link of socialLinks" [href]="link.href" target="_blank" rel="noopener noreferrer"
              class="text-gray-400 hover:text-cyan transition-colors duration-300" [attr.aria-label]="link.label">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                [innerHTML]="link.safeIcon">
              </svg>
            </a>
          </div>
        </nav>
      </div>
      
      <!-- Desktop Menu (dropdown) -->
      <div *ngIf="mobileMenuOpen" class="absolute top-full right-6 bg-black/95 backdrop-blur-sm border border-gray-800 rounded-lg hidden md:block">
        <nav class="flex flex-col p-4">
          <button *ngFor="let item of navItems" (click)="onNavigate(item.id); toggleMobileMenu()"
            class="text-left py-2 px-2 text-gray-400 hover:text-cyan transition-colors duration-300 border-b border-gray-800 last:border-0">
            {{ item.label }}
          </button>
        </nav>
      </div>
    </header>
  `
})
export class HeaderComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();

  mobileMenuOpen = false;

  navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  socialLinks: { href: string; label: string; icon: string; safeIcon?: SafeHtml }[] = [
    {
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      icon: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>'
    },
    {
      href: 'https://github.com',
      label: 'GitHub',
      icon: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>'
    },
    {
      href: 'mailto:ahmed.amr1000100&#64;gmail.com',
      label: 'Email',
      icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>'
    },
    {
      href: 'tel:+201000000000',
      label: 'Phone',
      icon: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>'
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.socialLinks.forEach(link => {
      link.safeIcon = this.sanitizer.bypassSecurityTrustHtml(link.icon);
    });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  onNavigate(section: string) {
    this.navigate.emit(section);
  }
}
