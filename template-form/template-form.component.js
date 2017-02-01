"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TemplateFormComponent = (function () {
    // @ViewChild('orderNumber') orderNumberField;
    // @ViewChild('orderTotal') orderTotalField; 
    function TemplateFormComponent() {
        this.order = this.createNewOrder();
    }
    TemplateFormComponent.prototype.ngOnInit = function () {
        // this.orderNumberField.control.valueChanges.subscribe((val: any)=> {
        //   if(val) {
        //     this.orderTotalField.control.updateValueAndValidity();
        //     (<AbstractControl>this.orderTotalField.control).markAsTouched();
        //   }
        // });
        // console.log(this.orderNumberField.value);
    };
    TemplateFormComponent.prototype.onSubmit = function (form) {
    };
    TemplateFormComponent.prototype.onReset = function (form) {
        form.reset();
        this.order = this.createNewOrder();
    };
    TemplateFormComponent.prototype.createNewOrder = function () {
        return {
            orderNumber: "",
            orderDate: new Date(),
            orderTotal: undefined
        };
    };
    TemplateFormComponent = __decorate([
        core_1.Component({
            selector: 'app-template-form',
            templateUrl: './template-form.component.html',
            styleUrls: ['./template-form.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], TemplateFormComponent);
    return TemplateFormComponent;
}());
exports.TemplateFormComponent = TemplateFormComponent;
//# sourceMappingURL=template-form.component.js.map