<?php
    $fname = $_POST['firstname'];
	$lname = $_POST['lastname'];
    $email = $_POST['email'];
    $message = $_POST['subject'];
    $from = 'thomasmkolb.com'; 
    $to = 'kolbyt93@gmail.com'; 
    $subject = 'You have been contacted from your website';
    $human = $_POST['human'];
			
    $body = "From: $fname $lname\n E-Mail: $email\n Message:\n $message";
				
    if ($_POST['submit'] && $human == '4') {				 
        if (mail ($to, $subject, $body, $from)) { 
	    echo '<p>Your message has been sent!</p>';
	} else { 
	    echo '<p>Something went wrong, go back and try again!</p>'; 
	} 
    } else if ($_POST['submit'] && $human != '4') {
	echo '<p>You answered the anti-spam question incorrectly!</p>';
    }
?>