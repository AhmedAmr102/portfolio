import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="project-card relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800 group">
      <!-- Project Image -->
      <div class="aspect-video overflow-hidden">
        <img [src]="image" [alt]="title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
      </div>

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
        <h3 class="text-2xl font-bold text-cyan mb-4 text-center">{{ title }}</h3>
        
        <!-- Technologies -->
        <div class="flex flex-wrap justify-center gap-2 mb-6">
          <span *ngFor="let tech of technologies" 
            class="px-3 py-1 text-xs bg-cyan/20 text-cyan rounded-full border border-cyan/30">
            {{ tech }}
          </span>
        </div>

        <!-- Buttons -->
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
