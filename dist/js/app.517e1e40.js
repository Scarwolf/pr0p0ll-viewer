(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)i=o[u],n[i]&&f.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},n={app:0},r=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/pr0p0ll-viewer/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return s(e)}function r(t){var e=a[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id="4678"},"4f87":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d"),s("4f87");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"text-white bg-dark p-2 text-center"},[t._v("\n        Fragen? Anregungen? Schreib mir: "),s("a",{attrs:{href:"https://pr0gramm.com/user/PoTTii",target:"_blank"}},[t._v("@PoTTii")]),t.pollDataLoaded?s("div",[s("div",{staticClass:"container"},[s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"btn-group"},[s("button",{staticClass:"btn btn-primary",on:{click:t.reset}},[t._v("Andere Umfrage auswerten")]),s("button",{staticClass:"btn btn-primary",on:{click:t.downloadScreenshot}},[t._v("Screenshot herunterladen")])])]),s("div",{staticClass:"col-md-6 text-right"},[s("strong",[t._v("Einstellungen:")]),s("br"),s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.options.details,expression:"options.details"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"options-detail"},domProps:{checked:Array.isArray(t.options.details)?t._i(t.options.details,null)>-1:t.options.details},on:{change:function(e){var s=t.options.details,a=e.target,n=!!a.checked;if(Array.isArray(s)){var r=null,i=t._i(s,r);a.checked?i<0&&t.$set(t.options,"details",s.concat([r])):i>-1&&t.$set(t.options,"details",s.slice(0,i).concat(s.slice(i+1)))}else t.$set(t.options,"details",n)}}}),s("label",{staticClass:"form-check-label",attrs:{for:"options-detail"}},[t._v("\n                                Antwort-Details anzeigen\n                            ")])])])])])]):t._e()]),s("div",{staticClass:"container"},[t.pollDataLoaded?s("div",[s("div",{staticClass:"row mt-4",attrs:{id:"screenshotContainer"}},[s("div",{staticClass:"col-md-12"},[t.pollData.info?s("poll-info",{attrs:{data:t.pollData.info}}):t._e(),s("hr"),t._l(t.questions,function(t){return s("question",{key:t.id,attrs:{data:t}})})],2)])]):s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col-md-12"},[s("h1",{staticClass:"text-center"},[t._v("Pr0p0ll Viewer")]),s("h3",[t._v("Howto: JSON-Code von pr0p0ll kopieren")]),s("p",[t._v("Um dieses Tool nutzen zu können musst du nachdem deine Umfrage beendet ist den JSON-Code kopieren.")]),s("p",[t._v('Du findest diesen indem du bei pr0p0ll auf "Eigene" gehst und anschliessend bei der gewünschten Umfrage auf "Ergebnisse ansehen".')]),s("p",[t._v('Klicke danach auf "Ergebnisse ansehen" und kopiere den ganzen Code den du siehst mit STRG + A und STRG + C.')]),s("p",[t._v("Füge den Code im unteren Feld ein um deine Ergebnisse in Charts zu sehen.")]),s("hr"),s("label",{attrs:{for:"jsonInput"}},[t._v("Füge hier deinen JSON-Code von pr0p0ll ein:")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.pollDataString,expression:"pollDataString"}],staticClass:"form-control",attrs:{id:"jsonInput",cols:"30",rows:"10"},domProps:{value:t.pollDataString},on:{input:function(e){e.target.composing||(t.pollDataString=e.target.value)}}}),s("button",{staticClass:"btn btn-primary mt-4",on:{click:t.loadPollData}},[t._v("Laden")])])])])])},r=[],i=s("7618"),o=(s("96cf"),s("3b8d")),c=s("f499"),l=s.n(c),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("h1",[t._v("Pr0p0ll Umfragenauswertung")]),s("h2",[s("span",{staticClass:"text-white"},[t._v("Thema:")]),t._v("\n        "+t._s(t.decodeHTML(t.data.title))+"\n    ")]),s("p",[t._v("\n        "+t._s(t.decodeHTML(t.data.description))+"\n    ")])])},u=[],f={name:"pollinfo",props:["data"]},p=f,h=s("2877"),b=Object(h["a"])(p,d,u,!1,null,"9d55237c",null),m=b.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h3",{staticClass:"text-center"},[t._v("Frage: "+t._s(this.decodeHTML(t.data.title)))]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.options.details,expression:"options.details"}],staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("h6",{staticClass:"text-center"},[t._v("\n                        Zu dieser Frage wurden "+t._s(t.totalParticipants)+" Stimmen abgegeben.\n                    ")])])]),s("hr"),s("div",{staticClass:"detailBox"},[t._m(0),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-2 offset-md-3"},[s("strong",{staticClass:"text-primary"},[t._v("Nach Geschlecht:")]),s("br"),t._l(t.participantsByGender,function(e,a){return s("dl",{key:a,staticClass:"row mt-0 mb-0"},[s("dt",{staticClass:"col-md-6"},[t._v("\n                                "+t._s(a.toUpperCase())+":\n                            ")]),s("dd",{staticClass:"col-md-6 text-right mt-0 mb-0"},[s("span",{staticClass:"col-sm-6"},[t._v(t._s(e))])])])})],2),s("div",{staticClass:"col-md-2"},[s("strong",{staticClass:"text-primary"},[t._v("Nach Altersgruppe:")]),s("br"),t._l(t.participantsByAge,function(e,a){return s("dl",{key:a,staticClass:"row mt-0 mb-0"},[s("dt",{staticClass:"col-md-6"},[t._v("\n                                "+t._s(t.decodeHTML(a))+":\n                            ")]),s("dd",{staticClass:"col-md-6 text-right mt-0 mb-0"},[s("span",{staticClass:"col-sm-6"},[t._v(t._s(e))])])])})],2),s("div",{staticClass:"col-md-2"},[s("strong",{staticClass:"text-primary"},[t._v("Nach Land:")]),s("br"),t._l(t.participantsByCountry,function(e,a){return s("dl",{key:a,staticClass:"row mt-0 mb-0"},[s("dt",{staticClass:"col-md-6"},[t._v("\n                                "+t._s(a.toUpperCase())+":\n                            ")]),s("dd",{staticClass:"col-md-6 text-right mt-0 mb-0"},[s("span",{staticClass:"col-sm-6"},[t._v(t._s(e))])])])})],2)])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("bar",{attrs:{"chart-data":t.chartData}})],1)])])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 text-center"},[s("h4",[t._v("Abgegebene Stimmen")])])])}],g=s("a4bb"),C=s.n(g),_=s("768b"),w=s("2d1f"),y=s.n(w),k=(s("ac6a"),s("28a5"),s("1fca")),x=k["b"].reactiveProp,D={extends:k["a"],mixins:[x],props:["chartdata","options"],mounted:function(){this.renderChart(this.chartdata,this.options)}},S={name:"question",props:["data"],components:{Bar:D},data:function(){return{chartData:null}},mounted:function(){this.renderChart()},methods:{renderChart:function(){this.chartData={labels:this.chartLabels,datasets:[this.chartDataSets]}},getRandomColor:function(){for(var t="0123456789ABCDEF",e="#",s=0;s<6;s++)e+=t[Math.floor(16*Math.random())];return e},formatLabel:function(t,e){t=this.decodeHTML(t);var s=[],a=t.split(" "),n="";return a.forEach(function(t,r){if(n.length>0){var i=n+" "+t;if(!(i.length>e))return r==a.length-1?void s.push(i):void(n=i);s.push(n),n=""}r!=a.length-1&&t.length<e?n=t:s.push(t)}),s}},computed:{options:function(){return this.$parent.options},totalParticipants:function(){return this.answers.map(function(t){return t[1].result.total}).reduce(function(t,e){return t+e},0)},participantsByAge:function(){return this.answers.map(function(t){return t[1].result.age}).reduce(function(t,e){return y()(e).forEach(function(e){var s=Object(_["a"])(e,2),a=s[0],n=s[1];return t[a]=n+(t[a]||0)}),t},{})},participantsByCountry:function(){return this.answers.map(function(t){return t[1].result.country}).reduce(function(t,e){return y()(e).forEach(function(e){var s=Object(_["a"])(e,2),a=s[0],n=s[1];return t[a]=n+(t[a]||0)}),t},{})},participantsByGender:function(){return this.answers.map(function(t){return t[1].result.gender}).reduce(function(t,e){return y()(e).forEach(function(e){var s=Object(_["a"])(e,2),a=s[0],n=s[1];return t[a]=n+(t[a]||0)}),t},{})},answers:function(){var t=JSON.parse(l()(this.data)),e=["answertype","description","id","index","title"];return e.forEach(function(e){delete t[e]}),C()(t).map(function(e){return[e,t[e]]})},chartLabels:function(){var t=this,e=this;return this.answers.map(function(s){return e.formatLabel(t.decodeHTML(s[1].title),15)})},chartDataSets:function(){var t=this,e=this.answers.map(function(e){return t.decodeHTML(e[1].result.total)});return{label:"Stimmen",backgroundColor:this.options.randomColors?this.getRandomColor():"#f87979",data:e}}}},O=S,z=Object(h["a"])(O,j,v,!1,null,"84c3e98a",null),L=z.exports,T=s("951f"),E=s.n(T),P={name:"app",components:{pollInfo:m,question:L},data:function(){return{pollData:{},pollDataString:"",pollDataLoaded:!1,options:{details:!1}}},computed:{questions:function(){var t=JSON.parse(l()(this.pollData));return delete t.info,t}},methods:{reset:function(){this.pollData={},this.pollDataString="",this.pollDataLoaded=!1},downloadScreenshot:function(){E()(document.querySelector("#screenshotContainer"),{backgroundColor:"#161618"}).then(function(t){var e=document.createElement("a");e.download="auswertung.png",e.href=t.toDataURL("image/png"),e.click()})},checkPollData:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.pollDataString.length<1)&&this.isValidJson(this.pollDataString)){t.next=2;break}return t.abrupt("return",!1);case 2:return this.pollData=JSON.parse(this.pollDataString),t.abrupt("return",!0);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),loadPollData:function(){var t=this,e=this;return this.checkPollData().then(function(){var e=t.pollData;if("object"===Object(i["a"])(e))return t.pollDataLoaded=!0,!0;throw"error"}).catch(function(){return e.reportInvalidJson()})},reportInvalidJson:function(){throw this.pollDataString="",this.pollDataLoaded=!1,alert("Dein eingefügte JSON Code ist ungültig. Vergewissere dich dass du ALLES kopiert hast."),"error"},isValidJson:function(t){try{JSON.parse(t)}catch(e){return this.reportInvalidJson(),!1}return!0}}},M=P,N=Object(h["a"])(M,n,r,!1,null,null,null),J=N.exports;a["a"].config.productionTip=!1,a["a"].mixin({methods:{decodeHTML:function(t){var e=document.createElement("textarea");return e.innerHTML=t,e.value}}}),new a["a"]({render:function(t){return t(J)}}).$mount("#app")}});
//# sourceMappingURL=app.517e1e40.js.map