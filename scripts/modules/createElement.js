const createElement = (tag, attribute) => {
  const element = document.createElement(tag);
  Object.assign(element, attribute); // objediniaet element i attribute

  return element;
}

export default createElement;