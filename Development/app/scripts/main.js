function setMenuActive(quel){
	   
   $(".menu-entry").removeClass("active");
   $("#menu"+quel).addClass("active");
   
}

/***************************************************
	  SELECT MENU ON SMALL DEVICES
***************************************************/
$(function() {
			var pull 		= $('#pull');
				menu 		= $('#primary-menu ul');
				menuHeight	= menu.height();

			$(pull).on('click', function(e) {
				e.preventDefault();
				menu.slideToggle();
			});

			$(window).resize(function(){
        		var w = $(window).width();
        		if(w > 479 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
				if(w > 719 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
    		});
		});
