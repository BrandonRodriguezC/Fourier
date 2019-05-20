function expandDiv(id) {
  var div = document.getElementById(id);
  var heigt=div.style.height;
  if (div.style.height=='54px'){
    div.style.height='auto';
  }else{
    div.style.height='54px';
  }
}