var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#fanta",{
    top: "120%",
    left: "0%"
})

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})



tl2.to("#fanta",{
    width:"35%",
    top: "220%",
    left: "55%",
}, 'ca')


// 
var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".f",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.to("#fanta",{
    width:"35%",
    top: "312%",
    left: "33%",
}, 'ca')


/* --<!==== Loading Spinner Start ====--> */
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
  });
  
  /* --<!==== Loading Spinner  End====--> */