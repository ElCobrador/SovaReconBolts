import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Site } from '../Core/Site';
import { ShotDescription } from '../Core/ShotDescription';
import { SiteDescription } from '../Core/SiteDescription';
import { ValorantMap } from '../Core/ValorantMap';
import { ValorantMapInformation } from '../Constants';

@Component({
  selector: 'app-map-selection',
  templateUrl: './map-selection.component.html',
  styleUrls: ['./map-selection.component.css']
})

export class MapSelectionComponent implements OnInit {

  public Maps: Array<ValorantMap>;

  constructor() {
    this.Maps = ValorantMapInformation;
  }

  ngOnInit(): void {
  }

}
