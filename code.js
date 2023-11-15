this.document.getElementById("parallax").style.transform = "translateY("+window.scrollY+")";
window.addEventListener("scroll", function() {
    const distanceY = window.scrollY;
    if(distanceY / this.document.documentElement.clientHeight <= 2) {    
        this.document.getElementById("parallax").style.transform = "translate("+ (distanceY * -.5 - 17) +"px," + distanceY * 1 + "px)";
    }
})