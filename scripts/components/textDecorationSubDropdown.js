function textDecorationsSubDropdown (index, randomId) {
  return (`
                    <div class="text-dropdown-content-sub" id="text-dropdown-content-sub-${index}-${randomId}">
                        <label for="textDecoration-${index}-${randomId}">Text Decoration:</label>
                        <select id="textDecoration-${index}-${randomId}">
                            <option value="none">None</option>
                            <option value="underline">Underline</option>
                            <option value="overline">Overline</option>
                            <option value="line-through">Line Through</option>
                        </select>

                        <label for="textDecorationColor-${index}-${randomId}">Text Decoration Color:</label>
                        <div class="color-picker" id="textDecorationColor-${index}-${randomId}"></div>
                    </div>
      `);
}

export { textDecorationsSubDropdown };
