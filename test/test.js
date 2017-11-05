// import Builder from '../libs/Buider';
// const Builder = require('../patterns/Buider');
import Builder from '../patterns/Builder';
import Instance from '../patterns/Instance';

// const temp = Builder.create('test')
//                     .addParam('hello', 'world')
//                     .addTest('ttt')
//                     .addTest2('t22222')
//                     .build();
// console.log('temp==>', temp);
// console.log('instance ==>', Instance.getFlag());
// console.log('instance ==>', Instance.setFlag(1))
// console.log('instance ==>', Instance.getFlag());
// console.log('instance==>', Instance);
// const temp = setInterval( ()=> {
//     console.log('hello, world');
// }, 2000);

const sleep =  (time) => new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, time);
    });


async function temp () {
    console.log('hello');
    await sleep(3000);
    console.log('world');
}
temp();