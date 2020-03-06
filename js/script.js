// ========= Nav Bar Hover =========
$("document").ready(function() {
    $('.custom-nav-link > .courses').hover(function() {
        $(".hover-courses").css("opacity", "1");
        $(".hover-courses").attr("active", "yes");
    },function() {
        $(".hover-courses").css("opacity", "0");
    });
    
    $(".hover-courses").hover(function() {
        $active = $(this).attr("active");
        if($active == 'no') {
            $(this).css("opacity", "0");
        } else if($active == 'yes') {
            $(this).css("opacity", "1");
        }
    }, function() {
        $(this).css("opacity", "0");
        $(this).attr("active", "no");
    });
});
