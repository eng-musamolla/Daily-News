
const loadCatagory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    Catagory(data.data.news_category);
}


// catagory load function
const Catagory = (datas) => { 
    const catagory = document.getElementById('navbarNavAltMarkup');
    catagory.innerHTML = '';
    datas.forEach(data => {
        const ul = document.createElement('ul');
        ul.classList.add('navbar-nav');
        ul.innerHTML = `
        <a onclick="detailCatagory(this.id)" id="${data.category_id}" class="nav-link" href="#">${data.category_name}</a>
        `
        catagory.appendChild(ul);
    })
}

// detail catagory function
const detailCatagory = async (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data);
}
    






 loadCatagory();