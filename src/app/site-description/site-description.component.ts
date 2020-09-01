import { Component, OnInit, Input } from '@angular/core';
import { SiteDescription } from '../Core/SiteDescription';

@Component({
  selector: 'app-site-description',
  templateUrl: './site-description.component.html',
  styleUrls: ['./site-description.component.css']
})
export class SiteDescriptionComponent implements OnInit {

  constructor() { }

  @Input()
  get Site(): SiteDescription { return this.site }
  set Site(Site: SiteDescription) { this.site = Site; }

  private site:SiteDescription;

  ngOnInit(): void {
    this.site = this.Site;
  }

}
