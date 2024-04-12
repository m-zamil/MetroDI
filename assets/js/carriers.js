//accordion
const accordions = document.querySelectorAll('.carrier-accordion');
let activeEl = document.querySelector('.carrier-desc-container.active');
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
          top: top - 252,
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
const prodLinks = document.querySelectorAll('.carriers-list li a');
prodLinks.forEach((link) => {
  link.addEventListener('click', () => {
    sidebarLinkUnderline(link);
    document.querySelector(`${link.getAttribute('href')} .carrier-accordion`).click();
  });
});

/* Handle accordion panel opening when user redirect to specific product panel from external link */

const def = document.querySelector(`${window.location.hash} .carrier-accordion`);
if (window.location.hash) {
  def.click();
}

/* Handle underlining of active sidebar elements */
function sidebarLinkUnderline(el) {
  const underlined = document.querySelector('.carriers-list a.underline');
  if (underlined) {
    underlined.classList.remove('underline');
  }
  if (el) {
    el.classList.add('underline');
  }
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
  console.log(tabBtn, 'tabbtn');
  // tabBtn.className += ' active';
  tabBtn.classList.add('active');
}

document.querySelector('.defaultOpen').click();
