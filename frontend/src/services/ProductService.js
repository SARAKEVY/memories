
export class ProductService {

    getProducts() {
        return fetch('C:/Users/USER/Desktop/ACTIVCODE/m/frontend/src/components/products.json').then(res => res.json()).then(d => d.data);
    }

}
    