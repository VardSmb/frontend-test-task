<?php
require 'phpmailer/class.phpmailer.php';

//описания переменных

$subject = "Заявка с калькулятора!";

 $message = "<p>Имя: " . $_POST['name_c'] . " </p>";
 $message .= "<p>Email: " . $_POST['email_c'] . "</p>";
 $message .= "<p>Телефон: " . $_POST['phone_c'] . "</p>";
 $message .= "<p>Описание груза: " . $_POST['cargo'] . "</p>";
 $message .= "<p>Вес, кг: " . $_POST['weight'] . "</p>";
 $message .= "<p>Габариты, объем м.куб.: " . $_POST['volume'] . "</p>";
if($_POST['sposob'] == 1){
 $message .= "<p>Способ и срок доставки: ЖД и авто (25-30 дней);</p>";
 }else if($_POST['sposob'] == 3){
 $message .= "<p>Способ и срок доставки: Авиа (10-14 дней);</p>";
 }else if($_POST['sposob'] == 4){
 $message .= "<p>Способ и срок доставки: Экспресс (2-5 дня);</p>";
 };
 $message .= "<p>Страна отправления: Китай;</p>";
 $message .= "<p>Ценность груза: " . $_POST['price'] . "$;</p>";
 $message .= "<p>Стоимость доставки: " . $_POST['summa'] . "$;</p>";



$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$mail->From = 'info@holygams.com';      // от кого
$mail->FromName = 'info@holygams.com';   // от кого
$mail->AddAddress('alex_bar21@mail.ru');   // кому - адрес, Имя
$mail->IsHTML(true);        // выставляем формат письма HTML
$mail->Subject = $subject;  // тема письма
$mail->Body = $message;
if($_FILES['file']) {
    if($_FILES['file']['error'] == 0){
        $mail->AddAttachment($_FILES['file']['tmp_name'],
                             $_FILES['file']['name']);
    }
}
if($_FILES['file']) {

    if($_FILES['file']['error'] == 0){
        $mail->AddEmbeddedImage($_FILES['file']['tmp_name'],
            $_FILES['file']['name']);
    }
}
// отправляем наше письмо
if(!$mail->send()) {
    echo $mail->ErrorInfo;
} else {
    echo "Success";
}

?>