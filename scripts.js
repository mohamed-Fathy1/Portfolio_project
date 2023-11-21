let edit = false;

function editText () {
  document.querySelectorAll('.text').forEach((ele) => {
    ele.addEventListener('click', function () {
      console.log(this);
      const input = this.lastElementChild;
      const text = this.innerText;
      const textEle = this.firstElementChild;
      const width = textEle.offsetWidth;
      const height = textEle.offsetHeight;

      const fontFamily = textEle.style.fontFamily;
      console.log(fontFamily);

      let fontSize = window.getComputedStyle(textEle, null).getPropertyValue('font-size');
      fontSize = parseFloat(fontSize);
      console.log(fontSize);
      let fontWeight = window.getComputedStyle(textEle, null).getPropertyValue('font-weight');
      fontWeight = parseFloat(fontWeight);
      console.log(fontWeight);
      input.value = text;
      // input.style.height = `${height}px`;
      input.style.fontSize = `${fontSize}px`;
      input.style.fontWeight = fontWeight;
      input.style.width = input.value.length + 'ch';
      input.addEventListener('input', function () {
        this.style.width = this.value.length + 'ch';
      });
      textEle.style.display = 'none';
      input.style.display = 'block';
      input.focus();
    });
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
    } else {
      edit = false;
      editables.forEach((ele) => {
        this.innerHTML = 'Edit';
        ele.style.margin = '0px';
        ele.style.borderRadius = '0px';
      });
    }
  };
}

window.onload = function () {
  toggleEdite();
  selectedText();
};
