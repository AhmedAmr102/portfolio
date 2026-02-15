import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface Project {
  id: number;
  title: string;
  image: string;
  technologies: string[];
  codeLink?: string;
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  animations: [
    trigger('fadeInUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('500ms ease-out'))
    ])
  ],
  template: `
    <section class="min-h-screen flex items-center justify-center relative px-4 sm:px-8 lg:px-16 py-20">
      <div class="max-w-7xl w-full">
        <!-- Section Title -->
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan mb-12"
          [@fadeInUp]="isVisible ? 'visible' : 'hidden'">
          My Recent Work
        </h2>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          [@fadeInUp]="isVisible ? 'visible' : 'hidden'">
          <app-project-card *ngFor="let project of projects"
            [title]="project.title"
            [image]="project.image"
            [technologies]="project.technologies"
            [codeLink]="project.codeLink">
          </app-project-card>
        </div>
      </div>
    </section>
  `
})
export class ProjectsSectionComponent implements OnInit {
  isVisible = false;

  projects: Project[] = [
    {
      id: 1,
      title: 'Hospital Management System',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=450&fit=crop',
      technologies: ['Laravel', 'MySQL', 'RESTful API', 'Design Patterns'],
      codeLink: 'https://github.com/AhmedAmr102/hospital-management-system'
    },
    {
      id: 2,
      title: 'School Management System',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=450&fit=crop',
      technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'JWT'],
      codeLink: 'https://github.com/AhmedAmr102/school-management-system-'
    },
    {
      id: 3,
      title: 'GYM',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=450&fit=crop',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      codeLink: 'https://github.com/AhmedAmr102/GYM'
    },
    {
      id: 4,
      title: 'Hotel',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=450&fit=crop',
      technologies: ['Laravel', 'MySQL', 'Blade', 'JavaScript'],
      codeLink: 'https://github.com/AhmedAmr102/Hotel'
    },
    {
      id: 5,
      title: 'Ecommerce (.NET)',
      image: 'https://images.unsplash.com/photo-1556742208-999815fca738?w=800&h=450&fit=crop',
      technologies: ['ASP.NET Core', 'Entity Framework', 'SQL Server', 'Web API'],
      codeLink: 'https://github.com/AhmedAmr102/eCommerce--.NET-'
    },
    {
      id: 6,
      title: 'Ecommerce (Laravel)',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=450&fit=crop',
      technologies: ['Laravel', 'MySQL', 'Blade', 'MVC'],
      codeLink: 'https://github.com/AhmedAmr102/Ecommerc'
    },
  ];

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }
}
