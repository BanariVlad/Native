var leftBtn = document.getElementById('left');
var rightBtn = document.getElementById('right');

leftBtn.addEventListener('click', onleftBtnClick); 
rightBtn.addEventListener('click', onrightBtnClick); 






function onleftBtnClick() {
    console.log('left clicked')
}

function onrightBtnClick() {
    console.log('right clicked')
}