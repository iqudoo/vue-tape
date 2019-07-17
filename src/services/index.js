import "./_polyfill";
import { setVue, getVue } from "./__vue";
import { initApp, getApp } from "./_app";
import { setDebug } from "./utils/_debug";
import { getQuery } from "./utils/_query";
import { getConfig } from "./utils/_config";
import { getVersion } from "./utils/_version";
import { setStorage, getStorage } from "./utils/_storage";
import { encodeBase64, decodeBase64 } from "./utils/_base64";
import { frameLoop } from "./utils/_loop";
import { formatDate } from "./utils/_date";
import { onLoad, onShow, onHide, offShow, offHide, onError } from "./_cycle";
import { _initLoading, showLoading, hideLoading } from "./comps/_loading";
import { _initToast, showToast } from "./comps/_toast";

export function create(vue) {
    setVue(vue);
    _initToast();
    _initLoading();
    console.log("VUE-TAPE: version " + getVersion())
    console.log("VUE-TAPE: github https://github.com/whoopschat/vue-tape")
    return {
        initApp,
        getVue,
        getApp,
        setDebug,
        getQuery,
        getConfig,
        getVersion,
        setStorage,
        getStorage,
        encodeBase64,
        decodeBase64,
        frameLoop,
        formatDate,
        onLoad,
        onShow,
        onHide,
        offShow,
        offHide,
        onError,
        showLoading,
        hideLoading,
        showToast
    }
}