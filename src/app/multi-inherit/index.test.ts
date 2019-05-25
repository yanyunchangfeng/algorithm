import inherit from "./index";
test("bubbleSort", () => {
    const mix = inherit.mix;
    class Base {
        constructor() { }
        public base() {

        }
    }
    class Claculate {
        constructor() { }
        public calculate() { }
    }
    class Interface {
        constructor() { }
        public inter() { }
    }
    class Timer {
        constructor() { }
        public timer() { }
    }
    //    类的多重继承实例
    class App extends mix(Base, Claculate, Interface, Timer) {
        constructor(name = "sys", cname = "应用", issue = "**", state = "**") {
            super();
            this.name = name;
            this.cname = cname;
            this.issue = issue;
            this.el = "";
            this.omit = new Map();
            this.open_code = new Set();
            this.open_code_list = new Set();
            this.play_list = new Map();
            this.number = new Set();
            this.issue_el = "#curr_issue";
            this.countdown_el = "#";
            this.state_el = ".state_el";
            this.cur_play = "r5";
        }
    }
    const app = new App();
    expect(app.timer).toBeDefined;
});

