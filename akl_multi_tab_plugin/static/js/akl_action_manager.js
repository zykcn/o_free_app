var a0_0x4dd3e4=a0_0x200e;function a0_0x200e(_0xa88b66,_0x3d6a39){var _0x39ed80=a0_0x39ed();return a0_0x200e=function(_0x200e34,_0x5a54ed){_0x200e34=_0x200e34-0x78;var _0x310d8d=_0x39ed80[_0x200e34];return _0x310d8d;},a0_0x200e(_0xa88b66,_0x3d6a39);}(function(_0x2bc626,_0x52c15c){var _0x43ee76=a0_0x200e,_0x50ca6b=_0x2bc626();while(!![]){try{var _0x5c2491=-parseInt(_0x43ee76(0xa0))/0x1+-parseInt(_0x43ee76(0x7d))/0x2+-parseInt(_0x43ee76(0xbf))/0x3+parseInt(_0x43ee76(0x86))/0x4*(parseInt(_0x43ee76(0x8d))/0x5)+parseInt(_0x43ee76(0x7f))/0x6*(parseInt(_0x43ee76(0xc2))/0x7)+parseInt(_0x43ee76(0x99))/0x8*(parseInt(_0x43ee76(0xc1))/0x9)+parseInt(_0x43ee76(0xb6))/0xa;if(_0x5c2491===_0x52c15c)break;else _0x50ca6b['push'](_0x50ca6b['shift']());}catch(_0x4dc191){_0x50ca6b['push'](_0x50ca6b['shift']());}}}(a0_0x39ed,0x6db33),odoo[a0_0x4dd3e4(0x88)]('akl_multi_tab_plugin.ActionManager',function(require){'use strict';var _0x153ee6=a0_0x4dd3e4;var _0xcf9532=require('web.core'),_0x23da98=require('web.ActionManager'),_0x5cff6f=require('akl_multi_tab_plugin.multi_tab_page'),_0xb961e=require('web.dom'),_0x1b3df5=require('web.Widget'),_0x55fd0a=require('web.AbstractAction');return _0xcf9532=require('web.core'),_0xb961e=require('web.dom'),_0x1b3df5=require('web.Widget'),_0xcf9532['_t'],(_0x23da98[_0x153ee6(0x78)]({'template':'akl_multi_tab_plugin.action_manager','multi_tab_widget':void 0x0,'akl_current_controller':void 0x0,'action_controller_stack':{},'action_map':{},'custom_events':_[_0x153ee6(0x7b)]({},_0x23da98['prototype'][_0x153ee6(0xc6)],{'akl_tab_restore_action':'_akl_tab_restore_action','akl_remove_action':'_akl_remove_action'}),'init':function(){var _0x3c8f64=_0x153ee6;this._super.apply(this,arguments),this[_0x3c8f64(0xbd)]=!0x0;},'start':function(){var _0x9ba693=_0x153ee6,_0x2a0849=this;return this._super.apply(this,arguments)[_0x9ba693(0xca)](function(){var _0x1c96b6=_0x9ba693;console[_0x1c96b6(0xd0)](_0x2a0849['$']('.page-footer')),_0x2a0849[_0x1c96b6(0xbd)]&&(_0x2a0849[_0x1c96b6(0xa4)]=new _0x5cff6f(_0x2a0849),_0x2a0849[_0x1c96b6(0xa4)][_0x1c96b6(0x83)](_0x2a0849['$']('.akl_multi_tab_container')));});},'show_akl_tab':function(){var _0x5769e0=_0x153ee6;this['$']('.akl_multi_tab')[_0x5769e0(0xa3)]('d-none');},'_akl_tab_restore_action':function(_0xe54a61){var _0x3c1103=_0x153ee6,_0x3f22cc=_0xe54a61[_0x3c1103(0x9a)][_0x3c1103(0xbe)];if(this[_0x3c1103(0xc9)])this[_0x3c1103(0x87)]();else{var _0x5d5772=_0x3f22cc[_0x3c1103(0x80)];this[_0x3c1103(0x84)](_0x5d5772);}},'_akl_restore_action_last_controller':function(_0x5725f8,_0x53c5e0){var _0x4c11f5=_0x153ee6,_0x2754cd=this[_0x4c11f5(0xd1)][_0x5725f8];if(_0x2754cd[_0x4c11f5(0xad)]>0x0){var _0x591737=void 0x0;_0x591737=_0x53c5e0&&_0x53c5e0[_0x4c11f5(0x8f)]?_0x2754cd[0x0]:_0x2754cd[_0x2754cd[_0x4c11f5(0xad)]-0x1],this[_0x4c11f5(0x7a)](_0x591737,!0x0);}},'get_current_action':function(_0x1d28c6){var _0x6a5a2d=_0x153ee6,_0xafa380=this[_0x6a5a2d(0xb1)]();return _0xafa380?this['actions'][_0xafa380['actionID']]:void 0x0;},'_executeAction':function(_0x289123,_0x498d9a){var _0x293a10=_0x153ee6;if(this['enable_multi_tab']){_0x289123[_0x293a10(0xb4)]&&(_0x498d9a[_0x293a10(0xb7)]=!0x0);var _0x4b67d9=this,_0x49e607=this[_0x293a10(0xa4)][_0x293a10(0xb3)](_0x289123,_0x498d9a);if(_0x49e607){var _0x4e55cd=_0x49e607['action'][_0x293a10(0x80)];return this[_0x293a10(0x84)](_0x4e55cd,_0x498d9a),this[_0x293a10(0xa4)][_0x293a10(0x90)](_0x4e55cd),Promise[_0x293a10(0x9e)](_0x49e607);}var _0x38ea10=this._super.apply(this,arguments);return _0x38ea10&&_0x38ea10['then'](function(){var _0x4c9ee3=_0x293a10;if(!_0x498d9a[_0x4c9ee3(0xb7)]&&'new'!=_0x289123['target']&&_0x4b67d9['multi_tab_widget']){_0x498d9a[_0x4c9ee3(0xb7)]=!0x0;var _0x567636=_0x289123[_0x4c9ee3(0xc4)],_0x3ae58c=_0x4b67d9[_0x4c9ee3(0xc7)][_0x567636][_0x4c9ee3(0xc0)];_0x498d9a[_0x4c9ee3(0xc0)]=_0x3ae58c,_0x289123['tab_title']=_0x3ae58c,_0x4b67d9[_0x4c9ee3(0xa4)][_0x4c9ee3(0xc8)](_0x289123,_0x498d9a);}}),_0x38ea10||Promise[_0x293a10(0x9e)]();}return this._super.apply(this,arguments);},'_appendController':function(_0x3ca990){var _0x236ba2=_0x153ee6;this[_0x236ba2(0xbd)]&&(this['currentController']=_0x3ca990),_0xb961e[_0x236ba2(0xa5)](this['$']('.akl_controller_container'),_0x3ca990[_0x236ba2(0xa8)]['$el'],{'in_DOM':this[_0x236ba2(0xcf)],'callbacks':[{'widget':_0x3ca990['widget']}]}),_0x3ca990['scrollPosition']&&this[_0x236ba2(0x97)]('scrollTo',_0x3ca990[_0x236ba2(0x7c)]);},'_aklGetControllerStack':function(_0x5b07b3){var _0x20daf2=_0x153ee6;return this[_0x20daf2(0xbd)]?_0x5b07b3 in this[_0x20daf2(0xd1)]?this[_0x20daf2(0xd1)][_0x5b07b3]:(this[_0x20daf2(0xd1)][_0x5b07b3]=[],this[_0x20daf2(0xd1)][_0x5b07b3]):this[_0x20daf2(0xbc)];},'_aklGetControllerStack':function(_0x356d31,_0x2f9996){var _0x6be4e6=_0x153ee6;if(this[_0x6be4e6(0xbd)]){var _0x2df0d8=this['action_map'][_0x356d31];return _0x356d31 in this['action_controller_stack']?_0x2df0d8[_0x6be4e6(0xb4)]?this[_0x6be4e6(0xd1)][_0x2df0d8[_0x6be4e6(0xb4)][_0x6be4e6(0x80)]]:this['action_controller_stack'][_0x356d31]:_0x2df0d8[_0x6be4e6(0xb4)]?this['action_controller_stack'][_0x2df0d8[_0x6be4e6(0xb4)][_0x6be4e6(0x80)]]:(this[_0x6be4e6(0xd1)][_0x356d31]=[],this['action_controller_stack'][_0x356d31]);}return this[_0x6be4e6(0xbc)];},'_removeControllers':function(_0x2a083){var _0x4e41d5=_0x153ee6,_0x33f215=this,_0x57931c=_[_0x4e41d5(0xba)](_0x2a083,function(_0x28bf2e){var _0x13fa11=_0x4e41d5;return _0x33f215[_0x13fa11(0xc7)][_0x28bf2e]['actionID'];});_[_0x4e41d5(0xaa)](_[_0x4e41d5(0xb9)](_0x57931c),this['_removeAction'][_0x4e41d5(0xb5)](this));},'_pushController':function(_0x93f8aa,_0x2df19f){var _0x23cc38=_0x153ee6;this[_0x23cc38(0xa2)][_0x93f8aa['actionID']];if(!this[_0x23cc38(0xbd)])return this._super.apply(this,arguments);var _0x56242c=this;_0x93f8aa[_0x23cc38(0xa8)][_0x23cc38(0xce)]?_0x93f8aa[_0x23cc38(0xa8)][_0x23cc38(0xaf)][_0x23cc38(0x9d)]('akl_pop_form'):_0x2df19f&&!_0x2df19f[_0x23cc38(0xc5)]||this[_0x23cc38(0xcc)]();var _0x52a756=_0x93f8aa[_0x23cc38(0xcd)],_0xb0f34f=this[_0x23cc38(0x81)](_0x52a756);if(!this[_0x23cc38(0x94)][_0x52a756][_0x23cc38(0xb4)]){var _0x43ba77=_0xb0f34f[_0x23cc38(0x9b)](_0x93f8aa[_0x23cc38(0x79)]);_0x43ba77=_[_0x23cc38(0xa9)](_0x43ba77,function(_0x61ab1f){var _0x2c0d08=_0x23cc38;return _0x61ab1f===_0x93f8aa['jsID']||_0x56242c[_0x2c0d08(0xc7)][_0x61ab1f][_0x2c0d08(0xcd)]===_0x93f8aa[_0x2c0d08(0xcd)];}),this[_0x23cc38(0x8c)](_0x43ba77),_0xb0f34f=_0xb0f34f[_0x23cc38(0x9b)](0x0,_0x93f8aa[_0x23cc38(0x79)]);}_0xb0f34f[_0x23cc38(0xcb)](_0x93f8aa[_0x23cc38(0x80)]),this[_0x23cc38(0xd1)][_0x52a756]=_0xb0f34f,_0x2df19f&&!_0x2df19f[_0x23cc38(0xc5)]||this[_0x23cc38(0x91)](_0x93f8aa),this[_0x23cc38(0x97)]('current_action_updated',{'action':this[_0x23cc38(0x9f)](),'controller':_0x93f8aa}),_0xcf9532[_0x23cc38(0x8e)][_0x23cc38(0xc3)]('close_dialogs'),this[_0x23cc38(0xb2)](),_0x93f8aa[_0x23cc38(0xa8)][_0x23cc38(0xaf)]['addClass']('akl_show');},'_removeController':function(_0xa6c6e2){var _0x19f11a=_0x153ee6;if(!this[_0x19f11a(0xbd)])return this._super.apply(this,arguments);var _0x4c6f91=this['actions'][_0xa6c6e2],_0x3163b9=this['controllers'][_0x4c6f91[_0x19f11a(0xc4)]],_0x2001d0=this[_0x19f11a(0x81)]();_0x2001d0[_0x19f11a(0xad)]>0x1?(delete this[_0x19f11a(0xc7)][_0x4c6f91['controllerID']],delete _0x2001d0[_0x3163b9[_0x19f11a(0xc4)]],_0x3163b9[_0x19f11a(0xa8)][_0x19f11a(0xbb)]()):(_0x3163b9[_0x19f11a(0xa8)][_0x19f11a(0xa1)][_0x19f11a(0xb0)]['isActive']=!0x1,_0x3163b9['widget']['detach']());},'_akl_remove_action':function(_0x23fee5){var _0x3bd1dd=_0x153ee6,_0x15dd6f=_0x23fee5[_0x3bd1dd(0x9a)],_0x3bcf94=this,_0x37f89e=_0x15dd6f['call_back'];this[_0x3bd1dd(0x9c)]()[_0x3bd1dd(0xca)](function(){var _0x686992=_0x3bd1dd,_0x16ef23=_0x15dd6f['action'][_0x686992(0x80)],_0xa82594=_0x3bcf94['_aklGetControllerStack'](_0x16ef23);_[_0x686992(0xaa)](_0xa82594,function(_0x3aeece){var _0xd5066b=_0x686992;if(_0x3bcf94[_0xd5066b(0xc7)][_0x3aeece]){_0x3bcf94['currentController']&&_0x3aeece==_0x3bcf94[_0xd5066b(0xae)][_0xd5066b(0x80)]&&(_0x3bcf94[_0xd5066b(0xae)]=void 0x0);var _0x448700=_0x3bcf94[_0xd5066b(0xc7)][_0x3aeece];delete _0x3bcf94[_0xd5066b(0xc7)][_0x3aeece],_0x448700[_0xd5066b(0xa8)]&&_0x448700[_0xd5066b(0xa8)]['destroy']();}}),delete _0x3bcf94[_0x686992(0xa2)][_0x16ef23],delete _0x3bcf94[_0x686992(0x94)][_0x16ef23],_0x3bcf94[_0x686992(0xd1)][_0x16ef23]=[],_0x37f89e();});},'_onHistoryBack':function(){var _0x131c43=_0x153ee6;if(!this['enable_multi_tab'])return this._super.apply(this,arguments);if(this[_0x131c43(0xc9)])this[_0x131c43(0x87)]();else{var _0x6b36eb=this[_0x131c43(0xb1)]()[_0x131c43(0xcd)],_0x203d32=this[_0x131c43(0x81)](_0x6b36eb),_0x44306c=_0x203d32[_0x131c43(0xad)];_0x44306c>0x1&&this[_0x131c43(0x7a)](_0x203d32[_0x44306c-0x2]);}},'_restoreController':function(_0x1ca5ac){var _0x3ee78a=_0x153ee6;if(!this['enable_multi_tab'])return this._super.apply(this,arguments);var _0x23d751,_0x559fb4=this,_0x4efe28=this[_0x3ee78a(0xc7)][_0x1ca5ac],_0x5794ef=this['actions'][_0x4efe28['actionID']];return _0x23d751=_0x5794ef[_0x3ee78a(0x82)]?_0x5794ef[_0x3ee78a(0x82)]():Promise['resolve'](()=>{}),Promise[_0x3ee78a(0x9e)](_0x23d751)[_0x3ee78a(0xca)](function(){var _0x8dbf04=_0x3ee78a;return Promise[_0x8dbf04(0x9e)](_0x4efe28[_0x8dbf04(0xa8)][_0x8dbf04(0x92)]())[_0x8dbf04(0xca)](function(){var _0x1606bb=_0x8dbf04;_0x559fb4[_0x1606bb(0xac)](_0x4efe28);});});},'_executeClientAction':function(_0x508eff,_0x373ed9){var _0x1fab85=_0x153ee6;if(!this[_0x1fab85(0xbd)])return this._super.apply(this,arguments);var _0x20df18=this,_0x13cc18=_0xcf9532['action_registry'][_0x1fab85(0x98)](_0x508eff[_0x1fab85(0x8a)]);if(!_0x13cc18)return console['error']('Could not find client action '+_0x508eff[_0x1fab85(0x8a)],_0x508eff),Promise['reject']();if(!(_0x13cc18['prototype']instanceof _0x1b3df5)){var _0x463eff=_0x13cc18(this,_0x508eff);return _0x463eff?this['doAction'](_0x463eff,_0x373ed9):Promise[_0x1fab85(0x9e)]();}_0x13cc18['prototype']instanceof _0x55fd0a||console[_0x1fab85(0xa6)]('The client action '+_0x508eff[_0x1fab85(0x8a)]+' should be an instance of AbstractAction!');var _0x17cf46=_['uniqueId']('controller_'),_0x639538=this[_0x1fab85(0x8b)](_0x373ed9,_0x508eff),_0x50ac2e=this[_0x1fab85(0x81)](_0x508eff[_0x1fab85(0x80)]);_0x373ed9[_0x1fab85(0x85)]=this[_0x1fab85(0x93)](_0x50ac2e['slice'](0x0,_0x639538)),_0x373ed9['controllerID']=_0x17cf46;var _0x2b39e9=new _0x13cc18(this,_0x508eff,_0x373ed9),_0x4f621b={'actionID':_0x508eff[_0x1fab85(0x80)],'index':_0x639538,'jsID':_0x17cf46,'title':_0x2b39e9[_0x1fab85(0x89)](),'widget':_0x2b39e9};this[_0x1fab85(0xc7)][_0x17cf46]=_0x4f621b,_0x508eff['controllerID']=_0x17cf46;var _0x31874a=this[_0x1fab85(0xa7)](_0x508eff,_0x373ed9);return _0x31874a[_0x1fab85(0xca)](function(_0x4f144e){var _0xc00da7=_0x1fab85;_0x4f144e||_0x20df18[_0xc00da7(0xab)](_0x17cf46,{});}),_0x31874a;},'_executeActionInDialog':function(_0x59e079,_0x5032a6){var _0x115b17=_0x153ee6;return this['controllers'][_0x59e079[_0x115b17(0xc4)]][_0x115b17(0x95)]=!0x0,_0x59e079[_0x115b17(0x95)]=!0x0,this._super.apply(this,arguments);},'_detachCurrentController':function(){var _0x5c3182=_0x153ee6,_0x2f08ce=this[_0x5c3182(0xb1)]();_0x2f08ce&&(_0x2f08ce[_0x5c3182(0x7c)]=this[_0x5c3182(0x7e)](),_0xb961e[_0x5c3182(0xb8)]([{'widget':_0x2f08ce[_0x5c3182(0xa8)]}]),_0x2f08ce[_0x5c3182(0xa8)][_0x5c3182(0xaf)][_0x5c3182(0xa3)]('akl_show'));},'_detachAllController':function(_0x21ec67){var _0x5df8f9=_0x153ee6,_0x493a29=this['_aklGetControllerStack'](_0x21ec67);_[_0x5df8f9(0xaa)](_0x493a29,function(_0x17eda3){var _0x5ca6fc=_0x5df8f9,_0x37ed9b=this['controllers'][_0x17eda3];_0x493a29[_0x5ca6fc(0xa8)][_0x5ca6fc(0xaf)][_0x5ca6fc(0x96)]()&&(_0x37ed9b[_0x5ca6fc(0x7c)]=this['_getScrollPosition'](),_0xb961e[_0x5ca6fc(0xb8)]([{'widget':_0x37ed9b[_0x5ca6fc(0xa8)]}]),_0x37ed9b[_0x5ca6fc(0xa8)][_0x5ca6fc(0xaf)][_0x5ca6fc(0xa3)]('akl_show'));});},'_preprocessAction':function(_0x45a2fa,_0x349218){var _0x42a2a7=_0x153ee6;this._super.apply(this,arguments),this[_0x42a2a7(0x94)][_0x45a2fa[_0x42a2a7(0x80)]]=_0x45a2fa;},'_handleAction':function(_0xf0b45d,_0x1167a1){var _0x2ce5f0=_0x153ee6;if(!this[_0x2ce5f0(0xbd)])return this._super.apply(this,arguments);var _0x5e6bfe=this[_0x2ce5f0(0xa4)][_0x2ce5f0(0xb3)](_0xf0b45d,_0x1167a1);if(_0x5e6bfe){for(var _0x401164=_0x5e6bfe[_0x2ce5f0(0xbe)][_0x2ce5f0(0x80)],_0x14c5bd=[],_0x4fc890=this[_0x2ce5f0(0x81)](_0x401164),_0x530896=_0x4fc890[_0x2ce5f0(0xad)]-0x1;_0x530896>=0x0;_0x530896--){var _0x1e5f3d=_0x4fc890[_0x530896],_0x1bad6e=this[_0x2ce5f0(0xc7)][_0x1e5f3d][_0x2ce5f0(0xcd)];if(this[_0x2ce5f0(0x94)][_0x1bad6e]['id']==_0xf0b45d['id']){_0x4fc890=_0x4fc890[_0x2ce5f0(0x9b)](0x0,_0x530896+0x1),this['action_controller_stack'][_0x1bad6e]=_0x4fc890;break;}_0x14c5bd['push'](_0x1e5f3d);}return this[_0x2ce5f0(0x8c)](_0x14c5bd),this[_0x2ce5f0(0x84)](_0x401164),this[_0x2ce5f0(0xa4)][_0x2ce5f0(0x90)](_0x401164),Promise[_0x2ce5f0(0x9e)](_0x5e6bfe);}if(!_0x1167a1['clear_breadcrumbs']&&!_0x1167a1['force_new_tab']){var _0x157ac0=this['getCurrentAction']();_0xf0b45d[_0x2ce5f0(0xb4)]=_0x157ac0;}return this._super.apply(this,arguments);}}),_0x23da98);}));function a0_0x39ed(){var _0x1a04d8=['appendTo','_akl_restore_action_last_controller','breadcrumbs','4EGQCQW','_closeDialog','define','getTitle','tag','_getControllerStackIndex','_removeControllers','728795xwQzFE','bus','clear_breadcrumbs','active_tab','_appendController','do_show','_getBreadcrumbs','action_map','executeInDialog','parent','trigger_up','get','232IzOgcH','data','slice','clearUncommittedChanges','addClass','resolve','getCurrentAction','883557AjlFpX','_controlPanelWrapper','actions','removeClass','multi_tab_widget','append','warn','_executeAction','widget','reject','each','_pushState','_pushController','length','currentController','$el','props','getCurrentController','_toggleFullscreen','get_action_info','refAction','bind','17505210rrWSch','ignore_tab','detach','uniq','map','destroy','controllerStack','enable_multi_tab','action','1228071hZKbDv','title','441bvLFbC','7eWVqnx','trigger','controllerID','change_current_controller','custom_events','controllers','on_excute_action','currentDialogController','then','push','_detachCurrentController','actionID','pop_up_form','isInDOM','log','action_controller_stack','include','index','_restoreController','extend','scrollPosition','1683464VlmRZo','_getScrollPosition','4117656yiTrNV','jsID','_aklGetControllerStack','on_reverse_breadcrumb'];a0_0x39ed=function(){return _0x1a04d8;};return a0_0x39ed();}