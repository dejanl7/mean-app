/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from './messages.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from './messages-input/messages-input.component.ngfactory';
import * as i3 from './messages-input/messages-input.component';
import * as i4 from './messages.service';
import * as i5 from './messages-list/messages-list.component.ngfactory';
import * as i6 from './messages-list/messages-list.component';
import * as i7 from './messages.component';
var styles_MessagesComponent = [i0.styles];
export var RenderType_MessagesComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_MessagesComponent, data: {} });
export function View_MessagesComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class',
                'row']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 1, 'app-messages-input', [], null, null, null, i2.View_MessagesInputComponent_0, i2.RenderType_MessagesInputComponent)),
        i1.ɵdid(114688, null, 0, i3.MessagesInputComponent, [i4.MessagesService], null, null), (_l()(), i1.ɵted(null, ['\n'])), (_l()(),
            i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class', 'row']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 1, 'app-messages-list', [], null, null, null, i5.View_MessagesListComponent_0, i5.RenderType_MessagesListComponent)),
        i1.ɵdid(114688, null, 0, i6.MessagesListComponent, [i4.MessagesService], null, null), (_l()(), i1.ɵted(null, ['\n'])), (_l()(),
            i1.ɵted(null, ['\n']))], function (_ck, _v) {
        _ck(_v, 3, 0);
        _ck(_v, 9, 0);
    }, null);
}
export function View_MessagesComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'app-messages', [], null, null, null, View_MessagesComponent_0, RenderType_MessagesComponent)), i1.ɵdid(114688, null, 0, i7.MessagesComponent, [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
export var MessagesComponentNgFactory = i1.ɵccf('app-messages', i7.MessagesComponent, View_MessagesComponent_Host_0, {}, {}, []);