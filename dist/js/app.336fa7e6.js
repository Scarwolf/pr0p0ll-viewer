(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],u=0,h=[];u<r.length;u++)o=r[u],a[o]&&h.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/pr0p0ll-viewer/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0c50":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwOUY4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwOUU4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJBOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJCOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jUqS1wAAApVJREFUeNq0l89rE1EQx3e3gVJoSPzZeNEWPKgHoa0HBak0iHiy/4C3WvDmoZ56qJ7txVsPQu8qlqqHIhRKJZceesmhioQEfxTEtsoSpdJg1u/ABJ7Pmc1m8zLwgWTmzcw3L+/te+tHUeQltONgCkyCi2AEDHLsJ6iBMlgHL8FeoqokoA2j4CloRMmtwTmj7erHBXPgCWhG6a3JNXKdCiDl1cidVbXZkJoXQRi5t5BrxwoY71FzU8S4JuAIqFkJ2+BFSlEh525b/hr3+k/AklDkNsf6wTT4yv46KIMNpsy+iMdMc47HNWxbsgVcUn7FmLAzzoFAWDsBx+wVP6bUpp5ewI+DOeUx0Wd9D8F70BTGNjkWtqnhmT1JQAHcUgZd8Lo3rQb1LAT8eJVUfgGvHQigGp+V2Z0iAUUl8QH47kAA1XioxIo+bRN8OG8F/oBjwv+Z1nJgX5jpdzQDw0LCjsPmrcW7I/iHScCAEDj03FtD8A0EyuChHgg4KTlJQF3wZ7WELppnBX+dBFSVpJsOBWi1qiRgSwnOgoyD5hmuJdkWCVhTgnTvW3AgYIFrSbZGh0UW/Io5Vp+DQoK7o80pztWMemZbgxeNwCNwDbw1fIfgGZjhU6xPaJgBV8BdsMw5cbZoHsenwYFxkZzl83xTSKTiviCAfCsJLysH3POfC8m8NegyGAGfLP/VmGmfSChgXroR0RSWjEFv2J/nG84cuKFMf4sTCZqXuJd4KaXFVjEG3+tw4eXbNK/YC9oXXs3O8NY8y99L4BXY5cvLY/Bb2VZ58EOJVcB18DHJq9lRsKr8inyKGVjlmh29mtHs3AHfuhCwy1vXT/Nu2GKQt+UHsGdctyX6eQyNvc+5sfX9Dl7Pe2J/BRgAl2CpwmrsHR0AAAAASUVORK5CYII="},4678:function(t,e,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=i(t);return s(e)}function i(t){var e=n[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="4678"},"4f87":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d"),s("4f87");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("modal",{attrs:{id:"screenModal"}},[s("template",{slot:"title"},[t._v("\n            Screenshot herunterladen\n        ")]),s("div",{attrs:{slot:"body"},slot:"body"},[s("div",{staticClass:"text-center"},[s("p",[t._v("\n                   Rechtsklicke auf das Bild -> Speichern unter. Das Bild ist optimiert um auf Pr0 hochgeladen zu werden.\n               ")]),s("p",[s("strong",[t._v("WICHTIG:")])]),s("p",[t._v("\n                   Damit die Hintergrundfarbe sich nach dem Uploaden auf das pr0 nicht ändert, überprüft bitte ob das Bild hier maximal 1052px breit ist und skaliert die Breite notfalls manuell."),s("br"),t._v("\n                   Ich arbeite daran dass das Bild diese Breite nicht überschreitet.\n               ")]),s("img",{attrs:{src:t.screenShotToDownload,alt:"Canvas"}})])])],2),t._m(0),s("div",{staticClass:"text-white bg-dark p-2 shadow rounded"},[t._m(1),t.pollDataLoaded?s("div",[s("div",{staticClass:"container"},[s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card bg-settings text-white h-100"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("\n                                    Einstellungen\n                                ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[null!==t.pollData.info.description?s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.options.showPollDesc,expression:"options.showPollDesc"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"options-poll-description"},domProps:{checked:Array.isArray(t.options.showPollDesc)?t._i(t.options.showPollDesc,null)>-1:t.options.showPollDesc},on:{change:function(e){var s=t.options.showPollDesc,n=e.target,a=!!n.checked;if(Array.isArray(s)){var i=null,o=t._i(s,i);n.checked?o<0&&t.$set(t.options,"showPollDesc",s.concat([i])):o>-1&&t.$set(t.options,"showPollDesc",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.options,"showPollDesc",a)}}}),s("label",{staticClass:"form-check-label",attrs:{for:"options-poll-description"}},[t._v("\n                                                Beschreibung der Umfrage anzeigen?\n                                            ")])]):t._e(),s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.options.details,expression:"options.details"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"options-detail"},domProps:{checked:Array.isArray(t.options.details)?t._i(t.options.details,null)>-1:t.options.details},on:{change:function(e){var s=t.options.details,n=e.target,a=!!n.checked;if(Array.isArray(s)){var i=null,o=t._i(s,i);n.checked?o<0&&t.$set(t.options,"details",s.concat([i])):o>-1&&t.$set(t.options,"details",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.options,"details",a)}}}),s("label",{staticClass:"form-check-label",attrs:{for:"options-detail"}},[t._v("\n                                                Antwort-Details anzeigen\n                                            ")])])]),s("div",{staticClass:"col-md-6 text-right"},[s("button",{staticClass:"btn btn-dark",on:{click:t.downloadScreenshot}},[s("fa-icon",{attrs:{icon:"camera"}}),t._v("\n                                            Screenshot herunterladen\n                                        ")],1),t._v("\n                                         \n                                        "),s("button",{staticClass:"btn btn-dark",on:{click:t.reset}},[s("fa-icon",{attrs:{icon:"undo"}}),t._v("\n                                            Andere Umfrage auswerten\n                                        ")],1)])])])])])]),s("div",{staticClass:"row mt-3 text-center pb-2"},[s("div",{staticClass:"col-md-3"},[s("div",{staticClass:"card bg-settings text-white h-100"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("\n                                    Farbe für Label\n                                ")]),s("swatches",{attrs:{"show-fallback":"","background-color":"#343A40","row-length":6},model:{value:t.options.labelFontColor,callback:function(e){t.$set(t.options,"labelFontColor",e)},expression:"options.labelFontColor"}})],1),s("div",{staticClass:"card-footer"},[s("button",{staticClass:"btn btn-sm btn-dark mouseHover",on:{click:function(e){t.options.labelFontColor="#fff"}}},[t._v("Auf Standard setzen")])])])]),s("div",{staticClass:"col-md-3"},[s("div",{staticClass:"card bg-settings text-white h-100"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("\n                                    Balkenfarbe\n                                ")]),s("swatches",{attrs:{"show-fallback":"","background-color":"#343A40","row-length":6},model:{value:t.options.barColor,callback:function(e){t.$set(t.options,"barColor",e)},expression:"options.barColor"}}),s("span",{staticClass:"text-muted"},[t._v("Nur Balkendiagramm")])],1),s("div",{staticClass:"card-footer"},[s("button",{staticClass:"btn btn-sm btn-dark mouseHover",on:{click:function(e){t.options.barColor="#f87979"}}},[t._v("Auf Standard setzen")])])])]),s("div",{staticClass:"col-md-3"},[s("div",{staticClass:"card bg-settings text-white h-100"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("\n                                    Hintergrundfarbe\n                                ")]),s("swatches",{attrs:{"show-fallback":"","background-color":"#343A40","row-length":6},model:{value:t.options.bgColor,callback:function(e){t.$set(t.options,"bgColor",e)},expression:"options.bgColor"}})],1),s("div",{staticClass:"card-footer"},[s("button",{staticClass:"btn btn-sm btn-dark mouseHover",on:{click:function(e){t.options.bgColor="#161618"}}},[t._v("Auf Standard setzen")])])])]),s("div",{staticClass:"col-md-3"},[s("div",{staticClass:"card bg-settings text-white h-100"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("\n                                    Titelfarbe\n                                ")]),s("swatches",{attrs:{"show-fallback":"","background-color":"#343A40","row-length":6},model:{value:t.options.titleColor,callback:function(e){t.$set(t.options,"titleColor",e)},expression:"options.titleColor"}})],1),s("div",{staticClass:"card-footer"},[s("button",{staticClass:"btn btn-sm btn-dark mouseHover",on:{click:function(e){t.options.titleColor="#ee4d2e"}}},[t._v("Auf Standard setzen")])])])])])])]):t._e()]),t.pollDataLoaded?s("div",{staticClass:"container widthLimit"},[s("div",{staticClass:"row mt-4"},[t.rendered?s("div",{staticClass:"col-md-12",staticStyle:{width:"1052px","margin-left":"auto","margin-right":"auto"},style:{backgroundColor:t.options.bgColor},attrs:{id:"screenshotContainer"}},[t.pollData.info?s("poll-info",{attrs:{data:t.pollData.info}}):t._e(),s("hr"),t._l(t.questions,function(t){return s("question",{key:t.id,attrs:{data:t}})})],2):t._e()])]):s("div",{staticClass:"container"},[s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col-md-12 text-center"},[t._m(2),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("button",{staticClass:"btn btn-secondary",on:{click:function(e){t.showTutorial=!t.showTutorial}}},[t._v("\n                            Erklärungen / Turorial "+t._s(t.showTutorial?"ausblenden":"einblenden")+"\n                        ")])])]),t.showTutorial?s("div",{staticClass:"row mt-4"},[t._m(3)]):t._e(),s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col-md-12"},[s("label",{attrs:{for:"jsonInput"}},[t._v("Füge hier deinen JSON-Code von pr0p0ll ein:")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.pollDataString,expression:"pollDataString"}],staticClass:"form-control",attrs:{id:"jsonInput",cols:"30",rows:"10"},domProps:{value:t.pollDataString},on:{input:function(e){e.target.composing||(t.pollDataString=e.target.value)}}}),s("button",{staticClass:"btn btn-primary mt-4",on:{click:t.loadPollData}},[t._v("Laden")]),s("button",{staticClass:"btn btn-outline-dark mt-4 ml-2 text-white",on:{click:t.loadDemo}},[t._v("Demo laden")])])])])])])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-white bg-primary"},[s("div",{staticClass:"container text-center"},[s("strong",[t._v("UPDATE:")]),t._v(" \n            "),s("span",[t._v("Ab sofort sollten die Screenshots nicht mehr breiter als 1052 Pixel sein. Endlich richtiges Grau!")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("span",[t._v("Fragen? Anregungen? Schreib mir: "),n("a",{attrs:{href:"https://pr0gramm.com/user/PoTTii",target:"_blank"}},[t._v("@PoTTii")])])]),n("div",{staticClass:"col-md-6 text-right"},[t._v("\n                    v1.9.3  \n                    "),n("a",{attrs:{href:"https://github.com/Scarwolf/pr0p0ll-viewer",target:"_blank"}},[n("img",{attrs:{src:s("0c50"),alt:"Repo auf GitHub"}})])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("img",{staticClass:"img-fluid",attrs:{src:s("cf05"),alt:"pr0p0ll-Viewer Logo"}}),n("h1",[t._v("Pr0p0ll Viewer")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-8 offset-md-2 text-center instructions"},[s("h3",[t._v("Howto: JSON-Code von pr0p0ll kopieren")]),s("div",{staticClass:"embed-responsive embed-responsive-16by9 mb-3"},[s("video",{staticClass:"embed-responsive-item",attrs:{controls:""}},[s("source",{attrs:{src:"tutorial.mp4",type:"video/mp4"}})])]),s("p",[t._v("Um dieses Tool nutzen zu können musst du nachdem deine Umfrage beendet ist den JSON-Code kopieren.")]),s("p",[t._v('Du findest diesen indem du bei pr0p0ll auf "Eigene" gehst und anschliessend bei der gewünschten Umfrage auf "Ergebnisse ansehen".')]),s("p",[t._v('Klicke danach auf "Ansehen" neben "Ergebnis-JSON" und kopiere den ganzen Code den du siehst mit STRG + A und STRG + C.')]),s("p",[t._v("Füge den Code im unteren Feld ein um deine Ergebnisse in Charts zu sehen.")])])}],o=s("7618"),r=(s("96cf"),s("3b8d")),c=s("f499"),l=s.n(c),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("h1",{style:t.$parent.setTitleColor},[t._v("pr0p0ll Umfragenauswertung")]),s("h2",{style:t.$parent.setTitleColor},[s("span",{staticClass:"text-white"},[t._v("Thema:")]),t._v("\n        "+t._s(t.decodeHTML(t.data.title))+"\n    ")]),t.pollOptions.showPollDesc&&t.hasDescription?s("p",[t._v("\n        "+t._s(t.decodeHTML(t.data.description))+"\n    ")]):t._e()])},u=[],h={name:"pollinfo",props:["data"],computed:{pollOptions:function(){return this.$parent.options},hasDescription:function(){return null!==this.data.description}}},p=h,b=s("2877"),f=Object(b["a"])(p,d,u,!1,null,null,null),m=f.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-5"},[s("h3",{staticClass:"text-center",style:t.$parent.setTitleColor},[t._v("Frage: "+t._s(this.decodeHTML(t.data.title)))]),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-md-12 text-center"},[s("h6",[t._v("\n                Zu dieser Frage wurden "+t._s(t.totalParticipants)+" Stimmen abgegeben.\n                "),"single"===t.data.answertype?s("span",[t._v("(Eine Stimme pro User)")]):t._e(),"multi"===t.data.answertype?s("span",[t._v("(Mehrere Stimmen pro User)")]):t._e()])])]),s("div",{staticClass:"row mt-3",attrs:{"data-html2canvas-ignore":""}},[s("div",{staticClass:"col-md-12 mb-4"},[s("div",{staticClass:"card bg-settings text-white"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("h5",{staticClass:"card-title"},[t._v("Einstellungen")]),t.hasDescription?s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.questionOptions.showDescription,expression:"questionOptions.showDescription"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"options-detail-"+t.data.id},domProps:{checked:Array.isArray(t.questionOptions.showDescription)?t._i(t.questionOptions.showDescription,null)>-1:t.questionOptions.showDescription},on:{change:function(e){var s=t.questionOptions.showDescription,n=e.target,a=!!n.checked;if(Array.isArray(s)){var i=null,o=t._i(s,i);n.checked?o<0&&t.$set(t.questionOptions,"showDescription",s.concat([i])):o>-1&&t.$set(t.questionOptions,"showDescription",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.questionOptions,"showDescription",a)}}}),s("label",{staticClass:"form-check-label",attrs:{for:"options-detail-"+t.data.id}},[t._v("\n                                    Beschreibung dieser Frage anzeigen?\n                                ")])]):s("i",[t._v("Keine besonderen Einstellungen verfügbar.")])]),s("div",{staticClass:"col-md-6 text-right"},[s("h5",{staticClass:"card-title"},[t._v("Diagramm-Typ")]),s("div",{staticClass:"btn-group"},[s("button",{staticClass:"btn btn-sm",class:t.getButtonClassForChartType("pie"),attrs:{disabled:t.isPieChartDisabled,title:"Kuchendiagramm"},on:{click:function(e){return t.setChartType("pie")}}},[s("fa-icon",{attrs:{icon:"chart-pie"}})],1),s("button",{staticClass:"btn btn-sm",class:t.getButtonClassForChartType("bar"),attrs:{title:"Balkendiagramm"},on:{click:function(e){return t.setChartType("bar")}}},[s("fa-icon",{attrs:{icon:"chart-bar"}})],1)]),t.isPieChartDisabled?s("span",{staticClass:"text-muted"},[s("br"),t._v("\n                        Kuchendiagramm nur verfügbar bei maximal 8 Antwortmöglichkeiten.\n                    ")]):t._e()])]),s("div",{staticClass:"row mt-2"},[s("div",{staticClass:"col-md-12 text-center"},[s("h5",[t._v("Antwortmöglichkeiten anzeigen/ausblenden")]),t._l(t.answers,function(e){return s("button",{staticClass:"btn btn-sm mr-1 mt-1",class:t.getHideAnswerButtonClass(e),on:{click:function(s){return t.toggleShowAnswer(e)}}},[t._v("\n                                "+t._s(e[1].title)+"\n                            ")])})],2)])])])])]),t.questionOptions.showDescription?s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 text-center"},[t._v("\n            "+t._s(t.getDescription)+"\n        ")])]):t._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:t.options.details,expression:"options.details"}],staticClass:"row mt-3"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"detailBox"},[t._m(0),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-2 offset-md-3"},[s("strong",{staticClass:"text-primary"},[t._v("Nach Geschlecht:")]),s("br"),t._l(t.participantsByGender,function(e,n){return s("dl",{key:n,staticClass:"row mt-0 mb-0"},[s("dt",{staticClass:"col-md-6"},[t._v("\n                                "+t._s(n.toUpperCase())+":\n                            ")]),s("dd",{staticClass:"col-md-6 text-right mt-0 mb-0"},[s("span",{staticClass:"col-sm-6"},[t._v(t._s(e))])])])})],2),s("div",{staticClass:"col-md-2"},[s("strong",{staticClass:"text-primary"},[t._v("Nach Altersgruppe:")]),s("br"),t._l(t.participantsByAge,function(e,n){return s("dl",{key:n,staticClass:"row mt-0 mb-0"},[s("dt",{staticClass:"col-md-6"},[t._v("\n                                "+t._s(t.decodeHTML(n))+":\n                            ")]),s("dd",{staticClass:"col-md-6 text-right mt-0 mb-0"},[s("span",{staticClass:"col-sm-6"},[t._v(t._s(e))])])])})],2),s("div",{staticClass:"col-md-2"},[s("strong",{staticClass:"text-primary"},[t._v("Nach Land:")]),s("br"),t._l(t.participantsByCountry,function(e,n){return s("dl",{key:n,staticClass:"row mt-0 mb-0"},[s("dt",{staticClass:"col-md-6"},[t._v("\n                                "+t._s(n.toUpperCase())+":\n                            ")]),s("dd",{staticClass:"col-md-6 text-right mt-0 mb-0"},[s("span",{staticClass:"col-sm-6"},[t._v(t._s(e))])])])})],2)])])])]),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-md-12"},[s("div",{directives:[{name:"show",rawName:"v-show",value:"bar"===t.getChartType(),expression:"getChartType() === 'bar'"}]},[s("bar",{attrs:{"chart-data":t.chartData,labelFontColor:this.$parent.options.labelFontColor,height:500,width:1052}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:"pie"===t.getChartType()&&!t.isPieChartDisabled,expression:"getChartType() === 'pie' && !isPieChartDisabled"}]},[s("pie",{attrs:{"chart-data":t.chartDataPie,labelFontColor:this.$parent.options.labelFontColor,height:500,width:1052}})],1)])])])},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 text-center"},[s("h4",[t._v("Abgegebene Stimmen")])])])}],g=s("a4bb"),w=s.n(g),j=s("768b"),k=s("2d1f"),y=s.n(k),D=(s("ac6a"),s("28a5"),s("1fca")),_=(s("8521"),D["c"].reactiveProp),A={extends:D["a"],mixins:[_],props:["chartdata","labelFontColor","hiddenAnswers"],data:function(){return{options:{plugins:{labels:{render:"value",fontColor:this.labelFontColor}},legend:{labels:{fontColor:this.labelFontColor}},scales:{xAxes:[{ticks:{autoSkip:!1,maxTicksLimit:26,fontColor:this.labelFontColor}}],yAxes:[{ticks:{fontColor:this.labelFontColor,suggestedMin:0}}]},maintainAspectRatio:!0,responsive:!0}}},mounted:function(){this.renderChart(this.chartdata,this.options)}},x=D["c"].reactiveProp,T={extends:D["b"],mixins:[x],props:["chartdata","labelFontColor"],data:function(){return{options:{plugins:{labels:{render:"value",fontColor:this.labelFontColor}},legend:{labels:{fontColor:this.labelFontColor}},scales:{},maintainAspectRatio:!0,responsive:!0}}},mounted:function(){this.renderChart(this.chartdata,this.options)}},S={name:"question",props:["data"],components:{Bar:A,Pie:T},data:function(){return{chartData:null,chartDataPie:null,questionOptions:{showDescription:!0,chartType:"bar"},hiddenAnswers:[]}},mounted:function(){this.renderChart()},methods:{toggleShowAnswer:function(t){var e=this.hiddenAnswers.indexOf(t);-1===e?this.hiddenAnswers.push(t):this.hiddenAnswers=this.hiddenAnswers.filter(function(e){return e!==t}),this.$nextTick(function(){this.renderChart()})},isAnswerHidden:function(t){return-1!==this.hiddenAnswers.indexOf(t)},getHideAnswerButtonClass:function(t){return this.isAnswerHidden(t)?"btn-dark":"btn-primary"},getButtonClassForChartType:function(t){return"pie"===t&&this.isPieChartDisabled?"btn-outline-primary disabled":this.getChartType()===t?"btn-primary":"btn-outline-primary"},setChartType:function(t){this.questionOptions.chartType=t},getChartType:function(){return this.questionOptions.chartType},renderChart:function(){this.chartData={labels:this.chartLabels(),datasets:[this.chartDataSets]},this.chartDataPie={labels:this.chartLabels("pie"),datasets:[this.chartDataSetsForPieChart]}},formatLabel:function(t,e){t=this.decodeHTML(t);var s=[],n=t.split(" "),a="";return n.forEach(function(t,i){if(a.length>0){var o=a+" "+t;if(!(o.length>e))return i==n.length-1?void s.push(o):void(a=o);s.push(a),a=""}i!=n.length-1&&t.length<e?a=t:s.push(t)}),s},chartLabels:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bar",s=this;return this.answers.filter(function(t){if(!s.isAnswerHidden(t))return t}).map(function(n){return"bar"!==e?t.decodeHTML(n[1].title):s.formatLabel(t.decodeHTML(n[1].title),15)})}},computed:{isPieChartDisabled:function(){return this.answers.length>8},hasDescription:function(){return null!==this.data.description},getDescription:function(){return this.data.description},options:function(){return this.$parent.options},totalParticipants:function(){return this.answers.map(function(t){return t[1].result.total}).reduce(function(t,e){return t+e},0)},participantsByAge:function(){return this.answers.map(function(t){return t[1].result.age}).reduce(function(t,e){return y()(e).forEach(function(e){var s=Object(j["a"])(e,2),n=s[0],a=s[1];return t[n]=a+(t[n]||0)}),t},{})},participantsByCountry:function(){return this.answers.map(function(t){return t[1].result.country}).reduce(function(t,e){return y()(e).forEach(function(e){var s=Object(j["a"])(e,2),n=s[0],a=s[1];return t[n]=a+(t[n]||0)}),t},{})},participantsByGender:function(){return this.answers.map(function(t){return t[1].result.gender}).reduce(function(t,e){return y()(e).forEach(function(e){var s=Object(j["a"])(e,2),n=s[0],a=s[1];return t[n]=a+(t[n]||0)}),t},{})},answers:function(){var t=JSON.parse(l()(this.data)),e=["answertype","description","id","index","title"];return e.forEach(function(e){delete t[e]}),w()(t).map(function(e){return[e,t[e]]})},chartDataSets:function(){var t=this,e=this,s=this.answers.filter(function(t){if(!e.isAnswerHidden(t))return t}).map(function(e){return t.decodeHTML(e[1].result.total)});return{label:"Stimmen",backgroundColor:this.options.barColor,data:s}},chartDataSetsForPieChart:function(){var t=this,e=this,s=this.answers.filter(function(t){if(!e.isAnswerHidden(t))return t}).map(function(e){return t.decodeHTML(e[1].result.total)});return{label:"Stimmen",backgroundColor:["#ee4d2e","#10366f","#bfbc06","#008fff","#ff0082","#1db992","#c52b2f","#addc8d"],data:s}}}},P=S,O=Object(b["a"])(P,v,C,!1,null,"0e216c7d",null),E=O.exports,F=s("951f"),N=s.n(F),J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"current-color",style:"background-color: "+t.colorValue,on:{click:function(e){return t.togglePicker()}}},[t.displayPicker?s("chrome-picker",{attrs:{value:t.colors},on:{input:t.updateFromPicker}}):t._e()],1)},M=[],B=s("e814"),z=s.n(B),H=(s("6b54"),s("a481"),s("e21f")),L={name:"ColorPicker",components:{ChromePicker:H["a"]},props:["color"],data:function(){return{colors:{hex:"#000000"},colorValue:"",displayPicker:!1}},mounted:function(){this.setColor(this.color||"#ffffff")},methods:{setColor:function(t){this.updateColors(t),this.colorValue=t},updateColors:function(t){if("#"===t.slice(0,1))this.colors={hex:t};else if("rgba"===t.slice(0,4)){var e=t.replace(/^rgba?\(|\s+|\)$/g,"").split(","),s="#"+((1<<24)+(z()(e[0])<<16)+(z()(e[1])<<8)+z()(e[2])).toString(16).slice(1);this.colors={hex:s,a:e[3]}}},showPicker:function(){document.addEventListener("click",this.documentClick),this.displayPicker=!0},hidePicker:function(){document.removeEventListener("click",this.documentClick),this.displayPicker=!1},togglePicker:function(){this.displayPicker?this.hidePicker():this.showPicker()},updateFromPicker:function(t){this.colors=t,1===t.rgba.a?this.colorValue=t.hex:this.colorValue="rgba("+t.rgba.r+", "+t.rgba.g+", "+t.rgba.b+", "+t.rgba.a+")"},documentClick:function(t){var e=this.$refs.colorpicker,s=t.target;e===s||e.contains(s)||this.hidePicker()}},watch:{colorValue:function(t){t&&(this.updateColors(t),this.$emit("input",t))}}},I=L,U=(s("9c6a"),Object(b["a"])(I,J,M,!1,null,"0083ff93",null)),G=U.exports,R=s("bc3a"),V=s.n(R),Z=s("468d"),W=s.n(Z),$={name:"app",components:{pollInfo:m,question:E,ColorPicker:G,Swatches:W.a},data:function(){return{showTutorial:!1,pollData:{},pollDataString:"",pollDataLoaded:!1,options:{showPollDesc:!0,details:!1,labelFontColor:"#fff",bgColor:"#161618",titleColor:"#ee4d2e",barColor:"#ee4d2e"},screenShotToDownload:"",rendered:!1}},computed:{questions:function(){var t=JSON.parse(l()(this.pollData));return delete t.info,t},labelColorComputed:function(){return this.options.labelFontColor},barColorComputed:function(){return this.options.barColor},setTitleColor:function(){return"color: "+this.options.titleColor+";"}},watch:{labelColorComputed:function(){this.rerender()},barColorComputed:function(){this.rerender()}},methods:{loadDemo:function(){var t=this;V.a.get("demo.json").then(function(e){t.pollDataString=l()(e.data),t.loadPollData()}).catch(function(t){alert("Demo konnte nicht geladen werden. Sorry ¯\\_(ツ)_/¯")})},rerender:function(){var t=this;this.rendered=!1,this.$nextTick(function(){t.rendered=!0})},reset:function(){this.pollData={},this.pollDataString="",this.pollDataLoaded=!1,this.rendered=!1,this.screenShotToDownload=""},downloadScreenshot:function(){var t=this;N()(document.querySelector("#screenshotContainer"),{backgroundColor:this.options.bgColor}).then(function(e){t.screenShotToDownload=e.toDataURL("image/png"),VoerroModal.show("screenModal")})},checkPollData:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.pollDataString.length<1)&&this.isValidJson(this.pollDataString)){t.next=2;break}return t.abrupt("return",!1);case 2:return this.pollData=JSON.parse(this.pollDataString),t.abrupt("return",!0);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),loadPollData:function(){var t=this,e=this;return this.checkPollData().then(function(){var e=t.pollData;if("object"===Object(o["a"])(e))return t.pollDataLoaded=!0,t.rendered=!0,!0;throw"error"}).catch(function(){return e.reportInvalidJson()})},reportInvalidJson:function(){throw this.pollDataString="",this.pollDataLoaded=!1,alert("Dein eingefügte JSON Code ist ungültig. Vergewissere dich dass du ALLES kopiert hast."),"error"},isValidJson:function(t){try{JSON.parse(t)}catch(e){return this.reportInvalidJson(),!1}return!0}}},q=$,Q=Object(b["a"])(q,a,i,!1,null,null,null),Y=Q.exports,X=s("ecee"),K=s("ad3d"),tt=s("c074"),et=(s("2fac"),s("ada9"));X["c"].add(tt["b"],tt["c"],tt["a"],tt["d"]),n["a"].component("fa-icon",K["a"]),n["a"].config.productionTip=!1,n["a"].mixin({methods:{decodeHTML:function(t){var e=document.createElement("textarea");return e.innerHTML=t,e.value}}}),n["a"].component("modal",et["a"]),window.VoerroModal=et["b"],new n["a"]({render:function(t){return t(Y)}}).$mount("#app")},"9c6a":function(t,e,s){"use strict";var n=s("b562"),a=s.n(n);a.a},b562:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.40f4cca3.png"}});
//# sourceMappingURL=app.336fa7e6.js.map