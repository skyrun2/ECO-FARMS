'use client'

import { create } from "zustand";
import { Product } from "./handleProd"

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
        makeFav: function (prod: Product): void {
            const updatedFavProds = [...get().favProds];
            updatedFavProds.push(prod);
            set({
                favProds : [...updatedFavProds],
            })
        },
        removeFav: function (prod:Product):void {
            const updatedFavProds = [];
            get().favProds.filter(e =>{
                if (e !== prod) updatedFavProds.push(e);
            })
        },
        // getLocalStorage(){
        //     const localFavProd = 
        // }


    }
}))