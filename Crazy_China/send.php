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
if(isset($_POST['calculator'])){
if($_POST['sposob'] == 2){
 $message = "<p> " . $_POST['name_c'] . ", здравствуйте!</p><br>";
 $message .= "<p>Благодарим Вас за обращение в международную компанию Crazy China.</p>";
 $message .= "<p>Предлагаем Вашему вниманию предварительный расчет стоимости доставки из Китая в Россию, по Вашему запросу согласно предоставленным Вами данным:</p>";
 $message .= "<p>Вес: " . $_POST['weight'] . " кг;</p>";
 $message .= "<p>Габариты, объем м.куб.: " . $_POST['size'] . " м.куб;</p>";
 $message .= "<p>Способ и срок доставки: Море (45-55 дней);</p>";
 $message .= "<p>Страна отправления: Китай; </p>";
 $message .= "<p>Ценность груза: " . $_POST['price'] . "$;</p>";
 $message .= "<p>Стоимость морской перевозки рассчитывается индивидуально.</p>
<p>Для точного расчета нам необходима следующая информация:</p>
<p>&nbsp&nbspО&nbsp1.Oтгрузочные документы (инвойс, упаковочный лист);</p>
<p>&nbsp&nbspО&nbsp2.Дата готовности груза на фабрике;</p>
<p>&nbsp&nbspО&nbsp3.Пункт отправления;</p>
<p>&nbsp&nbspО&nbsp4.Пункт назначения.</p>

<p>В ближайшее время с Вами свяжется наш специалист.</p>
<p>С уважением,</p>
<p>международная компания Crazy China</p>
<p>тел.: +7 (896) 767-67-22</p>
<p><a href='www.crazychina.ru'>www.crazychina.ru</a></p>";
}else{
 $message = "<p> " . $_POST['name_c'] . ", здравствуйте!</p>";
 $message .= "<p>Благодарим Вас за обращение в международную компанию Crazy China.</p>";
 $message .= "<p>Предлагаем Вашему вниманию предварительный расчет стоимости доставки из Китая в Россию, по Вашему запросу согласно предоставленным Вами данным:</p>";
 $message .= "<p>Вес, кг: " . $_POST['weight'] . "кг;</p>";
 $message .= "<p>Габариты, объем м.куб.: " . $_POST['size'] . " м.куб;</p>";
 if($_POST['sposob'] == 1){
 $message .= "<p>Способ и срок доставки: ЖД и авто (25-30 дней);</p>";
 }else if($_POST['sposob'] == 3){
 $message .= "<p>Способ и срок доставки: Авиа (10-14 дней);</p>";
 }else if($_POST['sposob'] == 4){
 $message .= "<p>Способ и срок доставки: Экспресс (2-5 дня);</p>";
 };
 $message .="<p>Стоимость перевозки и таможенного оформления составит: " . $_POST['summa'] . "$;</p>
  <p>Дополнительные расходы, которые могут возникнуть:</p>
<p>1. Услуга по упаковке груза от 7 $ до 15$ за место (4 места - 1 м3),</p>
<p>2. Доставка до нашего склада в Китае (доставка по Китаю приблизительно 0,2$/ кг.)</p>
<p>3. Страхование груза от потери 1-2% (от указанной Вами стоимости, по Вашему желанию)</p>
<p>4. Доставка из МСК в любой регион (осуществляется по тарифам Деловые линии Байкал Сервиса или другой аналогичной
компании)</p>
<p>5. Автомобильный пропуск на территорию склада в РФ (1000 – 2500 руб. в зависимости от размера а/м).</p>

<p>Для более детального и точного расчета в ближайшее время с Вами свяжется наш специалист.</p>
<p>С уважением,</p>
<p>международная компания Crazy China</p>
<p>тел.: +7 (896) 767-67-22</p>
<a href='www.crazychina.ru'>www.crazychina.ru</a>";
}
}


$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$mail->From = 'info@holygams.com';      // от кого
$mail->FromName = 'info@holygams.com';   // от кого
$mail->AddAddress($_POST['email_c']);   // кому - адрес, Имя
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