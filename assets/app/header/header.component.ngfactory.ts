/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './header.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/router';
import * as i3 from '@angular/common';
import * as i4 from './header.component';
const styles_HeaderComponent:any[] = [i0.styles];
export const RenderType_HeaderComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_HeaderComponent,data:{}});
export function View_HeaderComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),25,'header',[['class',
      'row']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          22,'nav',[['class','col-md-8 col-md-offset-2']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n        '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),19,'ul',[['class',
          'nav nav-pills']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted((null as any),['\n          '])),(_l()(),
          i1.ɵeld(0,(null as any),(null as any),7,'li',[['routerLinkActive','active']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      i1.ɵdid(1720320,(null as any),2,i2.RouterLinkActive,[i2.Router,i1.ElementRef,
          i1.Renderer,i1.ChangeDetectorRef],{routerLinkActive:[0,'routerLinkActive']},
          (null as any)),i1.ɵqud(603979776,1,{links:1}),i1.ɵqud(603979776,2,{linksWithHrefs:1}),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),3,'a',([] as any[]),[[1,'target',
          0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,11).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(671744,[[2,4]],0,i2.RouterLinkWithHref,
          [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),i1.ɵpad(1),(_l()(),i1.ɵted((null as any),['Messenger'])),
      (_l()(),i1.ɵted((null as any),['\n          '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),7,'li',[['routerLinkActive','active']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),i1.ɵdid(1720320,(null as any),
          2,i2.RouterLinkActive,[i2.Router,i1.ElementRef,i1.Renderer,i1.ChangeDetectorRef],
          {routerLinkActive:[0,'routerLinkActive']},(null as any)),i1.ɵqud(603979776,
          3,{links:1}),i1.ɵqud(603979776,4,{linksWithHrefs:1}),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),3,'a',([] as any[]),[[1,'target',0],[8,'href',4]],[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,20).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(671744,[[4,4]],0,i2.RouterLinkWithHref,
          [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),i1.ɵpad(1),(_l()(),i1.ɵted((null as any),['Authentication'])),
      (_l()(),i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵted((null as any),
          ['\n    '])),(_l()(),i1.ɵted((null as any),['\n'])),(_l()(),i1.ɵted((null as any),
          ['\n']))],(_ck,_v) => {
    const currVal_0:any = 'active';
    _ck(_v,7,0,currVal_0);
    const currVal_3:any = _ck(_v,12,0,'/messages');
    _ck(_v,11,0,currVal_3);
    const currVal_4:any = 'active';
    _ck(_v,16,0,currVal_4);
    const currVal_7:any = _ck(_v,21,0,'/auth');
    _ck(_v,20,0,currVal_7);
  },(_ck,_v) => {
    const currVal_1:any = i1.ɵnov(_v,11).target;
    const currVal_2:any = i1.ɵnov(_v,11).href;
    _ck(_v,10,0,currVal_1,currVal_2);
    const currVal_5:any = i1.ɵnov(_v,20).target;
    const currVal_6:any = i1.ɵnov(_v,20).href;
    _ck(_v,19,0,currVal_5,currVal_6);
  });
}
export function View_HeaderComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'app-header',([] as any[]),
      (null as any),(null as any),(null as any),View_HeaderComponent_0,RenderType_HeaderComponent)),
      i1.ɵdid(114688,(null as any),0,i4.HeaderComponent,([] as any[]),(null as any),
          (null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const HeaderComponentNgFactory:i1.ComponentFactory<i4.HeaderComponent> = i1.ɵccf('app-header',
    i4.HeaderComponent,View_HeaderComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovTUVBTi9tYWluLXByb2plY3QvYXNzZXRzL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9NRUFOL21haW4tcHJvamVjdC9hc3NldHMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovTUVBTi9tYWluLXByb2plY3QvYXNzZXRzL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovTUVBTi9tYWluLXByb2plY3QvYXNzZXRzL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cy5IZWFkZXJDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8aGVhZGVyIGNsYXNzPVwicm93XCI+XG4gICAgPG5hdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXBpbGxzXCI+XG4gICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj48YSBbcm91dGVyTGlua109XCJbJy9tZXNzYWdlcyddXCI+TWVzc2VuZ2VyPC9hPjwvbGk+XG4gICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj48YSBbcm91dGVyTGlua109XCJbJy9hdXRoJ11cIj5BdXRoZW50aWNhdGlvbjwvYT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgIDwvbmF2PlxuPC9oZWFkZXI+XG4iLCI8YXBwLWhlYWRlcj48L2FwcC1oZWFkZXI+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDQUE7TUFBQTtNQUFvQiwyQ0FDaEI7VUFBQTtVQUFBLDRDQUFzQztVQUFBLGlCQUNsQztVQUFBO1VBQUEsZ0JBQTBCLGlEQUN4QjtpQkFBQTtjQUFBO2FBQUE7MENBQUE7VUFBQTtNQUE4QjtVQUFBO1FBQUE7UUFBQTtVQUFBO2NBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUcsSUFBNkI7TUFBa0IsaURBQ2hGO1VBQUE7VUFBQSxtREFBQTtVQUFBO1VBQUE7VUFBQSxxREFBOEI7VUFBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2tCQUFBO2NBQUE7WUFBQTtZQUFBO1VBQUEsdUNBQUE7VUFBQTtVQUFBLHNCQUFHLElBQXlCO01BQXVCLCtDQUM5RTtVQUFBLGFBQ0gsdUNBQ0Q7VUFBQTtJQUpLO0lBQUosV0FBSSxTQUFKO0lBQWlDO0lBQUgsWUFBRyxTQUFIO0lBQzFCO0lBQUosWUFBSSxTQUFKO0lBQWlDO0lBQUgsWUFBRyxTQUFIOztJQURBO0lBQUE7SUFBQSxZQUFBLG1CQUFBO0lBQ0E7SUFBQTtJQUFBLFlBQUEsbUJBQUE7Ozs7b0JDSnhDO01BQUE7YUFBQTtVQUFBO0lBQUE7Ozs7In0=