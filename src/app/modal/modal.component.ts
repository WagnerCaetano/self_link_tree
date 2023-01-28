import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component(
  { selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  title = "WIP";
  body = "Stil working on this part";

  constructor(public modalRef: MdbModalRef<ModalComponent>) {}
}