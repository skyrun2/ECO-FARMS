
import { Header } from './Header';
import { Footer } from './Footer';


export default function  MainLayout ({
    children,
}:{
    children : React.ReactNode;
}){
    return (
        <div className='w-full bg-white'>
            <Header/>
            <main > {children}</main>
            <Footer/>
        </div>
    )
}