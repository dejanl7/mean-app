/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from './logout.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from './logout.component';
import * as i3 from '../auth.service';
import * as i4 from '@angular/router';
var styles_LogoutComponent = [i0.styles];
export var RenderType_LogoutComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_LogoutComponent, data: {} });
export function View_LogoutComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class',
                'col-md-8 col-md-offset-2']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-danger']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onLogout() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['Logout'])), (_l()(),
            i1.ɵted(null, ['\n']))], null, null);
}
export function View_LogoutComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'app-logout', [], null, null, null, View_LogoutComponent_0, RenderType_LogoutComponent)),
        i1.ɵdid(114688, null, 0, i2.LogoutComponent, [i3.AuthService, i4.Router], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
export var LogoutComponentNgFactory = i1.ɵccf('app-logout', i2.LogoutComponent, View_LogoutComponent_Host_0, {}, {}, []);
