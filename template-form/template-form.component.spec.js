"use strict";
/* tslint:disable:no-unused-variable */
var testing_1 = require('@angular/core/testing');
var template_form_component_1 = require('./template-form.component');
describe('TemplateFormComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [template_form_component_1.TemplateFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(template_form_component_1.TemplateFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=template-form.component.spec.js.map