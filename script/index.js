const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const body = document.querySelector("body");

menu_btn.addEventListener('click', function () 
{
	menu_btn.classList.toggle('is-active');
	mobile_menu.classList.toggle('is-active');
	if(body.style.overflow === "hidden")
	{
		body.style.overflow = "auto";
	}
	else{
		body.style.overflow = "hidden";
	}
});

function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
  }



// beard brush slider //

$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: true,
	asNavFor: '.slider-nav',
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true
		  }
		}
	  ]
  });
  $('.slider-nav').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows: false,
	asNavFor: '.slider-for',
	dots: false,
	focusOnSelect: true,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 800,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1
		  }
		}
	  ]
  });
