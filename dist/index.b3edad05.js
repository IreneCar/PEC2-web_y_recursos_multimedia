// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2CENp":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5fa40587b3edad05";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3kRIy":[function(require,module,exports) {
/*!
  * PhotoSwipe Lightbox 5.3.7 - https://photoswipe.com
  * (c) 2023 Dmytro Semenov
  */ /** @typedef {import('../photoswipe.js').Point} Point */ /**
 * @template {keyof HTMLElementTagNameMap} T
 * @param {string} className
 * @param {T} tagName
 * @param {Node} [appendToEl]
 * @returns {HTMLElementTagNameMap[T]}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>PhotoSwipeLightbox);
function createElement(className, tagName, appendToEl) {
    const el = document.createElement(tagName);
    if (className) el.className = className;
    if (appendToEl) appendToEl.appendChild(el);
    return el;
}
/**
 * Get transform string
 *
 * @param {number} x
 * @param {number} [y]
 * @param {number} [scale]
 * @returns {string}
 */ function toTransformString(x, y, scale) {
    let propValue = `translate3d(${x}px,${y || 0}px,0)`;
    if (scale !== undefined) propValue += ` scale3d(${scale},${scale},1)`;
    return propValue;
}
/**
 * Apply width and height CSS properties to element
 *
 * @param {HTMLElement} el
 * @param {string | number} w
 * @param {string | number} h
 */ function setWidthHeight(el, w, h) {
    el.style.width = typeof w === "number" ? `${w}px` : w;
    el.style.height = typeof h === "number" ? `${h}px` : h;
}
/** @typedef {LOAD_STATE[keyof LOAD_STATE]} LoadState */ /** @type {{ IDLE: 'idle'; LOADING: 'loading'; LOADED: 'loaded'; ERROR: 'error' }} */ const LOAD_STATE = {
    IDLE: "idle",
    LOADING: "loading",
    LOADED: "loaded",
    ERROR: "error"
};
/**
 * Check if click or keydown event was dispatched
 * with a special key or via mouse wheel.
 *
 * @param {MouseEvent | KeyboardEvent} e
 * @returns {boolean}
 */ function specialKeyUsed(e) {
    return "button" in e && e.button === 1 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey;
}
/**
 * Parse `gallery` or `children` options.
 *
 * @param {import('../photoswipe.js').ElementProvider} [option]
 * @param {string} [legacySelector]
 * @param {HTMLElement | Document} [parent]
 * @returns HTMLElement[]
 */ function getElementsFromOption(option, legacySelector, parent = document) {
    /** @type {HTMLElement[]} */ let elements = [];
    if (option instanceof Element) elements = [
        option
    ];
    else if (option instanceof NodeList || Array.isArray(option)) elements = Array.from(option);
    else {
        const selector = typeof option === "string" ? option : legacySelector;
        if (selector) elements = Array.from(parent.querySelectorAll(selector));
    }
    return elements;
}
/**
 * Check if variable is PhotoSwipe class
 *
 * @param {any} fn
 * @returns {boolean}
 */ function isPswpClass(fn) {
    return typeof fn === "function" && fn.prototype && fn.prototype.goTo;
}
/**
 * Check if browser is Safari
 *
 * @returns {boolean}
 */ function isSafari() {
    return !!(navigator.vendor && navigator.vendor.match(/apple/i));
}
/** @typedef {import('../lightbox/lightbox.js').default} PhotoSwipeLightbox */ /** @typedef {import('../photoswipe.js').default} PhotoSwipe */ /** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */ /** @typedef {import('../photoswipe.js').DataSource} DataSource */ /** @typedef {import('../ui/ui-element.js').UIElementData} UIElementData */ /** @typedef {import('../slide/content.js').default} ContentDefault */ /** @typedef {import('../slide/slide.js').default} Slide */ /** @typedef {import('../slide/slide.js').SlideData} SlideData */ /** @typedef {import('../slide/zoom-level.js').default} ZoomLevel */ /** @typedef {import('../slide/get-thumb-bounds.js').Bounds} Bounds */ /**
 * Allow adding an arbitrary props to the Content
 * https://photoswipe.com/custom-content/#using-webp-image-format
 * @typedef {ContentDefault & Record<string, any>} Content
 */ /** @typedef {{ x?: number; y?: number }} Point */ /**
 * @typedef {Object} PhotoSwipeEventsMap https://photoswipe.com/events/
 *
 *
 * https://photoswipe.com/adding-ui-elements/
 *
 * @prop {undefined} uiRegister
 * @prop {{ data: UIElementData }} uiElementCreate
 *
 *
 * https://photoswipe.com/events/#initialization-events
 *
 * @prop {undefined} beforeOpen
 * @prop {undefined} firstUpdate
 * @prop {undefined} initialLayout
 * @prop {undefined} change
 * @prop {undefined} afterInit
 * @prop {undefined} bindEvents
 *
 *
 * https://photoswipe.com/events/#opening-or-closing-transition-events
 *
 * @prop {undefined} openingAnimationStart
 * @prop {undefined} openingAnimationEnd
 * @prop {undefined} closingAnimationStart
 * @prop {undefined} closingAnimationEnd
 *
 *
 * https://photoswipe.com/events/#closing-events
 *
 * @prop {undefined} close
 * @prop {undefined} destroy
 *
 *
 * https://photoswipe.com/events/#pointer-and-gesture-events
 *
 * @prop {{ originalEvent: PointerEvent }} pointerDown
 * @prop {{ originalEvent: PointerEvent }} pointerMove
 * @prop {{ originalEvent: PointerEvent }} pointerUp
 * @prop {{ bgOpacity: number }} pinchClose can be default prevented
 * @prop {{ panY: number }} verticalDrag can be default prevented
 *
 *
 * https://photoswipe.com/events/#slide-content-events
 *
 * @prop {{ content: Content }} contentInit
 * @prop {{ content: Content; isLazy: boolean }} contentLoad can be default prevented
 * @prop {{ content: Content; isLazy: boolean }} contentLoadImage can be default prevented
 * @prop {{ content: Content; slide: Slide; isError?: boolean }} loadComplete
 * @prop {{ content: Content; slide: Slide }} loadError
 * @prop {{ content: Content; width: number; height: number }} contentResize can be default prevented
 * @prop {{ content: Content; width: number; height: number; slide: Slide }} imageSizeChange
 * @prop {{ content: Content }} contentLazyLoad can be default prevented
 * @prop {{ content: Content }} contentAppend can be default prevented
 * @prop {{ content: Content }} contentActivate can be default prevented
 * @prop {{ content: Content }} contentDeactivate can be default prevented
 * @prop {{ content: Content }} contentRemove can be default prevented
 * @prop {{ content: Content }} contentDestroy can be default prevented
 *
 *
 * undocumented
 *
 * @prop {{ point: Point; originalEvent: PointerEvent }} imageClickAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} bgClickAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} tapAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} doubleTapAction can be default prevented
 *
 * @prop {{ originalEvent: KeyboardEvent }} keydown can be default prevented
 * @prop {{ x: number; dragging: boolean }} moveMainScroll
 * @prop {{ slide: Slide }} firstZoomPan
 * @prop {{ slide: Slide | undefined, data: SlideData, index: number }} gettingData
 * @prop {undefined} beforeResize
 * @prop {undefined} resize
 * @prop {undefined} viewportSize
 * @prop {undefined} updateScrollOffset
 * @prop {{ slide: Slide }} slideInit
 * @prop {{ slide: Slide }} afterSetContent
 * @prop {{ slide: Slide }} slideLoad
 * @prop {{ slide: Slide }} appendHeavy can be default prevented
 * @prop {{ slide: Slide }} appendHeavyContent
 * @prop {{ slide: Slide }} slideActivate
 * @prop {{ slide: Slide }} slideDeactivate
 * @prop {{ slide: Slide }} slideDestroy
 * @prop {{ destZoomLevel: number, centerPoint: Point | undefined, transitionDuration: number | false | undefined }} beforeZoomTo
 * @prop {{ slide: Slide }} zoomPanUpdate
 * @prop {{ slide: Slide }} initialZoomPan
 * @prop {{ slide: Slide }} calcSlideSize
 * @prop {undefined} resolutionChanged
 * @prop {{ originalEvent: WheelEvent }} wheel can be default prevented
 * @prop {{ content: Content }} contentAppendImage can be default prevented
 * @prop {{ index: number; itemData: SlideData }} lazyLoadSlide can be default prevented
 * @prop {undefined} lazyLoad
 * @prop {{ slide: Slide }} calcBounds
 * @prop {{ zoomLevels: ZoomLevel, slideData: SlideData }} zoomLevelsUpdate
 *
 *
 * legacy
 *
 * @prop {undefined} init
 * @prop {undefined} initialZoomIn
 * @prop {undefined} initialZoomOut
 * @prop {undefined} initialZoomInEnd
 * @prop {undefined} initialZoomOutEnd
 * @prop {{ dataSource: DataSource | undefined, numItems: number }} numItems
 * @prop {{ itemData: SlideData; index: number }} itemData
 * @prop {{ index: number, itemData: SlideData, instance: PhotoSwipe }} thumbBounds
 */ /**
 * @typedef {Object} PhotoSwipeFiltersMap https://photoswipe.com/filters/
 *
 * @prop {(numItems: number, dataSource: DataSource | undefined) => number} numItems
 * Modify the total amount of slides. Example on Data sources page.
 * https://photoswipe.com/filters/#numitems
 *
 * @prop {(itemData: SlideData, index: number) => SlideData} itemData
 * Modify slide item data. Example on Data sources page.
 * https://photoswipe.com/filters/#itemdata
 *
 * @prop {(itemData: SlideData, element: HTMLElement, linkEl: HTMLAnchorElement) => SlideData} domItemData
 * Modify item data when it's parsed from DOM element. Example on Data sources page.
 * https://photoswipe.com/filters/#domitemdata
 *
 * @prop {(clickedIndex: number, e: MouseEvent, instance: PhotoSwipeLightbox) => number} clickedIndex
 * Modify clicked gallery item index.
 * https://photoswipe.com/filters/#clickedindex
 *
 * @prop {(placeholderSrc: string | false, content: Content) => string | false} placeholderSrc
 * Modify placeholder image source.
 * https://photoswipe.com/filters/#placeholdersrc
 *
 * @prop {(isContentLoading: boolean, content: Content) => boolean} isContentLoading
 * Modify if the content is currently loading.
 * https://photoswipe.com/filters/#iscontentloading
 *
 * @prop {(isContentZoomable: boolean, content: Content) => boolean} isContentZoomable
 * Modify if the content can be zoomed.
 * https://photoswipe.com/filters/#iscontentzoomable
 *
 * @prop {(useContentPlaceholder: boolean, content: Content) => boolean} useContentPlaceholder
 * Modify if the placeholder should be used for the content.
 * https://photoswipe.com/filters/#usecontentplaceholder
 *
 * @prop {(isKeepingPlaceholder: boolean, content: Content) => boolean} isKeepingPlaceholder
 * Modify if the placeholder should be kept after the content is loaded.
 * https://photoswipe.com/filters/#iskeepingplaceholder
 *
 *
 * @prop {(contentErrorElement: HTMLElement, content: Content) => HTMLElement} contentErrorElement
 * Modify an element when the content has error state (for example, if image cannot be loaded).
 * https://photoswipe.com/filters/#contenterrorelement
 *
 * @prop {(element: HTMLElement, data: UIElementData) => HTMLElement} uiElement
 * Modify a UI element that's being created.
 * https://photoswipe.com/filters/#uielement
 *
 * @prop {(thumbnail: HTMLElement | null | undefined, itemData: SlideData, index: number) => HTMLElement} thumbEl
 * Modify the thubmnail element from which opening zoom animation starts or ends.
 * https://photoswipe.com/filters/#thumbel
 *
 * @prop {(thumbBounds: Bounds | undefined, itemData: SlideData, index: number) => Bounds} thumbBounds
 * Modify the thubmnail bounds from which opening zoom animation starts or ends.
 * https://photoswipe.com/filters/#thumbbounds
 *
 * @prop {(srcsetSizesWidth: number, content: Content) => number} srcsetSizesWidth
 *
 */ /**
 * @template {keyof PhotoSwipeFiltersMap} T
 * @typedef {{ fn: PhotoSwipeFiltersMap[T], priority: number }} Filter
 */ /**
 * @template {keyof PhotoSwipeEventsMap} T
 * @typedef {PhotoSwipeEventsMap[T] extends undefined ? PhotoSwipeEvent<T> : PhotoSwipeEvent<T> & PhotoSwipeEventsMap[T]} AugmentedEvent
 */ /**
 * @template {keyof PhotoSwipeEventsMap} T
 * @typedef {(event: AugmentedEvent<T>) => void} EventCallback
 */ /**
 * Base PhotoSwipe event object
 *
 * @template {keyof PhotoSwipeEventsMap} T
 */ class PhotoSwipeEvent {
    /**
   * @param {T} type
   * @param {PhotoSwipeEventsMap[T]} [details]
   */ constructor(type, details){
        this.type = type;
        this.defaultPrevented = false;
        if (details) Object.assign(this, details);
    }
    preventDefault() {
        this.defaultPrevented = true;
    }
}
/**
 * PhotoSwipe base class that can listen and dispatch for events.
 * Shared by PhotoSwipe Core and PhotoSwipe Lightbox, extended by base.js
 */ class Eventable {
    constructor(){
        /**
     * @type {{ [T in keyof PhotoSwipeEventsMap]?: ((event: AugmentedEvent<T>) => void)[] }}
     */ this._listeners = {};
        /**
     * @type {{ [T in keyof PhotoSwipeFiltersMap]?: Filter<T>[] }}
     */ this._filters = {};
        /** @type {PhotoSwipe | undefined} */ this.pswp = undefined;
        /** @type {PhotoSwipeOptions | undefined} */ this.options = undefined;
    }
    /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {PhotoSwipeFiltersMap[T]} fn
   * @param {number} priority
   */ addFilter(name, fn, priority = 100) {
        if (!this._filters[name]) this._filters[name] = [];
        this._filters[name]?.push({
            fn,
            priority
        });
        this._filters[name]?.sort((f1, f2)=>f1.priority - f2.priority);
        this.pswp?.addFilter(name, fn, priority);
    }
    /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {PhotoSwipeFiltersMap[T]} fn
   */ removeFilter(name, fn) {
        if (this._filters[name]) // @ts-expect-error
        this._filters[name] = this._filters[name].filter((filter)=>filter.fn !== fn);
        if (this.pswp) this.pswp.removeFilter(name, fn);
    }
    /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {Parameters<PhotoSwipeFiltersMap[T]>} args
   * @returns {Parameters<PhotoSwipeFiltersMap[T]>[0]}
   */ applyFilters(name, ...args) {
        this._filters[name]?.forEach((filter)=>{
            // @ts-expect-error
            args[0] = filter.fn.apply(this, args);
        });
        return args[0];
    }
    /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {EventCallback<T>} fn
   */ on(name, fn) {
        if (!this._listeners[name]) this._listeners[name] = [];
        this._listeners[name]?.push(fn);
        // When binding events to lightbox,
        // also bind events to PhotoSwipe Core,
        // if it's open.
        this.pswp?.on(name, fn);
    }
    /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {EventCallback<T>} fn
   */ off(name, fn) {
        if (this._listeners[name]) // @ts-expect-error
        this._listeners[name] = this._listeners[name].filter((listener)=>fn !== listener);
        this.pswp?.off(name, fn);
    }
    /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {PhotoSwipeEventsMap[T]} [details]
   * @returns {AugmentedEvent<T>}
   */ dispatch(name, details) {
        if (this.pswp) return this.pswp.dispatch(name, details);
        const event = /** @type {AugmentedEvent<T>} */ new PhotoSwipeEvent(name, details);
        this._listeners[name]?.forEach((listener)=>{
            listener.call(this, event);
        });
        return event;
    }
}
class Placeholder {
    /**
   * @param {string | false} imageSrc
   * @param {HTMLElement} container
   */ constructor(imageSrc, container){
        // Create placeholder
        // (stretched thumbnail or simple div behind the main image)
        /** @type {HTMLImageElement | HTMLDivElement | null} */ this.element = createElement("pswp__img pswp__img--placeholder", imageSrc ? "img" : "div", container);
        if (imageSrc) {
            const imgEl = /** @type {HTMLImageElement} */ this.element;
            imgEl.decoding = "async";
            imgEl.alt = "";
            imgEl.src = imageSrc;
            imgEl.setAttribute("role", "presentation");
        }
        this.element.setAttribute("aria-hidden", "true");
    }
    /**
   * @param {number} width
   * @param {number} height
   */ setDisplayedSize(width, height) {
        if (!this.element) return;
        if (this.element.tagName === "IMG") {
            // Use transform scale() to modify img placeholder size
            // (instead of changing width/height directly).
            // This helps with performance, specifically in iOS15 Safari.
            setWidthHeight(this.element, 250, "auto");
            this.element.style.transformOrigin = "0 0";
            this.element.style.transform = toTransformString(0, 0, width / 250);
        } else setWidthHeight(this.element, width, height);
    }
    destroy() {
        if (this.element?.parentNode) this.element.remove();
        this.element = null;
    }
}
/** @typedef {import('./slide.js').default} Slide */ /** @typedef {import('./slide.js').SlideData} SlideData */ /** @typedef {import('../core/base.js').default} PhotoSwipeBase */ /** @typedef {import('../util/util.js').LoadState} LoadState */ class Content {
    /**
   * @param {SlideData} itemData Slide data
   * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox instance
   * @param {number} index
   */ constructor(itemData, instance, index){
        this.instance = instance;
        this.data = itemData;
        this.index = index;
        /** @type {HTMLImageElement | HTMLDivElement | undefined} */ this.element = undefined;
        /** @type {Placeholder | undefined} */ this.placeholder = undefined;
        /** @type {Slide | undefined} */ this.slide = undefined;
        this.displayedImageWidth = 0;
        this.displayedImageHeight = 0;
        this.width = Number(this.data.w) || Number(this.data.width) || 0;
        this.height = Number(this.data.h) || Number(this.data.height) || 0;
        this.isAttached = false;
        this.hasSlide = false;
        this.isDecoding = false;
        /** @type {LoadState} */ this.state = LOAD_STATE.IDLE;
        if (this.data.type) this.type = this.data.type;
        else if (this.data.src) this.type = "image";
        else this.type = "html";
        this.instance.dispatch("contentInit", {
            content: this
        });
    }
    removePlaceholder() {
        if (this.placeholder && !this.keepPlaceholder()) // With delay, as image might be loaded, but not rendered
        setTimeout(()=>{
            if (this.placeholder) {
                this.placeholder.destroy();
                this.placeholder = undefined;
            }
        }, 1000);
    }
    /**
   * Preload content
   *
   * @param {boolean} isLazy
   * @param {boolean} [reload]
   */ load(isLazy, reload) {
        if (this.slide && this.usePlaceholder()) {
            if (!this.placeholder) {
                const placeholderSrc = this.instance.applyFilters("placeholderSrc", // use  image-based placeholder only for the first slide,
                // as rendering (even small stretched thumbnail) is an expensive operation
                this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : false, this);
                this.placeholder = new Placeholder(placeholderSrc, this.slide.container);
            } else {
                const placeholderEl = this.placeholder.element;
                // Add placeholder to DOM if it was already created
                if (placeholderEl && !placeholderEl.parentElement) this.slide.container.prepend(placeholderEl);
            }
        }
        if (this.element && !reload) return;
        if (this.instance.dispatch("contentLoad", {
            content: this,
            isLazy
        }).defaultPrevented) return;
        if (this.isImageContent()) {
            this.element = createElement("pswp__img", "img");
            // Start loading only after width is defined, as sizes might depend on it.
            // Due to Safari feature, we must define sizes before srcset.
            if (this.displayedImageWidth) this.loadImage(isLazy);
        } else {
            this.element = createElement("pswp__content", "div");
            this.element.innerHTML = this.data.html || "";
        }
        if (reload && this.slide) this.slide.updateContentSize(true);
    }
    /**
   * Preload image
   *
   * @param {boolean} isLazy
   */ loadImage(isLazy) {
        if (!this.isImageContent() || !this.element || this.instance.dispatch("contentLoadImage", {
            content: this,
            isLazy
        }).defaultPrevented) return;
        const imageElement = /** @type HTMLImageElement */ this.element;
        this.updateSrcsetSizes();
        if (this.data.srcset) imageElement.srcset = this.data.srcset;
        imageElement.src = this.data.src ?? "";
        imageElement.alt = this.data.alt ?? "";
        this.state = LOAD_STATE.LOADING;
        if (imageElement.complete) this.onLoaded();
        else {
            imageElement.onload = ()=>{
                this.onLoaded();
            };
            imageElement.onerror = ()=>{
                this.onError();
            };
        }
    }
    /**
   * Assign slide to content
   *
   * @param {Slide} slide
   */ setSlide(slide) {
        this.slide = slide;
        this.hasSlide = true;
        this.instance = slide.pswp;
    // todo: do we need to unset slide?
    }
    /**
   * Content load success handler
   */ onLoaded() {
        this.state = LOAD_STATE.LOADED;
        if (this.slide && this.element) {
            this.instance.dispatch("loadComplete", {
                slide: this.slide,
                content: this
            });
            // if content is reloaded
            if (this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode) {
                this.append();
                this.slide.updateContentSize(true);
            }
            if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) this.removePlaceholder();
        }
    }
    /**
   * Content load error handler
   */ onError() {
        this.state = LOAD_STATE.ERROR;
        if (this.slide) {
            this.displayError();
            this.instance.dispatch("loadComplete", {
                slide: this.slide,
                isError: true,
                content: this
            });
            this.instance.dispatch("loadError", {
                slide: this.slide,
                content: this
            });
        }
    }
    /**
   * @returns {Boolean} If the content is currently loading
   */ isLoading() {
        return this.instance.applyFilters("isContentLoading", this.state === LOAD_STATE.LOADING, this);
    }
    /**
   * @returns {Boolean} If the content is in error state
   */ isError() {
        return this.state === LOAD_STATE.ERROR;
    }
    /**
   * @returns {boolean} If the content is image
   */ isImageContent() {
        return this.type === "image";
    }
    /**
   * Update content size
   *
   * @param {Number} width
   * @param {Number} height
   */ setDisplayedSize(width, height) {
        if (!this.element) return;
        if (this.placeholder) this.placeholder.setDisplayedSize(width, height);
        if (this.instance.dispatch("contentResize", {
            content: this,
            width,
            height
        }).defaultPrevented) return;
        setWidthHeight(this.element, width, height);
        if (this.isImageContent() && !this.isError()) {
            const isInitialSizeUpdate = !this.displayedImageWidth && width;
            this.displayedImageWidth = width;
            this.displayedImageHeight = height;
            if (isInitialSizeUpdate) this.loadImage(false);
            else this.updateSrcsetSizes();
            if (this.slide) this.instance.dispatch("imageSizeChange", {
                slide: this.slide,
                width,
                height,
                content: this
            });
        }
    }
    /**
   * @returns {boolean} If the content can be zoomed
   */ isZoomable() {
        return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== LOAD_STATE.ERROR, this);
    }
    /**
   * Update image srcset sizes attribute based on width and height
   */ updateSrcsetSizes() {
        // Handle srcset sizes attribute.
        //
        // Never lower quality, if it was increased previously.
        // Chrome does this automatically, Firefox and Safari do not,
        // so we store largest used size in dataset.
        if (!this.isImageContent() || !this.element || !this.data.srcset) return;
        const image = /** @type HTMLImageElement */ this.element;
        const sizesWidth = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
        if (!image.dataset.largestUsedSize || sizesWidth > parseInt(image.dataset.largestUsedSize, 10)) {
            image.sizes = sizesWidth + "px";
            image.dataset.largestUsedSize = String(sizesWidth);
        }
    }
    /**
   * @returns {boolean} If content should use a placeholder (from msrc by default)
   */ usePlaceholder() {
        return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this);
    }
    /**
   * Preload content with lazy-loading param
   */ lazyLoad() {
        if (this.instance.dispatch("contentLazyLoad", {
            content: this
        }).defaultPrevented) return;
        this.load(true);
    }
    /**
   * @returns {boolean} If placeholder should be kept after content is loaded
   */ keepPlaceholder() {
        return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this);
    }
    /**
   * Destroy the content
   */ destroy() {
        this.hasSlide = false;
        this.slide = undefined;
        if (this.instance.dispatch("contentDestroy", {
            content: this
        }).defaultPrevented) return;
        this.remove();
        if (this.placeholder) {
            this.placeholder.destroy();
            this.placeholder = undefined;
        }
        if (this.isImageContent() && this.element) {
            this.element.onload = null;
            this.element.onerror = null;
            this.element = undefined;
        }
    }
    /**
   * Display error message
   */ displayError() {
        if (this.slide) {
            let errorMsgEl = createElement("pswp__error-msg", "div");
            errorMsgEl.innerText = this.instance.options?.errorMsg ?? "";
            errorMsgEl = /** @type {HTMLDivElement} */ this.instance.applyFilters("contentErrorElement", errorMsgEl, this);
            this.element = createElement("pswp__content pswp__error-msg-container", "div");
            this.element.appendChild(errorMsgEl);
            this.slide.container.innerText = "";
            this.slide.container.appendChild(this.element);
            this.slide.updateContentSize(true);
            this.removePlaceholder();
        }
    }
    /**
   * Append the content
   */ append() {
        if (this.isAttached || !this.element) return;
        this.isAttached = true;
        if (this.state === LOAD_STATE.ERROR) {
            this.displayError();
            return;
        }
        if (this.instance.dispatch("contentAppend", {
            content: this
        }).defaultPrevented) return;
        const supportsDecode = "decode" in this.element;
        if (this.isImageContent()) {
            // Use decode() on nearby slides
            //
            // Nearby slide images are in DOM and not hidden via display:none.
            // However, they are placed offscreen (to the left and right side).
            //
            // Some browsers do not composite the image until it's actually visible,
            // using decode() helps.
            //
            // You might ask "why dont you just decode() and then append all images",
            // that's because I want to show image before it's fully loaded,
            // as browser can render parts of image while it is loading.
            // We do not do this in Safari due to partial loading bug.
            if (supportsDecode && this.slide && (!this.slide.isActive || isSafari())) {
                this.isDecoding = true;
                // purposefully using finally instead of then,
                // as if srcset sizes changes dynamically - it may cause decode error
                /** @type {HTMLImageElement} */ this.element.decode().catch(()=>{}).finally(()=>{
                    this.isDecoding = false;
                    this.appendImage();
                });
            } else this.appendImage();
        } else if (this.slide && !this.element.parentNode) this.slide.container.appendChild(this.element);
    }
    /**
   * Activate the slide,
   * active slide is generally the current one,
   * meaning the user can see it.
   */ activate() {
        if (this.instance.dispatch("contentActivate", {
            content: this
        }).defaultPrevented || !this.slide) return;
        if (this.isImageContent() && this.isDecoding && !isSafari()) // add image to slide when it becomes active,
        // even if it's not finished decoding
        this.appendImage();
        else if (this.isError()) this.load(false, true); // try to reload
        if (this.slide.holderElement) this.slide.holderElement.setAttribute("aria-hidden", "false");
    }
    /**
   * Deactivate the content
   */ deactivate() {
        this.instance.dispatch("contentDeactivate", {
            content: this
        });
        if (this.slide && this.slide.holderElement) this.slide.holderElement.setAttribute("aria-hidden", "true");
    }
    /**
   * Remove the content from DOM
   */ remove() {
        this.isAttached = false;
        if (this.instance.dispatch("contentRemove", {
            content: this
        }).defaultPrevented) return;
        if (this.element && this.element.parentNode) this.element.remove();
        if (this.placeholder && this.placeholder.element) this.placeholder.element.remove();
    }
    /**
   * Append the image content to slide container
   */ appendImage() {
        if (!this.isAttached) return;
        if (this.instance.dispatch("contentAppendImage", {
            content: this
        }).defaultPrevented) return;
        // ensure that element exists and is not already appended
        if (this.slide && this.element && !this.element.parentNode) this.slide.container.appendChild(this.element);
        if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) this.removePlaceholder();
    }
}
/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */ /** @typedef {import('../core/base.js').default} PhotoSwipeBase */ /** @typedef {import('../photoswipe.js').Point} Point */ /** @typedef {import('../slide/slide.js').SlideData} SlideData */ /**
 * @param {PhotoSwipeOptions} options
 * @param {PhotoSwipeBase} pswp
 * @returns {Point}
 */ function getViewportSize(options, pswp) {
    if (options.getViewportSizeFn) {
        const newViewportSize = options.getViewportSizeFn(options, pswp);
        if (newViewportSize) return newViewportSize;
    }
    return {
        x: document.documentElement.clientWidth,
        // TODO: height on mobile is very incosistent due to toolbar
        // find a way to improve this
        //
        // document.documentElement.clientHeight - doesn't seem to work well
        y: window.innerHeight
    };
}
/**
 * Parses padding option.
 * Supported formats:
 *
 * // Object
 * padding: {
 *  top: 0,
 *  bottom: 0,
 *  left: 0,
 *  right: 0
 * }
 *
 * // A function that returns the object
 * paddingFn: (viewportSize, itemData, index) => {
 *  return {
 *    top: 0,
 *    bottom: 0,
 *    left: 0,
 *    right: 0
 *  };
 * }
 *
 * // Legacy variant
 * paddingLeft: 0,
 * paddingRight: 0,
 * paddingTop: 0,
 * paddingBottom: 0,
 *
 * @param {'left' | 'top' | 'bottom' | 'right'} prop
 * @param {PhotoSwipeOptions} options PhotoSwipe options
 * @param {Point} viewportSize PhotoSwipe viewport size, for example: { x:800, y:600 }
 * @param {SlideData} itemData Data about the slide
 * @param {number} index Slide index
 * @returns {number}
 */ function parsePaddingOption(prop, options, viewportSize, itemData, index) {
    let paddingValue = 0;
    if (options.paddingFn) paddingValue = options.paddingFn(viewportSize, itemData, index)[prop];
    else if (options.padding) paddingValue = options.padding[prop];
    else {
        const legacyPropName = "padding" + prop[0].toUpperCase() + prop.slice(1);
        // @ts-expect-error
        if (options[legacyPropName]) // @ts-expect-error
        paddingValue = options[legacyPropName];
    }
    return Number(paddingValue) || 0;
}
/**
 * @param {PhotoSwipeOptions} options
 * @param {Point} viewportSize
 * @param {SlideData} itemData
 * @param {number} index
 * @returns {Point}
 */ function getPanAreaSize(options, viewportSize, itemData, index) {
    return {
        x: viewportSize.x - parsePaddingOption("left", options, viewportSize, itemData, index) - parsePaddingOption("right", options, viewportSize, itemData, index),
        y: viewportSize.y - parsePaddingOption("top", options, viewportSize, itemData, index) - parsePaddingOption("bottom", options, viewportSize, itemData, index)
    };
}
const MAX_IMAGE_WIDTH = 4000;
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */ /** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */ /** @typedef {import('../photoswipe.js').Point} Point */ /** @typedef {import('../slide/slide.js').SlideData} SlideData */ /** @typedef {'fit' | 'fill' | number | ((zoomLevelObject: ZoomLevel) => number)} ZoomLevelOption */ /**
 * Calculates zoom levels for specific slide.
 * Depends on viewport size and image size.
 */ class ZoomLevel {
    /**
   * @param {PhotoSwipeOptions} options PhotoSwipe options
   * @param {SlideData} itemData Slide data
   * @param {number} index Slide index
   * @param {PhotoSwipe} [pswp] PhotoSwipe instance, can be undefined if not initialized yet
   */ constructor(options, itemData, index, pswp){
        this.pswp = pswp;
        this.options = options;
        this.itemData = itemData;
        this.index = index;
        /** @type { Point | null } */ this.panAreaSize = null;
        /** @type { Point | null } */ this.elementSize = null;
        this.fit = 1;
        this.fill = 1;
        this.vFill = 1;
        this.initial = 1;
        this.secondary = 1;
        this.max = 1;
        this.min = 1;
    }
    /**
   * Calculate initial, secondary and maximum zoom level for the specified slide.
   *
   * It should be called when either image or viewport size changes.
   *
   * @param {number} maxWidth
   * @param {number} maxHeight
   * @param {Point} panAreaSize
   */ update(maxWidth, maxHeight, panAreaSize) {
        /** @type {Point} */ const elementSize = {
            x: maxWidth,
            y: maxHeight
        };
        this.elementSize = elementSize;
        this.panAreaSize = panAreaSize;
        const hRatio = panAreaSize.x / elementSize.x;
        const vRatio = panAreaSize.y / elementSize.y;
        this.fit = Math.min(1, hRatio < vRatio ? hRatio : vRatio);
        this.fill = Math.min(1, hRatio > vRatio ? hRatio : vRatio);
        // zoom.vFill defines zoom level of the image
        // when it has 100% of viewport vertical space (height)
        this.vFill = Math.min(1, vRatio);
        this.initial = this._getInitial();
        this.secondary = this._getSecondary();
        this.max = Math.max(this.initial, this.secondary, this._getMax());
        this.min = Math.min(this.fit, this.initial, this.secondary);
        if (this.pswp) this.pswp.dispatch("zoomLevelsUpdate", {
            zoomLevels: this,
            slideData: this.itemData
        });
    }
    /**
   * Parses user-defined zoom option.
   *
   * @private
   * @param {'initial' | 'secondary' | 'max'} optionPrefix Zoom level option prefix (initial, secondary, max)
   * @returns { number | undefined }
   */ _parseZoomLevelOption(optionPrefix) {
        const optionName = /** @type {'initialZoomLevel' | 'secondaryZoomLevel' | 'maxZoomLevel'} */ optionPrefix + "ZoomLevel";
        const optionValue = this.options[optionName];
        if (!optionValue) return;
        if (typeof optionValue === "function") return optionValue(this);
        if (optionValue === "fill") return this.fill;
        if (optionValue === "fit") return this.fit;
        return Number(optionValue);
    }
    /**
   * Get zoom level to which image will be zoomed after double-tap gesture,
   * or when user clicks on zoom icon,
   * or mouse-click on image itself.
   * If you return 1 image will be zoomed to its original size.
   *
   * @private
   * @return {number}
   */ _getSecondary() {
        let currZoomLevel = this._parseZoomLevelOption("secondary");
        if (currZoomLevel) return currZoomLevel;
        // 3x of "fit" state, but not larger than original
        currZoomLevel = Math.min(1, this.fit * 3);
        if (this.elementSize && currZoomLevel * this.elementSize.x > MAX_IMAGE_WIDTH) currZoomLevel = MAX_IMAGE_WIDTH / this.elementSize.x;
        return currZoomLevel;
    }
    /**
   * Get initial image zoom level.
   *
   * @private
   * @return {number}
   */ _getInitial() {
        return this._parseZoomLevelOption("initial") || this.fit;
    }
    /**
   * Maximum zoom level when user zooms
   * via zoom/pinch gesture,
   * via cmd/ctrl-wheel or via trackpad.
   *
   * @private
   * @return {number}
   */ _getMax() {
        // max zoom level is x4 from "fit state",
        // used for zoom gesture and ctrl/trackpad zoom
        return this._parseZoomLevelOption("max") || Math.max(1, this.fit * 4);
    }
}
/**
 * Lazy-load an image
 * This function is used both by Lightbox and PhotoSwipe core,
 * thus it can be called before dialog is opened.
 *
 * @param {SlideData} itemData Data about the slide
 * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox instance
 * @param {number} index
 * @returns {Content} Image that is being decoded or false.
 */ function lazyLoadData(itemData, instance, index) {
    const content = instance.createContentFromData(itemData, index);
    /** @type {ZoomLevel | undefined} */ let zoomLevel;
    const { options  } = instance;
    // We need to know dimensions of the image to preload it,
    // as it might use srcset, and we need to define sizes
    if (options) {
        zoomLevel = new ZoomLevel(options, itemData, -1);
        let viewportSize;
        if (instance.pswp) viewportSize = instance.pswp.viewportSize;
        else viewportSize = getViewportSize(options, instance);
        const panAreaSize = getPanAreaSize(options, viewportSize, itemData, index);
        zoomLevel.update(content.width, content.height, panAreaSize);
    }
    content.lazyLoad();
    if (zoomLevel) content.setDisplayedSize(Math.ceil(content.width * zoomLevel.initial), Math.ceil(content.height * zoomLevel.initial));
    return content;
}
/**
 * Lazy-loads specific slide.
 * This function is used both by Lightbox and PhotoSwipe core,
 * thus it can be called before dialog is opened.
 *
 * By default, it loads image based on viewport size and initial zoom level.
 *
 * @param {number} index Slide index
 * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox eventable instance
 * @returns {Content | undefined}
 */ function lazyLoadSlide(index, instance) {
    const itemData = instance.getItemData(index);
    if (instance.dispatch("lazyLoadSlide", {
        index,
        itemData
    }).defaultPrevented) return;
    return lazyLoadData(itemData, instance, index);
}
/** @typedef {import("../photoswipe.js").default} PhotoSwipe */ /** @typedef {import("../slide/slide.js").SlideData} SlideData */ /**
 * PhotoSwipe base class that can retrieve data about every slide.
 * Shared by PhotoSwipe Core and PhotoSwipe Lightbox
 */ class PhotoSwipeBase extends Eventable {
    /**
   * Get total number of slides
   *
   * @returns {number}
   */ getNumItems() {
        let numItems = 0;
        const dataSource = this.options?.dataSource;
        if (dataSource && "length" in dataSource) // may be an array or just object with length property
        numItems = dataSource.length;
        else if (dataSource && "gallery" in dataSource) {
            // query DOM elements
            if (!dataSource.items) dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
            if (dataSource.items) numItems = dataSource.items.length;
        }
        // legacy event, before filters were introduced
        const event = this.dispatch("numItems", {
            dataSource,
            numItems
        });
        return this.applyFilters("numItems", event.numItems, dataSource);
    }
    /**
   * @param {SlideData} slideData
   * @param {number} index
   * @returns {Content}
   */ createContentFromData(slideData, index) {
        return new Content(slideData, this, index);
    }
    /**
   * Get item data by index.
   *
   * "item data" should contain normalized information that PhotoSwipe needs to generate a slide.
   * For example, it may contain properties like
   * `src`, `srcset`, `w`, `h`, which will be used to generate a slide with image.
   *
   * @param {number} index
   * @returns {SlideData}
   */ getItemData(index) {
        const dataSource = this.options?.dataSource;
        /** @type {SlideData | HTMLElement} */ let dataSourceItem = {};
        if (Array.isArray(dataSource)) // Datasource is an array of elements
        dataSourceItem = dataSource[index];
        else if (dataSource && "gallery" in dataSource) {
            // dataSource has gallery property,
            // thus it was created by Lightbox, based on
            // gallery and children options
            // query DOM elements
            if (!dataSource.items) dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
            dataSourceItem = dataSource.items[index];
        }
        let itemData = dataSourceItem;
        if (itemData instanceof Element) itemData = this._domElementToItemData(itemData);
        // Dispatching the itemData event,
        // it's a legacy verion before filters were introduced
        const event = this.dispatch("itemData", {
            itemData: itemData || {},
            index
        });
        return this.applyFilters("itemData", event.itemData, index);
    }
    /**
   * Get array of gallery DOM elements,
   * based on childSelector and gallery element.
   *
   * @param {HTMLElement} galleryElement
   * @returns {HTMLElement[]}
   */ _getGalleryDOMElements(galleryElement) {
        if (this.options?.children || this.options?.childSelector) return getElementsFromOption(this.options.children, this.options.childSelector, galleryElement) || [];
        return [
            galleryElement
        ];
    }
    /**
   * Converts DOM element to item data object.
   *
   * @param {HTMLElement} element DOM element
   * @returns {SlideData}
   */ _domElementToItemData(element) {
        /** @type {SlideData} */ const itemData = {
            element
        };
        const linkEl = /** @type {HTMLAnchorElement} */ element.tagName === "A" ? element : element.querySelector("a");
        if (linkEl) {
            // src comes from data-pswp-src attribute,
            // if it's empty link href is used
            itemData.src = linkEl.dataset.pswpSrc || linkEl.href;
            if (linkEl.dataset.pswpSrcset) itemData.srcset = linkEl.dataset.pswpSrcset;
            itemData.width = linkEl.dataset.pswpWidth ? parseInt(linkEl.dataset.pswpWidth, 10) : 0;
            itemData.height = linkEl.dataset.pswpHeight ? parseInt(linkEl.dataset.pswpHeight, 10) : 0;
            // support legacy w & h properties
            itemData.w = itemData.width;
            itemData.h = itemData.height;
            if (linkEl.dataset.pswpType) itemData.type = linkEl.dataset.pswpType;
            const thumbnailEl = element.querySelector("img");
            if (thumbnailEl) {
                // msrc is URL to placeholder image that's displayed before large image is loaded
                // by default it's displayed only for the first slide
                itemData.msrc = thumbnailEl.currentSrc || thumbnailEl.src;
                itemData.alt = thumbnailEl.getAttribute("alt") ?? "";
            }
            if (linkEl.dataset.pswpCropped || linkEl.dataset.cropped) itemData.thumbCropped = true;
        }
        return this.applyFilters("domItemData", itemData, element, linkEl);
    }
    /**
   * Lazy-load by slide data
   *
   * @param {SlideData} itemData Data about the slide
   * @param {number} index
   * @returns {Content} Image that is being decoded or false.
   */ lazyLoadData(itemData, index) {
        return lazyLoadData(itemData, this, index);
    }
}
/**
 * @template T
 * @typedef {import('../types.js').Type<T>} Type<T>
 */ /** @typedef {import('../photoswipe.js').default} PhotoSwipe */ /** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */ /** @typedef {import('../photoswipe.js').DataSource} DataSource */ /** @typedef {import('../photoswipe.js').Point} Point */ /** @typedef {import('../slide/content.js').default} Content */ /** @typedef {import('../core/eventable.js').PhotoSwipeEventsMap} PhotoSwipeEventsMap */ /** @typedef {import('../core/eventable.js').PhotoSwipeFiltersMap} PhotoSwipeFiltersMap */ /**
 * @template {keyof PhotoSwipeEventsMap} T
 * @typedef {import('../core/eventable.js').EventCallback<T>} EventCallback<T>
 */ /**
 * PhotoSwipe Lightbox
 *
 * - If user has unsupported browser it falls back to default browser action (just opens URL)
 * - Binds click event to links that should open PhotoSwipe
 * - parses DOM strcture for PhotoSwipe (retrieves large image URLs and sizes)
 * - Initializes PhotoSwipe
 *
 *
 * Loader options use the same object as PhotoSwipe, and supports such options:
 *
 * gallery - Element | Element[] | NodeList | string selector for the gallery element
 * children - Element | Element[] | NodeList | string selector for the gallery children
 *
 */ class PhotoSwipeLightbox extends PhotoSwipeBase {
    /**
   * @param {PhotoSwipeOptions} [options]
   */ constructor(options){
        super();
        /** @type {PhotoSwipeOptions} */ this.options = options || {};
        this._uid = 0;
        this.shouldOpen = false;
        /**
     * @private
     * @type {Content | undefined}
     */ this._preloadedContent = undefined;
        this.onThumbnailsClick = this.onThumbnailsClick.bind(this);
    }
    /**
   * Initialize lightbox, should be called only once.
   * It's not included in the main constructor, so you may bind events before it.
   */ init() {
        // Bind click events to each gallery
        getElementsFromOption(this.options.gallery, this.options.gallerySelector).forEach((galleryElement)=>{
            galleryElement.addEventListener("click", this.onThumbnailsClick, false);
        });
    }
    /**
   * @param {MouseEvent} e
   */ onThumbnailsClick(e) {
        // Exit and allow default browser action if:
        if (specialKeyUsed(e) // ... if clicked with a special key (ctrl/cmd...)
         || window.pswp // ... if PhotoSwipe is already open
         || window.navigator.onLine === false) return;
        // If both clientX and clientY are 0 or not defined,
        // the event is likely triggered by keyboard,
        // so we do not pass the initialPoint
        //
        // Note that some screen readers emulate the mouse position,
        // so it's not the ideal way to detect them.
        //
        /** @type {Point | null} */ let initialPoint = {
            x: e.clientX,
            y: e.clientY
        };
        if (!initialPoint.x && !initialPoint.y) initialPoint = null;
        let clickedIndex = this.getClickedIndex(e);
        clickedIndex = this.applyFilters("clickedIndex", clickedIndex, e, this);
        /** @type {DataSource} */ const dataSource = {
            gallery: /** @type {HTMLElement} */ e.currentTarget
        };
        if (clickedIndex >= 0) {
            e.preventDefault();
            this.loadAndOpen(clickedIndex, dataSource, initialPoint);
        }
    }
    /**
   * Get index of gallery item that was clicked.
   *
   * @param {MouseEvent} e click event
   * @returns {number}
   */ getClickedIndex(e) {
        // legacy option
        if (this.options.getClickedIndexFn) return this.options.getClickedIndexFn.call(this, e);
        const clickedTarget = /** @type {HTMLElement} */ e.target;
        const childElements = getElementsFromOption(this.options.children, this.options.childSelector, /** @type {HTMLElement} */ e.currentTarget);
        const clickedChildIndex = childElements.findIndex((child)=>child === clickedTarget || child.contains(clickedTarget));
        if (clickedChildIndex !== -1) return clickedChildIndex;
        else if (this.options.children || this.options.childSelector) // click wasn't on a child element
        return -1;
        // There is only one item (which is the gallery)
        return 0;
    }
    /**
   * Load and open PhotoSwipe
   *
   * @param {number} index
   * @param {DataSource} dataSource
   * @param {Point | null} [initialPoint]
   * @returns {boolean}
   */ loadAndOpen(index, dataSource, initialPoint) {
        // Check if the gallery is already open
        if (window.pswp) return false;
        // set initial index
        this.options.index = index;
        // define options for PhotoSwipe constructor
        this.options.initialPointerPos = initialPoint;
        this.shouldOpen = true;
        this.preload(index, dataSource);
        return true;
    }
    /**
   * Load the main module and the slide content by index
   *
   * @param {number} index
   * @param {DataSource} [dataSource]
   */ preload(index, dataSource) {
        const { options  } = this;
        if (dataSource) options.dataSource = dataSource;
        // Add the main module
        /** @type {Promise<Type<PhotoSwipe>>[]} */ const promiseArray = [];
        const pswpModuleType = typeof options.pswpModule;
        if (isPswpClass(options.pswpModule)) promiseArray.push(Promise.resolve(/** @type {Type<PhotoSwipe>} */ options.pswpModule));
        else if (pswpModuleType === "string") throw new Error("pswpModule as string is no longer supported");
        else if (pswpModuleType === "function") promiseArray.push(/** @type {() => Promise<Type<PhotoSwipe>>} */ options.pswpModule());
        else throw new Error("pswpModule is not valid");
        // Add custom-defined promise, if any
        if (typeof options.openPromise === "function") // allow developers to perform some task before opening
        promiseArray.push(options.openPromise());
        if (options.preloadFirstSlide !== false && index >= 0) this._preloadedContent = lazyLoadSlide(index, this);
        // Wait till all promises resolve and open PhotoSwipe
        const uid = ++this._uid;
        Promise.all(promiseArray).then((iterableModules)=>{
            if (this.shouldOpen) {
                const mainModule = iterableModules[0];
                this._openPhotoswipe(mainModule, uid);
            }
        });
    }
    /**
   * @private
   * @param {Type<PhotoSwipe> | { default: Type<PhotoSwipe> }} module
   * @param {number} uid
   */ _openPhotoswipe(module, uid) {
        // Cancel opening if UID doesn't match the current one
        // (if user clicked on another gallery item before current was loaded).
        //
        // Or if shouldOpen flag is set to false
        // (developer may modify it via public API)
        if (uid !== this._uid && this.shouldOpen) return;
        this.shouldOpen = false;
        // PhotoSwipe is already open
        if (window.pswp) return;
        /**
     * Pass data to PhotoSwipe and open init
     *
     * @type {PhotoSwipe}
     */ const pswp = typeof module === "object" ? new module.default(this.options) // eslint-disable-line
         : new module(this.options); // eslint-disable-line
        this.pswp = pswp;
        window.pswp = pswp;
        // map listeners from Lightbox to PhotoSwipe Core
        /** @type {(keyof PhotoSwipeEventsMap)[]} */ Object.keys(this._listeners).forEach((name)=>{
            this._listeners[name]?.forEach((fn)=>{
                pswp.on(name, /** @type {EventCallback<typeof name>} */ fn);
            });
        });
        // same with filters
        /** @type {(keyof PhotoSwipeFiltersMap)[]} */ Object.keys(this._filters).forEach((name)=>{
            this._filters[name]?.forEach((filter)=>{
                pswp.addFilter(name, filter.fn, filter.priority);
            });
        });
        if (this._preloadedContent) {
            pswp.contentLoader.addToCache(this._preloadedContent);
            this._preloadedContent = undefined;
        }
        pswp.on("destroy", ()=>{
            // clean up public variables
            this.pswp = undefined;
            delete window.pswp;
        });
        pswp.init();
    }
    /**
   * Unbinds all events, closes PhotoSwipe if it's open.
   */ destroy() {
        this.pswp?.destroy();
        this.shouldOpen = false;
        this._listeners = {};
        getElementsFromOption(this.options.gallery, this.options.gallerySelector).forEach((galleryElement)=>{
            galleryElement.removeEventListener("click", this.onThumbnailsClick, false);
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["2CENp"], null, "parcelRequire94f2")

//# sourceMappingURL=index.b3edad05.js.map
