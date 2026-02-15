import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ContactFormComponent, SocialLinksComponent],
  template: `
    <section class="min-h-screen flex items-center justify-center relative px-4 sm:px-8 lg:px-16 py-20"
      [class.contact-loaded]="isVisible">
      <div class="max-w-4xl w-full">
        <!-- Section Title -->
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan mb-12 contact-enter-left" style="animation-delay: 80ms;">
          Contact Me
        </h2>

        <!-- Contact Form -->
        <div class="contact-enter-right" style="animation-delay: 200ms;">
          <app-contact-form></app-contact-form>
        </div>

        <!-- Social Links -->
        <div class="mt-16 contact-enter-left" style="animation-delay: 340ms;">
          <app-social-links [showLabels]="true"></app-social-links>
        </div>

        <!-- Contact Info -->
        <div class="mt-12 grid sm:grid-cols-2 gap-6">
          <div class="text-center p-6 border border-gray-800 rounded-xl hover:border-cyan/50 transition-colors duration-300 contact-enter-left" style="animation-delay: 440ms;">
            <p class="text-gray-400 mb-2">Email</p>
            <a href="mailto:ahmed.amr1000100&#64;gmail.com" class="text-cyan hover:underline">
              ahmed.amr1000100&#64;gmail.com
            </a>
          </div>
          <div class="text-center p-6 border border-gray-800 rounded-xl hover:border-cyan/50 transition-colors duration-300 contact-enter-right" style="animation-delay: 520ms;">
            <p class="text-gray-400 mb-2">Location</p>
            <p class="text-white">Egypt</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-enter-left,
    .contact-enter-right {
      opacity: 0;
      animation-duration: 760ms;
      animation-fill-mode: both;
      animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
      will-change: transform, opacity;
    }

    .contact-loaded .contact-enter-left {
      animation-name: contactSlideInLeft;
    }

    .contact-loaded .contact-enter-right {
      animation-name: contactSlideInRight;
    }

    @keyframes contactSlideInLeft {
      from {
        opacity: 0;
        transform: translateX(-56px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes contactSlideInRight {
      from {
        opacity: 0;
        transform: translateX(56px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `]
})
export class ContactSectionComponent implements OnInit {
  isVisible = false;

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }
}
