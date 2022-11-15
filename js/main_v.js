const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (e) {
  let x = e.pageX - 15 + "px";
  let y = e.pageY - 15 + "px";
  cursor.style.cssText = "left:" + x + "; top:" + y;
});
document.querySelectorAll("a").forEach((ele) => {
  let style = ele.getAttribute("class");
  ele.addEventListener("mouseover", function () {
    cursor.classList.add(style);
  });
  ele.addEventListener("mouseout", function () {
    cursor.classList.remove(style);
  });
});
const btt=document.querySelector('#back_to_top');
let scrollAmount;
//console.log(window)
window.addEventListener('scroll',function(){
    scrollAmount=this.scrollY;
    if(scrollAmount>scrollAmount/12){
        btt.classList.add('visible');
    } else {
        btt.classList.remove('visible');
    }
});
btt.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(btt.getAttribute('href')).scrollIntoView({behavior:'smooth'});
});
