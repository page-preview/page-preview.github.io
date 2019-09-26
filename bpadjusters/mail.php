<?php
if (isset($_POST['send'])) {
	# code...
	$x1=$_POST['v1'];
	$x2=$_POST['v2'];
	$x3=$_POST['v3'];
	$x4=$_POST['v4'];
	$x5=$_POST['v5'];

		$to="itxali20@gmail.com";
$from='noreply@me.com';
$subject="Property Information";

$body = "
					Zip Code:".$x1."
					Insurance Provider:".$x2."
					Type Of Property:".$x3."
					Type Of Damage:".$x4."
					Claim Status:".$x5."
		
		";
if (mail ($to, $subject, $body, $from)) {
		echo "your form has been submitted";
	} else {

echo "PLease try";
	}
}

?>