function toggle(val, val2, val3){
  var div = document.getElementById(val);
  if (div.className != val2){
        div.className = val2;
      } else {
        div.className = val3;
      }
}

function changeLanguage(val, val2){
    var div = document.getElementById(val)
    var div2 = document.getElementById(val2) 
    var lang = document.getElementById("lang");
    if (div.className != "EN-MUTE"){
        div.className = 'EN-MUTE';
        div2.className = 'container-ES'
        lang.innerHTML = "SPANISH"
    } else {
        div.className = "container-EN";
        div2.className = "ES-MUTE"
        lang.innerText = "ESPAÑOL"
    }
    toggle('toggleMain', 'untoggledDiv', 'toggledDiv')
    toggle('unToggledMain-ES', 'untoggledDiv', 'toggledDiv')
}