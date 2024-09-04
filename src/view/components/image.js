const loadImage = (data = [], isTagA = false) => {
    if (isTagA) {
      return data
        .map((data) => {
          return `
          <a href="${data.link}">
          <figure>
           <img src="${data.srcImg}" alt="${data.alt}">
        ${data.caption ? ` <figcaption>${data.caption}</figcaption>` : ''}
          </figure>
          </a>
       `;
        })
        .join(' ');
    } else {
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
    }
  };
  
  export default loadImage;