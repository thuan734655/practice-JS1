const loadImage = (data = []) => {
  return data
    .map((data) => {
      return `
    <figure>
    <img src="${data.srcImg}" alt="${data.alt}">
    ${data.caption ? ` <figcaption>${data.caption}</figcaption>` : ''}
   </figure>
   `;
    })
    .join(' ');
};

export default loadImage;
