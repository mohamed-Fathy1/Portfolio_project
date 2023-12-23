
function changeFontFamily (target, randomId, id) {
  const text = document.getElementById(`text-${id}-${randomId}`).lastElementChild;
  text.style.fontFamily = target.value;
}

function changeFontSize (inputElement, randomId, id) {
  const text = document.getElementById(`text-${id}-${randomId}`).lastElementChild;
  const inputValue = inputElement.value + 'px';
  text.style.fontSize = inputValue;
}

function textStyleSubDropdown (index, randomId, id) {
  console.log(randomId);
  console.log(id);
  document.getElementById(`text-container-${id}-${randomId}`).addEventListener('change', function (event) {
    const target = event.target;

    if (target.id.startsWith('fontFamily')) {
      changeFontFamily(target, randomId, id);
    } else if (target.id.startsWith('fontSize')) {
      changeFontSize(target, randomId, id);
    }
  });
  return (`
                    <div class="text-dropdown-content-sub" id="text-dropdown-content-sub-${index}-${randomId}">
                        <label for="fontSize-${index}-${id}-${randomId}">Font Size (px):</label>
                        <input type="number" id="fontSize-${index}-${id}-${randomId}" value="16">

                        <label for="fontColor-${index}-${id}-${randomId}">Font Color:</label>
                        <div class="color-picker" id="fontColor-${index}-${id}-${randomId}"></div>

                        <label for="fontWeight-${index}-${id}-${randomId}">Bold:</label>
                        <input type="checkbox" id="fontWeight-${index}-${id}-${randomId}">

                        <label for="fontFamily-${index}-${id}-${randomId}">Font Family:</label>
                        <select id="fontFamily-${index}-${id}-${randomId}">
                            <option value="Arial, sans-serif">Arial</option>
                            <option value="'Times New Roman', serif">Times New Roman</option>
                            <option value="'Courier New', monospace">Courier New</option>
                        </select>
                    </div>
      `);
}

export { textStyleSubDropdown };
