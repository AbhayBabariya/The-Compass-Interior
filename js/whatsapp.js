$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 300) {
        $('.showWhatsapp').fadeIn();
        $('.showWhatsapp').animate({ 'opacity': '1' }, 300);
    } else {
        $('.showWhatsapp').fadeOut();
    }
})