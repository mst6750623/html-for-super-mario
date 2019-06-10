var mush_on=0;
$(document).ready(function () {
    $("#refresh").on('click',function() {
        window.location.reload();
    });
    $("#qq_icon").on('click',function() {
        alert("contact me: 943941437");
    });
    $("#ques_block").on('mouseenter',function () {
        if(!mush_on)
        {
            mush_on=1;
            $("#ques_block").animate({top:'-=120px',
                                      opacity:'1'
            },1000);
        }
        else
        {
            mush_on=0;
            $("#ques_block").animate({top:'+=120px',
                                      opacity:'0' 
        },500);
        }
    });
    $("#galary_topborder ul li img").on('mouseenter',function () {
        $(this).addClass("li_mouseon");
    });
    $("#galary_topborder ul li img").on('mouseout',function () {
        $(this).removeClass("li_mouseon");
    });
    $(".game").on('mouseenter',function () {
        $(this).addClass("game_mouseon");
    });
    $(".game").on('mouseout',function () {
        $(this).removeClass("game_mouseon");
    });
    $("#galary span").on('mouseenter',function () {
        $(this).css('opacity','1')
    });
    $("#galary span").on('mouseout',function () {
        $(this).css('opacity','0.5');
    });
    $("#left_pic").on('click',change_gala_left);
    $("#right_pic").on('click',change_gala_right);
})

var index=0;
function change_gala_left() {
    if(index==0)
    {
        $(".galary_ul").prepend($(".galary_ul").html());
        //$(".galary_ul").css("left","-500px");
        index=5;
    }
    index--;
    $(".galary_ul").animate({marginLeft:'+=425'},1000);
}

function change_gala_right() {
    index++;
    var len=$(".galary_ul li").length;
    if(index+5>len){
        $(".galary_ul").stop().append($(".galary_ul").html());
    }
    $(".galary_ul").animate({marginLeft:'-=425'},1000);
}