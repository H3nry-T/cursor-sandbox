(function () {
  const links: NodeListOf<HTMLAnchorElement> =
    document.querySelectorAll("nav > .hover-this");
  const cursor: HTMLDivElement = document.querySelector(".cursor")!;

  function animate(e: MouseEvent) {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  }

  function enlargeCursor() {
    cursor.style.transform = "scale(8)";
  }

  links.forEach((link) => link.addEventListener("mouseenter", enlargeCursor));

  window.addEventListener("mousemove", animate);
})();
