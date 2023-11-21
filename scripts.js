let edit = false;

function desableEditText () {
  document.querySelectorAll('.text').forEach((ele) => {
    if (edit === false) {
      ele.removeEventListener('click', textEdtingEvent);
      const input = ele.lastElementChild;
      const textEle = ele.firstElementChild;
      textEle.innerText = input.value;
      input.style.display = 'none';
      textEle.style.display = 'block';
      input.blur();
      input.disabled = true;
    }
  });
}

function textEdtingEvent (ele) {
  const input = ele.lastElementChild;
  // check if input is already focused
  console.log(document.activeElement);
  if (input === document.activeElement) {
    return;
  }
  console.log('clickeddd');
  const text = ele.innerText;
  const textEle = ele.firstElementChild;
  console.log(ele);
  const height = textEle.offsetHeight;

  let fontFamily = window.getComputedStyle(textEle, null).getPropertyValue('font-family');
  fontFamily = fontFamily.replace(/['"]+/g, '');

  let fontSize = window.getComputedStyle(textEle, null).getPropertyValue('font-size');
  fontSize = parseFloat(fontSize);
  let fontWeight = window.getComputedStyle(textEle, null).getPropertyValue('font-weight');
  fontWeight = parseFloat(fontWeight);
  input.value = text;
  input.style.height = `${height}px`;
  input.style.fontSize = `${fontSize}px`;
  input.style.fontWeight = fontWeight;
  input.style.width = input.value.length + 'ch';
  input.style.fontFamily = fontFamily;
  // add border
  input.style.border = '2px solid black';
  input.addEventListener('input', function () {
    this.style.width = this.value.length + 'ch';
  });
  textEle.style.display = 'none';
  input.style.display = 'block';
  input.disabled = false;
  input.focus();
}

function enableEditText () {
  document.querySelectorAll('.text').forEach((ele) => {
    if (edit === true) {
      ele.addEventListener('click', () => textEdtingEvent(ele));
    }
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
      desableEditText();
    }
  };
}

window.onload = function () {
  toggleEdite();
};
