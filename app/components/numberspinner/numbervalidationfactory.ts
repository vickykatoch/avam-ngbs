import { ValidatorFn, AbstractControl, Validators  } from '@angular/forms';

export class NumberValidationFactory {
    public static validateMinValue(minValue: number) : ValidatorFn {
        return (control: AbstractControl) : {[key: string]: any}=> {
             if (NumberValidationFactory.isPresent(Validators.required(control))) return null;
             let v: number = control.value;
             return v >= minValue ? null : {'minValue': true};
        };
    }
    public static validateMaxValue(maxValue: number) : ValidatorFn {
        return (control: AbstractControl) : {[key: string]: any}=> {
             if (NumberValidationFactory.isPresent(Validators.required(control))) return null;
             let v: number = control.value;
             return v <= maxValue ? null : {'maxValue': true};
        };
    }
    // public static hasValue(control: AbstractControl): boolean {
    //     return control.value && !isBlank(control.value) ;
    // }
    private static isPresent(obj: any) : boolean {
        return obj !== undefined && obj !== null;
    }
    private static isDate(obj: any) : boolean {
        return !/Invalid|NaN/.test(new Date(obj).toString());
    }
}