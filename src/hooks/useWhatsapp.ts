import { WHATSAPP_CONFIG } from "@/lib/constants";




export const useWhatsApp =(message:string)=>{
    const phoneNumber = WHATSAPP_CONFIG.phoneNumber;
    return ( message: string)=>{
        const encoded = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encoded}`;
        window.open(url,"_blank");        
    }
}