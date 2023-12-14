$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/time/main/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icon/time/main/right.png"></button>',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            }
        ]
    });

   //скрипт для табов 1. расфасовка каждого контента в отдельную вкладку

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	//скрипт для переключения инфы в карточке (кнопка ПОДРОБНЕЕ)

	$('.catalog-item__link').each(function(i) {
		$(this).on('click', function(e) {
			e.preventDefault();
			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
		})
	});

	//скрипт для переключения инфы в карточке назад (кнопка НАЗАД)

	$('.catalog-item__back').each(function(i) {
		$(this).on('click', function(e) {
			e.preventDefault();
			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
		})
	});

	//modal
	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
	});
	$('.button_mini').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});

	function valideForms(form) {
		$(form).validate({
			rules: {
				name: 'required',
				phone: {
					minlength: 11,
					required: true
				},
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: "Пожалуйстаб напишите ваше имя",
				phone: {
					required: "Поажлуйста, напишите ваш номер",
					minlength: jQuery.validator.format("введите {0} символ(а/ов)")
				},
				email: {
				  required: "Пожалуйста введите ваш email",
				  email: "введите настоящий email"
				}
			}
		});
	};

	//валидация формы

	valideForms('#consultation-form');
	valideForms('#consultation form');
	valideForms('#order form');
	$('input[name=phone]').mask("+7 (999) 999-99-99");



	$('form').submit(function(e) {
		e.preventDefault();
		if (!$(this).valid()) {
			return;
		}
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find('input').val("");
			$('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn();
			$('form').trigger('reset');
		})
		return false;
	});

	//pageup scrolling

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	$("a[href^='#']").click(function() {
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	new WOW().init();
  });