function changeTextDecoration (target, randomId, id) {
  const text = document.getElementById(`text-${id}-${randomId}`).lastElementChild;
  text.style.textDecoration = target.value;
}

function changeTextDecorationColor (target, randomId, id) {
  const text = document.getElementById(`text-${id}-${randomId}`).lastElementChild;
  text.style.textDecorationColor = target.style.backgroundColor;
}

function textDecorationsSubDropdown (index, randomId, id) {
  document.getElementById(`text-container-${id}-${randomId}`).addEventListener('change', function (event) {
    const target = event.target;

    if (target.id.startsWith('textDecorationColor')) {
      changeTextDecorationColor(target, randomId, id);
    } else if (target.id.startsWith('textDecoration-')) {
      changeTextDecoration(target, randomId, id);
    }
  });
  return (`
                    <div class="text-dropdown-content-sub" id="text-dropdown-content-sub-${index}-${id}-${randomId}">
                        <label for="textDecoration-${index}-${id}-${randomId}">Text Decoration:</label>
                        <select id="textDecoration-${index}-${id}-${randomId}">
                            <option value="none">None</option>
                            <option value="underline">Underline</option>
                            <option value="overline">Overline</option>
                            <option value="line-through">Line Through</option>
                        </select>

                        <label for="textDecorationColor-${index}-${id}-${randomId}">Text Decoration Color:</label>
                        <div class="color-picker" id="textDecorationColor-${index}-${id}-${randomId}"></div>
                    </div>
      `);
}

export { textDecorationsSubDropdown };
