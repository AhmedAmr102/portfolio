import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Desktop: vertical sidebar -->
    <div class="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
      <button *ngFor="let item of menuItems"
        (click)="onNavigate(item.id)"
        class="sidebar-icon relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
        [ngClass]="{
          'bg-cyan': activeSection === item.id,
          'text-black': activeSection === item.id,
          'shadow-cyan-glow': activeSection === item.id,
          'bg-transparent': activeSection !== item.id,
          'text-gray-400': activeSection !== item.id,
          'hover:text-cyan': activeSection !== item.id,
          'hover:bg-cyan/10': activeSection !== item.id
        }"
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
    </div>

    <!-- Mobile: bottom horizontal bar -->
    <div class="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div class="flex items-center gap-3 bg-black/60 border border-gray-800 rounded-full px-3 py-2 backdrop-blur-sm">
        <button *ngFor="let item of menuItems"
          (click)="onNavigate(item.id)"
          class="sidebar-icon w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan hover:bg-cyan/10 transition-all duration-300"
          [class.bg-cyan]="activeSection === item.id"
          [class.text-black]="activeSection === item.id"
          [class.shadow-cyan-glow]="activeSection === item.id"
          [title]="item.label">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
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
      </div>
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
