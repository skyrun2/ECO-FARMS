
import { Header } from './Header';
import { Footer } from './Footer';


export default function  MainLayout ({
    children,
}:{
    children : React.ReactNode;
}){
    return (
        <div className='w-full bg-off-white'>
            <Header/>
            <main > {children}</main>
            <Footer/>
        </div>
    )
}