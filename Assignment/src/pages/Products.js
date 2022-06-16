import { getBooks } from "../api/product.js";

const Products = {
        render: async() => {
                const response = await getBooks();
                const books = response.data;
                return `
        <div class="container"  style="width: 980px; justify-content: space-between;" >
        <div class="row " class="" style="width: 100%; display: flex;">
        ${
            books.map((books) => (
            `
            <div class="d-flex flex-wrap" style="width: 25%; margin-top: 5%;">
                <div class="card" style="width: 100%;">
                    <a href="/products/${books.id}"><img src="${books.image}" class="card-img-top" alt="..."></a>
                    <div class="card-body">
                        <h5 class="card-title">${books.name}</h5>
                        <p class="card-title">Giá: ${books.price}.000 đ</p>
                        <a href="products/${books.id}" class="btn btn-warning">Chi tiết</a>
                    </div>
                </div>
            </div>
            `
            )).join('')
        }
        </div>
    </div>  
    `
    }
}
export default Products;