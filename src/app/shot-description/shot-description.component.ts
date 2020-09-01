import { Component, OnInit, Input } from '@angular/core';
import { ShotDescription } from '../Core/ShotDescription';

@Component({
  selector: 'app-shot-description',
  templateUrl: './shot-description.component.html',
  styleUrls: ['./shot-description.component.css']
})
export class ShotDescriptionComponent implements OnInit {

  constructor() { }

  @Input() Shot: ShotDescription;

  private desc: string;

  ngOnInit(): void {
    this.desc = this.Shot.Description;
  }

}
