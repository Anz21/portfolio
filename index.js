const listItems = document.getElementById("lis");
const btn = document.getElementById("but");
const topb = document.getElementById("top1");


// Burger
btn.addEventListener("click" , function(){
    listItems.classList.toggle("list2");
    topb.classList.toggle("top1");
    btn.classList.toggle("newbut");
})


// fixed navBar scroll

window.addEventListener("scroll" , function(){
   const scrollHigh =  this.window.pageYOffset;
   const Nav = topb.getBoundingClientRect().height;
   if(scrollHigh > Nav){
    topb.classList.add("fixedNav");
   }else{
    topb.classList.remove("fixedNav");
   }
})

// back to top button scroll

const back = document.getElementById("hom");

window.addEventListener("scroll" , function(){
    const backback = this.window.pageYOffset;
    const navNav = topb.getBoundingClientRect().height
    if(backback > navNav){
        back.classList.add("showLink");
    }else{
        back.classList.remove("showLink");
    }
})





