function textStyleSubDropdown (index, randomId) {
  return (`
                    <div class="text-dropdown-content-sub" id="text-dropdown-content-sub-${index}-${randomId}">
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
      `);
}

export { textStyleSubDropdown };
