/*
 * @Date: 2023-04-10 11:59:08
 * @Author: Fancyicookie
 */
// 红灯三秒亮一次，绿灯两秒亮一次，黄灯一秒亮一次；如何让三个灯不断交替重复亮灯？

function red() {
    console.log("red");
}
function green() {
    console.log("green");
}
function yellow() {
    console.log("yellow");
}

const sleep = (time, fn) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        fn(); //哪个灯亮
        resolve();
        }, time);
    });
};

let step = () => {
    Promise.resolve()
    .then(() => {
        return sleep(3000, red);
    })
    .then(() => {
        return sleep(2000, green);
    })
    .then(() => {
        return sleep(1000, yellow);
    })
    .then(() => {
        step();
    });
};

console.log(step())