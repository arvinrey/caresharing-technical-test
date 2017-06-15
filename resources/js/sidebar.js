$(document).ready(function () {

	$("#sidebar-item").niceScroll({
		cursorcolor: '#bbbbbb',
		cursorwidth: 8,
		cursorborder: 'none',
		cursorborderradius: 0,
	});

	$('#sidebar_collapse').on('click', function () {
		$('#sidebar, #content').toggleClass('active');
		$('.collapse.in').toggleClass('in');
		$('a[aria-expanded=true]').attr('aria-expanded', 'false');
	});

	$("div#sidebar-item > ul.list-group > li.list-group-item").click(function () {
		$("div#sidebar-item > ul.list-group > li.list-group-item > b#sidebar-list-title").removeClass("activated");
		$(this).addClass("activated").siblings().removeClass("activated");
		$("#"+this.id+" > b#sidebar-list-title").addClass("activated");
	});

	$(".btn_container > .callout").click(function(){
		$(this).addClass("btn_active").siblings().removeClass("btn_active");
	});

});


