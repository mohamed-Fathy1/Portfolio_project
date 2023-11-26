function appendOrEnableEditText () {
  const text = document.querySelectorAll('.costumize-text-dropdown');
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

function enableEditdropdown () {
  const nexSibling = this.nextElementSibling;
  const parent = this.parentElement;

  if (nexSibling.style.visibility === 'visible') {
    parent.style.overflow = 'hidden';
    nexSibling.style.top = '0%';
    nexSibling.style.visibility = 'hidden';
    nexSibling.style.opacity = '0';
  } else {
    parent.style.overflow = 'visible';
    nexSibling.style.top = '100%';
    nexSibling.style.visibility = 'visible';
    nexSibling.style.opacity = '1';
  }
}

function clearEditDropdown (e) {
  const btn = document.querySelectorAll('.text-dropbtn');
  const dropdown = document.querySelectorAll('.text-dropdown-content');
  const parent = document.querySelectorAll('.costumize-text-dropdown');
  let flag = false;
  for (let i = 0; i < btn.length; i++) {
    if (btn[i].contains(e.target) || dropdown[i].contains(e.target)) {
      flag = true;
      break;
    }
  }
  if (flag === false) {
    for (let i = 0; i < dropdown.length; i++) {
      if (dropdown[i].style.visibility === 'visible') {
        parent[i].style.overflow = 'hidden';
        dropdown[i].style.top = '0%';
        dropdown[i].style.visibility = 'hidden';
        dropdown[i].style.opacity = '0';
      }
    }
  }
}

function toggleEditDropdown () {
  const btn = document.querySelectorAll('.text-dropbtn');
  if (window.edit === true) {
    btn.forEach((ele) => {
      ele.addEventListener('click', enableEditdropdown);
    });
    document.body.addEventListener('click', clearEditDropdown);
  } else {
    btn.forEach((ele) => {
      ele.removeEventListener('click', enableEditdropdown);
    });
    document.body.removeEventListener('click', clearEditDropdown);
  }
}

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
  input.style.width = (input.value.length + 10) + 'ch';
  input.style.fontFamily = fontFamily;
  // add border
  input.addEventListener('focus', function () {
    ele.style.outline = '2px solid #000';
    ele.style.borderRadius = '10px';
    if (input.placeholder == input.value) { input.value = ''; }
  });
  input.addEventListener('input', function () {
    this.style.width = this.value.length + 'ch';
    // textEle.innerText = input.value;
  });
  input.addEventListener('blur', function () {
    if (window.edit === true) {
      ele.style.outline = 'none';
      ele.style.borderRadius = '0px';
    }
  });
  textEle.style.display = 'none';
  input.style.display = 'block';
  input.disabled = false;
}

function disableEditText () {
  if (window.edit === false) {
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
    });
  }
}

function enableEditText () {
  document.querySelectorAll('.text').forEach((ele) => {
    if (window.edit === true) {
      textEdtingEvent(ele);
    }
  });
}

export { disableEditText, enableEditText, toggleEditDropdown, appendOrEnableEditText };
