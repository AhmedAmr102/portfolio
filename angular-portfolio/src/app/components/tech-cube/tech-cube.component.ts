import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-cube',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cube-container" style="perspective: 1000px">
      <div class="cube" [style.transform]="'rotateX(' + rotation.x + 'deg) rotateY(' + rotation.y + 'deg)'"
        style="width: 200px; height: 200px; position: relative; transform-style: preserve-3d; transition: transform 0.1s linear">
        
        <div *ngFor="let face of faces; let i = index" class="cube-face"
          [style.transform]="face.transform"
          [style.color]="technologies[i].color">
          <div class="text-center">
            <div class="text-5xl mb-2">{{ technologies[i].icon }}</div>
            <div class="text-sm text-white">{{ technologies[i].name }}</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .cube-face {
      position: absolute;
      width: 200px;
      height: 200px;
      border: 2px solid #00f0ff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      font-weight: bold;
      background: rgba(0, 240, 255, 0.1);
      backface-visibility: visible;
    }
  `]
})
export class TechCubeComponent implements OnInit, OnDestroy {
  rotation = { x: 0, y: 0 };
  private intervalId: any;

  technologies = [
    { name: 'Angular', icon: 'A', color: '#dd0031' },
    { name: 'Laravel', icon: 'L', color: '#ff2d20' },
    { name: '.NET', icon: '.NET', color: '#512bd4' },
    { name: 'JS', icon: 'JS', color: '#f7df1e' },
    { name: 'SQL', icon: 'SQL', color: '#00758f' },
    { name: 'Git', icon: 'Git', color: '#f05032' },
  ];

  faces = [
    { transform: 'rotateY(0deg) translateZ(100px)' },
    { transform: 'rotateY(180deg) translateZ(100px)' },
    { transform: 'rotateY(90deg) translateZ(100px)' },
    { transform: 'rotateY(-90deg) translateZ(100px)' },
    { transform: 'rotateX(90deg) translateZ(100px)' },
    { transform: 'rotateX(-90deg) translateZ(100px)' },
  ];

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.rotation.x += 0.5;
      this.rotation.y += 0.5;
    }, 50);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
