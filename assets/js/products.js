//accordion
const accordions = document.querySelectorAll('.product-accordion');
let activeEl = document.querySelector('.product-desc-container.active');
console.log(activeEl);
activeEl.style.maxHeight = 'unset';

/* Accordions */
accordions.forEach((acc) => {
  acc.addEventListener('click', () => {
    const tobeActiveEl = acc.nextElementSibling;

    if (tobeActiveEl.classList.contains('active')) {
      acc.classList.toggle('active');
      tobeActiveEl.classList.toggle('active');
      tobeActiveEl.style.maxHeight = null;
    } else {
      acc.classList.toggle('active');
      tobeActiveEl.classList.toggle('active');
      tobeActiveEl.style.maxHeight = tobeActiveEl.scrollHeight + 'px';

      setTimeout(function () {
        let top = tobeActiveEl.offsetTop;
        window.scroll({
          top: top - 200,
        });
      }, 500);
    }
  });
});

/* Open product accordion panel when clicking on sidebar links and  */
const prodLinks = document.querySelectorAll('.products-list li a');
prodLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    var targetLink = document.querySelector(`${link.getAttribute('href')} .product-accordion`);
    if (targetLink.classList.contains('active')) {
      targetLink.scrollIntoView();
    } else targetLink.click();
  });
});

/* Handle accordion panel opening when user redirect to specific product panel from external link */

const def = document.querySelector(`${window.location.hash} .product-accordion`);
if (window.location.hash) {
  def.click();
}
