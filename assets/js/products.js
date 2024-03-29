//accordion
const accordions = document.querySelectorAll('.product-accordion');
let activeEl = document.querySelector('.product-desc-container.active');
console.log(activeEl);
activeEl.style.maxHeight = 'unset';

/* Accordions */
accordions.forEach((acc) => {
  acc.addEventListener('click', () => {
    const tobeActiveEl = acc.nextElementSibling;

    if (tobeActiveEl == activeEl) {
      activeEl.classList.toggle('active');
      activeEl.style.maxHeight = null;
      activeEl = null;
      sidebarLinkUnderline();
    } else {
      if (activeEl) {
        activeEl.classList.toggle('active');
        activeEl.style.maxHeight = null;
      }

      tobeActiveEl.classList.toggle('active');
      tobeActiveEl.style.maxHeight = tobeActiveEl.scrollHeight + 'px';

      setTimeout(function () {
        let top = tobeActiveEl.offsetTop;
        window.scroll({
          top: top - 200,
        });
      }, 0);

      // tobeActiveEl.scrollIntoView(true);

      activeEl = tobeActiveEl;

      let linkId = activeEl.parentElement.getAttribute('id');
      sidebarLinkUnderline(document.querySelector(`a[href="#${linkId}"]`));
    }
  });
});

/* Open product accordion panel when clicking on sidebar links and handle underline */
const prodLinks = document.querySelectorAll('.products-list li a');
prodLinks.forEach((link) => {
  link.addEventListener('click', () => {
    sidebarLinkUnderline(link);
    document.querySelector(`${link.getAttribute('href')} .product-accordion`).click();
  });
});

/* Handle accordion panel opening when user redirect to specific product panel from external link */

const def = document.querySelector(`${window.location.hash} .product-accordion`);
if (window.location.hash) {
  def.click();
}

/* Handle underlining of active sidebar elements */
function sidebarLinkUnderline(el) {
  const underlined = document.querySelector('.products-list a.underline');
  if (underlined) {
    underlined.classList.remove('underline');
  }
  if (el) {
    el.classList.add('underline');
  }
}
