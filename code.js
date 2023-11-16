window.addEventListener("scroll", function() {
    const distanceY = window.scrollY;
    if(distanceY / this.document.documentElement.clientHeight <= 2) {    
        this.document.getElementById("parallax").style.transform = "translate("+ (distanceY * -.5 - 17) +"px," + this.window.scrollY + "px)";
        this.document.getElementById("arrow").style.transform = "translateY("+ (distanceY * 1.1 - 17) +"px)";
        this.document.getElementById("arrow").style.opacity = 1 - distanceY/500;
    }
})