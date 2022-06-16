import { getBooks } from "../api/product";
const Home = {
        render: async() => {
                const response = await getBooks();
                const data = response.data;
                return `
        <img style="width: 100%; " src="../../image/banner.jpg" alt="" />
        <div class="container"  style="width: 980px; justify-content: space-between;" >
            <div class="row " class="" style="width: 100%;">
                ${ 
                    data.map((books) => (
                    `
                    <div class="d-flex flex-wrap" style="width: 25%; margin-top: 5%;">
                        <div class="card" style="width: 100%;">
                            <img src="${books.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${books.name}</h5>
                                <p class="card-text">Giá: ${books.price}.000 đ</p>
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
export default Home;