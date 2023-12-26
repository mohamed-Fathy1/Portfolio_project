import { createTextDropdownComponent } from './components/editTextDropdown.js';
import { styleObserver } from './styleObserver.js';
import { calculateHeight } from './utils/calculateHeight.js';
import { saveDelay } from './savePortfolio.js';

/**
    * @returns {void}
    * @description
    * This function is used to enable edit sub dropdown
    * @example
    * // This example shows how to use the function
    * enableEditdropdownSub();
* */
function enableEditDropdownSub () {
  const ele = this.lastElementChild;

  const rect = this.getBoundingClientRect();
  const spaceBelow = window.innerHeight - rect.bottom;
  const spaceAbove = rect.top;
  const spaceLeft = rect.left;
  const spaceRight = window.innerWidth - rect.right;

  if (spaceRight >= spaceLeft) {
    // If there is more space to the right, show the dropdown to the right of the button
    ele.style.left = '100%';
    ele.style.right = 'auto';
  } else {
    // If there is more space to the left, show the dropdown to the left of the button
    ele.style.left = 'auto';
    ele.style.right = '100%';
  }

  if (spaceBelow >= spaceAbove) {
    // If there is more space below, show the dropdown below the button
    ele.style.top = '0%';
    ele.style.bottom = 'auto';
  } else {
    // If there is more space above, show the dropdown above the button
    ele.style.top = 'auto';
    ele.style.bottom = '0%';
  }
  // appendOrEnableEditText();
  // Toggle visibility and overflow
  if (ele.style.visibility === 'visible') {
    this.style.overflow = 'hidden';
    ele.style.visibility = 'hidden';
    ele.style.opacity = '0';
  } else {
    this.style.overflow = 'visible';
    ele.style.visibility = 'visible';
    ele.style.opacity = '1';
  }
}

/**
    * @returns {void}
    * @description
    * This function is used to append or enable edit text dropdown
    * @example
    * // This example shows how to use the function
    * appendOrEnableEditText();
* */
function appendOrEnableEditText () {
  const text = document.querySelectorAll('.costumize-text-dropdown');
  // if (text.length === 0) {
  //   // create a unique id for each dropdown
  //   text = document.querySelectorAll('.costumize-text-dropdown');
  // }
  text.forEach((ele) => {
    if (window.edit === true) {
      ele.style.display = 'block';
      ele.firstElementChild.style.display = 'block';
    } else {
      ele.style.display = 'none';
      ele.firstElementChild.style.display = 'none';
    }
  });
}

/**
    * @param {MouseEvent} e
    * @returns {void}
    * @description
    * This function is used to enable edit dropdown
    * @example
    * // This example shows how to use the function
    * enableEditdropdown(e);
* */
function enableEditdropdown () {
  const nextSibling = this.nextElementSibling;
  const parent = this.parentElement;

  parent.style.zIndex = '1000';
  const rect = parent.getBoundingClientRect();
  const spaceBelow = window.innerHeight - rect.bottom;
  const spaceAbove = rect.top;
  const spaceLeft = rect.left;
  const spaceRight = window.innerWidth - rect.right;

  if (spaceRight >= spaceLeft) {
    // If there is more space to the right, show the dropdown to the right of the button
    nextSibling.style.left = '0%';
    nextSibling.style.right = 'auto';
  } else {
    // If there is more space to the left, show the dropdown to the left of the button
    nextSibling.style.left = 'auto';
    nextSibling.style.right = '0%';
  }
  //
  // if (spaceBelow >= spaceAbove) {
  //   // If there is more space below, show the dropdown below the button
  //   nextSibling.style.top = '0%';
  //   nextSibling.style.bottom = 'auto';
  // } else {
  //   // If there is more space above, show the dropdown above the button
  //   nextSibling.style.top = 'auto';
  //   nextSibling.style.bottom = '0%';
  // }

  if (spaceBelow >= spaceAbove) {
    // If there is more space below, show the dropdown below the button
    nextSibling.style.top = '100%';
    nextSibling.style.bottom = 'auto';
  } else {
    // If there is more space above, show the dropdown above the button
    nextSibling.style.top = 'auto';
    nextSibling.style.bottom = '100%';
  }

  // Toggle visibility and overflow
  if (nextSibling.style.visibility === 'visible') {
    parent.style.overflow = 'hidden';
    nextSibling.style.visibility = 'hidden';
    nextSibling.style.opacity = '0';
    const subDropdown = nextSibling.querySelectorAll('li');
    subDropdown.forEach((ele) => {
      ele.removeEventListener('mouseenter', enableEditDropdownSub);
      ele.removeEventListener('mouseleave', enableEditDropdownSub);
    });
  } else {
    parent.style.overflow = 'visible';
    nextSibling.style.visibility = 'visible';
    nextSibling.style.opacity = '1';
    const subDropdown = nextSibling.querySelectorAll('li');
    subDropdown.forEach((ele) => {
      ele.addEventListener('mouseenter', enableEditDropdownSub);
      ele.addEventListener('mouseleave', enableEditDropdownSub);
    });
  }
}

