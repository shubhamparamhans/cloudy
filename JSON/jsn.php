<?php
class A
{
	public $appname="newERA";
	public $data=array();
	function __construct(){
			array_push($this->data, new B('e_1',"alert('hi')",'Say Perry',''));
			array_push($this->data, new B('e_2',"alert('hi 2')",'Say Perry',''));
			array_push($this->data, new B('e_3',"alert('hi 2')",'Say Perry',''));
			array_push($this->data, new B('e_4',"alert('hi 2')",'Say Perry',''));
			array_push($this->data, new B('e_5',"alert('hi 2')",'Say Perry',''));
			array_push($this->data, new B('e_6',"alert('hi 2')",'Say Perry',''));
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
echo json_encode(new A);
?>