<?php

require 'phpmailer/class.phpmailer.php';

//описания переменных
if(isset($_POST['comments'])){
$subject = 'Обратная форма с сайта: Заказать тур!';
}else{
$subject = 'Обратная форма с сайта: Написать письмо!';
}

//пишем условия для получения данных с формы

if($_POST['name']){  //если поле 'name' заполнено
  $message = "<p> Имя: " . $_POST['name'] . "</p>"; //если выполнено, то формируем строку и записываем в переменную
}
if($_POST['message']){  //если поле 'phone' заполнено
  $message .= "<p> Сообщение: " . $_POST['message'] . "</p>";
}
if($_POST['tour'] == 0){  //если поле 'phone' заполнено
  $message .= "<p> Тур: не выбран</p>";
}elseif($_POST['tour'] == 1){
    $message .= "<p> Тур: Горнолыжный тур </p>";
}elseif($_POST['tour'] == 2){
  $message .= "<p> Тур: Фото тур </p>";
}elseif($_POST['tour'] == 3){
  $message .= "<p> Тур: Серф тур </p>";
}elseif($_POST['tour']){
    $message .= "<p> Тур: Йога тур </p>";
}
if($_POST['email']){  //если поле 'phone' заполнено
    $message .= "<p> E-mail: " . $_POST['email'] . "</p>";
}
if($_POST['phone']){
  $message .="<p> Телефон: " . $_POST['phone'] . "</p>";
}
if($_POST['comments']){
  $message .="<p> Комментарии: " . $_POST['comments'] . "</p>";
}
//конец описания

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$mail->From = 'no-reply@mycreative.website';      // от кого
$mail->FromName = 'StepsOnMap';   // от кого
$mail->AddAddress('varduhis@mail.ru');   // кому - адрес, Имя
$mail->IsHTML(true);        // выставляем формат письма HTML
$mail->Subject = $subject;  // тема письма
$mail->Body = $message;
// отправляем наше письмо
if(!$mail->send()){
	echo "failed";
} else {
	echo "Success";
}

?>
<!-- <script>
  window.location = '/';
</script>  -->