import { create } from 'zustand'

interface ShopState {
    basket: number[];
    favorites: number[];
    addFavoriteThing: (id: number) => void;
    deleteFavoriteThing: (id: number) => void;
    addToBasket: (id: number) => void;
}

export const useStore = create<ShopState>((set): ShopState => ({
    basket: [],
    favorites: [],
    addFavoriteThing: (id: number) => set((state) => {
        if(state.favorites.includes(id)) {
            return state
        } else {
            return {
                favorites: [...state.favorites, id]
            }
        }
    
    }),
    deleteFavoriteThing: (id: number) => set((state) => {
        if(state.favorites.includes(id)) {
            return {
                ...state,
                favorites: state.favorites.filter(item => item !== id)
            }
        } else {
            return state
            
        }
    
    }),
    addToBasket: (id: number) => set((state) => {
        if(state.basket.includes(id)) {
            return state
        } else {
            return {
                basket: [...state.basket, id]
            }
        }
        
    }),
    
  }))