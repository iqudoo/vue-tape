import "./_polyfill";
import vuex from "./_vuex";
import { setVue, getVue } from "./__vue";
import { onError, initApp, getApp, getAppName } from "./_app";
import { getQueryString } from "./_query";
import { getConfig } from "./_config";
import { setStorage, getStorage } from "./_storage";
import { encodeBase64, decodeBase64 } from "./_base64";
import { onShow, onHide, offShow, offHide } from "./_visibility";
import { _initBack, back, backListener } from "./_back";
import { _initReport, setReportHandler, reportEvent } from "./_report";
import { _initSkeleton, showSkeleton, hideSkeleton } from "./_skeleton";
import { _initLoading, showLoading, hideLoading } from "./_loading";
import { _initToast, showToast } from "./_toast";
import { setTitle, getTitle } from "./_title";
import { request } from "./_request";
import { setDebug, isDebug } from "./_debug";
import { getVersion } from "./_version";
import { setCache, getCache } from "./_cache";
import { stopScroll, startScroll } from "./_scroll";

export function create(vue) {
    setVue(vue);
    _initBack();
    _initReport();
    _initSkeleton();
    _initLoading();
    _initToast();
    console.log("VUE-TAPE: version " + getVersion())
    console.log("VUE-TAPE: github https://github.com/whoopschat/vue-tape")
    return Object.assign(vuex, {
        initApp,
        getApp,
        getAppName,
        getQueryString,
        getConfig,
        setStorage,
        getStorage,
        setCache,
        getCache,
        encodeBase64,
        decodeBase64,
        isDebug,
        setDebug,
        onError,
        onShow,
        onHide,
        offShow,
        offHide,
        showSkeleton,
        hideSkeleton,
        showLoading,
        hideLoading,
        showToast,
        setTitle,
        getTitle,
        request,
        back,
        backListener,
        reportEvent,
        setReportHandler,
        getVersion,
        getVue,
        stopScroll,
        startScroll,
    })
}