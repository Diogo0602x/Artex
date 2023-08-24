/*
 * Copyright (c) 2021 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	aali_tm_resume_image_width();
	aali_tm_nav_bg();
	aali_tm_trigger_menu();
	aali_tm_hero_image();
	aali_tm_service_popup();
	aali_tm_portfolio_popup();
	aali_tm_news_popup();
	aali_tm_cursor();
	aali_tm_imgtosvg();
	aali_tm_popup();
	aali_tm_portfolio();
	aali_tm_data_images();
	aali_tm_contact_form();
	aali_tm_jarallax();
	aali_tm_testimonial_arrow();
	aali_tm_owl_carousel();
	aali_tm_about_animation();
	aali_tm_moving_animation();
	aali_tm_down();
	aali_tm_totop();
	
	jQuery(window).load('body', function(){
		aali_tm_my_load();
	});
	jQuery(window).on('resize', function(){
		aali_tm_resume_image_width();
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

function aali_tm_testimonial_arrow(){
	
	"use strict";
	
	$('.aali_tm_testimonials .direct a').on('mouseenter',function(){
		var e = $(this);
		var p = e.closest('.direct');
		if(e.hasClass('prev_button')){
			p.addClass('prev');
		}else{
			p.addClass('next');
		}
		e.addClass('hovered');
		p.addClass('hovered');
	}).on('mouseleave',function(){
		var e = $(this);
		e.removeClass('hovered');
		e.closest('.direct').removeClass('hovered prev next');
	});
}

// -----------------------------------------------------
// ------------   RESUME IMAGE WIDTH    ----------------
// -----------------------------------------------------

function aali_tm_resume_image_width(){
	
	"use strict";
	
	var media			= jQuery('.aali_tm_resume .media');
	var contentWidth	= jQuery('.aali_tm_resume .resume_in').width();
	media.css({width: (($(window).width() - contentWidth)/2 + 0.15*contentWidth) +'px'});
}

// -------------------------------------------------
// -------------   TOPBAR BG SCROLL  ---------------
// -------------------------------------------------

function aali_tm_nav_bg(){
	
	"use strict";
	
	jQuery(window).on('scroll',function(){
		var menu	 		= jQuery('.aali_tm_header');
		var WinOffset		= jQuery(window).scrollTop();
		
		if(WinOffset >= 100){
			menu.addClass('animate');
		}else{
			menu.removeClass('animate');
		}
	});
}

// ------------------------------------------------
// -------------------  ANCHOR --------------------
// ------------------------------------------------

jQuery('.anchor_nav').onePageNav();

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

function aali_tm_trigger_menu(){
	
	"use strict";

	var hamburger 		= jQuery('.aali_tm_mobile_menu .trigger .hamburger');
	var mobileMenu		= jQuery('.aali_tm_mobile_menu .dropdown');
	var mobileMenuList	= jQuery('.aali_tm_mobile_menu .dropdown .dropdown_inner ul li a');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
	
	mobileMenuList.on('click',function(){
		jQuery('.aali_tm_mobile_menu .trigger .hamburger').removeClass('is-active');
		mobileMenu.slideUp();
		return false;
	});
}

// -----------------------------------------------------
// ---------------   HERO IMAGE  -----------------------
// -----------------------------------------------------

function aali_tm_hero_image(){
	
	"use strict";
	
	var FixedImage	= jQuery('.aali_tm_hero .right .image .main').data('img-url');
	var wrapper	= jQuery('.aali_tm_hero .services ul');
	var list	= wrapper.find('li a');
	list.on('mouseenter',function(){
		var element = jQuery(this);
		var image	= element.find('.image').attr('src');
		element.closest('.aali_tm_hero').find('.right .image .main').css({backgroundImage:'url('+image+')'});
		console.log(image);
	});
	wrapper.on('mouseleave',function(){
		jQuery('.aali_tm_hero .right .image .main').css({backgroundImage:'url('+FixedImage+')'});
	});
}

// -------------------------------------------------
// -------------  SERVICE POPUP  -------------------
// -------------------------------------------------

function aali_tm_service_popup(){
	
	"use strict";
	
	var modalBox		= jQuery('.aali_tm_modalbox');
	var button			= jQuery('.aali_tm_service .service_list ul li .aali_tm_full_link');
	var closePopup		= modalBox.find('.close');
	
	button.on('click',function(){
		var element = jQuery(this);
		var parent	= element.closest('.aali_tm_service .service_list ul li');
		var elImage	= parent.find('.popup_service_image').attr('src');
		var title	= parent.find('.title').html();
		var content = parent.find('.service_hidden_details').html();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.service_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+elImage+'"></div></div>');
		aali_tm_data_images();
		modalBox.find('.service_popup_informations .image').after('<div class="main_title">'+title+'</div>');
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// -----------  PORTFOLIO POPUP  -------------------
// -------------------------------------------------

function aali_tm_portfolio_popup(){
	
	"use strict";
	
	var modalBox		= jQuery('.aali_tm_modalbox');
	var button			= jQuery('.aali_tm_portfolio .portfolio_popup');
	var closePopup		= modalBox.find('.close');
	
	button.off().on('click',function(){
		var element = jQuery(this);
		var parent 	= element.closest('.list_inner');
		var content = parent.find('.hidden_content').html();
		var image	= parent.find('.image .main').data('img-url');
		var details = parent.find('.details').html();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.popup_details').prepend('<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.popup_details .top_image').after('<div class="portfolio_main_title">'+details+'<div>');
		aali_tm_data_images();
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// ----------------  NEWS POPUP  -------------------
// -------------------------------------------------

function aali_tm_news_popup(){
	
	"use strict";
	
	var modalBox		= jQuery('.aali_tm_modalbox');
	var button			= jQuery('.aali_tm_news .list_inner .aali_tm_full_link,.aali_tm_news .news_list ul li .details .title a,.aali_tm_news .aali_tm_learn_more a');
	var closePopup		= modalBox.find('.close');
	
	button.on('click',function(){
		var element = jQuery(this);
		var parent 	= element.closest('.list_inner');
		var content = parent.find('.news_hidden_details').html();
		var image	= element.closest('.list_inner').find('.image .main').data('img-url');
		var details = parent.find('.details').html();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.news_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.news_popup_informations .image').after('<div class="details">'+details+'<div>');
		aali_tm_data_images();
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

function tdProgress(container){
	
	"use strict";
		
	container.find('.progress_inner').each(function() {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.bar');
		var pBar 			= progress.find('.bar_in');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');});
	});
}

jQuery('.dodo_progress').each(function() {

	"use strict";

	var pWrap 			= jQuery(this);
	pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
});

// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function aali_tm_preloader(){
	
	"use strict";
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');
	
	if (!isMobile) {
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function() {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function aali_tm_my_load(){
	
	"use strict";
	
	var speed	= 500;
	setTimeout(function(){aali_tm_preloader();},speed);
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function aali_tm_cursor(){
	
    "use strict";
	
	var myCursor	= jQuery('.mouse-cursor');
	
	if(myCursor.length){
		if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a,.aali_tm_topbar .trigger, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a,.aali_tm_topbar .trigger, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
	}
};

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function aali_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function aali_tm_popup(){
	
	"use strict";

	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube, .popup-vimeo').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
	
	jQuery('.soundcloude_link').magnificPopup({
	  type : 'image',
	   gallery: {
		   enabled: true, 
	   },
	});
}

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

function aali_tm_portfolio(){

	"use strict";
	
	if(jQuery().isotope) {

		// Needed variables
		var filter		 = jQuery('.aali_tm_portfolio .portfolio_filter ul');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var element		= jQuery(this);
				var selector 	= element.attr('data-filter');
				var list		= element.closest('.aali_tm_portfolio').find('.portfolio_list').children('ul');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				
				filter.find('a').removeClass('current');
				element.addClass('current');
				return false;
			});	
		}
	}
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function aali_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function aali_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function aali_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed,
			automaticResize: true,
			videoVolume: 0,
		});
	});
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function aali_tm_owl_carousel(){

	"use strict";
	
	var carousel			= jQuery('.aali_tm_testimonials .owl-carousel');
	
	var rtlMode	= false;

	if(jQuery('body').hasClass('rtl')){
		rtlMode = 'true';
	}
	
	carousel.owlCarousel({
		loop: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		lazyLoad: true,
		autoplay: true,
		autoplayTimeout: 6000,
		smartSpeed: 1000,
		margin: 0,
		dots: true,
		nav: false,
		navSpeed: true,
		responsive : {
			0 : {
				mouseDrag: false,
				touchDrag: true,
			},
			1100 : {
				mouseDrag: true,
				touchDrag: true,
			}
		}
	});

	carousel.parent().find('.next_button').click(function() {
		carousel.trigger('next.owl.carousel');
		return false;
	});
	// Go to the previous item
	carousel.parent().find('.prev_button').click(function() {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		carousel.trigger('prev.owl.carousel');
		return false;
	});

	aali_tm_imgtosvg();
}

// -----------------------------------------------------
// -------------------    COUNTER    -------------------
// -----------------------------------------------------

jQuery('.tm_counter').each(function() {

	"use strict";

	var el		= jQuery(this);
	el.waypoint({
		handler: function(){

			if(!el.hasClass('stop')){
				el.addClass('stop').countTo({
					refreshInterval: 50,
					formatter: function (value, options) {
						return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
					},	
				});
			}
		},offset:'80%'	
	});
});

// -----------------------------------------------------
// -------------    PARALLAX ANIMATION    --------------
// -----------------------------------------------------

function aali_tm_about_animation(){

	"use strict";

	jQuery('.parallax').each(function(){
		var element = jQuery(this);
		var scene = element.get(0);
		var parallax = new Parallax(scene, { 
			relativeInput: true,
			onReady: function() { console.log('ready!');
			} });
		});
}

// -----------------------------------------------------
// -------------    MOVING ANIMATION    ----------------
// -----------------------------------------------------

function aali_tm_moving_animation(){
	
	"use strict";
	
	var detail     	= $('.moving_effect');
	var offset		= 0;
	detail.each(function(){
		var element	= $(this);
		var direction = element.attr('data-direction');
		$(window).on('scroll',function(){
			offset  = $(window).scrollTop();
			var h	= $(window).height();
			var i	= element.offset().top - offset - h;
			if(element.attr('data-reverse') == 'yes'){
				i*= -1;
			}
			var x	= direction === 'x' ?  (i*70)/h : 0;
			var y 	= direction === 'x' ?  0 : (i*70)/h;
			if(element.attr('data-reverse') == 'yes'){
				i*= -1;
			}
			if((i*(-1))<h+300 && i<300){
				element.css({transform: 'translate3d('+x+'px, '+y+'px, 0px)'});
			}
		});
	});
}


// -----------------------------------------------------
// -----------------    TILT    ------------------------
// -----------------------------------------------------

jQuery('.tilt-effect').tilt({
    maxTilt: 6,
	easing: "cubic-bezier(.03,.98,.52,.99)",
	speed: 500,
	transition: true
})

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function aali_tm_down(){
	
	"use strict";
	
	var topbar	= jQuery('.aali_tm_header').outerHeight();
	
	jQuery('.anchor').on('click',function(){
		
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-topbar+20
			}, 800);
		}
		
		return false;
	});
}

/****************************/ 
/********** TOTOP ***********/ 
/****************************/ 

function aali_tm_totop(){
  
  "use strict";
  
  jQuery(".totop").on('click', function(e) {
    e.preventDefault();    
    jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
    return false;
  });
}

	
