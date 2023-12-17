/**
    * Calculate the number of lines of text that can fit in the element
    * @param {Element} ele The element to calculate the number of lines for
    * @param {CSSStyleDeclaration} computedStyle The computed style of the element
    * @returns {number} The number of lines of text that can fit in the element
    *
    * @example
    * calculateHeight(document.querySelector('p'), window.getComputedStyle(document.querySelector('p')));
*/
function calculateHeight (ele, computedStyle) {
  // Check if the lineHeight is specified as "normal"
  let lineHeight = computedStyle.lineHeight;
  if (lineHeight === 'normal') {
    // You can set a default value or calculate a value based on font size
    const defaultLineHeight = 1.2; // Adjust this value based on your needs
    const fontSize = parseFloat(computedStyle.fontSize);

    // Calculate the numeric lineHeight based on font size
    lineHeight = fontSize * defaultLineHeight;
  } else {
    // Parse the lineHeight value as a number
    lineHeight = parseFloat(lineHeight);
  }
  const clientHeight = ele.clientHeight;

  // Calculate the total number of lines
  const lines = Math.ceil(clientHeight / lineHeight);
  return lines;
}

export { calculateHeight };
