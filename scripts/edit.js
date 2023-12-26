import { enableEditText, disableEditText } from './editText.js';
import { createSection } from './createSection.js';

/**
    * @description save portfolio
    * @returns {void}
    * @example
    * savePortfolio();
* */
function savePortfolio () {
  let intervalId;
  intervalId = setInterval(
    () => {
      const savePopUp = document.querySelector('.notification-popup');
      savePopUp.classList.add('show');
      setTimeout(() => {
        savePopUp.classList.remove('show');
      }, 3000);
      localStorage.setItem('portfolio', JSON.stringify(window.portfolio));
      if (window.edit === false) {
        clearInterval(intervalId);
      }
    }
    , 15000);
}

/**
    * @description clear color picker
    * @returns {void}
    * @example
    * clearColorPicker();
* */
// function clearColorPicker () {
//   const colorPicker = document.querySelectorAll('.pcr-app');
//   colorPicker.forEach(ele => {
//     ele.remove();
//   });
// }

/**
    * @description editable style
    * @returns {void}
    * @example
    * editableStyle();
* */
function editableStyle () {
  const editables = document.querySelectorAll('.editable');
  if (window.edit === true) {
    const margin = '1rem';
    const radius = '20px';

    editables.forEach((ele, index) => {
      if (index === 0) {
        ele.style.margin = `0px ${margin} ${margin}`;
        ele.style.borderRadius = `0px 0px ${radius} ${radius}`;
      } else if (index === editables.length - 1) {
        ele.style.margin = `${margin} ${margin} 0px`;
        ele.style.borderRadius = `${radius} ${radius} 0px 0px`;
      } else {
        ele.style.margin = margin;
        ele.style.borderRadius = radius;
      }
    });
  } else {
    editables.forEach((ele) => {
      ele.style.margin = '0px';
      ele.style.borderRadius = '0px';
    });
  }
}

/**
    * @description toggle edit mode
    * @returns {void}
    * @example
    * toggleEdite();
* */
function toggleEdite () {
  document.getElementById('Edit').onclick = function () {
    if (window.edit === false) {
      this.innerHTML = 'Done';
      window.edit = true;
      createSection();
      enableEditText();
      editableStyle();
    } else {
      window.edit = false;
      this.innerHTML = 'Edit';
      editableStyle();
      disableEditText();
      createSection();
      localStorage.setItem('portfolio', JSON.stringify(window.portfolio));
      // clearColorPicker();
    }
    savePortfolio();
  };
}

export { toggleEdite, editableStyle };
