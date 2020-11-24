jQuery(function($) {
    $(window).on("scroll", function() {
        // フェードイン
        $('[data-fadeIn]').each(function(index, el) {
            if( $(window).scrollTop() > ( $(el).offset().top - $(window).height() / 2 ) )  {
                $(el).addClass('is-over');
            }
        });
    });
});

