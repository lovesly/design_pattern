const mediator = new Mediator()
document.addEventListener('submit', function(e) {
    e.preventDefault();
    const text = document.querySelector('#chatBox').value;
    const from = document.querySelector('#fromBox').value;
    const to = document.querySelector('#toBox').value;

    mediator.Publish("newMessage", {
        message: text,
        from,
        to,
    });
});

function displayChat(data) {
    const date = new Date();
    const msg = `${data.from} said "${data.message}" to ${data.to}`;
    const p = document.createElement('p')
    p.innerHTML = `${msg}(${date.toLocaleTimeString()})`;
    document.querySelector('#chatResult').prepend(p);
}

function logChat(data) {
    if (window.console) {
        console.log(data);
    }
}

// 同一个 topic，设置多个监听
mediator.Subscribe("newMessage", displayChat);
mediator.Subscribe("newMessage", logChat);

// 高级？，哪里高级了，和前两个监听，没啥区别？
// 这本书真的完成度非常一般，例子很不给力。
function amITalkingToMyself(data) {
    return data.from === data.to;
}

function iAmClearlyCrazy(data) {
    const flag = amITalkingToMyself(data)
    const p = document.createElement("p");
    p.innerHTML = `${data.from} is talking to ${flag ? "himself" : "others"}.`;
    document.querySelector('#chatResult').prepend(p);
}

// 这他妈，还能监听函数么？
mediator.Subscribe("newMessage", iAmClearlyCrazy);