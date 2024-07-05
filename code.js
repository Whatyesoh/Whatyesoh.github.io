window.addEventListener("scroll", function() {
    const distanceY = window.scrollY;
    if(distanceY / this.document.documentElement.clientHeight <= 2) {    
        this.document.getElementById("parallax").style.left = -distanceY * .05 + "vw";
        this.document.getElementById("arrow").style.top = distanceY * .05 + 55 + "vh";
        this.document.getElementById("arrow").style.opacity = 1 - distanceY/400;
    }
})