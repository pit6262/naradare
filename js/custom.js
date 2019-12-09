$(window).on('load', function(){

	$('body').removeClass('loaded');
});

$(function(){
	
	/* Burger */
	/* ---------------------------------------------- */

	$(".toggle-menu").on('click',function(){
		$(this).toggleClass('is-active');
	    $('.navbar').toggleClass("is-open");
	    $('.overlay').toggleClass("is-open");
	    $('.header').toggleClass("index");
	    $('body').toggleClass("lock");
	});


	$(".navbar__close").on('click',function(){
		$(".toggle-menu").removeClass('is-active');
	    $('.navbar').removeClass("is-open");
	    $('.header').removeClass("index");
	    $('.overlay').removeClass("is-open");
	    $('body').removeClass("lock");
	});

	$(".overlay").on('click',function(){
		$(".toggle-menu").removeClass('is-active');
	    $('.navbar').removeClass("is-open");
	    $('.filter').removeClass("is-open");
	    $('.header').removeClass("index");
	    $(this).removeClass("is-open");
	     $('body').removeClass("lock");
	});

	

	$(".b-drop__link").on('click',function(){
	    $(this).parents('.b-drop').toggleClass('is-open');
	    return false;
	});


	$(".like").on('click',function(){
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

	$(".open-informer").on('click',function(){
	    $(this).next('.informer-dropdown').toggleClass('is-open');
	    return false;
	});

	$(".informer-dropdown__close").on('click',function(){
	    $(this).parents('.informer-dropdown').removeClass('is-open');
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
    
	$(".fb-toggle").on('click',function(){
		
		$(this).parents('.filter-block').toggleClass('is-open').find('.filter-block__body').slideToggle();

	    return false;
	});

	$(".mp-toggle").on('click',function(){
		
	    $('.styler').trigger('refresh');
	
		$(this).toggleClass('is-active').parents('.map-sidebar').toggleClass('is-open').find('.map-sidebar__body').slideToggle();

	    return false;
	});

	$(".calc-open").on('click',function(){
		
		$(this).hide().parents('.product-inner').find('.calc').show();

	    return false;
	});

	$(".calc-close").on('click',function(){
		
		$(this).parents('.product-inner').find('.calc-open').show();
		$(this).parents('.product-inner').find('.calc').hide();

	    return false;
	});


	$(".open-filter").on('click',function(){
	    $('.filter').toggleClass("is-open");
	    $('.overlay').toggleClass("is-open");
	    $('body').toggleClass("lock");
	});

	$(".close-filter").on('click',function(){
	    $('.filter').removeClass("is-open");
	    $('.overlay').removeClass("is-open");
	    $('body').removeClass("lock");
	});

	$(".open-search").on('click',function(){
	    $('.header .search').toggleClass("is-open");
	});

	$(".bc-all a ").on('click',function(){
		
	    $(this).parents('.bread-crambs').find('li').not($(this)).toggleClass("is-open");
	    namebl = $(this).text();
        if(namebl == 'Все'){
            $(this).text('Cвернуть');
        }else{
           $(this).text('Все');
        }
	});
	
	function openAllNavFilter() {
		$('.filter-link').on('click', function(){
			namebl = $(this).html();
			dataNameBl = $(this).data('title');
			if(namebl == dataNameBl){
				$(this).html('Cвернуть');
				$(this).parents('.filter-block__body').find('.i-hidden').removeClass('i-hidden').addClass('i-visible')
			}else{
				$(this).html(dataNameBl);
				$(this).parents('.filter-block__body').find('.i-visible').removeClass('i-visible').addClass('i-hidden')
			}
			
			return false;
		});

	}
	openAllNavFilter();

	function sortingGridProduct() {
		$('.sorting-grid__item').on('click', function(){
			$('.sorting-grid__item').removeClass('is-active')
			$(this).addClass('is-active')
			if($(this).hasClass('sorting-grid__item--grid')) {
				$('.products-list').hide();
				$('.products-grid').show();
			} else {
				$('.products-list').show();
				$('.products-grid').hide();
			}
			return false;
		});

	}
	sortingGridProduct();

	function openNavDropdown() {
		$('.is-dropdown > a').on('click', function(){
			
			$(this).parent().toggleClass('is-open')
			
			return false;
		});

	}
	openNavDropdown();
	
	$('.go-map').bind('click.smoothscroll',function () {
		
		$('#tabs_2').parents('.tab-wrap').find('.nav-tab__item').removeClass('is-active')
		$('#tabs_2').parents('.tab-wrap').find('.nav-tab__link[href="#tabs_2"]').parent().addClass('is-active')
		$('#tabs_2').parents('.box-tab').find('.tab-cont').addClass('is-hidden')
		$('#tabs_2').removeClass('is-hidden')
		setTimeout(function() {
			var bl_top = $('#tabs_2').offset().top;
			$('body,html').animate({scrollTop: bl_top}, 600);
		}, 100)

		
		return false;
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
        $('.styler').styler({
        	singleSelectzIndex: 10
        });
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
        	responsive: [
        		{
        			breakpoint: 1360,
        			settings: {
        				slidesToShow: 3,
        			}
        		},
        		{
        			breakpoint: 991,
        			settings: {
        				slidesToShow: 4,
        			}
        		},
        		{
        			breakpoint: 767,
        			settings: {
        				vertical: false,
        			}
        		}
        	]
        });
    };

    if($('.slider').length){
        $('.slider').slick({
        	slidesToShow: 5,
        	slidesToScroll: 1,
        	arrows: true,

        	prevArrow: '<button class="slick-arrow slick-prev"><img src="img/slick-arrow.png" alt="" /></button>',
        	nextArrow: '<button class="slick-arrow slick-next"><img src="img/slick-arrow-next.png" alt="" /></button>',
        	responsive: [
        		{
        			breakpoint: 1360,
        			settings: {
        				slidesToShow: 4,
        			}
        		},
        		{
        			breakpoint: 991,
        			settings: {
        				slidesToShow: 3,
        			}
        		},
        		{
        			breakpoint: 767,
        			settings: {
        				slidesToShow: 2,
        				variableWidth: true,
        			}
        		},
        		{
        			breakpoint: 574,
        			settings: {
        				slidesToShow: 1,
        				variableWidth: true,
        			}
        		}
        	]
        });
    };
     if($('.popup-card-slider').length){
        $('.popup-card-slider').slick({
        	slidesToShow: 1,
        	arrows: true,
        	dots: true,

        	prevArrow: '<button class="slick-arr slick-prev"></button>',
        	nextArrow: '<button class="slick-arr slick-next"></button>',
        	appendArrows: '.popup-card-slider-nav',
        	appendDots: '.popup-card-slider-nav',
        });
    };

    

    /* Range */
    if($("#range" ).length>0){
		$("#range" ).slider({
			range: true,
			min: 0,
			max: 12398,
			values: [350, 10398],
			slide: function( event, ui ){
				$('#rangefrom').val(ui.values[0].toLocaleString());
				$('#rangeto').val(ui.values[1].toLocaleString());
			
			},
			
		});
		$("#rangefrom").on('change', function() {
	    	$("#range").slider('values',0,$(this).val());
		});
		$("#rangeto").on('change', function() {
		    $("#range").slider('values',1,$(this).val());
		});

	}


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
                balloonContentHeader: 'Отделкино',
            	balloonContentBody: '<p><strong>Адрес:</strong> Москва, ул. Большая Сыромятническая, д. 5к2</p><p><strong>Телефон:</strong> +7 (495) 897-52-33</p><p><strong>Режим работы:</strong> Пн-Пт - 09:00-19:00, Сб - 09:00-19:00, Вс - 09:00-19:00</p><a href="#" class="btn btn--purpule">Перейти на сайт</a>',
            }, {
                iconLayout: 'default#image',
                
            })

            /* Добавляем метки на карту */
            myMap.geoObjects.add(myPlacemark);

        }
    }
};