
function createTextDropdownComponent () {
  // Create container element
  const container = document.querySelectorAll('.text-container');

  const component = `
                <div class="costumize-text-dropdown">
                    <button class="text-dropbtn">Dropdown</button>
                    <div class="text-dropdown-content">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Projects</a></li>
                        </ul>
                    </div>
                </div>

    `;

  container.forEach((ele) => {
    ele.insertAdjacentHTML('beforeend', component);
  });
}

export { createTextDropdownComponent };
