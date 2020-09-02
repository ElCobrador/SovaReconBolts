import { Component, OnInit } from '@angular/core';
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
