<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Link storage</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
    crossorigin="anonymous">
    <style>
    html, body {
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      margin: 0;
      min-height: 180px;
      padding: 0;
      width: 380px;
	  border: 1px solid #ccc;
    }
    h1 {
      font-family: 'Menlo', monospace;
      font-size: 22px;
      font-weight: 400;
      margin: 0;
      color: #2f5876;
    }
    a:link,
    a:visited {
      color: #000000;
      outline: 0;
      text-decoration: none;
    }
    img {
      width: 30px; /*ширина изображений*/
    }
    .modal-header {
      align-items: center; /*выравнивание элементов по центру*/
      border-bottom: 0.5px solid #dadada; /*свойства нижней разделительной линии*/
      height: 81px;
      background-color: #f2f2f2;
    }
    .modal-header span {      
      font-style: italic;
      color: red;      
      font-size: 12px;
      margin: 10px;
    }
    .logo {
      padding: 16px; /*отступы со всех сторон*/
    }
    .logo-icon {
      vertical-align: text-bottom; /*выравнивание по нижней части текста*/
      margin-right: 12px; /*задётся отступ элементов от изображения*/
    }
    /*задаём настройки для контейнеров с иконками*/
    .inpuwrapper input, .inpuwrapper select{
      margin: 5px 10px;
      width: 84%;      
    }
    .inpuwrapper{
      padding: 10px 0;  
      
    }
    #perec{
      position: absolute;
      top: -7px;
      left: 48%;
      cursor: pointer;
    }
  .fa-plus-circle{
    cursor: pointer;
  }    
	.nets{
    display: none;  
  }
	#add-del{
		border: 1px solid #ccc;
	}
  #listM ul{
    padding-inline-start:5px;
  }
  #listM li{
    color: #028b07;
  }
  #listM li i, #listM h4 i{
    margin-right: 7px;
    cursor: pointer;
  }
  #listM ul{
    margin: 0;
  }
  #listM h4{
    color: #434346;
    margin: 10px 0 2px 0;
  }
  .clip {
    white-space: nowrap; /* Запрещаем перенос строк */
    overflow: hidden; /* Обрезаем все, что не помещается в область */
    text-overflow: ellipsis; /* Добавляем многоточие */
  }
  .modal-body{   
    padding: 10px;
    position: relative;
    border-top: 1px solid #ccc;
  }
    </style>  
    <title>Document</title>
</head>
<body>    
<div class="modal-header">
    <h1 class="logo">
        <img class="logo-icon" src="images/logo.png">Link storage
    </h1>
    <span id="errspan"></span>
</div> 
<div class="modal-icons">
        
</div>
<div class="inpuwrapper nets" id="add-del">   
    <input placeholder="name" type="text" name="task">
    
    <select name="selGroup" placeholder="GroupName"></select>
    <input type="text" placeholder="link" name="tlink">
    <i class="fa fa-plus-circle" aria-hidden="true" id="addTaskbutton"></i>
    <input id = "add-group" type="text" placeholder="NewGroup" name="inputNewGroup">
    <i class="fa fa-plus-circle" aria-hidden="true" id="buttonG"></i>    
</div>
<div class="modal-body">
  <i id="perec" class="fa fa-arrow-circle-down" aria-hidden="true"></i>
  <div id="listM"></div>
</div>

</body>
<script src="popup.js"></script>
</html>
