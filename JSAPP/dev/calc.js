$(document).ready(function(){
		$('head').append($("<link rel='stylesheet' type='text/css'	/>").attr('href','css/calc.css'));	
		
			//	var d="<div id='calc'><div id='container'><input type='text' value=''  id='output'><input type='button' value='C' class='calcB' /><input type='button' value='CE' class='calcB' /><br>";
			//$('#appGround').append(d);
			$('#appGround').append("<div id='calc'></div>");
			$('#calc').append("");
			$('#calc').append("<div class='calc-top-menu'><a id='calcClose' href='#'>X</a></div>");
			var d="<input type='text' id='output' placeholder='PRESS NO.S'><br><input type='button' value='C' class='calcB' /><input type='button' value='CE' class='calcB' /><br>";
			 d+="";
			d+="<input type='button' value='7' class='calcB' /><input type='button' value='8' class='calcB' /><input type='button' value='9' class='calcB' />&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='+/-' class='calcB' /><input type='button' value='%' class='calcB' /><br>";
			
			d+="<input type='button' value='4' class='calcB' /><input type='button' value='5' class='calcB' /><input type='button' value='6' class='calcB' />&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='+' class='calcB' /><input type='button' value='-' class='calcB' /><br><input type='button' value='1' class='calcB' /><input type='button' value='2' class='calcB' /><input type='button' value='3' class='calcB' />&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='*' class='calcB' />";
			d+="<input type='button' value='/' class='calcB' /><br><input type='button' value='0' class='calcB' /><input type='button' value='. ' class='calcB' /><input type='button' value='  ' class='calcB' />&nbsp;&nbsp;&nbsp;&nbsp;";
			d+="<input type='button' value='* ' class='calcB' /><input type='button' value='=' class='calcB' /><br>";
			$('#calc').append(d);


			
			
			
			
			
				var no1="",no2="",opr="";
	function changeColor(id){
				$(id).css({"color":"black"});
			setInterval(function(){
				$(id).css({"color":"white"});
				
			},200);
	}
		$('.calcB').mouseover(function(){
			$(this).css({"color":"white"});
			$(this).css({"background":"#ff7400"});
		});
		$('.calcB').mouseout(function(){
			$(this).css({"background":"#3399ff"});
		//	$(this).css({"":""});
		});
		$('.calcB').click(function(){
		var no=this.value;
		
		
			
			
		if(no==9 || no==8 || no==7 || no==6 || no==5 || no==4 || no==3 || no==2 || no==1 || no==0 || no===". "){
			if(opr===""){
					no1=no1+no;
					document.getElementById('output').value=no1;
			}
			else{
					no2=no+no2;
					document.getElementById('output').value=no2;
			}
		}
		else if(no==="="){
					str=no1+opr+no2;
					str=eval(str);
					document.getElementById('output').value=str;
					no1="";
					no2="";
					opr="";
		}
		else if(no==="C"){
		document.getElementById('output').value="";
		no1="";
		no2="";
		opr="";
		}
		else if(no==="CE"){
			if(opr==="")
				no1="";
			else
				no2="";
				document.getElementById('output').value="";
		}
		else{
				opr=no;
				document.getElementById('output').value="";
		}
		});
		$('#appGround').draggable();
		//$('#calc').append("<div id='calcClose'><a href='#'>CLOSE</a></div>");
		$('#calcClose').click(function(){
				$('#calc').detach();
		});

});