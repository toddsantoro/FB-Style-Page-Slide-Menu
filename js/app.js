$(document).bind("mobileinit", function(){
	$.mobile.pushStateEnabled = true;
});





	$('div[data-role=page]').live('pageshow',function(){

$(function(){
			var menuStatus;
			
			
			// Show menu
			$("a.showMenu").click(function(){
				if(menuStatus != true){
				$("#menu").addClass('show');
				$(".ui-page-active").animate({
					marginLeft: "250px",
				  }, 300, function(){menuStatus = true});
				  return false;
				  } else {
				$("#menu").removeClass('show');
					$(".ui-page-active").animate({
					marginLeft: "0px",
				  }, 300, function(){menuStatus = false});
					return false;
				  }
			});
			
			
			$('#menu, .pages').live("swipeleft", function(){
				if (menuStatus){	
				$(".ui-page-active").animate({
					marginLeft: "0px",
				  }, 300, function(){menuStatus = false});
				  }
			});
			
			$('.pages').live("swiperight", function(){
				if (!menuStatus){	
				$(".ui-page-active").animate({
					marginLeft: "250px",
				  }, 300, function(){menuStatus = true});
				  }
			});
			
			$('div[data-role="page"]').live('pagebeforeshow',function(event, ui){
				menuStatus = false;
				$(".pages").css("margin-left","0");
			});
			
			// Menu behaviour
			$("#menu a li").click(function(){
				var p = $(this).parent();
				if($(p).hasClass('active')){
					$("#menu a").removeClass('active');
					if (menuStatus){	
					$("#menu").removeClass('show');
				$(".ui-page-active").animate({
					marginLeft: "0px",
				  }, 300, function(){menuStatus = false});
				  };
				} else {
					$("#menu a").removeClass('active');
					$(p).addClass('active');
					if (menuStatus){	
					$("#menu").removeClass('show');
				$(".ui-page-active").animate({
					marginLeft: "0px",
				  }, 300, function(){menuStatus = false});
				  }
				}
			});

		});
	
	});





});	