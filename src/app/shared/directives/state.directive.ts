import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: string;
  @HostBinding('class') nomClass: string;
  constructor() {
  }
  ngOnChanges(): void {
    this.nomClass = this.formatClass();
  }

  private formatClass(): string {
    return `state-${this.appState.toLowerCase()}`;
  }

}

// si appState vaut OPTION => string "state-option"
// si appState vaut CANCELED => string "state-canceled"
// si appState vaut CONFIRMED => string "state-confirmed"
// Binder la propriété "class" du host element td avec mon string
