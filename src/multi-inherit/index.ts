/**     
 * [copyProperties 类的深度拷贝]
 * @param {[object object]} target [要拷贝的目标对象]
 * @param {[object object]} source [要拷贝的原对象]
 * @return {void}
 */

 const copyProperties = (target:object,source:object):void =>{
    for(let key of Reflect.ownKeys(source)){
        if(key !== 'constructor' && key !== 'prototype' && key !== 'name'){
            let desc = Object.getOwnPropertyDescriptor(source,key);
            Object.defineProperty(target,key,desc);
        }  
    }
 }
 //类的多重继承方法
 const mix = (...mixins:any[]):any => {
    class Mix{}
    for (let mixin of mixins){
        copyProperties(Mix,mixin);
        copyProperties(Mix.prototype,mixin.prototype)
    }
    return Mix
}
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

export default{
    copyProperties,
    mix
}