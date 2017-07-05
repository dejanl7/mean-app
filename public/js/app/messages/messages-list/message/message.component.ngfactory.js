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
var styles_MessageComponent = [i0.styles];
export var RenderType_MessageComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_MessageComponent, data: {} });
function View_MessageComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 7, 'div', [['class',
                'config panel-default']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n            '])), (_l()(), i1.ɵeld(0, null, null, 1, 'a', [['class', 'btn btn-primary']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onEdit() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['Edit'])), (_l()(),
            i1.ɵted(null, ['\n            '])), (_l()(), i1.ɵeld(0, null, null, 1, 'a', [['class', 'btn btn-danger']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onDelete() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['Delete'])), (_l()(),
            i1.ɵted(null, ['\n        ']))], null, null);
}
export function View_MessageComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 13, 'article', [['class',
                'panel panel-default']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 1, 'div', [['class', 'panel panel-body']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n        ', '\n    '])), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(),
            i1.ɵeld(0, null, null, 7, 'footer', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, null, null, 1, 'div', [['class',
                'author']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n            ', '\n        '])), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MessageComponent_1)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(),
            i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _co.belongsToUser();
        _ck(_v, 11, 0, currVal_2);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.message.content;
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = _co.message.username;
        _ck(_v, 8, 0, currVal_1);
    });
}
export function View_MessageComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'app-message', [], null, null, null, View_MessageComponent_0, RenderType_MessageComponent)), i1.ɵdid(114688, null, 0, i3.MessageComponent, [i4.MessagesService], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
export var MessageComponentNgFactory = i1.ɵccf('app-message', i3.MessageComponent, View_MessageComponent_Host_0, { message: 'inputMessage' }, {}, []);
