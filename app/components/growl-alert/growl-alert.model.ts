

export interface IGrowlAlertOptions {
      life: number;
      sticky?: boolean;
      api?: IGrowlAlertApi
}
export interface IGrowlAlertApi {
      success(message: string, title?: string, sticky?: boolean, life?: number) : void;
      info(message: string, title?: string,sticky?: boolean, life?: number) : void;
      warn(message: string, title?: string,sticky?: boolean, life?: number) : void;
      error(message: string, title?: string,sticky?: boolean, life?: number) : void;
}