import { Component, OnInit, Input } from '@angular/core';
import { SiteDescription } from '../Core/SiteDescription';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-site-description',
  templateUrl: './site-description.component.html',
  styleUrls: ['./site-description.component.css'],
  animations: [
    trigger('ExpandTrigger', [
        state('Expanded', style ({
          'width': '60%'
        })),
        state('NotExpanded', style ({
          'width': '33.3%'
        })),
        state('Shrinked', style ({
          'width': '20%'
        })),
        transition('*=>*', [
          animate('0.2s ease-in-out')
        ])
    ])
  ]
})
export class SiteDescriptionComponent implements OnInit {

  constructor() { }

  @Input() Site: SiteDescription;

  public IsWhereToBeExpanded = 0;
  public IsWhereToLookExpanded = 0;
  public isShotResultExpanded = 0;

  private site : SiteDescription;


  ngOnInit(): void {
    this.site = this.Site;
  }

  WhereToBeClicked() {
    if(this.IsWhereToBeExpanded == 1){
      this.IsWhereToBeExpanded = 0;
      this.IsWhereToLookExpanded = 0;
      this.isShotResultExpanded = 0;
    }
    else {
      if(this.IsWhereToBeExpanded == -1){
        this.IsWhereToBeExpanded = 1;
      this.IsWhereToLookExpanded = -1;
      this.isShotResultExpanded = -1;
      }
      else {
      this.IsWhereToBeExpanded = 1;
      this.IsWhereToLookExpanded = -1;
      this.isShotResultExpanded = -1;
      }
    }

  }

  WhereToLookClicked() {
    if(this.IsWhereToLookExpanded == 1){
      this.IsWhereToBeExpanded = 0;
      this.IsWhereToLookExpanded = 0;
      this.isShotResultExpanded = 0;
    }
    else {
      if(this.IsWhereToLookExpanded == -1){
        this.IsWhereToBeExpanded = -1;
        this.IsWhereToLookExpanded = 1;
        this.isShotResultExpanded = -1;
      }
      else {
        this.IsWhereToBeExpanded = -1;
        this.IsWhereToLookExpanded = 1;
        this.isShotResultExpanded = -1;
      }
    }
  }

  ShotResultClicked() {
    if(this.isShotResultExpanded == 1){
      this.IsWhereToBeExpanded = 0;
      this.IsWhereToLookExpanded = 0;
      this.isShotResultExpanded = 0;
    }
    else {
      if(this.isShotResultExpanded == -1){
        this.IsWhereToBeExpanded = -1;
        this.IsWhereToLookExpanded = -1;
        this.isShotResultExpanded = 1;
      }
      else {
        this.IsWhereToBeExpanded = -1;
        this.IsWhereToLookExpanded = -1;
        this.isShotResultExpanded = 1;
      }
    }
  }

}
