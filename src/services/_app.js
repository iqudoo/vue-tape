import lazyload from 'vue-lazyload';
import { getVue } from './__vue';
import { createErrorComponent } from './comps/_component';
import { _initLifeCycle } from './_cycle';
import { _pixelToRem } from './utils/_rempixel';
import { _initConfig } from './utils/_config';
import { _initState } from './_state';
import { loadJs } from './_loadjs';

let _app_ = null;
let _app_name_ = '';

export function getApp() {
    return _app_;
}

export function getAppName() {
    return _app_name_;
}

export function initApp({ name, app, loadjs, config, state, width, unit, lazy, el }, handler) {
    let _init = () => {
        _app_ = app;
        _app_name_ = name || 'default';
        _pixelToRem(width, unit);
        _initConfig(config);
        _initState(state);
        _initLifeCycle();
        let _vue = getVue();
        _vue.use(lazyload, lazy || {});
        _vue.config.productionTip = false;
        handler && handler(_vue);
        new _vue({
            el: el || '#app',
            render: h => h(app || createErrorComponent('Invalid parameters [app] -> Tape.initApp({ ... })'))
        })
    }
    loadJs(loadjs, _init)
}