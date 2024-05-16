export async function getProducts() {
    return await fetch('https://fakestoreapi.com/products')
        .then(res=> res.json())
}