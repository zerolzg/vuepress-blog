(window.webpackJsonp=window.webpackJsonp||[]).push([[7,9],{489:function(t,e,n){},520:function(t,e,n){"use strict";var a=n(489);n.n(a).a},521:function(t,e,n){},529:function(t,e,n){"use strict";n.r(e);var a=n(50),u=n(2),o={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}},s={data:function(){return{rawPopupConfig:{message:"发现新内容可用",buttonText:"刷新"},updateEvent:null}},created:function(){a.a.$on("sw-updated",this.onSWUpdated),!0==={message:"发现新内容可用",buttonText:"刷新"}&&(this.rawPopupConfig=o)},computed:{popupConfig:function(){return Object(u.h)(this,this.rawPopupConfig)},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||o["/"].message},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||o["/"].buttonText}},methods:{onSWUpdated:function(t){this.updateEvent=t},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then((function(){location.reload(!0)})),this.updateEvent=null)}}},i=(n(520),n(4)),p=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v(t._s(t.buttonText))])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"ef6a919a",null);e.default=p.exports},568:function(t,e,n){"use strict";var a=n(521);n.n(a).a},574:function(t,e,n){"use strict";n.r(e);var a={components:{SWUpdatePopup:n(529).default}},u=(n(568),n(4)),o=Object(u.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SWUpdatePopup",{scopedSlots:t._u([{key:"default",fn:function(e){e.enabled;var a=e.reload,u=e.message,o=e.buttonText;return[n("div",{staticClass:"my-sw-update-popup"},[t._v("\n      "+t._s(u)),n("br"),t._v(" "),n("button",{on:{click:a}},[t._v(t._s(o))])])]}}])})}),[],!1,null,null,null);e.default=o.exports}}]);