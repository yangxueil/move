/**
 *@Author:name
 *@Date:$(DATE)
 *@Version:1.0
 *@Last Modified:name
 *@Last Modified time:$(DATE)
 **/

$('.listt li').tap(function(){
   $('#item').show();
   var index=$(this).index();
    $('#item .item-box li').removeClass('active');
    $('#item .item-box li').eq(index).addClass('active');
    $('#item .item-one li').hide();
    $('#item .item-one li').eq(index).show();
    if(index===3){
        $('#item1 li').show();
    }
    $('.hide').css('display','block');
});
$('.hide').tap(function(){
    $('#item').hide();
    $('.hide').css('display','none');
});
$('.item-box li').tap(function(){
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');
    var index=$(this).index();
    console.log(index);
    $('#item .item-one li').hide();
    $('#item .item-one li').eq(index).show();
    if(index===3){
        $('#item1 li').show();
    }
});

