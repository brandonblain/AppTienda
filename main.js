//Elemetos para direciionar
const ApiUrl = 'http://127.0.0.1:8000/api'
const items = document.getElementById('items')
const templateCards = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
const pagina = document.getElementById('nomPag').value;
//Lista de peticiones a la API.....

//Consulta de todos los productos.

document.addEventListener('DOMContentLoaded',()=>{
    switch (pagina) {
        case 'index':
            getAllProduct()
            break;
        case 'bebidasEnergeticas':
            getByCategory('Bebida Energetica');
            break;
        default:
            break;
    }
})

const getAllProduct = async()=>{
    try {
        const respons = await fetch(`${ApiUrl}/Allbebidas`);
        const data = await respons.json();
        cardsProductos(data)
        // console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const cardsProductos = data =>{
    data.forEach(productos => {
        // console.log(productos)
        templateCards.querySelector('h5').textContent = productos.name;
        templateCards.querySelector('p').textContent = '$'+productos.price;
        if (productos.url_image!=""&&productos.url_image !== null ) {
            templateCards.querySelector('img').setAttribute('src',productos.url_image);
        }else{
            templateCards.querySelector('img').setAttribute('src','img/filenot-found.png');
        }
        const clone = templateCards.cloneNode(true);
        fragment.appendChild(clone);
    });
    items.appendChild(fragment);
}

//Consulta de productos por Categoria
const getByCategory = async(producto)=>{
    try {
        const respons = await fetch(`${ApiUrl}/getByCategory`);
        const data = await respons.json();
        const product = producto;
        categoryProductos(data,product)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const categoryProductos = (data,producto) =>{
    let tipoProducto;
    switch (producto) {
        case 'Bebida Energetica':
            tipoProducto = data.bebidaEnergetica
            break;
        case 'Pisco':
            tipoProducto = data.pisco
            break;
        case 'Ron':
            tipoProducto = data.ron
            break;
        case 'Bebida':
            tipoProducto = data.bebida
            break;
        case 'Snack':
            tipoProducto = data.snack
            break;
        case 'Cerveza':
            tipoProducto = data.cerveza
            break;
        case 'Vodka':
            tipoProducto = data.Vodka
            break;
        default:
            break;
    }

    tipoProducto.forEach(productos => {
        console.log(productos)
        templateCards.querySelector('h5').textContent = productos.name;
        templateCards.querySelector('p').textContent = '$'+productos.price;
        if (productos.url_image!=""&&productos.url_image !== null ) {
            templateCards.querySelector('img').setAttribute('src',productos.url_image);
        }else{
            templateCards.querySelector('img').setAttribute('src','img/filenot-found.png');
        }
        const clone = templateCards.cloneNode(true);
        fragment.appendChild(clone);
    });
    items.appendChild(fragment);
}


//Consulta de busqueda de productos
const getSearchProducts = fetch(`${ApiUrl}/bebidas/buscar`).then(
    (response) => response.json()
).then((products) => console.log(products));

//Consulta de ordenamiento de productos
// fetch(`${ApiUrl}/bebidas/Order`).then(
//     (response) => response.json()
// ).then((products) => console.log(products));

    function changeFunc() {
    var selectBox = document.getElementById("selectOrder");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    getByCategory('bebida');
   }
