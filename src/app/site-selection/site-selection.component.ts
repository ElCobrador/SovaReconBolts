import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../Core/Site';

@Component({
  selector: 'app-site-selection',
  templateUrl: './site-selection.component.html',
  styleUrls: ['./site-selection.component.css']
})
export class SiteSelectionComponent implements OnInit {

  constructor() { }

  @Input() Sites: Site[];

  ngOnInit(): void {
  }

}
