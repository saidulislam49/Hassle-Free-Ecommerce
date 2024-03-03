(function ($) {
	'use script';


	var $loader = $('#preloader');
	if ($loader.length > 0) {
		$(window).on('load', function (event) {
			$('#preloader').delay(500).fadeOut(500);
		});
	}

	// Scroll Area
	var $scroll = $('.scroll-area');
	if ($scroll.length > 0) {
		$(document).ready(function () {
			$('.scroll-area').click(function () {
				$('html').animate({
					'scrollTop': 0,
				}, 700);
				return false;
			});
			$(window).on('scroll', function () {
				var a = $(window).scrollTop();
				if (a > 400) {
					$('.scroll-area').slideDown(300);
				} else {
					$('.scroll-area').slideUp(200);
				}
			});
		});
	}



	//video
	var $video = $('.technology-video a');
	if ($video.length > 0) {
		$('.technology-video a').magnificPopup({
			type: 'iframe',
		});
	}

	//mixltup
	var $mix = $('.p-projects-full');
	if ($mix.length > 0) {
		$(document).ready(function () {
			var mixer = mixitup('.p-projects-full')

			var mixer = mixitup('.p-projects-full');
			var mixer = mixitup('.p-projects-full', {
				selectors: {
					target: '.blog-item'
				},
				animation: {
					duration: 300
				}
			});

		});

	}

	// Client Review 
	$('.reviews').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
			}, 
			 
		]
	});


}(jQuery));

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }


//   cart update
$(document).ready(function() {
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});

