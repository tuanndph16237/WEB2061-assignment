import { getBook } from "../api/product.js";
import reRender from "../helpers/reRender.js";
import Cart from "../components/Cart.js";

const bookDetail = {
    render: async(id) => {
        const response = await getBook(id);
        const { data } = response; // const data = response.data;

        return `<div class="container" style="display: flex; margin-top: 7%; margin-bottom: 7%;">
                    <div><img width="350px" src="${data.image}" /></div>
                    <div style="margin-left: 2%;">
                        <h2>${data.name}</h2>
                        <p>${data.description}</p>
                        <p>Giá: <b>${data.price}.000 đ</b> </p>
                        <input style="width: 40px; height: 40px;" type='number' id='cartValue' value='1' min='1' />
                        <button class='btn btn-info' data-id="${data.id}" data-image="${data.image}" data-name="${data.name}" data-price="${data.price}" id='add-cart'>Thêm vào giỏ hàng</button>
                    </div>
                </div>`
    },
    afterRender: () => {
        const btnAddCart = document.querySelector('#add-cart');
        btnAddCart.addEventListener('click', () => {
            const item = {
                id: btnAddCart.dataset.id,
                image: btnAddCart.dataset.image,
                name: btnAddCart.dataset.name,
                value: +document.querySelector('#cartValue').value || 1,
                price: btnAddCart.dataset.price
            };
            console.log(item);
            // Lưu trữ vào localStorage: setItem(key, giá trị bắt buộc là 1 chuỗi)
            // 1. Xem giỏ hàng có gì chưa
            const cartItemsString = localStorage.getItem('cart'); // lấy ra giá trị từ key cart
            // Nếu chưa có thì giá trị là null -> []
            const cartItems = JSON.parse(cartItemsString || '[]');
            // 2. Nếu chưa có gì thì push luôn sp
            if (!cartItems.length) {
                cartItems.push(item);
            } else {
                // 2.1 Tìm xem có phần tử nào giống cái đang muốn push vào không
                const existItem = cartItems.find((cartItem) => cartItem.id === item.id);
                if (existItem) {
                    existItem.value += item.value;
                } else {
                    cartItems.push(item);
                }
            }
            // 3. Set giá trị mới cho giỏ hàng
            localStorage.setItem('cart', JSON.stringify(cartItems));
            reRender('#cart', Cart);
        });
    }
};

export default bookDetail;