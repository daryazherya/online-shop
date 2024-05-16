import styles from './mainPage.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoritesCartIcon from '@mui/icons-material/Favorite';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../api/getProducts';
import { useStore } from '../store'
import { ProgressLine } from '../../components/Progress/Progress';

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

export const MainPage = () => {

    const { data, isLoading } = useQuery({ queryKey: ['products'], queryFn: getProducts });

    const handleClickCart = useStore(((state) => state.addToBasket));
    const handleClickFavorites = useStore(((state) => state.addFavoriteThing));


    if (isLoading) {
        return <ProgressLine/>
    }

    return <div className={styles.wrapperCard}>
        {data.map((product: Product) => {
            return <Card
                sx={{
                    width: 250,
                    height: '400px',
                    margin: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }} key={product.id}
            >
                <CardMedia
                    sx={{ height: 200, margin: '10px 20px', backgroundSize: 'contain' }}
                    image={product.image}
                    title={product.title}
                />
                <CardContent sx={{ margin: '10px', padding: 0 }}>
                    <Typography gutterBottom variant="h6" component="div">
                        {product.title}
                    </Typography>
                    <Typography gutterBottom component="div">
                        Цена:{product.price}$
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                        onClick={() => handleClickCart(product.id)}>
                        <AddShoppingCartIcon />
                    </IconButton>
                    <IconButton
                        color="primary"
                        aria-label="add to favorites"
                        onClick={() => handleClickFavorites(product.id)}>
                        <FavoritesCartIcon />
                    </IconButton>
                </CardActions>
            </Card>
        })}

    </div>
}
