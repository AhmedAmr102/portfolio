import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface SocialLink {
  href: string;
  label: string;
  color: string;
  icon: string;
  sanitizedIcon?: SafeHtml;
}

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center justify-center gap-4 flex-wrap">
      <a *ngFor="let link of socialLinks" [href]="link.href" target="_blank" rel="noopener noreferrer"
        class="social-icon group relative"
        [style.--hover-color]="link.color">
        
        <!-- Tooltip -->
        <span *ngIf="showLabels" 
          class="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded text-xs font-semibold opacity-0 invisible transition-all duration-300 whitespace-nowrap group-hover:opacity-100 group-hover:visible group-hover:-top-14"
          [style.background-color]="link.color"
          [style.color]="'black'">
          {{ link.label }}
        </span>
        
        <!-- Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          [innerHTML]="link.sanitizedIcon">
        </svg>
      </a>
    </div>
  `
})
export class SocialLinksComponent implements OnInit {
  @Input() showLabels = true;

  socialLinks: SocialLink[] = [
    {
      href: 'https://www.linkedin.com/in/ahmed-amr-89867923b',
      label: 'LinkedIn',
      color: '#0077b5',
      icon: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>'
    },
    {
      href: 'https://github.com/AhmedAmr102',
      label: 'GitHub',
      color: '#333',
      icon: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>'
    },
    {
      href: 'mailto:ahmed.amr1000100&#64;gmail.com',
      label: 'Gmail',
      color: '#ea4335',
      icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>'
    },
    {
      href: 'https://wa.me/201000000000',
      label: 'WhatsApp',
      color: '#25d366',
      icon: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>'
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.socialLinks.forEach(link => {
      link.sanitizedIcon = this.sanitizer.bypassSecurityTrustHtml(link.icon);
    });
  }
}
