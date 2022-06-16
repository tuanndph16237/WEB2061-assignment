import Cart from "../components/Cart";
import reRender from "../helpers/reRender";

const CartDetail = {
    render: () => {
        const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        return (
            cartItems.map((item) => (
                `
                <div class="container" style="width: 980px; margin-top: 5%;">
                    <div class='d-flex align-items-center justify-content-between my-2'>
                        <div><img style="width: 100px;" src="${item.image}" /></div>
                        <div><b>${item.name}</b></div>
                        <div>
                            <span>Số lượng: </span><input type="number" value="${item.value}" style="width: 40px;" />
                        </div>
                        <div>${item.price}.000 đ</div>
                        <div>
                            <button data-id="${item.id}" class='btn btn-danger' id='delete-cart-btn'> Xoá </button>
                            <button class="btn btn-primary">Thanh toán</button>
                        </div>
                    </div>
                </div>
                `
            )).join('')
        )
    },
    afterRender: () => {
        // 1. Tìm nút để tạo sự kiện xoá
        const deleteCartBtn = document.querySelector('#delete-cart-btn');
        deleteCartBtn.addEventListener('click', () => {
            // Tìm id cần được xoá qua thuộc tính data-id
            const itemId = deleteCartBtn.dataset.id;
            // Lấy ds sp trong giỏ
            const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
            // Tạo 1 mảng mới từ mảng cũ nhưng đã loại bỏ sp có id là itemId
            const newCartItems = cartItems.filter((item) => item.id !== itemId);
            // Lưu lại giỏ hàng và render lại view chi tiết và view GH
            localStorage.setItem('cart', JSON.stringify(newCartItems));
            reRender('#content', CartDetail);
            reRender('#cart', Cart);
        });
    }
};

export default CartDetail;