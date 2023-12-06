import { enableEditText, disableEditText, toggleEditDropdown, appendOrEnableEditText } from './editText.js';
import { createSection } from './createSection.js';

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

function toggleEdite () {
  document.getElementById('Edit').onclick = function () {
    if (window.edit === false) {
      this.innerHTML = 'Done';
      window.edit = true;
      createSection();
      enableEditText();
      appendOrEnableEditText();
      editableStyle();
      toggleEditDropdown();
    } else {
      window.edit = false;
      this.innerHTML = 'Edit';
      disableEditText();
      appendOrEnableEditText();
      toggleEditDropdown();
      editableStyle();
      createSection();
    }
  };
}

export { toggleEdite, editableStyle };
