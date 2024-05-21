function cursoreffect(){
    var page1Content=document.querySelector("#page1-content");
var cursor=document.querySelector("#cursor");
page1Content.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        x:dets.x,
        y:dets.y
    })
})
page1Content.addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        scale:0,
        opacity:0
    })
})
}
cursoreffect();
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
