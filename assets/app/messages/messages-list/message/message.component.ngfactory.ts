/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './message.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from './message.component';
import * as i4 from '../../messages.service';
const styles_MessageComponent:any[] = [i0.styles];
export const RenderType_MessageComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_MessageComponent,data:{}});
function View_MessageComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),7,'div',[['class',
      'config panel-default']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted((null as any),['\n            '])),(_l()(),i1.ɵeld(0,
      (null as any),(null as any),1,'a',[['class','btn btn-primary']],(null as any),
      [[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.onEdit()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['Edit'])),(_l()(),
      i1.ɵted((null as any),['\n            '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
      1,'a',[['class','btn btn-danger']],(null as any),[[(null as any),'click']],(_v,
          en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.onDelete()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['Delete'])),(_l()(),
      i1.ɵted((null as any),['\n        ']))],(null as any),(null as any));
}
export function View_MessageComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),13,'article',[['class',
      'panel panel-default']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,
      (null as any),(null as any),1,'div',[['class','panel panel-body']],(null as any),
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
      ['\n        ','\n    '])),(_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),
      i1.ɵeld(0,(null as any),(null as any),7,'footer',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
      ['\n        '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'div',[['class',
      'author']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n            ','\n        '])),(_l()(),i1.ɵted((null as any),
          ['\n        '])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,
          (null as any),View_MessageComponent_1)),i1.ɵdid(16384,(null as any),0,i2.NgIf,
          [i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),
          i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵted((null as any),['\n']))],
      (_ck,_v) => {
        var _co:i3.MessageComponent = _v.component;
        const currVal_2:any = _co.belongsToUser();
        _ck(_v,11,0,currVal_2);
      },(_ck,_v) => {
        var _co:i3.MessageComponent = _v.component;
        const currVal_0:any = _co.message.content;
        _ck(_v,3,0,currVal_0);
        const currVal_1:any = _co.message.username;
        _ck(_v,8,0,currVal_1);
      });
}
export function View_MessageComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'app-message',
      ([] as any[]),(null as any),(null as any),(null as any),View_MessageComponent_0,
      RenderType_MessageComponent)),i1.ɵdid(114688,(null as any),0,i3.MessageComponent,
      [i4.MessagesService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const MessageComponentNgFactory:i1.ComponentFactory<i3.MessageComponent> = i1.ɵccf('app-message',
    i3.MessageComponent,View_MessageComponent_Host_0,{message:'inputMessage'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovTUVBTi9tYWluLXByb2plY3QvYXNzZXRzL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy1saXN0L21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovTUVBTi9tYWluLXByb2plY3QvYXNzZXRzL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy1saXN0L21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQudHMiLCJuZzovLy9DOi9NRUFOL21haW4tcHJvamVjdC9hc3NldHMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLWxpc3QvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovTUVBTi9tYWluLXByb2plY3QvYXNzZXRzL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy1saXN0L21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQudHMuTWVzc2FnZUNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWJvZHlcIj5cclxuICAgICAgICB7eyBtZXNzYWdlLmNvbnRlbnQgfX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGZvb3Rlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgICAgIHt7IG1lc3NhZ2UudXNlcm5hbWUgfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlnIHBhbmVsLWRlZmF1bHRcIiAqbmdJZj1cImJlbG9uZ3NUb1VzZXIoKVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJvbkVkaXQoKVwiPkVkaXQ8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiAoY2xpY2spPVwib25EZWxldGUoKVwiPkRlbGV0ZTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG48L2FydGljbGU+IiwiPGFwcC1tZXNzYWdlPjwvYXBwLW1lc3NhZ2U+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDUVE7TUFBQTtNQUFBLGdCQUEwRCxtREFDdEQ7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUEyQjtVQUFBO1VBQUE7UUFBQTtRQUEzQjtNQUFBLGdDQUE4Qyx5Q0FBUTthQUFBLG9DQUN0RDtNQUFBO21CQUFBO1FBQUE7UUFBQTtRQUEwQjtVQUFBO1VBQUE7UUFBQTtRQUExQjtNQUFBLGdDQUErQywyQ0FBVTthQUFBOzs7b0JBVnJFO01BQUE7TUFBQSxnQkFBcUMsMkNBQ2pDO01BQUE7TUFBQSwwREFBOEI7TUFBQSwwQkFFeEIsMkNBQ047YUFBQTtVQUFBLDBEQUFRO01BQUEsaUJBQ0o7TUFBQTtNQUFvQixnRUFFZDtVQUFBLGlCQUNOO1VBQUEsK0NBQUE7VUFBQSxzRUFHTTtpQkFBQSw0QkFDRDs7O1FBSjZCO1FBQWxDLFlBQWtDLFNBQWxDOzs7UUFQMEI7UUFBQTtRQUlOO1FBQUE7Ozs7b0JDTDVCO01BQUE7aUNBQUEsVUFBQTtNQUFBO0lBQUE7Ozs7In0=
