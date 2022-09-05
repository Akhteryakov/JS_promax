const products = [
    {id: 1, title: 'Notebook', price: 2000, image: 'https://images.unsplash.com/photo-1575024357670-2b5164f470c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
    {id: 2, title: 'Mouse', price: 20, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80'},
    {id: 3, title: 'Keyboard', price: 200, image: 'https://images.unsplash.com/photo-1572916118970-fb5c8a1cb3d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'},
    {id: 4, title: 'Gamepad', price: 50, image: 'https://images.unsplash.com/flagged/photo-1580234820596-0876d136e6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80'},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (product) => {
    return `<div class="product-item">
                <img class="product-item__img" src=${product.image} alt="${product.title}">
                <h3 class="product-item__title">${product.title}</h3>
                <p class="product-item__price">${product.price}</p>
                <button class="product-item__buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    document.querySelector('.products').innerHTML = 
        (list.map(product => renderProduct(product))).join('');
};

renderPage(products);