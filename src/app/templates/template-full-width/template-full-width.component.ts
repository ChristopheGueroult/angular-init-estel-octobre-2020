import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss']
})
export class TemplateFullWidthComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() secondaryColor: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
