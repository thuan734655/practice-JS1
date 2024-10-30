const navChild = (array) => {
  let listNav = array
    .map(
      (data) =>
        `<li><a href="${data.href ? data.href : ''}">${data.text}</a></li>`
    )
    .join(' ');
  return listNav;
};

export default navChild;
