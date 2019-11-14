$(document).ready(function(){
    PopUp();
    
})


function PopUp(){
    $('.menu li:nth-child(1)').mouseenter(function(){
        PopUpShow();
    })
    $('.menu li:nth-child(1)').mouseleave(function(){
        PopUpHide();
    })
    $('.smartphones').mouseenter(function(){
        PopUpShow();
    })
    $('.smartphones').mouseleave(function(){
        PopUpHide();
    })
}

function PopUpShow(){
    $('.popup').css({
        display: 'block'
    })
}

function PopUpHide(){
    $('.popup').css({
        display: 'none'
    })
}
