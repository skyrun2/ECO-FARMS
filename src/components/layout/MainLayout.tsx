
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsappFloater } from './WhatAppFloater';



export default function  MainLayout ({
    children,
}:{
    children : React.ReactNode;
}){
    return (
        <div className='w-full bg-white'>
            <Header/>
            <WhatsappFloater/>
            <main > {children}</main>            
            <Footer/>
        </div>
    )
}

