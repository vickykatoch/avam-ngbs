import { Component, OnInit } from '@angular/core';

declare var module : any;

@Component({
      moduleId: module.id,
      selector: 'grid-settings-form',
      templateUrl: 'settings-form.component.html',
      
})
export class GridSettingsFormComponent implements OnInit {
      columns : IColumnDef[] = [];
      selectedColumn : IColumnDef= null;
      constructor() { 
            this.initCollections();
            this.selectedColumn = this.createEmptyColumn();
      }

      ngOnInit() { 

      }

      private initCollections() {
            this.columns.push({ name: "side", caption : "Side" , size: 3});
            this.columns.push({ name: "term", caption : "Term" , size: 10});
            this.columns.push({ name: "bid", caption : "Bid Price" , size: 5});
      }
      private onColumnChange() {
            console.log(this.selectedColumn);
      }
      private createEmptyColumn() : IColumnDef {
            return <IColumnDef> {
                  name : '',
                  caption : '',
                  size : null
            };
      }
}


interface IColumnDef {
      name : string;
      caption : string;
      size : number;
}