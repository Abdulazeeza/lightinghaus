// header section for sticky navbar
let height = $('.contact_block').height();

$(window).scroll(()=>{
    if($(this).scrollTop() > height){
        $('.navbar').addClass('navbar--modifier');
    }else{
        $('.navbar').removeClass('navbar--modifier');
    }
})

//toggle menu
$('.menu_icon').click(()=> {
    $('.nav2').toggleClass('nav2--active');
})