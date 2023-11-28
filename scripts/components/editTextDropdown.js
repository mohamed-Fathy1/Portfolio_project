function createColorPicker (id) {
  const pickr = Pickr.create({
    el: id,
    theme: 'classic', // or 'monolith', or 'nano'
    useAsButton: true,

    swatches: [
      'rgba(244, 67, 54, 1)',
      'rgba(233, 30, 99, 0.95)',
      'rgba(156, 39, 176, 0.9)',
      'rgba(103, 58, 183, 0.85)',
      'rgba(63, 81, 181, 0.8)',
      'rgba(33, 150, 243, 0.75)',
      'rgba(3, 169, 244, 0.7)',
      'rgba(0, 188, 212, 0.7)',
      'rgba(0, 150, 136, 0.75)',
      'rgba(76, 175, 80, 0.8)',
      'rgba(139, 195, 74, 0.85)',
      'rgba(205, 220, 57, 0.9)',
      'rgba(255, 235, 59, 0.95)',
      'rgba(255, 193, 7, 1)'
    ],

    components: {

      // Main components
      preview: true,
      opacity: true,
      hue: true,

      // Input / output Options
      interaction: {
        hex: true,
        rgba: true,
        hsla: true,
        hsva: true,
        cmyk: true,
        input: true,
        clear: true,
        save: true
      }
    }
  });

  return pickr;
}

function createTextDropdownComponent () {
  const container = document.querySelectorAll('.text-container');
  const items = ['Text Style', 'Background Style', 'Border Style',
    'Spacing and Alignment', 'Text Decoration'];

  container.forEach((ele, index) => {
    const randomId = Math.random().toString(36).substr(2, 9);
    // console.log(randomId);
    ele.setAttribute('id', `text-container-${randomId}`);
    ele.querySelector('.text').setAttribute('id', `text-${randomId}`);
    const component = `
    <div class="costumize-text-dropdown">
        <button class="text-dropbtn">Dropdown</button>
        <div class="text-dropdown-content">
            <ul>
                ${items.map((item, index) => `<li>${item}<i class="fa-solid fa-caret-right"></i>
                    <div class="text-dropdown-content-sub">
                        <label for="fontSize-${index}-${randomId}">Font Size (px):</label>
                        <input type="number" id="fontSize-${index}-${randomId}" value="16">

                        <label for="fontColor-${index}-${randomId}">Font Color:</label>
                        <div class="color-picker" id="color-picker-${index}-${randomId}"></div>

                        <label for="fontWeight-${index}-${randomId}">Bold:</label>
                        <input type="checkbox" id="fontWeight-${index}-${randomId}">

                        <label for="fontFamily-${index}-${randomId}">Font Family:</label>
                        <select id="fontFamily-${index}-${randomId}">
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

    ele.insertAdjacentHTML('beforeend', component);

    items.forEach((item, index) => {
    // Assuming you want to create a color picker for each element
      const colorPickerId = `#color-picker-${index}-${randomId}`;
      if (document.querySelector(colorPickerId)) {
        // console.log(colorPickerId);
        const pickr = createColorPicker(colorPickerId);
        const pickrObject = document.querySelector(colorPickerId);
        const input = document.querySelector(`#text-${randomId}`).lastElementChild;
        pickr.on('change', (color, instance) => {
          // console.log(color.toRGBA().toString());
          input.style.color = color.toRGBA().toString();
          pickrObject.style.backgroundColor = color.toRGBA().toString();
        });
        pickrObject.style.backgroundColor = window.getComputedStyle(input, null).getPropertyValue('color');
      }
    });
  });
}

export { createTextDropdownComponent };
