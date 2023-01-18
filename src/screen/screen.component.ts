import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Output,
} from '@angular/core';

const light = {
  text: '#1c1c1c',
  bg_container: 'rgb(197, 197, 197, 0.8)',
  border_container: 'rgb(197, 197, 197)',
  card: 'rgb(176, 176, 176, 0.6)',
  hover_card: 'rgb(150, 150, 150, 0.4)',
  background:
    'linear-gradient(70deg,rgba(240, 253, 253, 1) 10%,rgba(240, 235, 235, 1) 60%)',
};

const dark = {
  text: '#e3e3e3',
  bg_container: 'rgb(58, 58, 58, 0.2)',
  border_container: 'rgb(58, 58, 58)',
  card: 'rgb(79, 79, 79, 0.4)',
  hover_card: 'rgba(105, 105, 105, 0.6)',
  background:
    'linear-gradient(70deg,rgba(15, 2, 2, 1) 10%,rgba(15, 20, 20, 1) 60%)',
};

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css'],
})
export class ScreenComponent {
  title = 'self_link_tree';
  mode = dark;
  hover = -1;

  links = [
    {
      description: 'Linkedin',
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/wagner-caetano/',
    },
    {
      description: 'Portfolio',
      name: 'person-badge',
      url: 'https://www.linkedin.com/in/wagner-caetano/',
    },
    {
      description: 'Hire Me',
      name: 'card-text',
      url: 'https://www.linkedin.com/in/wagner-caetano/',
    },
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.loadMode();
  }

  navigate(url: string) {
    this.document.location.href = url;
  }

  changeMode() {
    if (this.mode === dark) {
      this.mode = light;
    } else {
      this.mode = dark;
    }
    this.loadMode();
  }

  loadMode() {
    (this.document.querySelector('app-root') as HTMLElement).style.color =
      this.mode.text;
    document.body.style.backgroundImage = this.mode.background;
  }
}
