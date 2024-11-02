const img_link = (data = []) => {
  return data
    .map((data) => {
      return `
      <a href= "${data.link}">
      <figure>
      <img src="${data.srcImg}" alt="${data.alt}">
      ${data.caption ? ` <figcaption>${data.caption}</figcaption>` : ''}
     </figure>
      </a>
     `;
    })
    .join(' ');
};

export default img_link;
