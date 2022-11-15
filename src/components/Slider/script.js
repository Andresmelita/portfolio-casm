export const carousel = document.querySelector(".carousel");

export let isDragStart = false

export const dragStart = () => {
    isDragStart = true;
}

export const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carousel.scrollLeft = e.pageX;
}


carousel?.addEventListener("mousedown", dragStart);
carousel?.addEventListener("mousemove", dragging);
