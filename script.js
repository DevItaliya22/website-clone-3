const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var elem = document.querySelector("#elem-container")
var fixedImage = document.querySelector(".fixed-image")

elem.addEventListener("mouseenter",()=>{
    fixedImage.style.display = "block";
})
elem.addEventListener("mouseleave",()=>{
    fixedImage.style.display = "none";
})
fixedImage.addEventListener("mouseenter",()=>{
    fixedImage.style.display = "block";
})
fixedImage.addEventListener("mouseleave",()=>{
    fixedImage.style.display = "none";
})

var elems = document.querySelectorAll(".elem");
elems.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        var image = e.getAttribute("data")
        fixedImage.style.backgroundImage = `url(${image})`
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var loader = document.querySelector(".loader");
  var txtLoader = document.querySelector(".text-loader");
  
setTimeout(async () => {
    loader.style.top = "-100%";
}, 4000);
