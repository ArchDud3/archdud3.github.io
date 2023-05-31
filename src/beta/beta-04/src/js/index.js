console.log("It works")

let activeIndex = 0;
const groups = document.getElementsByClassName("carousel");

const hanfleRightClick = () => {
    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex +1 : 0;
    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
    currentGroup.dataset.status = "active";
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;

}