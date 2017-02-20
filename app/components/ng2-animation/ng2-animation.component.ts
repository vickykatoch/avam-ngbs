import { Component, OnInit , trigger, state, style, animate, transition, keyframes} from '@angular/core';

@Component({
      moduleId: module.id,
      selector: 'ng2-anim',
      templateUrl : 'ng2-animation.component.html',
      styleUrls : ['ng2-animation.component.scss'],
      animations : [
            trigger('iSetsPupup', [
                  state('hidden', style({
                        opacity : 0,
                        zIndex : -100
                  })),
                  state('visible', style({
                        opacity : 1,
                        zIndex : 100
                  })),
                  transition('hidden => visible', [
                        style({ opacity : 0, transform : 'translateX(200px)'}),
                        animate('500ms ease-in')
                        ]),
                  transition('visible => hidden', animate('500ms ease-out'))
            ])
      ]
})
export class Ng2AnimationComponent implements OnInit {
      popupState : string = "hidden";

      constructor() { }

      ngOnInit() { }

      onPopup() : void {

      }
}
