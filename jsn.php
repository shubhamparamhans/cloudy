<?php
class A
{
	public $appname="newAPP";
	public $data=array();
	public $app=array();
	function __construct(){
			array_push($this->data, new B('e_1',"$('#calc').detach();$.getScript('./JSAPP/dev/calc.js',function(data,testStatus,jqxhr){	});",'CALCULATOR','img/bg/1.jpg'));
			array_push($this->data, new B('e_2',"",'Say Perry',''));
				array_push($this->data, new B('e_2',"",'Say Perry',''));
			//array_push($this->app, new C());
	}
}
class B{
		public $id;
		public $dblclk;
		public $text;
		public $img;
		function __construct($a,$b,$c,$d){
					$this->id=$a;
					$this->dblclk=$b;
					$this->text=$c;
					$this->img=$d;
		}
		
}
class C{
		
}
echo json_encode(new A);
?>