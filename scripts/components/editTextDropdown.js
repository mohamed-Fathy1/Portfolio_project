
function createTextDropdownComponent () {
  const container = document.querySelectorAll('.text-container');
  const items = ['Text Style', 'Background Style', 'Border Style',
    'Spacing and Alignment', 'Text Decoration'];
  const component = `
    <div class="costumize-text-dropdown">
        <button class="text-dropbtn">Dropdown</button>
        <div class="text-dropdown-content">
            <ul>
                ${items.map(item => `<li>${item}<i class="fa-solid fa-caret-right"></i>
                    <div class="text-dropdown-content-sub">
                        <label for="fontSize">Font Size (px):</label>
        <input type="number" id="fontSize" value="16" onchange="applyTextStyle()">

        <label for="fontColor">Font Color:</label>
        <input type="color" id="fontColor" value="#333" onchange="applyTextStyle()">

        <label for="fontWeight">Bold:</label>
        <input type="checkbox" id="fontWeight" onchange="applyTextStyle()">

        <label for="fontFamily">Font Family:</label>
        <select id="fontFamily" onchange="applyTextStyle()">
            <option value="Arial, sans-serif">Arial</option>
            <option value="'Times New Roman', serif">Times New Roman</option>
            <option value="'Courier New', monospace">Courier New</option>
        </select>
                    </div>
                </li>`).join('')}
            </ul>
        </div>
    </div>
`;

  container.forEach((ele) => {
    ele.insertAdjacentHTML('beforeend', component);
  });
}

export { createTextDropdownComponent };
