$(document).ready(function () {
    PopUpHide();
    LeftMainMenuPopUp();

})

function LeftMainMenuPopUp() {
    //SMARTPHONES
    $('.menu li:nth-child(1)').mouseenter(function () {
        $('.smartphones').show();
    })
    
    $('.menu li:nth-child(1)').mouseleave(function () {
        $('.smartphones').hide();
    })

    $('.smartphones').mouseenter(function () {
        $(this).show();
    })
    $('.smartphones').mouseleave(function () {
        $(this).hide();
    })
    // =======TV
    $('.menu li:nth-child(2)').mouseenter(function () {
        $('.tv').show();
    })

    $('.menu li:nth-child(2)').mouseleave(function () {
        $('.tv').hide();
    })

    $('.tv').mouseenter(function () {
        $(this).show();
    })
    $('.tv').mouseleave(function () {
        $(this).hide();
    })
    // KEYBOARDS

    $('.menu li:nth-child(3)').mouseenter(function () {
        $('.keyboards').show();
    })

    $('.menu li:nth-child(3)').mouseleave(function () {
        $('.keyboards').hide();
    })

    $('.keyboards').mouseenter(function () {
        $(this).show();
    })
    $('.keyboards').mouseleave(function () {
        $(this).hide();
    })
    // GAMING

    $('.menu li:nth-child(4)').mouseenter(function () {
        $('.gaming').show();
    })

    $('.menu li:nth-child(4)').mouseleave(function () {
        $('.gaming').hide();
    })

    $('.gaming').mouseenter(function () {
        $(this).show();
    })
    $('.gaming').mouseleave(function () {
        $(this).hide();
    })
    // Transport
    $('.menu li:nth-child(5)').mouseenter(function () {
        $('.transport').show();
    })

    $('.menu li:nth-child(5)').mouseleave(function () {
        $('.transport').hide();
    })

    $('.transport').mouseenter(function () {
        $(this).show();
    })
    $('.transport').mouseleave(function () {
        $(this).hide();
    })

    //APP

    $('.menu li:nth-child(6)').mouseenter(function () {
        $('.apple').show();
    })

    $('.menu li:nth-child(6)').mouseleave(function () {
        $('.apple').hide();
    })

    $('.apple').mouseenter(function () {
        $(this).show();
    })
    $('.apple').mouseleave(function () {
        $(this).hide();
    })

    //GADGETS

    $('.menu li:nth-child(7)').mouseenter(function () {
        $('.gadgets').show();
    })

    $('.menu li:nth-child(7)').mouseleave(function () {
        $('.gadgets').hide();
    })

    $('.gadgets').mouseenter(function () {
        $(this).show();
    })
    $('.gadgets').mouseleave(function () {
        $(this).hide();
    })

    //Computers

    $('.menu li:nth-child(8)').mouseenter(function(){
        $('.computers').show();
    })

    $('.menu li:nth-child(8)').mouseleave(function(){
        $('.computers').hide();
    })

    $('.computers').mouseenter(function(){
        $(this).show();
    })
    $('.computers').mouseleave(function(){
        $(this).hide();
    })

    //AUDIO

    $('.menu li:nth-child(9)').mouseenter(function(){
        $('.audio').show();
    })

    $('.menu li:nth-child(9)').mouseleave(function(){
        $('.audio').hide();
    })

    $('.audio').mouseenter(function(){
        $(this).show();
    })
    $('.audio').mouseleave(function(){
        $(this).hide();
    })

    //SERVICES

    $('.menu li:nth-child(10)').mouseenter(function(){
        $('.services').show();
    })

    $('.menu li:nth-child(10)').mouseleave(function(){
        $('.services').hide();
    })

    $('.services').mouseenter(function(){
        $(this).show();
    })
    $('.services').mouseleave(function(){
        $(this).hide();
    })

}

function PopUpHide(){
    $('.popup').hide();
}