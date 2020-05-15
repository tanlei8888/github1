<?php
	header('content-text:text/html; charset="utf-8"');
	error_reporting(0);
	header('Access-Control-Allow-Origin:*');
	
	//echo  1;
	
	//$_REQUEST
	$username = $_POST['username'];
	$age	  = $_POST['age'];
	$hoby     = $_POST['hoby'];
	echo "名字:{$username} , 年龄: {$age} , 爱好:{$hoby}"; 
