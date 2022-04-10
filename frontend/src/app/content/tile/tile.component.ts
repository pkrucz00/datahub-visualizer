import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  constructor() { }

  @Input() chartLabels: string[] =[];
  @Input() chartDataset: any;

  ngOnInit(): void {
  }

}