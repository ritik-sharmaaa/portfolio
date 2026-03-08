gsap.to(".loader span",{
  opacity:1,
  duration:1,
  repeat:2,
  yoyo:true,
  onComplete:()=>{
    gsap.to(".loader",{
      opacity:0,
      duration:1,
      onComplete:()=>{
        document.querySelector(".loader").style.display="none";
        document.querySelector(".main").style.display="block";
        document.body.style.overflow="auto";
      }
    })
  }
});
