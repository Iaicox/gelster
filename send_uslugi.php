<?php header("Content-Type:text/html;charset=utf-8");?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Отправка заявки</title>
    <meta name="description" content="Отправка заявки на услуги от компании Гельстер">
    <link rel="shortcut icon" href="logotip32.gif" type="image/x-icon">
    <meta name="keywords" content="Отправка заявки на услуги по уходу или настилу напольных покрытий">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    <link rel="stylesheet" href="send-uslugi.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <script>
        function closeWindow() {
            window.close();
        }
        var second=10;
        function tiktak()
        {
            if(second<=9){second="0" + second;}
            if(document.getElementById("timer")){timer.innerHTML=second;}
            if(second==00){
                closeWindow();
                return false;
            }
            second--;
            setTimeout("tiktak()", 1000);
        }
    </script>
</head>
<body onLoad="tiktak();">
<main class='container-fluid col-lg-12 wrapper px-0 px-md-3'>
<?php
$to  = 'info@gelster.ru';
$subject = 'Заказ услуг с сайта';
$fio = $_GET['fio'];
$tel = $_GET['tel'];
$city = $_GET['city'];
$email = $_GET['email'];
$service = $_GET['need_service'];
$article = $_GET['need_article'];
$message = "ФИО: ".$fio."<br> Телефон: ".$tel."<br> Город: ".$city."<br> Необходимая услуга: ".$service."<br> Необходимый артикул: ".$article;

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; 

$send = mail($to, $subject, $message, $headers);

if ($send == 'true') {
    echo "<p class='window_zayavka'><span class= 'header'> Спасибо!</span><br><span class = 'header-two'>Ваша заявка отправлена.</span><br>Ваша заявка отправлена нашему менеджеру,<br>В ближайшее время он с вами свяжется!<br>Страница будет закрыта через <span id='timer'></span> секунд.<br><a class='window_zayavka-btn' href='#' onclick='closeWindow()'><span>Закрыть страницу</span></a></p>";
} else {
    echo "<p class='window_zayavka'><b>Произошла ошибка и заявка не отправилась :'( <br> попробуйте заново заполнить заявку на странице или отправьте ваши данные вручную на почту web@gelster.ru <br> Спасибо за понимание!<br>Страница будет закрыта через <span id='timer'></span> секунд.<br><a href='#' class='window_zayavka-btn' onclick='closeWindow()'><span>Закрыть страницу</span></a></p>";
}
?>
</main>
</body>
</html>