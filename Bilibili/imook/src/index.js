/**
 * node ssr 没有使用 webpack-dev-server, 而是通过 nodemon，和 npm-run-all 手动启动的
 */
// import "core-js";
// import "core-js/es/array";
// import "core-js/proposals/math-extensions";
import './cur_status/index';

function test() {
  new Promise(() => {})
}
test()
const arr = [1,2,3,4].map(item => item * item)
console.log(arr)

console.log('A little bit')
const a = new Set();
const b = Symbol('b');
console.log(a);
console.log(b);

/**
 * 你好蠢啊。。
 * 1. 不知道如何查看 core-js 转译后的代码
 *    这个问题是这样，语言特性不会转译，而是通过引入 polyfill 的形式
 *    如果没猜错，假如我写个 class 就会被编译为 es5 了？
 * 2. 不知道 source-map 对 转译 的影响
 * 3. @babel/preset 和 plugin-transform-runtime + @babel/runtime 两种方式，看不见效果啊他妈的
 */