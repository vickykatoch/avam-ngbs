import { Component,Output,Input, EventEmitter, OnChanges, SimpleChanges, OnInit , forwardRef} from '@angular/core';
import {ValidatorFn, FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import {NumberValidationFactory} from './numbervalidationfactory';
import { INumberFormatter, NumberFormatterResolver } from './numberformatter';

const TRSY_VALUE_TYPE : string = "TREASURY";
const DECIMAL_VALUE_TYPE : string = "DECIMAL";




@Component({
    moduleId: module.id,
    selector: 'falcon-number-spinner',
    templateUrl: 'numberspinner.component.html',
    styleUrls: ['numberspinner.component.css'],
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NumberSpinnerComponent), multi: true } ,
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => NumberSpinnerComponent), multi: true }      
    ]
})
export class NumberSpinnerComponent implements OnInit, ControlValueAccessor, OnChanges  {
    @Input() step: number;
    @Input('value') _value: string;
    @Input() format: string = DECIMAL_VALUE_TYPE;    
    @Input() decimalPlaces: number = 0;
    @Input() isReadonly: boolean;
    @Output() moveUp : EventEmitter<any> = new  EventEmitter<any>();
    @Output() moveDown : EventEmitter<any> = new  EventEmitter<any>();

    @Input() minValue : number;
    @Input() maxValue : number;
    
    valueFormatter: INumberFormatter = NumberFormatterResolver.resolve(DECIMAL_VALUE_TYPE);
    innerValue: number;
    propagateChange = (_: any) => {};
    minValidatorFn : ValidatorFn;
    maxValidatorFn : ValidatorFn;

    constructor() { }

    // *************************NG-LIFECYCLE HOOKS- STARTS HERE********************************/
    ngOnInit() : void {
        if(this.innerValue) {
            this._value = this.valueFormatter.format(this.innerValue, this.decimalPlaces);
        } else {
            this._value = undefined;
        }
    }
    ngOnChanges(changes: SimpleChanges) : void {
        if (changes["format"]) {
            this.valueFormatter = NumberFormatterResolver.resolve(changes["format"].currentValue);
        }
        if(changes["step"]) {
            this.step = Number.parseFloat(changes["step"].currentValue);
            if(!this.step) {
                this.step = 0;
            }
        }
        if (changes["minValue"]) {
            this.minValidatorFn = NumberValidationFactory.validateMinValue(this.minValue);
        }
        if (changes["maxValue"]) {
            this.maxValidatorFn = NumberValidationFactory.validateMaxValue(this.maxValue);
        }
    }

    // *************************ControlValueAccessor IMPLEMENTATION- STARTS HERE********************************/
    get value() {
        return this._value;
    }
    set value(val : any) {
        if(val) {
            this.innerValue = Number.parseFloat(val);
            this._value = val;
        } else {
            this.innerValue = undefined;
            this._value = '';
        }
        this.propagateChange(val);
    }
    writeValue(val: any) {
        if(val) {
            this.innerValue = Number.parseFloat(val);
            this._value = this.valueFormatter.format(this.innerValue, this.decimalPlaces);
        } else {
            this.innerValue = undefined;
            this._value = '';
        }
    }
    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }
    registerOnTouched() {

     }
    // *************************ControlValueAccessor IMPLEMENTATION- ENDS HERE********************************/

    // *************************NG-LIFECYCLE HOOKS- ENDS HERE********************************/

    // *************************EVENT HANDLERS STARTS HERE********************************/
    updateModel(evt: any) : void {
        if(this.innerValue) {
            this._value = this.valueFormatter.format(this.innerValue, this.decimalPlaces);
        }
    }
    onMoveUp(evt: any) : void {
        if(this.moveUp.observers && this.moveUp.observers.length>0) {
            this.moveUp.emit('up');
        } else {
            if(this.step) {
                this.innerValue = this.innerValue + this.step;
                this._value = this.valueFormatter.format(this.innerValue, this.decimalPlaces);
            }
        }        
    }
    onMoveDown(evt: any) : void {
        if(this.moveDown.observers && this.moveDown.observers.length>0) {
            this.moveDown.emit('up');
        } else {
            if(this.step) {
                this.innerValue = this.innerValue - this.step;
                this._value = this.valueFormatter.format(this.innerValue, this.decimalPlaces);
            }
        }    
    }
    onValueChange(evt: any) : void {
        if(this._value && this._value.length>0) {
            this.innerValue = Number.parseFloat(this._value);
            this._value = this.valueFormatter.format(this.innerValue, this.decimalPlaces);
        } else {
            this._value = '';
        }
    }
    onKeyPress(evt: any) : void {
        if(evt.keyCode!==46 && (evt.keyCode< 48 || evt.keyCode >57)) {
            evt.returnValue = false;
        }
    }
    // *************************EVENT HANDLERS ENDS HERE**********************************/

    validate(c: FormControl) : any {
        let result : any = null;
        if(this.minValidatorFn) {
            let n = this.minValidatorFn(c);
            if(n) { 
                result = { 'minValue' : true };
            }
        } 
        if(this.maxValidatorFn) {
            let m = this.maxValidatorFn(c);
            if(m) { 
                result = Object.assign({}, result, { 'maxValue' : true })
            }
        }
        return result;
    }
}