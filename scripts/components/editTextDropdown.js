import { textStyleSubDropdown } from './textStyleSubDropdown.js';
import { backgroundStyleSubDropdown } from './backgroundStyleSubDropdown.js';
import { borderStyleSubDropdown, changeBorderWidth } from './borderStyleSubDropdown.js';
import { spacingAndAlignmentSubDropdown } from './spacingAndAlignmentSubDropdown.js';
import { textDecorationsSubDropdown } from './textDecorationSubDropdown.js';

/**
    * @returns {void}
    * @description
    * This function is used to create color picker
    * @example
    * // This example shows how to use the function
    * createColorPicker();
* */
function createColorPicker (id) {
  const pickr = Pickr.create({
    el: `#${id}`,
    theme: 'nano', // or 'monolith', or 'nano'
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
        clear: false,
        save: false
      }
    }
  });

  return pickr;
}

/**
    * @returns {void}
    * @description
    * This function is used to create text dropdown component
    * @example
    * // This example shows how to use the function
    * createTextDropdownComponent();
* */
function createTextDropdownComponent (ele) {
  // const container = document.querySelectorAll('.text-container');
  const items = ['Text Style', 'Background Style', 'Border Style',
    'Spacing and Alignment', 'Text Decoration'];
  const componentDict = {
    'Text Style': textStyleSubDropdown,
    'Background Style': backgroundStyleSubDropdown,
    'Border Style': borderStyleSubDropdown,
    'Spacing and Alignment': spacingAndAlignmentSubDropdown,
    'Text Decoration': textDecorationsSubDropdown
  };

  // container.forEach((ele, index) => {
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
                    ${componentDict[item](index, randomId)}
                </li>`).join('')}
            </ul>
        </div>
    </div>
  `;

  ele.insertAdjacentHTML('beforeend', component);

  items.forEach((item, index) => {
    // Assuming you want to create a color picker for each element
    const fontColorId = `#fontColor-${index}-${randomId}`;
    const backgroundColorId = `#backgroundColor-${index}-${randomId}`;
    const borderColorId = `#borderColor-${index}-${randomId}`;
    const textDecorationColorId = `#textDecorationColor-${index}-${randomId}`;
    const colorPickerId = [fontColorId, backgroundColorId, borderColorId, textDecorationColorId];

    if (document.querySelector(colorPickerId)) {
      const item = document.querySelector(colorPickerId);

      const pickr = createColorPicker(item.id);
      const pickrObject = document.querySelector(colorPickerId);
      const input = document.querySelector(`#text-${randomId}`).lastElementChild;
      pickr.on('change', (color, instance) => {
        pickrObject.style.backgroundColor = color.toRGBA().toString();
        const instancID = pickr._root.button.id;
        if (instancID.includes('fontColor')) {
          input.style.color = color.toRGBA().toString();
        } else if (instancID.includes('backgroundColor')) {
          input.style.backgroundColor = color.toRGBA().toString();
        } else if (instancID.includes('borderColor')) {
          input.style.borderColor = color.toRGBA().toString();
        } else if (instancID.includes('textDecorationColor')) {
          input.style.textDecorationColor = color.toRGBA().toString();
        }
      });
      pickrObject.style.backgroundColor = window.getComputedStyle(input, null).getPropertyValue('color');
    }
  });
  // });
}

export { createTextDropdownComponent };
