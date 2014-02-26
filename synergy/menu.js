$(function() {
	$("#navbar > li > ul").each(function() {
		var submenu = $(this);
		submenu.hide();
		var menu = submenu.parent();
		menu.mouseover(function() {
			submenu.slideDown('fast');
		});
		menu.mouseleave(function() {
			submenu.slideUp('fast');
		});
	});
});