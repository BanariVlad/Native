$(document).ready(function () {
    PopUpHide();
    //eftMainMenuPopUp();
    menuHoverHandler();
    PopUpLoginHide();
    PopUpLogin();

})

function menuHoverHandler(){
    $('.menu li').mouseenter(function () {
        console.log($(this).data('popup'))
        $('.popup').hide(300);
        $(`.`+$(this).data('popup')).show(300);
    });

    $('.menu li').mouseleave(function () {
        $('.popup').hide(300);
    })
}

function LeftMainMenuPopUp() {
    //SMARTPHONES
    $('.menu li:nth-child(1)').mouseenter(function () {
        $('.smartphones').show(300);
    })
    
    $('.menu li:nth-child(1)').mouseleave(function () {
        $('.smartphones').hide();
    })

    $('.smartphones').mouseenter(function () {
        $(this).show();
    })
    $('.smartphones').mouseleave(function () {
        $(this).hide(300);
    })
    // =======TV
    $('.menu li:nth-child(2)').mouseenter(function () {
        $('.tv').show(300);
    })

    $('.menu li:nth-child(2)').mouseleave(function () {
        $('.tv').hide();
    })

    $('.tv').mouseenter(function () {
        $(this).show();
    })
    $('.tv').mouseleave(function () {
        $(this).hide(300);
    })
    // KEYBOARDS

    $('.menu li:nth-child(3)').mouseenter(function () {
        $('.keyboards').show(300);
    })

    $('.menu li:nth-child(3)').mouseleave(function () {
        $('.keyboards').hide();
    })

    $('.keyboards').mouseenter(function () {
        $(this).show();
    })
    $('.keyboards').mouseleave(function () {
        $(this).hide(300);
    })
    // GAMING

    $('.menu li:nth-child(4)').mouseenter(function () {
        $('.gaming').show(300);
    })

    $('.menu li:nth-child(4)').mouseleave(function () {
        $('.gaming').hide();
    })

    $('.gaming').mouseenter(function () {
        $(this).show();
    })
    $('.gaming').mouseleave(function () {
        $(this).hide(300);
    })
    // Transport
    $('.menu li:nth-child(5)').mouseenter(function () {
        $('.transport').show(300);
    })

    $('.menu li:nth-child(5)').mouseleave(function () {
        $('.transport').hide();
    })

    $('.transport').mouseenter(function () {
        $(this).show();
    })
    $('.transport').mouseleave(function () {
        $(this).hide(300);
    })

    //APP

    $('.menu li:nth-child(6)').mouseenter(function () {
        $('.apple').show(300);
    })

    $('.menu li:nth-child(6)').mouseleave(function () {
        $('.apple').hide();
    })

    $('.apple').mouseenter(function () {
        $(this).show();
    })
    $('.apple').mouseleave(function () {
        $(this).hide(300);
    })

    //GADGETS

    $('.menu li:nth-child(7)').mouseenter(function () {
        $('.gadgets').show(300);
    })

    $('.menu li:nth-child(7)').mouseleave(function () {
        $('.gadgets').hide();
    })

    $('.gadgets').mouseenter(function () {
        $(this).show();
    })
    $('.gadgets').mouseleave(function () {
        $(this).hide(300);
    })

    //Computers

    $('.menu li:nth-child(8)').mouseenter(function(){
        $('.computers').show(300);
    })

    $('.menu li:nth-child(8)').mouseleave(function(){
        $('.computers').hide();
    })

    $('.computers').mouseenter(function(){
        $(this).show();
    })
    $('.computers').mouseleave(function(){
        $(this).hide(300);
    })

    //AUDIO

    $('.menu li:nth-child(9)').mouseenter(function(){
        $('.audio').show(300);
    })

    $('.menu li:nth-child(9)').mouseleave(function(){
        $('.audio').hide();
    })

    $('.audio').mouseenter(function(){
        $(this).show();
    })
    $('.audio').mouseleave(function(){
        $(this).hide(300);
    })

    //SERVICES

    $('.menu li:nth-child(10)').mouseenter(function(){
        $('.services').show(300);
    })

    $('.menu li:nth-child(10)').mouseleave(function(){
        $('.services').hide();
    })

    $('.services').mouseenter(function(){
        $(this).show();
    })
    $('.services').mouseleave(function(){
        $(this).hide(300);
    })

}

function PopUpHide(){
    $('.popup').hide();
}

function PopUpLoginHide(){
    $('.popupLogin').hide();
}

function PopUpLogin(){
    $('.top-panel .top-login span a').click(function (){
        $('.popupLogin').show();
        $('body').css('overflow', 'hidden');
    })
    $('.LoginWindow i').click(function (){
        $('.popupLogin').hide();
        $('body').css('overflow' , 'visible')
    })
}

function MainMenuPopUp(){
    $()
}