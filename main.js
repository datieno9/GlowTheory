// Reveal on Scroll
const boxes = document.querySelectorAll(".service-box");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  const trigger = window.innerHeight * 0.85;

  boxes.forEach(box => {
    const top = box.getBoundingClientRect().top;
    if (top < trigger) {
      box.classList.add("show");
    }
  });
}

checkBoxes();