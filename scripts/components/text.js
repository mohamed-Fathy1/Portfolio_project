function createTextComponent (tag, name, ele) {
  console.log('name', name);
  console.log('ele', ele);
  const text = document.createElement('div');
  text.classList.add('text');
  text.innerHTML = `
        <${tag}>${name}</${tag}>
        <input type="text" placeholder="Enter text">`;
  ele.innerHTML = '';
  ele.appendChild(text);
  return text;
}

export { createTextComponent };
