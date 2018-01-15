$(document).ready(function() {
	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});
	// fancybox.js
	$(".youtube-media").on("click", function(e) {
		var jWindow = $(window).width();
		if (jWindow <= 410) {
			return;
		}
		$.fancybox({
			href: this.href,
			padding: 4,
			type: "iframe",
			'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
		});
		return false;
	});

	// owlcarousel team

	$("").owlCarousel({
	/*autoPlay: 3000, //Set AutoPlay to 3 seconds*/
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],

		pagination : true,
		paginationNumbers: false,


		responsive: true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth: window
	});

	// scrollTop.js
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 2000);
			return false;
	});

	// scrollDown.js
	$('.scrolldown a').bind('click', function () {
		$('html , body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top - 80 
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});

	// navbardown.js
	$('.nav a').bind('click', function () {
		$('html , body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top - 80
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});			
	new WOW().init();
	
	// main-menu-scroll
	jQuery(window).scroll(function () {
		var top = jQuery(document).scrollTop();
	  var height = 50;
		//alert(batas);
		
		if (top > height) {
			jQuery('.navbar-fixed-top').addClass('menu-scroll');
		}
		else {
		  jQuery('.navbar-fixed-top').removeClass('menu-scroll');
		}
	});	
		
	// scroll Up
	$(window).scroll(function(){
		if ($(this).scrollTop() > 600) {
			$('.scrollup').fadeIn('slow');
		} 
		else {
			$('.scrollup').fadeOut('slow');
		}
	});
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
		return false;
	});		
});
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5a4d9711d7591465c7067db6/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();