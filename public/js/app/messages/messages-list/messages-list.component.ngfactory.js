/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from './messages-list.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from './message/message.component.ngfactory';
import * as i3 from './message/message.component';
import * as i4 from '../messages.service';
import * as i5 from '@angular/common';
import * as i6 from './messages-list.component';
var styles_MessagesListComponent = [i0.styles];
export var RenderType_MessagesListComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_MessagesListComponent, data: {} });
function View_MessagesListComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'app-message', [], null, null, null, i2.View_MessageComponent_0, i2.RenderType_MessageComponent)), i1.ɵdid(114688, null, 0, i3.MessageComponent, [i4.MessagesService], { message: [0, 'message'] }, null)], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit;
        _ck(_v, 1, 0, currVal_0);
    }, null);
}
export function View_MessagesListComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 7, 'div', [['class',
                'row']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class', 'col-md-8 col-md-offset-2']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MessagesListComponent_1)), i1.ɵdid(802816, null, 0, i5.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0,
                'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n    '])),
        (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.messages;
        _ck(_v, 5, 0, currVal_0);
    }, null);
}
export function View_MessagesListComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'app-messages-list', [], null, null, null, View_MessagesListComponent_0, RenderType_MessagesListComponent)), i1.ɵdid(114688, null, 0, i6.MessagesListComponent, [i4.MessagesService], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
export var MessagesListComponentNgFactory = i1.ɵccf('app-messages-list', i6.MessagesListComponent, View_MessagesListComponent_Host_0, {}, {}, []);
