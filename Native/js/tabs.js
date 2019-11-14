$(document).ready(function(){

    AppleTabs();

















    
});



function AppleTabs(){
    $(".tab-content").not(":first").hide();
        $(".Apple-Nav li").click(function(){
            $(".Apple-Nav li").removeClass("active").eq($(this).index()).addClass("active");
            $(".tab-content").hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass("active");
}