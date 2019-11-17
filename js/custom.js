$(window).on('load', function(){

	$('body').removeClass('loaded');
});

$(function(){
	
	/* Burger */
	/* ---------------------------------------------- */

	$(".catalog-menu").on('click',function(){
	    $('.navbar').toggleClass("is-open");
	    $('.overlay').toggleClass("is-open");
	    $('body').toggleClass("lock");
	});

	$(".navbar__close").on('click',function(){
	    $('.navbar').removeClass("is-open");
	    $('.overlay').removeClass("is-open");
	    $('body').removeClass("lock");
	});

	$(".overlay").on('click',function(){
	    $('.navbar').removeClass("is-open");
	    $(this).removeClass("is-open");
	     $('body').removeClass("lock");
	});

	

	$(".b-drop__link").on('click',function(){
	    $(this).parents('.b-drop').toggleClass('is-open');
	    return false;
	});

	// $(".like__icon").on('click',function(){
	// 	if($(this).hasClass('is-active')) {
	// 		$(this).removeClass('is-active').addClass('is-remove')
	// 	} else if ($(this).hasClass('is-remove')){
	// 		$(this).removeClass('is-remove')
	// 	} else {
	// 		$(this).addClass('is-active')
	// 	}
	    
	//     return false;
	// });

	$(".like__icon").on('click',function(){
		if($(this).hasClass('is-active')) {
			$(this).removeClass('is-active')
		
		} else {
			$(this).addClass('is-active')
		}
	    
	    return false;
	});

	$(".open-sb-dropdown").on('click',function(){
	    $(this).next('.sb-dropdown').toggleClass('is-open');
	    return false;
	});

	$(".sb-dropdown__close").on('click',function(){
	    $(this).parents('.sb-dropdown').removeClass('is-open');
	    return false;
	});

	$(".map-window__close").on('click',function(){
	    $(this).parents('.map-window').hide();
	    return false;
	});

	$(".dropdown-link").on('click',function(){
	    $(this).next('.dropdown-menu').toggleClass('is-open');
	    return false;
	});

	$(document).click( function(event){
      if( $(event.target).closest(".dropdown").length ) 
        return;
      $('.dropdown-menu').removeClass('is-open');
     
      event.stopPropagation();
    });

	$(".dropdown-menu a").on('click',function(){
		var thisText = $(this).text();
		$(".dropdown-menu li").removeClass('is-active')
		$(this).parents('li').addClass('is-active');
	    $(this).parents('.dropdown').find('.dropdown-link').text(thisText);
	    $(this).parents('.dropdown-menu').removeClass('is-open');
	    return false;
	});

	$(".select__button").on('click',function(){
		$(this).parents('.select').find('.styler').trigger('refresh');
		$('.select').not($(this).parents('.select')).removeClass('is-open');
		$(this).parents('.select').toggleClass('is-open');
		
	    return false;
	});
	
	$(document).click( function(event){
      if( $(event.target).closest(".select").length ) 
        return;
      $('.select').removeClass('is-open');
     
      event.stopPropagation();
    });

	$(document).on('change', function(e) {
		var $ul = $(e.target).closest('.select-check');
		$ul.parents('.select').toggleClass('is-selected', !! $ul.find(':checked').length);
	});

	$(document).on('change', function(e) {
		var $ul = $(e.target).closest('.select-list');
		$ul.parents('.select').toggleClass('is-selected', !! $ul.find(':selected').length);
	});
    


    /* Popup */
	/* ---------------------------------------------- */

	$(document).on('click', '.open-popup', function(e){
		e.preventDefault();
		$('.popup-content').removeClass('active');
		$('.popup-wrapper, .popup-content[data-popup="'+$(this).data('popup')+'"]').addClass('active');
		$('html').addClass('overflow-hidden');
		return false;
	});

	$(document).on('click', '.popup-wrapper .popup-close', function(e){
		e.preventDefault();
		$('.popup-wrapper, .popup-content').removeClass('active');
		$('html').removeClass('overflow-hidden');
		return false;
	});

	$(document).on('click', '.popup-content', function(e){
		if (e.target !== this) 
			return;
		$('.popup-wrapper, .popup-content').removeClass('active');
		$('html').removeClass('overflow-hidden');
		return false;
	});


	/* Tabs */
	/* ---------------------------------------------- */
	$('.tabs a').on('click', function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('is-hidden');
		$(this).parent().siblings().removeClass('is-active');
		var id = $(this).attr('href');
		$(id).removeClass('is-hidden');
		$(this).parent().addClass('is-active');
		$('.tab-wrap .slick-slider').slick('setPosition');
		$('.tab-wrap .styler').trigger('refresh')
		return false
	});

	/* Plugins */
	/* ---------------------------------------------- */

	/* Styler */
    if($('.styler').length){
        $('.styler').styler();
    };

    /* Slick */
    if($('.card-slider-for').length){
        $('.card-slider-for').slick({
        	slidesToShow: 1,
        	arrows: true,
        	asNavFor: '.card-slider-nav',
        	prevArrow: '<button class="slick-arrow slick-prev"><img src="img/slick-arrow.png" alt="" /></button>',
        	nextArrow: '<button class="slick-arrow slick-next"><img src="img/slick-arrow-next.png" alt="" /></button>',
        });
    };

    if($('.card-slider-nav').length){
        $('.card-slider-nav').slick({
        	slidesToShow: 4,
        	slidesToScroll: 1,
        	vertical: true,
        	arrows: true,
        	focusOnSelect: true,
        	verticalSwiping: true,
        	asNavFor: '.card-slider-for',
        	prevArrow: '<button class="slick-arr slick-prev"></button>',
        	nextArrow: '<button class="slick-arr slick-next"></button>',
        });
    };

    if($('.slider').length){
        $('.slider').slick({
        	slidesToShow: 5,
        	slidesToScroll: 1,
        	arrows: true,

        	prevArrow: '<button class="slick-arrow slick-prev"><img src="img/slick-arrow.png" alt="" /></button>',
        	nextArrow: '<button class="slick-arrow slick-next"><img src="img/slick-arrow-next.png" alt="" /></button>',
        });
    };



});



function getYaMap(){
    if($('#map').length){
     ymaps.ready(init); // карта соберется после загрузки скрипта и элементов
        var myMap; // заглобалим переменную карты чтобы можно было ею вертеть из любого места
        function init () { // функция - собиралка карты и фигни
            var myMap = new ymaps.Map("map", {
                center: [55.635691, 37.009368], 
                zoom: 10,
                controls: [],

            });
            myMap.behaviors.disable('scrollZoom', 'drag'); 
            myMap.controls.add('zoomControl', {position: {right: '20px', bottom: '108px'}});
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                // hintContent: 'Собственный значок метки',
                // balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/pin.png',
                // Размеры метки.
                iconImageSize: [69, 78],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                
            })
            /* Добавляем метки на карту */
            myMap.geoObjects.add(myPlacemark);

        }
    }
};