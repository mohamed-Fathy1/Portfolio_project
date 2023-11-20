
function toggleEdite () {
  document.getElementById('Edit').onclick = function () {
    const editables = document.querySelectorAll('.editable');
    if (this.innerHTML === 'Edit') {
      const margin = '1rem';
      const radius = '20px';

      this.innerHTML = 'Done';
      editables.forEach((ele, index) => {
        console.log(ele);
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
        this.innerHTML = 'Edit';
        ele.style.margin = '0px';
        ele.style.borderRadius = '0px';
      });
    }
  };
}

window.onload = function () {
  toggleEdite();
};
