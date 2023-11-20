
function toggleEdite () {
  document.getElementById('Edit').onclick = function () {
    const editables = document.querySelectorAll('.editable');
    const margin = '1rem';
    const radius = '20px';
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
  };
}

window.onload = function () {
  toggleEdite();
};
