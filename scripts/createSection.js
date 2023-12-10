import { createTextComponent } from './components/text.js';
import { editableStyle } from './edit.js';
import { textEdtingEvent } from './editText.js';
import { hero1 } from './components/hero-1.js';
import { toggleNavBar } from './navBar.js';

const createItems = document.querySelectorAll('.new-section-popup ul li');

const currentSelectedSections = [];

createItems.forEach(item => {
  item.addEventListener('click', (e) => {
    const input = item.firstElementChild;
    if (e.target.tagName === 'INPUT') {
      if (input.checked === false) {
        const index = currentSelectedSections.indexOf(input.value);
        if (index > -1) {
          currentSelectedSections.splice(index, 1);
        }
      } else {
        currentSelectedSections.push(input.value);
      }
      return;
    }

    // make checkbox checked
    if (input.checked === false) {
      input.checked = true;
      currentSelectedSections.push(input.value);
    } else {
      input.checked = false;
      const index = currentSelectedSections.indexOf(input.value);
      if (index > -1) {
        currentSelectedSections.splice(index, 1);
      }
    }
  });
});

/**
    * @description clear inputs
    * @returns {void}
    * @example
    * clearInputs();
* */
function clearInputs () {
  currentSelectedSections.forEach(section => {
    const input = document.querySelector(`.new-section-popup ul li input[value="${section}"]`);
    input.checked = false;
  });
  currentSelectedSections.length = 0;
}

/**
    * @description handle click event
    * @param {object} e - event object
    * @returns {void}
    * @example
    * handleClick(e);
* */
function handleClick (e) {
  const popup = document.querySelector('.new-section-popup');
  if (!popup.firstElementChild.contains(e.target)) {
    document.body.removeEventListener('click', handleClick);
    closePopup();
  }
}

/**
    * @description create new section popup
    * @returns {void}
    * @example
    * createNewSection();
* */
function createNewSection () {
  const popup = document.querySelector('.new-section-popup');
  popup.style.display = 'block';
  let started = false;
  const timer = setInterval(() => {
    if (started) {
      popup.style.visibility = 'visible';
      popup.style.opacity = '1';
      popup.firstElementChild.style.transform = 'translate(-50%, -50%)';
      popup.firstElementChild.style.opacity = '1';
      popup.firstElementChild.style.visibility = 'visible';
      clearInterval(timer);

      document.body.addEventListener('click', handleClick);
      return;
    }
    started = true;
  }, 40);
  document.body.style.overflow = 'hidden';
}

/**
    * @description close popup
    * @returns {void}
    * @example
    * closePopup();
* */
function closePopup () {
  clearInputs();
  document.body.removeEventListener('click', handleClick);
  const popup = document.querySelector('.new-section-popup');
  popup.style.visibility = 'hidden';
  popup.style.opacity = '0';
  popup.firstElementChild.style.transform = 'translate(-50%, -50%)';
  popup.firstElementChild.style.opacity = '0';
  popup.firstElementChild.style.visibility = 'hidden';
  let started = false;
  const timer = setInterval(() => {
    if (started) {
      popup.style.display = 'none';
      clearInterval(timer);
      return;
    }
    started = true;
  }, 100);
  document.body.style.overflow = 'auto';
}

/**
    * @description create new section
    * @param {boolean} edit - edit mode
    * @returns {void}
    * @example
    * createSection(true);
* */
function createSection () {
  const newSectionBtn = document.querySelector('.new-section#new-section');
  if (window.edit) {
    newSectionBtn.style.display = 'flex';

    let started = false;
    const timer = setInterval(() => {
      if (started) {
        newSectionBtn.style.visibility = 'visible';
        newSectionBtn.style.transform = 'scale(1)';
        newSectionBtn.style.opacity = '1';
        newSectionBtn.style.transform = 'translateY(0px)';
        clearInterval(timer);
        return;
      }
      started = true;
    }, 40);

    newSectionBtn.addEventListener('click', createNewSection);
    document.getElementById('cancel-section').addEventListener('click', closePopup);
    document.getElementById('create-section').addEventListener('click', () => {
      createSections();
      closePopup();
    });
  } else {
    newSectionBtn.style.opacity = '0';
    newSectionBtn.style.transform = 'translateY(-20%)';
    newSectionBtn.style.transform = 'scale(0)';
    newSectionBtn.style.visibility = 'hidden';
    let started = false;
    const timer = setInterval(() => {
      if (started) {
        newSectionBtn.style.display = 'none';
        clearInterval(timer);
        return;
      }
      started = true;
    }, 100);

    newSectionBtn.removeEventListener('click', createNewSection);
    document.getElementById('cancel-section').removeEventListener('click', closePopup);
    document.getElementById('create-section').removeEventListener('click', () => {
      createSections();
      closePopup();
    });
  }
}

/**
    * @description generate id
    * @returns {string} id
    * @example
    * generateId();
* */
function generateId () {
  const numberId = Math.floor(Math.random() * 10000000);
  const stringId = Math.random().toString(36).substr(2, 9);
  return `${numberId}${stringId}`;
}

/**
    * @description create sections
    * @returns {void}
    * @example
    * createSections();
* */
function createSections () {
  const components = { hero: hero1, about: 0, contact: 0, blog: 0, projects: 0, footer: 0 };
  currentSelectedSections.forEach(section => {
    // generate new id for section
    const id = `section-${section}-${generateId()}`;
    if (section === 'hero') {
      const hero = components[section]();
      document.querySelector('header').insertAdjacentHTML('beforeend', hero);

      document.querySelector('header').firstElementChild.setAttribute('id', id);
      document.querySelector('header button.hamburger').addEventListener('click', toggleNavBar);
      const textHeader1 = document.querySelector('header .hero-1__text-container .text-container:first-child');
      const textHeader2 = document.querySelector('header .hero-1__text-container .text-container:nth-child(2)');
      const textParagrph = document.querySelector('header .hero-1__text-container .text-container:last-child');
      const textComponent = [textHeader1, textHeader2, textParagrph];
      const textType = ['h1', 'h1', 'p'];
      textComponent.forEach((text, index) => {
        const textComponent = createTextComponent(textType[index], text.textContent, text);
        textEdtingEvent(textComponent);
      });
    } else {
      // create new section element with id
      const newSection = document.createElement('section');
      newSection.setAttribute('id', id);
      newSection.setAttribute('class', 'editable');
      newSection.innerHTML = `
            <div class="text-container">
            </div>
          `;

      // append new section to main
      document.querySelector('main').appendChild(newSection);
      const textComponent = createTextComponent(section, newSection.firstElementChild);
      textEdtingEvent(textComponent);
    }
  });
  editableStyle();
}

export { createSection };
