(function () {
    var links = document.querySelectorAll("nav > .hover-this");
    var cursor = document.querySelector(".cursor");
    function animateCursor(e) {
        cursor.style.left = "".concat(e.clientX, "px");
        cursor.style.top = "".concat(e.clientY, "px");
    }
    function animateSpan(e) {
        var span = this.querySelector("span");
        var offsetX = e.offsetX;
        var offsetY = e.offsetY;
        var height = this.offsetHeight;
        var width = this.offsetWidth;
        var moveX = (offsetX / width) * 50 - 25;
        var moveY = (offsetY / height) * 50 - 25;
        span.style.transform = "translate(".concat(moveX, "px,").concat(moveY, "px)");
        if (e.type === "mouseleave")
            span.style.transform = "";
    }
    links.forEach(function (link) { return link.addEventListener("mousemove", animateSpan); } // <-- Change to "mousemove" here
    );
    links.forEach(function (link) {
        return link.addEventListener("mouseleave", animateSpan);
    });
    window.addEventListener("mousemove", animateCursor);
})();
