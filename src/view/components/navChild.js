const navChild = (array) => {
    let listNav = array.map( (data) => `<li><a href="">${data}</a></li>` ).join(' ');
    return listNav;
}

export default navChild;
