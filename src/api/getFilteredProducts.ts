type Product = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    rating: {
        count: number;
        rate: number;
    }
}

export async function getFilteredProducts(ids: number[]) {
    const data =  await fetch('https://fakestoreapi.com/products')
        .then(res=> res.json())
    
    return data.filter((item: Product) => ids.includes(item.id))
}