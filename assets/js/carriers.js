//accordion
const accordions = document.querySelectorAll('.carrier-accordion');
let activeEl = document.querySelector('.carrier-desc-container.active');
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
          top: top - 210,
        });
      }, 500);
    }
  });
});

/* Open product accordion panel when clicking on sidebar links and handle underline */
const prodLinks = document.querySelectorAll('.carriers-list li a');
prodLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    var targetLink = document.querySelector(`${link.getAttribute('href')} .carrier-accordion`);
    if (targetLink.classList.contains('active')) {
      targetLink.scrollIntoView();
    } else targetLink.click();
  });
});

/* Handle accordion panel opening when user redirect to specific product panel from external link */

const def = document.querySelector(`${window.location.hash} .carrier-accordion`);
if (window.location.hash) {
  def.click();
}

/* Tabs ======================= */

const tabBtns = document.querySelectorAll('.tabs button');
const tabContent = document.querySelectorAll('.tabcontent');
tabBtns.forEach((tabBtn) => {
  tabBtn.addEventListener('click', () => {
    const id = tabBtn.dataset.id;
    openTab(tabBtn, id);
  });
});

function openTab(tabBtn, contentId) {
  var i;
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }
  for (i = 0; i < tabBtns.length; i++) {
    tabBtns[i].className = tabBtns[i].className.replace(' active', '');
  }
  document.getElementById(contentId).style.display = 'block';
  // tabBtn.className += ' active';
  tabBtn.classList.add('active');
}

document.querySelector('.defaultOpen').click();