/**
    * @param {MouseEvent} e
    * @returns {void}
    * @description
    * This function is used to clear edit dropdown
    * @example
    * // This example shows how to use the function
    * clearEditDropdown(e);
* */
function clearEditDropdown (e) {
  const btn = document.querySelectorAll('.text-dropbtn');
  const dropdown = document.querySelectorAll('.text-dropdown-content');
  const parent = document.querySelectorAll('.costumize-text-dropdown');
  const colorPicker = document.querySelectorAll('.pcr-app');
  for (let i = 0; i < btn.length; i++) {
    if (!btn[i].contains(e.target) && !dropdown[i].contains(e.target) && !parent[i].contains(e.target) && ![...colorPicker].some(ele => ele.contains(e.target))) {
      if (dropdown[i].style.visibility === 'visible') {
        parent[i].style.overflow = 'hidden';
        parent[i].style.zIndex = '999';
        dropdown[i].style.top = '0%';
        dropdown[i].style.visibility = 'hidden';
        dropdown[i].style.opacity = '0';
      }
    }
  }
}

/**
    * @param {HTMLElement} ele
    * @returns {void}
    * @description
    * This function is used to toggle edit dropdown
    * @example
    * // This example shows how to use the function
    * toggleEditDropdown();
* */
function toggleEditDropdown (ele) {
  if (ele.nextElementSibling === null) {
    console.log('created');
    console.log(ele);
    console.log(ele.parentElement);
    createTextDropdownComponent(ele.parentElement);
  }
  appendOrEnableEditText();
  const btn = ele.nextElementSibling.firstElementChild;
  if (window.edit === true) {
    btn.addEventListener('click', enableEditdropdown);
    document.body.addEventListener('click', clearEditDropdown);
  } else {
    btn.removeEventListener('click', enableEditdropdown);
    document.body.removeEventListener('click', clearEditDropdown);
  }
}

