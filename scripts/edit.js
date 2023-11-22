let edit = false;

function textEdtingEvent (ele) {
  // if (edit === false) {
  //   return;
  // }
  console.log('textEdtingEvent');
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
  input.style.width = (input.value.length + 10) + 'ch';
  input.style.fontFamily = fontFamily;
  // add border
  input.addEventListener('focus', function () {
    if (edit === true) {
      ele.style.outline = '2px solid #000';
      ele.style.borderRadius = '10px';
    }
  });
  input.addEventListener('input', function () {
    this.style.width = this.value.length + 'ch';
    // textEle.innerText = input.value;
  });
  input.addEventListener('blur', function () {
    if (edit === false) {
      this.style.outline = 'none';
      this.style.borderRadius = '0px';
    }
  });
  textEle.style.display = 'none';
  input.style.display = 'block';
  input.disabled = false;
  input.focus();
}

function disableEditText () {
  if (edit === false) {
    document.querySelectorAll('.text').forEach((ele) => {
      // ele.removeEventListener('click', textEdtingEvent);
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
      console.log('disabled');
    });
  }
}

function enableEditText () {
  document.querySelectorAll('.text').forEach((ele) => {
    console.log(ele.lastElementChild);
    console.log(ele.lastElementChild.disabled);
    if (edit === true) {
      console.log('enableEditText');
      textEdtingEvent(ele);
    }
    console.log('enabled');
  });
}

function toggleEdite () {
  document.getElementById('Edit').onclick = function () {
    const editables = document.querySelectorAll('.editable');
    if (edit === false) {
      const margin = '1rem';
      const radius = '20px';

      this.innerHTML = 'Done';
      edit = true;
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
    } else {
      edit = false;
      this.innerHTML = 'Edit';
      editables.forEach((ele) => {
        ele.style.margin = '0px';
        ele.style.borderRadius = '0px';
      });
      disableEditText();
    }
  };
}

window.onload = function () {
  toggleEdite();
};
