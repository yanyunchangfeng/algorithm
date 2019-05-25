"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
test("bubbleSort", function () {
    var mix = index_1.default.mix;
    var Base = /** @class */ (function () {
        function Base() {
        }
        Base.prototype.base = function () {
        };
        return Base;
    }());
    var Claculate = /** @class */ (function () {
        function Claculate() {
        }
        Claculate.prototype.calculate = function () { };
        return Claculate;
    }());
    var Interface = /** @class */ (function () {
        function Interface() {
        }
        Interface.prototype.inter = function () { };
        return Interface;
    }());
    var Timer = /** @class */ (function () {
        function Timer() {
        }
        Timer.prototype.timer = function () { };
        return Timer;
    }());
    //    类的多重继承实例
    var App = /** @class */ (function (_super) {
        __extends(App, _super);
        function App(name, cname, issue, state) {
            if (name === void 0) { name = "sys"; }
            if (cname === void 0) { cname = "应用"; }
            if (issue === void 0) { issue = "**"; }
            if (state === void 0) { state = "**"; }
            var _this = _super.call(this) || this;
            _this.name = name;
            _this.cname = cname;
            _this.issue = issue;
            _this.el = "";
            _this.omit = new Map();
            _this.open_code = new Set();
            _this.open_code_list = new Set();
            _this.play_list = new Map();
            _this.number = new Set();
            _this.issue_el = "#curr_issue";
            _this.countdown_el = "#";
            _this.state_el = ".state_el";
            _this.cur_play = "r5";
            return _this;
        }
        return App;
    }(mix(Base, Claculate, Interface, Timer)));
    var app = new App();
    expect(app.timer).toBeDefined;
});
//# sourceMappingURL=index.test.js.map