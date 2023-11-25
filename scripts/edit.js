import { enableEditText, disableEditText, toggleEditDropdown } from './editText.js';

function toggleEdite () {
  document.getElementById('Edit').onclick = function () {
    const editables = document.querySelectorAll('.editable');
    if (window.edit === false) {
      const margin = '1rem';
      const radius = '20px';

      this.innerHTML = 'Done';
      window.edit = true;
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
      enableEditText();
      toggleEditDropdown();
    } else {
      window.edit = false;
      this.innerHTML = 'Edit';
      editables.forEach((ele) => {
        ele.style.margin = '0px';
        ele.style.borderRadius = '0px';
      });
      disableEditText();
    }
  };
}

export { toggleEdite };
