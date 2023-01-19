let processDetail01 = document.getElementById("process-detail-01");
let processDetail02 = document.getElementById("process-detail-02");
let processDetail03 = document.getElementById("process-detail-03");

processDetail01.onmouseover = function (){
  document.getElementById("process-detail-number-01").classList.add("process__detail-number--invisible");
  document.getElementById("process-detail-name-01").classList.add("process__detail-name--invisible");
  document.getElementById("process-detail-desc-01").classList.add("process__detail-description--visible");
}
processDetail01.onmouseout = function (){
  document.getElementById("process-detail-number-01").classList.remove("process__detail-number--invisible");
  document.getElementById("process-detail-name-01").classList.remove("process__detail-name--invisible");
  document.getElementById("process-detail-desc-01").classList.remove("process__detail-description--visible");
}
processDetail02.onmouseover = function (){
  document.getElementById("process-detail-number-02").classList.add("process__detail-number--invisible");
  document.getElementById("process-detail-name-02").classList.add("process__detail-name--invisible");
  document.getElementById("process-detail-desc-02").classList.add("process__detail-description--visible");
}
processDetail02.onmouseout = function (){
  document.getElementById("process-detail-number-02").classList.remove("process__detail-number--invisible");
  document.getElementById("process-detail-name-02").classList.remove("process__detail-name--invisible");
  document.getElementById("process-detail-desc-02").classList.remove("process__detail-description--visible");
}
processDetail03.onmouseover = function (){
  document.getElementById("process-detail-number-03").classList.add("process__detail-number--invisible");
  document.getElementById("process-detail-name-03").classList.add("process__detail-name--invisible");
  document.getElementById("process-detail-desc-03").classList.add("process__detail-description--visible");
  document.getElementById("process-detail-desc-03").classList.add("process__detail-description--visible-left");
}
processDetail03.onmouseout = function (){
  document.getElementById("process-detail-number-03").classList.remove("process__detail-number--invisible");
  document.getElementById("process-detail-name-03").classList.remove("process__detail-name--invisible");
  document.getElementById("process-detail-desc-03").classList.remove("process__detail-description--visible");
  document.getElementById("process-detail-desc-03").classList.remove("process__detail-description--visible-left");
}
