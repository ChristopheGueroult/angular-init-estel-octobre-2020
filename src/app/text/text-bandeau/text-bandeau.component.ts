import { Component, OnInit, ViewEncapsulation } from '@angular/core';
/**
 * component used for texts in .bandeau in all pages
 * encapsulation à None
 */
@Component({
  selector: 'app-text-bandeau',
  templateUrl: './text-bandeau.component.html',
  styleUrls: ['./text-bandeau.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextBandeauComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
