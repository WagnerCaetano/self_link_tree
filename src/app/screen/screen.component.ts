import { DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
} from '@angular/core';
import { VanillaTiltSettings } from 'angular-tilt/lib/angular-tilt-settings.model';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';

const light = {
  text: '#1c1c1c',
  bg_container: 'rgb(197, 197, 197, 0.4)',
  border_container: 'rgb(190, 190, 190)',
  card: 'rgb(176, 176, 176, 0.6)',
  hover_card: 'rgb(150, 150, 150, 0.8)',
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
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent {
  title = 'self_link_tree';
  mode = light;
  hover = -1;
  tiltSettings: VanillaTiltSettings = {transition: true}
  modalRef!: MdbModalRef<ModalComponent>;

  links = [
    {
      description: 'Linkedin',
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/wagner-caetano/',
    },
    {
      description: 'Portfolio',
      name: 'person-badge',
      url: 'modal',
    },
    {
      description: 'Hire Me',
      name: 'card-text',
      url: 'https://www.freelancer.com/u/wagnercaetano01',
    },
  ];

  constructor(@Inject(DOCUMENT) private document: Document, private modalService: MdbModalService) {}

  ngOnInit(): void {
    this.loadMode();
  }

  navigate(url: string) {
    if(url == 'modal') {
      this.modalRef = this.modalService.open(ModalComponent);
    } else {
      this.document.location.href = url;
    }
  }

  changeMode() {
    if (this.mode === dark) {
      this.mode = light;
    } else {
      this.mode = dark;
    }
    this.loadMode();
  }

  openModal() {
    this.modalRef = this.modalService.open(ModalComponent)
  }

  loadMode() {
    (this.document.querySelector('app-root') as HTMLElement).style.color =
      this.mode.text;
    document.body.style.backgroundImage = this.mode.background;
  }
}