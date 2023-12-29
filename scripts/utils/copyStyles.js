
/**
    * Copies the styles from one element to another.
    * @param {HTMLElement} source The source element.
    * @param {HTMLElement} target The target element.
    * @returns {void}
    * @example
    * const source = document.querySelector('#source');
    * const target = document.querySelector('#target');
    * copyStyles(source, target);
    * // The target element now has the same styles as the source element.
**/
function copyStyles (source, target) {
  const styles = window.getComputedStyle(source);
  if (styles.cssText !== '') {
    target.style.cssText = styles.cssText;
  } else {
    const cssText = Object.values(styles).reduce(
      (css, propertyName) =>
            `${css}${propertyName}:${styles.getPropertyValue(
                propertyName
            )};`
    );

    console.log(cssText);
    target.style.cssText = cssText;
  }
}

export { copyStyles };
