import { deprecate } from 'core-decorators';

// 这个装饰器，通过 console.warn 的方式在devtools 里警告了用户
class Person {
  @deprecate
  facepalm() {}

  @deprecate('We stopped facepalming')
  facepalmHard() {}

  @deprecate('we stopped facepalming', { url: 'https://www.baidu.com' })
  facepalmHarder() {}
}


export default Person