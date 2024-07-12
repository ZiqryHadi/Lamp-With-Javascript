function saklar(params, lamp) {
  let lamp1 = document.getElementById("lamp1");
  let lamp2 = document.getElementById("lamp2");
  let lamp3 = document.getElementById("lamp3");
  
  if (params == "on") {
    if (lamp == 1) {
      lamp1.src = "on.gif";
    }
    if (lamp == 2) {
      lamp2.src = "on.gif";
    }
    if (lamp == 3) {
      lamp3.src = "on.gif";
    }
  }
  
  else {
    if (lamp == 1) {
      lamp1.src = "off.gif";
    }
    if (lamp == 2) {
      lamp2.src = "off.gif";
    }
    if (lamp == 3) {
      lamp3.src = "off.gif";
    }
  }
}


function toggle() {
  let lamp4 = document.getElementById("lamp4");
  let lamp5 = document.getElementById("lamp5");
  let lamp6 = document.getElementById("lamp6");
  let toggle1 = document.getElementById("toggle1");
  let toggle2 = document.getElementById("toggle2");
  let toggle3 = document.getElementById("toggle3");
  
  if (toggle1.checked) {
    lamp4.src = "on.gif"
  }
  else {
    lamp4.src = "off.gif"
  }
  
  if (toggle2.checked) {
    lamp5.src = "on.gif"
  }
  else {
    lamp5.src = "off.gif"
  }
  
  if (toggle3.checked) {
    lamp6.src = "on.gif"
  }
  else {
    lamp6.src = "off.gif"
  }
}