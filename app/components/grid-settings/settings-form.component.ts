import { Component, OnInit } from '@angular/core';

declare var module : any;

@Component({
      moduleId: module.id,
      selector: 'grid-settings-form',
      templateUrl: 'settings-form.component.html'
})
export class GridSettingsFormComponent implements OnInit {
      constructor() { }

      ngOnInit() { }
}
