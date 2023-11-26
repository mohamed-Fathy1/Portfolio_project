
function createTextDropdownComponent () {
  // Create container element
  const container = document.querySelectorAll('.text-container');
  const items = ['Home', 'About', 'Contact'];
  const component = `
    <div class="costumize-text-dropdown">
        <button class="text-dropbtn">Dropdown</button>
        <div class="text-dropdown-content">
            <ul>
                ${items.map(item => `<li>${item}<i class="fa-solid fa-caret-right"></i></li>`).join('')}
            </ul>
        </div>
    </div>
    `;

  container.forEach((ele) => {
    ele.insertAdjacentHTML('beforeend', component);
  });
}

export { createTextDropdownComponent };
