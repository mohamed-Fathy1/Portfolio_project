import { createTextComponent } from './components/text.js';
import { editableStyle } from './edit.js';

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

function clearInputs () {
  currentSelectedSections.forEach(section => {
    const input = document.querySelector(`.new-section-popup ul li input[value="${section}"]`);
    input.checked = false;
  });
  currentSelectedSections.length = 0;
}

function handleClick (e) {
  const popup = document.querySelector('.new-section-popup');
  if (!popup.firstElementChild.contains(e.target)) {
    document.body.removeEventListener('click', handleClick);
    closePopup();
  }
}

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

function generateId () {
  const numberId = Math.floor(Math.random() * 10000000);
  const stringId = Math.random().toString(36).substr(2, 9);
  return `${numberId}${stringId}`;
}

function createSections () {
  currentSelectedSections.forEach(section => {
    // generate new id for section
    const id = `section-${section}-${generateId()}`;
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
    createTextComponent(section, newSection.firstElementChild);
  });
  editableStyle();
}

export { createSection };
