import { Link } from '@tanstack/react-router'
import styles from './navPanel.module.css'
import { useStore } from '../pages/store'

export const NavPanel = () => {
    const favorites = useStore((state) => state.favorites);
    const basket = useStore((state) => state.basket);
    return <>
        <div className={styles.navPanel}>
            <Link to="/" className={styles.link}>
                Главная
            </Link>
            <div>
                <div>
                    <Link to="/basket" className={styles.link}>
                        Корзина
                    </Link>
                    {basket.length}шт.
                </div>
                <div>
                    <Link to="/favorites" className={styles.link}>
                        Избранное
                    </Link>
                    {favorites.length}шт.
                </div>
            </div>
        </div>
    </>
}

