const loadBox = (data=[])  => {
  return data.map((ob) => {
    `
    <div class="${ob.className}">
     <div  class="box-title">${ob.title}</div> 
     <div  class="box-value">${ob.value}</div> 
    </div>
    `
  })
}

export default loadBox;
