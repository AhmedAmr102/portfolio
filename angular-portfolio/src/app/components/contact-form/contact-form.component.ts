import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const EMAILJS_CONFIG = {
  serviceId: 'service_dkmvg67',
  templateId: 'template_sgsxk8w',
  publicKey: '5AOXGNAiYIhilihxH'
} as const;

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)" class="space-y-6">
      <div class="grid md:grid-cols-2 gap-6">
        <div class="input-enter-left" style="animation-delay: 0ms;">
          <input type="text" name="name" [(ngModel)]="formData.name"
            placeholder="YOUR NAME" required class="form-input">
        </div>
        <div class="input-enter-right" style="animation-delay: 80ms;">
          <input type="email" name="email" [(ngModel)]="formData.email"
            placeholder="YOUR EMAIL" required class="form-input">
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="input-enter-left" style="animation-delay: 160ms;">
          <input type="tel" name="phone" [(ngModel)]="formData.phone"
            placeholder="YOUR PHONE (OPTIONAL)" class="form-input">
        </div>
        <div class="input-enter-right" style="animation-delay: 240ms;">
          <input type="text" name="subject" [(ngModel)]="formData.subject"
            placeholder="YOUR SUBJECT" required class="form-input">
        </div>
      </div>

      <div class="input-enter-right" style="animation-delay: 320ms;">
        <textarea name="message" [(ngModel)]="formData.message"
          placeholder="YOUR MESSAGE" required rows="6" class="form-input resize-none"></textarea>
      </div>

      <button type="submit" [disabled]="isSubmitting || contactForm.invalid"
        class="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed input-enter-left"
        style="animation-delay: 420ms;">
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

      <p *ngIf="submitError" class="text-red-400 text-sm input-enter-right" style="animation-delay: 480ms;">
        {{ submitError }}
      </p>
    </form>
  `,
  styles: [`
    .input-enter-left,
    .input-enter-right {
      animation-duration: 760ms;
      animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
      animation-fill-mode: both;
      will-change: transform, opacity;
    }

    .input-enter-left {
      animation-name: inputEnterLeft;
    }

    .input-enter-right {
      animation-name: inputEnterRight;
    }

    @keyframes inputEnterLeft {
      from {
        opacity: 0;
        transform: translateX(-56px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes inputEnterRight {
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
export class ContactFormComponent {
  formData: ContactFormData = this.createEmptyFormData();
  
  isSubmitting = false;
  submitted = false;
  submitError = '';

  async onSubmit(form: NgForm) {
    if (form.invalid || this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.submitError = '';
    this.submitted = false;

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        this.getTemplateParams(),
        EMAILJS_CONFIG.publicKey
      );

      this.submitted = true;
      this.formData = this.createEmptyFormData();
      form.resetForm(this.formData);

      setTimeout(() => {
        this.submitted = false;
      }, 3000);
    } catch (error) {
      console.error('EmailJS send failed:', error);
      this.submitError = 'Could not send your message right now. Please try again.';
    } finally {
      this.isSubmitting = false;
    }
  }

  private createEmptyFormData(): ContactFormData {
    return {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }

  private getTemplateParams() {
    const phoneValue = this.formData.phone.trim() || 'Not provided';
    const formattedMessage = [
      `Subject: ${this.formData.subject}`,
      `Phone: ${phoneValue}`,
      '',
      this.formData.message
    ].join('\n');

    return {
      from_name: this.formData.name,
      from_email: this.formData.email,
      phone: this.formData.phone.trim(),
      phone_or_na: phoneValue,
      subject: this.formData.subject,
      message: formattedMessage,
      original_message: this.formData.message,
      reply_to: this.formData.email,
      name: this.formData.name,
      email: this.formData.email
    };
  }
}
