(function () {
  const links: NodeListOf<HTMLAnchorElement> =
    document.querySelectorAll("nav > .hover-this");
  const cursor: HTMLDivElement = document.querySelector(".cursor")!;

  function animateCursor(e: MouseEvent) {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  }

  function animateSpan(this: HTMLElement, e: MouseEvent) {
    const span: HTMLSpanElement = this.querySelector("span")!;

    const offsetX: number = e.offsetX;
    const offsetY: number = e.offsetY;

    const height: number = this.offsetHeight;
    const width: number = this.offsetWidth;

    const moveX: number = (offsetX / width) * 50 - 25;
    const moveY: number = (offsetY / height) * 50 - 25;
    span.style.transform = `translate(${moveX}px,${moveY}px)`;

    if (e.type === "mouseleave") span.style.transform = "";
  }

  links.forEach(
    (link: HTMLAnchorElement) => link.addEventListener("mousemove", animateSpan) // <-- Change to "mousemove" here
  );
  links.forEach((link: HTMLAnchorElement) =>
    link.addEventListener("mouseleave", animateSpan)
  );

  window.addEventListener("mousemove", animateCursor);
})();
