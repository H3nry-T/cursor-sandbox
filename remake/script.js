(function () {
    var links = document.querySelectorAll("nav > .hover-this");
    var cursor = document.querySelector(".cursor");
    function animate(e) {
        cursor.style.left = "".concat(e.clientX, "px");
        cursor.style.top = "".concat(e.clientY, "px");
    }
    function enlargeCursor() {
        cursor.style.transform = "scale(8)";
    }
    links.forEach(function (link) { return link.addEventListener("mouseenter", enlargeCursor); });
    window.addEventListener("mousemove", animate);
})();
