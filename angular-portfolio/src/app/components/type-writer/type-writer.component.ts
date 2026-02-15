import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-type-writer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="typing-cursor text-cyan">{{ currentText }}</span>
  `
})
export class TypeWriterComponent implements OnInit, OnDestroy {
  @Input() texts: string[] = [];
  @Input() typingSpeed = 100;
  @Input() deletingSpeed = 50;
  @Input() pauseDuration = 2000;

  currentText = '';
  private currentTextIndex = 0;
  private isTyping = true;
  private isPaused = false;
  private timer: any;

  ngOnInit() {
    this.typeWriter();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  private typeWriter() {
    const targetText = this.texts[this.currentTextIndex];

    if (this.isPaused) {
      this.timer = setTimeout(() => {
        this.isPaused = false;
        this.isTyping = false;
        this.typeWriter();
      }, this.pauseDuration);
      return;
    }

    if (this.isTyping) {
      if (this.currentText.length < targetText.length) {
        this.timer = setTimeout(() => {
          this.currentText = targetText.slice(0, this.currentText.length + 1);
          this.typeWriter();
        }, this.typingSpeed);
      } else {
        this.isPaused = true;
        this.typeWriter();
      }
    } else {
      if (this.currentText.length > 0) {
        this.timer = setTimeout(() => {
          this.currentText = this.currentText.slice(0, -1);
          this.typeWriter();
        }, this.deletingSpeed);
      } else {
        this.isTyping = true;
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
        this.typeWriter();
      }
    }
  }
}
