// header section for sticky navbar
let height = $('.contact_block').height();

$(window).scroll(()=>{
    if($(this).scrollTop() > height){
        $('.navbar').addClass('navbar--modifier');
    }else{
        $('.navbar').removeClass('navbar--modifier');
    }
})