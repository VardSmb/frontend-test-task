<?php
require 'phpmailer/class.phpmailer.php';

//присваиваем переменные с формы
// json_decode($_POST);
$name = htmlspecialchars($_POST['name']);
$phone = htmlspecialchars($_POST['phone']);
$email = htmlspecialchars($_POST['email']);

//описания переменных
if($_POST['tema']){
$subject = $_POST['tema'];
}else if($_POST['temafooter']){
$subject = $_POST['temafooter'];
}else if($_POST['temasale']){
$subject = $_POST['temasale'];
}else if($_POST['services']){
	$subject = $_POST['services'];
}else{
	$subject = 'Обратная связь с сайта';
}
//пишем условия для получения данных с формы

if($_POST['name']){  //если поле 'name' заполнено
  $message = "<p> Имя: " . $_POST['name'] . "</p>"; //если выполнено, то формируем строку и записываем в переменную
}
if($_POST['phone']){  //если поле 'phone' заполнено
  $message .= "<p> Телефон: " . $_POST['phone'] . "</p>";
}
if($_POST['email']){  //если поле 'phone' заполнено
    $message .= "<p> E-mail: " . $_POST['email'] . "</p>";
}
if($_POST['message']){
  $message .= "<p> Сообщение: " . $_POST['message'] . "</p>";
}


$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$mail->From = 'info@holygams.com';      // от кого
$mail->FromName = 'Name from';   // от кого
$mail->AddAddress('alex_bar21@mail.ru');   // кому - адрес, Имя
$mail->IsHTML(true);        // выставляем формат письма HTML
$mail->Subject = $subject;  // тема письма
$mail->Body = $message;

// отправляем наше письмо
if(!$mail->send()) {
    echo $mail->ErrorInfo;
} else {
    echo "Success";
}

?>