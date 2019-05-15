"use strict";
/**
 * [copyProperties 类的深度拷贝]
 * @param {[object object]} target [要拷贝的目标对象]
 * @param {[object object]} source [要拷贝的原对象]
 * @return {void}
 */
Object.defineProperty(exports, "__esModule", { value: true });
var copyProperties = function (target, source) {
    for (var _i = 0, _a = Reflect.ownKeys(source); _i < _a.length; _i++) {
        var key = _a[_i];
        if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
            var desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
};
//类的多重继承方法
var mix = function () {
    var mixins = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        mixins[_i] = arguments[_i];
    }
    var Mix = /** @class */ (function () {
        function Mix() {
        }
        return Mix;
    }());
    for (var _a = 0, mixins_1 = mixins; _a < mixins_1.length; _a++) {
        var mixin = mixins_1[_a];
        copyProperties(Mix, mixin);
        copyProperties(Mix.prototype, mixin.prototype);
    }
    return Mix;
};
// class Base{
//     constructor(){}
// }
// class Claculate{
//     constructor(){}
// }
// class Interface{
//     constructor(){}
// }
// class Timer{
//     constructor(){}
// }
//类的多重继承实例
// class App extends mix(Base,Claculate,Interface,Timer){
//     constructor(name="sys",cname='应用',issue='**',state="**"){
//         super();
//         this.name = name;
//         this.cname = cname;
//         this.issue = issue;
//         this.el = '';
//         this.omit = new Map();
//         this.open_code = new Set();
//         this.open_code_list = new Set();
//         this.play_list = new Map();
//         this.number = new Set();
//         this.issue_el = '#curr_issue';
//         this.countdown_el = '#'
//         this.state_el = '.state_el';
//         this.cur_play = 'r5';
//         this.initNumber();
//         this.updateState();
//         this.initEvent();
//     }
// }
exports.default = {
    copyProperties: copyProperties,
    mix: mix
};
//# sourceMappingURL=index.js.map