/**
    * @param {HTMLElement} ele
    * @returns {void}
    * @description
    * This function is used to enable text editing
    *
    * @example
    * // This example shows how to use the function
    * textEdtingEvent(ele);
* */
function textEdtingEvent (ele) {
  const input = ele.lastElementChild;
  // check if input is already focused
  // if (input === document.activeElement || input.disabled === false) {
  //   console.log('already focused');
  //   return;
  // }
  const text = ele.innerText;
  const textEle = ele.firstElementChild;
  // const height = textEle.offsetHeight;

  let fontFamily = window.getComputedStyle(textEle, null).getPropertyValue('font-family');
  fontFamily = fontFamily.replace(/['"]+/g, '');

  let fontSize = window.getComputedStyle(textEle, null).getPropertyValue('font-size');
  fontSize = parseFloat(fontSize);
  let fontWeight = window.getComputedStyle(textEle, null).getPropertyValue('font-weight');
  fontWeight = parseFloat(fontWeight);
  input.value = text;
  // input.style.height = `${height}px`;
  input.style.fontSize = `${fontSize}px`;
  input.style.fontWeight = fontWeight;
  // input.style.width = (input.value.length + 10) + 'ch';
  input.style.fontFamily = fontFamily;
  // add border
  input.addEventListener('focus', function () {
    ele.style.outline = '2px solid #000';
    ele.style.borderRadius = '10px';
    if (input.placeholder == input.value) { input.value = ''; }
  });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      this.style.whiteSpace = 'pre-wrap';
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
      // this.style.width = 'auto';
      // this.style.width = this.scrollWidth + 'px';
    }
  });
  input.addEventListener('input', function (e) {
    // Assuming this code is inside a method or event handler where `this` refers to the element
    const computedStyle = window.getComputedStyle(this);

    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';

    const maxWidth = parseInt(computedStyle.maxWidth, 10);
    // Now 'lines' contains the total number of lines
    const typedKey = e.data || e.inputType;

    const lines = calculateHeight(this, computedStyle);
    if (typedKey === 'deleteContentBackward' && lines === 1) {
      this.style.whiteSpace = 'nowrap';
      console.log(this.style.fontSize);
      const fontSize = parseFloat(computedStyle.fontSize) / 2;

      console.log(fontSize);
      // Define a multiplier to scale down the font size
      const fontSizeMultiplier = 0.4;
      this.style.width = (this.value.length + 1) * fontSize * fontSizeMultiplier + 'px';
    }
    if (lines === 1 && typedKey !== 'deleteContentBackward' &&
        typedKey !== 'insertLineBreak') {
      if (this.scrollWidth >= maxWidth) {
        this.style.whiteSpace = 'pre-wrap';
        this.style.width = maxWidth + 'px';
      } else {
        this.style.width = 'auto';
        this.style.width = (this.scrollWidth) + 'px';
      }
    }
    // save text to window.portfolio
    const id = this.parentElement.id.split('-')[1];
    const randomId = this.parentElement.id.split('-')[2];
    console.log(id, randomId);
    window.portfolio[`section-${id}`].edits.text[`text-container-${id}-${randomId}`].text = this.value;
    console.log(window.portfolio[`section-${id}`].edits.text[`text-container-${id}-${randomId}`].text);
    window.isSaved = false;
    if (window.timeToSave < 10000) { saveDelay(); }
  });
  input.addEventListener('blur', function () {
    if (window.edit === true) {
      ele.style.outline = 'none';
      ele.style.borderRadius = '0px';
    }
  });

  styleObserver.observe(input, { attributes: true, attributeFilter: ['style'] });
  window.isSaved = true;

  textEle.style.display = 'none';
  input.style.display = 'block';
  input.disabled = false;
  toggleEditDropdown(ele);
}

/**
    * @returns {void}
    * @description
    * This function is used to disable edit text
    * @example
    * // This example shows how to use the function
    * disableEditText();
* */
function disableEditText () {
  if (window.edit === false) {
    appendOrEnableEditText();
    document.querySelectorAll('.text').forEach((ele) => {
      toggleEditDropdown(ele);
      ele.removeEventListener('click', textEdtingEvent);
      styleObserver.disconnect();
      const input = ele.lastElementChild;
      const textEle = ele.firstElementChild;
      if (input.value === '') {
        textEle.innerText = input.placeholder;
      } else {
        textEle.innerText = input.value;
      }
      input.style.display = 'none';
      textEle.style.display = 'block';
      input.blur();
      input.disabled = true;
    });
  }
}

/**
    * @returns {void}
    * @description
    * This function is used to enable edit text
    * @example
    * // This example shows how to use the function
    * enableEditText();
* */
function enableEditText () {
  document.querySelectorAll('.text').forEach((ele) => {
    if (window.edit === true) {
      textEdtingEvent(ele);
    }
  });
}

export { disableEditText, enableEditText, textEdtingEvent };
