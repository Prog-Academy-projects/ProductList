const req = async (url) => {
    const data = await fetch(url);
    return data.json();
};

// async function show_products() {
    req("https://fakestoreapi.com/products").then((info)=>{
        console.log(info);
        
    if (Array.isArray(info) && info.length > 0) {
            info.forEach(show)
        }
    }).catch((error) => {
        console.error(error)
    });
// }

function show(obj, index) {
    const {category, description, id, image, price, rating, title} = obj;
    const pattern = `<tr><td><img src=${image}></td><td><h3>${title}</h3></td><td>${category}</td><td>${description}</td>
    <td><h3>${price}$</h3><div>Buy</div></td><td><h4>⭐ ${rating.rate}</h4><p>${rating.count} reviews</p></td></tr>`;
    document.querySelector("tbody").insertAdjacentHTML('beforeend', pattern)
}

// document.querySelector(".getProducts").addEventListener("click", show_products)

// category:"men's clothing"
// description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id:1
// image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price:109.95
// rating:{rate: 3.9, count: 120}
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
