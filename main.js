//Variables globales 
const ApiUrl = 'https://api-tienda-hkbjk2kt8-brandonblain.vercel.app/api/api'
// const ApiUrl = 'http://127.0.0.1:8000/api'
const items = document.getElementById('items')
const templateCards = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
const pagina = document.getElementById('nomPag').value;
let ProductosCargados = false;
let SelectProducto='Todos';
let tipoProducto;

//--------------Consulta de todos los productos.

document.addEventListener('DOMContentLoaded',()=>{
    if (ProductosCargados==false) {
        getAllProduct()
    }else{
        console.log('Nose vuelven a cargar los productos')
    }
})

const getAllProduct = async()=>{
    try {
        console.log(ProductosCargados)
        const respons = await fetch(`${ApiUrl}/Allbebidas`);
        const data = await respons.json();
        ProductosCargados = true;
        cardsProductos(data)
        // console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const cardsProductos = data =>{
    data.forEach(productos => {
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

//-----------Consulta de productos por Categoria

$('#listaProductos li').click(function(){
    let $this = $(this);
    let producto = $this.text();
    SelectProducto=producto;
    console.log(SelectProducto);
    getByCategory(producto);
   })

const getByCategory = async(producto)=>{
    try {
        const respons = await fetch(`${ApiUrl}/getByCategory`);
        const data = await respons.json();
        const product = producto;
        categoryProductos(data,product)
    } catch (error) {
        console.log(error)
    }
}

const categoryProductos = (data,producto) =>{
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

    var a=document.getElementById('items');
        while(a.hasChildNodes())
	    a.removeChild(a.firstChild);

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

//------------Consulta de ordenamiento de productos

function changeFunc() {
    var selectBox = document.getElementById("selectOrder");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    getByOrder(selectedValue);
   }

const getByOrder = async(orden)=>{
    let ordenamiento = orden;
    let params= new URLSearchParams({
        producto:SelectProducto,
        order:ordenamiento
    });
    try {
        const respons = await fetch(`${ApiUrl}/bebidas/Order`,{
            method: 'post',
            body: params,
          });
        const data = await respons.json();
       console.log(data)
       orderProductos(data)
    } catch (error) {
        console.log(error)
    }
}

const orderProductos = (data) =>{

    var a=document.getElementById('items');
        while(a.hasChildNodes())
	    a.removeChild(a.firstChild);

        data.forEach(productos => {
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


//------------Consulta de busqueda de productos
// const getSearchProducts = fetch(`${ApiUrl}/bebidas/buscar`).then(
//     (response) => response.json()
// ).then((products) => console.log(products));
