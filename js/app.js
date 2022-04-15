

let header= document.querySelector(".header");
let scroll_to_top= document.querySelector(".scroll_to_top")

let headerControl = new Waypoint({
  element: document.getElementById('about'),
  handler: function(direction) {
    if(direction==="down"){
      header.classList.add("shadow");
      header.classList.add("animate__slideInDown")
      scroll_to_top.classList.replace("d-none","d-block");
      scroll_to_top.classList.add("animate__slideInUp");
    }
    else{
      header.classList.remove("shadow");
      header.classList.remove("animate__slideInDown")
      scroll_to_top.classList.replace("d-block","d-none");
      scroll_to_top.classList.remove("animate__slideInUp");
    }
  },
  offset: '75%'
})


ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 1000,
  reset: true
}).reveal(".content",{
  interval: 300
})
ScrollReveal({
  origin: "left",
  distance: "50px",
  duration: 1000,
  reset: true
}).reveal(".contentfromleft",{
  interval: 300
})
ScrollReveal({
  origin: "right",
  distance: "50px",
  duration: 1000,
  reset: true
}).reveal(".contentfromright",{
  interval: 300
})
ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  reset: true
}).reveal(".contentfrombottom",{
  interval: 300
})