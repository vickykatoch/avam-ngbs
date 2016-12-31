import { Component, OnInit } from '@angular/core';

declare var module: any;

@Component({
      moduleId: module.id,
      selector: 'avam-grid',
      templateUrl: 'grid.component.html',
      styleUrls: ['grid.component.css']
})
export class GridComponent implements OnInit {
      

      constructor() { }
      ngOnInit() { }
}