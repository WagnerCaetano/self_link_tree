import { DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Gtag } from 'angular-gtag';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { selectedLanguage } from '../dropdown/dropdown.component';
import { ModalComponent } from '../modal/modal.component';

declare var gtag: any;

export const light = {
  text: '#1c1c1c',
  bg_container: 'rgb(197, 197, 197, 0.4)',
  border_container: 'rgb(190, 190, 190)',
  card: 'rgb(176, 176, 176, 0.6)',
  hover_card: 'rgb(150, 150, 150, 0.8)',
  background:
    'linear-gradient(70deg,rgba(240, 253, 253, 1) 10%,rgba(240, 235, 235, 1) 60%)',
};

export const dark = {
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
  mode = dark;
  hover = -1;
  window = window;
  modalRef!: MdbModalRef<ModalComponent>;

  links = [
    {
      description: 'LINKS_HOME.BUILD_YOUR_SITE',
      name: 'tools',
      url: 'https://www.wagnercaetano.com/agencia',
    },
    {
      description: 'LINKS_HOME.MY_RESUME',
      name: 'person-badge',
      url: 'https://www.wagnercaetano.com/resume',
    },
    {
      description: 'Linkedin',
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/wagner-caetano/',
    },
    {
      description: 'Freelancer',
      name: 'card-text',
      url: 'https://www.freelancer.com/u/wagnercaetano01',
    },
    {
      description: 'Instagram',
      name: 'instagram',
      url: 'https://www.instagram.com/wagnercaetano.dev/',
    },
    {
      description: 'Youtube',
      name: 'youtube',
      url: 'https://www.youtube.com/@wagnercaetanodev/videos',
    },
  ];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private modalService: MdbModalService,
    private gtag: Gtag,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    translate.addLangs(['en', 'pt']);
    translate.use('en');
  }

  ngOnInit(): void {
    this.loadMode();
  }

  navigate(url: string) {
    if (url == 'modal') {
      this.modalRef = this.modalService.open(ModalComponent);
    } else {
      this.gtag.event('click_link', { url });
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
    this.modalRef = this.modalService.open(ModalComponent);
  }

  loadMode() {
    (this.document.querySelector('app-root') as HTMLElement).style.color =
      this.mode.text;
    document.body.style.backgroundImage = this.mode.background;
  }

  handleLanguage(language: selectedLanguage) {
    console.log(language);
    this.translate.use(language.name);
  }
}
