<?php


if(isset($_POST['submit']))
{
	$capcha= $_POST['captcha'];
	$from_email = $_POST['email'];
	$recipient_email = 'web@gelster.ru'; 
	$subject = $_POST['name'];
	$message = $_POST['message'];
	$phone = $_POST['phone']; 
	
session_start();

if($capcha != $_SESSION['capcha']) 
 {

		echo '<script type="text/javascript">alert("Проверьте точность заполнения полей!");</script>';
		echo '<script type="text/javascript">window.history.go(-1);</script>';
				}
		
else
		{

			 			
					
					if($_POST['captcha'] == $_SESSION['rand'])
				 {
							
						       
    						$user_email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);

    						$handle = fopen($file_tmp_name, "r");
    						$content = fread($handle, $file_size);
    						fclose($handle);
    						$encoded_content = chunk_split(base64_encode($content));
     						$boundary = md5("sanwebe"); 
       						 
							 //header
        						$headers = "MIME-Version: 1.0\r\n"; 
        						$headers .= "From:".$from_email."\r\n"; 
								$headers .= "Reply-To: ".$from_email."" . "\r\n";
        						$headers .= "Content-Type: multipart/mixed; boundary = $boundary\r\n\r\n";
        
       						 //plain text 
								$body = "--$boundary\r\n";
								$body .= "Content-Type: text/plain; charset=utf-8\r\n";
								$body .= "Content-Transfer-Encoding: base64\r\n\r\n"; 
        						$body .= chunk_split(base64_encode($message)); 
        
           						   //attachment
           						$body .= "--$boundary\r\n";
            					$body .= "Content-Type: application/octet-stream; name=\"$fileName\"\r\n";
            					 $body .="Content-Disposition: attachment; filename=\"$file_name\"\r\n";
             					 $body .="Content-Transfer-Encoding: base64\r\n";
             					 $body .="X-Attachment-Id: ".rand(1000,99999)."\r\n\r\n"; 
             					 $body .= $encoded_content; 
    
         						 $sentMail = @mail($recipient_email, $subject, $body, $headers);
         						
								if($sentMail) //output success or failure messages
         						 {       
								echo '<script type="text/javascript">alert("Спасибо, Ваше письмо отправлено!!");</script>';
								echo '<script type="text/javascript">window.history.go(-1);</script>';
					
         						 }else{
								echo '<script type="text/javascript">alert("Не отправлено :( напишите нам со своего ящика, пожалуйста");</script>';
								echo '<script type="text/javascript">window.history.go(-1);</script>';
         						 }

					
					}
					
						else
						
						
					{
						      								
    				      		$user_email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);

								// $message = wordwrap($message, 150);
													
    							
								   //header
        						$headers = "MIME-Version: 1.0\r\n"; 
        						$headers .= "From:".$from_email."\r\n"; 
								$headers .= "Reply-To: ".$from_email."" . "\r\n";
        						$headers .= "Content-type: text/plain; charset=windows-1251"; 
				   
									
								//plain text 
								$body = "--$boundary\r\n";
								$body.="Content-type: text/plain; charset=windows-1251";
								$body.="Content-Transfer-Encoding: 8bit\n\n";
								$body .= chunk_split(base64_encode($message));  
        						    
         						$sentMail = @mail($recipient_email, $subject, $message, $headers);
         						
								if($sentMail) //output success or failure messages
									{     
			
										echo '<script type="text/javascript">alert("Спасибо, Ваше письмо отправлено!");</script>';
										echo '<script type="text/javascript">window.history.go(-1);</script>';
									}
					
										else
					
										{
												echo '<script type="text/javascript">alert("Не отправлено :( напишите нам со своего ящика, пожалуйста");</script>';
												echo '<script type="text/javascript">window.history.go(-1);</script>';  
										}
					}	
						
						
						
						
						
			}
	
	}
				

?>