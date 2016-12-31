export interface IGridState {
      isSortable : boolean;
      isFilterable : boolean;
      sortModel : any;
      filterModel : any;
      columns : IGridColumn[];
      tag: any;
}

export interface IGridColumn {
      name: string;
      caption: string;
      index: number;
      tag: any;
}