'use client'

import { create } from "zustand";
import { Product } from "./types";


interface UserStore {
    favProds:Product[]
    actions:{
        makeFav:(prod:Product) => void ;
        removeFav:(prod:Product) => void;
    }
}

const defaultState : Omit<UserStore,'actions'> ={
    favProds:[],
}

export const useUserStore = create<UserStore>()((set,get) => ({
    ...defaultState,
    actions:{
        makeFav: function (prod): void {
            const updatedFavProds = [...get().favProds];
            updatedFavProds.push(prod);
            console.log({"added":updatedFavProds});
            
            set({
                favProds : updatedFavProds,
            })
        },
        removeFav: function (prod):void {
            const updatedFavProds = get().favProds.filter(e=> e!=prod );
            console.log({"rem":updatedFavProds});
            
            set({
                favProds : [...updatedFavProds],
            })
        },
        // getLocalStorage(){
        //     const localFavProd = 
        // }


    }
}))