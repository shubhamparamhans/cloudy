$(document).ready(function(){
		var MOUSE_BUTTON_RIGHT=0;
		var WIDGET_POWER=false;
	$(window).load(function(){
		$(window).size=window.maxWindow;
		$('#rightMenu').hide();
		$('#widgetScreen').hide();
		document.oncontextmenu=function(){return false;};
	});
	var ht=screen.availHeight+"px";
	var wid=screen.availWidth+"px";
	var menubar_bottom_flag=0;
	var canvas=$("#myCanvas");
	context=canvas.get(0).getContext('2d');
	canvas.attr("width",$(window).get(0).innerWidth-0);
	canvas.attr("height",$(window).get(0).innerHeight-0);
	im= new Image();
	im.src="img/bg/8.jpg";
	$(im).load(function(){
	context.drawImage(im,0,0,canvas.width(),canvas.height());

	context.fillText("PRESS RIGHT CLICK ANYWHERE IN CANVAS",500,100);
	});
	/*$('#menubar_bottom').click(function(){
				
			if(menubar_bottom_flag==0){
			$('#menubar_bottom').animate({"bottom":"0"},"slow");
			menubar_bottom_flag=1;
			}
			else if(menubar_bottom_flag==1){
			$('#menubar_bottom').animate({"bottom":"-50"},"slow");
			menubar_bottom_flag=0;
			}
			
	});*/
	$(document).mousedown(function(e){		
				if(e.button==0){
			if(MOUSE_BUTTON_RIGHT==1){
			hideRightMenu();
			}
				}
			if(e.button==2){					
				if(MOUSE_BUTTON_RIGHT==0){
						showRightMenu();
				}
				else{
						hideRightMenu();
					}
				}
		
	});
	$(document).keydown(function(e){
		//	alert(e.which);
	});
	
	$('#alertRaise').dblclick(function(){	
			alert('DOUBLE CLICK');
	});
	$('body').mouseover(function(){
				var evsX=event.pageX;
				var evsY=event.pageY;
				if(evsX<=50 && evsY<=50){
					alert("PERRY");
				}
	});
	$('#refreshWindow').click(function(){
			window.location.reload(true);
	});
	
	function showRightMenu(){
				$('#rightMenu').css({"top":event.pageY,"left":event.pageX});
				$('#rightMenu').show(50);
				MOUSE_BUTTON_RIGHT=1;
	}
	function hideRightMenu(){
		$('#rightMenu').hide(50);MOUSE_BUTTON_RIGHT=0;
	}
	
	 $("#alertRaise").draggable();
	 $('#widgetOn').click(function(){ 
					
				if(!WIDGET_POWER){
							//alert('dit');
						$('#widgetScreen').show();
						$('#widgetScreen').animate({"right":"0px"},{duration:'slow',easing:'easeOutBounce'});
						WIDGET_POWER=true;
						
				}
				 else{$('#widgetScreen').animate({"right":"-500"},{duration:'slow',easing:'easeOutBounce'});
				 $('#widgetScreen').hide();WIDGET_POWER=false;}
	 });
	 
				function kz(xx){
				
				
				}
	
});