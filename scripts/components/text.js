function createTextComponent (tag, name, ele) {
  console.log('name', name);
  console.log('ele', ele);
  const text = document.createElement('div');
  text.classList.add('text');
  text.innerHTML = `
        <${tag}>${name}</${tag}>
        <textarea name="text" rows="1" maxlength="200" wrap="soft" resize="none" placeholder="Enter text here"></textarea>
        `;
  ele.innerHTML = '';
  ele.appendChild(text);
  return text;
}

export { createTextComponent };
