const boxState = (data = {}) => {
  return `
    <div class="box-state ${data.classState}">
    <div class="container>
    <h3>${data.title}</h3>
    <p>${data.desc}</p>
    </div>
    </div>
    `;
};

export default boxState;
