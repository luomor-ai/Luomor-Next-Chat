let div = document.createElement("div");
let html = '';
html += '<div id="tip" align="center" style="background:#53a290;color:#fff;position: fixed;z-index: 10000;top: 1px;left: 20px;margin:16px 0">';
html += '<p>赞赏</p>';
html += '<p><button id="hide" type="button">隐藏</button></p>';
html += '<p><img decoding="async" src="https://aigc.7otech.com/wp-content/uploads/2025/05/alipay.jpeg" alt="支付宝赞赏" style="width: 160px; height: 160px; margin-left: 0px;"></p>';
html += '<p>&nbsp;请使用支付宝扫一扫</p>';
html += '<p><img decoding="async" style="width: 160px; height: 160px; margin-left: 0px;" src="https://aigc.luomor.com/wp-content/uploads/2023/04/WX20230418-182420@2x.png" alt="微信赞赏"></p>';
html += '<p>&nbsp;请使用微信扫一扫</p>';
html += '<p><button id="chatgpt" type="button" style="width: 100px;">Gemini为付费模型，赞赏后如何获得访问密码</button></p>';
html += '</div>';
html += '<div id="tip1" align="center" style="display:none;background:#53a290;position: fixed;z-index: 10000;top: 1px;left: 20px;margin:16px 0">';
html += '<p><button id="show" type="button">显示</button></p>';
html += '</div>';
div.innerHTML = html;
document.body.appendChild(div);

// https://aigc.luomor.com/chatgpt;

const hide = document.querySelector('#hide');

hide.addEventListener('click', (event) => {
    let tip = document.querySelector('#tip');
    tip.style.display = "none"; 

    let tip1 = document.querySelector('#tip1');
    tip1.style.display = "block"; 
});

const show = document.querySelector('#show');

show.addEventListener('click', (event) => {
    let tip = document.querySelector('#tip');
    tip.style.display = "block"; 

    let tip1 = document.querySelector('#tip1');
    tip1.style.display = "none"; 
});

const chatgpt = document.querySelector('#chatgpt');

chatgpt.addEventListener('click', (event) => {
    window.open("https://aigc.luomor.com/chatgpt", "_blank");
});