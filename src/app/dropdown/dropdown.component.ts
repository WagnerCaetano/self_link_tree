import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { dark } from '../screen/screen.component';

export interface selectedLanguage {
  image: string;
  language: string;
  name: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  
  public dark = dark;

  BRAZIL: selectedLanguage = {image: "https://wagnercaetano.com/wp-content/uploads/data/brazil.png", language: "PT-BR", name: "pt"};
  USA: selectedLanguage = {image: "https://wagnercaetano.com/wp-content/uploads/data/united-states.png", language: "EN-US", name: "en"};

  @Input()
  public mode: any;

  @Output()
  public languageEmitter: EventEmitter<any> = new EventEmitter();

  selectedLanguage: selectedLanguage = this.USA;

  constructor() { }

  ngOnInit() {
  }

  changeLanguage(selected: selectedLanguage) {
    this.selectedLanguage = selected;
    this.languageEmitter.emit(selected)

  }

}
