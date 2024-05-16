import { create } from 'zustand'

interface ShopState {
    basket: number[];
    favorites: number[];
    addFavoriteThing: (id: number) => void;
    addToBasket: (id: number) => void;
}

export const useFavoritesStore = create<ShopState>((set): ShopState => ({
    basket: [],
    favorites: [],
    addFavoriteThing: (id: number) => set((state) => {
        if(state.favorites.includes(id)) {
            console.log(state,'st')
            return state
        } else {
            return {
                favorites: [...state.favorites, id]
            }
        }
    
    }),
    addToBasket: (id: number) => set((state) => {

        if(state.basket.includes(id)) {
            console.log(state,'st')
            return state
        } else {
            return {
                basket: [...state.basket, id]
            }
        }
        
    }),
    
  }))