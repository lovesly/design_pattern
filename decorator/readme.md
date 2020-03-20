# Decorator
**动机**

- 继承为类型引入了静态特质，使得这种扩展方式缺乏灵活性，随着子类的增多，子类的组合会导致更多子类的膨胀

**模式定义**

动态组合，消除重复代码，减少子类个数，更加灵活

**结构**

以后补图吧。。
设计模式的动态部分，静态部分，这个角度不错。

**总结**

- 运行时扩展，动态
- 既表现为 is-a 的关系，又表现为 has-a 的关系？？？继承 Stream 的同时也有个 Stream 属性？？
继承是为了接口规范，Stream 有啥方法。组合是为了调用 Stream 上的方法。。。
```cpp
DecoratorStream: public Stream {
  protected:
    Stream* stream;
    DecoratorStream(Stream* stm):stream(stm){

    }
}
```
