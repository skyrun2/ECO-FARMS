import { Cat } from "@/components/Sections/home/Categories";
import { Award, Beef, Egg, Fish, Leaf, LucideIcon, Target, Users, Wheat } from "lucide-react";

export const WHATSAPP_CONFIG = {
  phoneNumber: process.env.NEXT_PUBLIC_WHATSAPP_PHONe || '+2348039698827',
  
  // Message templates
  TEMPLATES: {
    PRODUCT_INQUIRY: 'Hi! I\'m interested in the {productName}. Is it still available?',
    GENERAL_INQUIRY: 'Hi! I\'d like to know more about your products. Can you help me?',
    AVAILABILITY_CHECK: 'Hello! Is the {productName} still available?',
    PRICE_INQUIRY: 'Hi! What\'s the best price for the {productName}?'
  }
} as const;

export const MAP_URL = "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3953.8155304776824!2d8.572122!3d7.7029356!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDInMDcuOSJOIDjCsDM0JzE5LjYiRQ!5e0!3m2!1sen!2sng!4v1760984945177!5m2!1sen!2sng" as const 


export type Value = {
    title:string
    desc:string;    
    icon:LucideIcon;
}

export type AboutData = {
    desc:string;
    story:string[];
    mission:string;
    values: Value[];
}

export const ECOFARMS_ABOUT : AboutData= {
    desc:"Your trusted partner in agriculture, providing premium livestock feeds, fresh meat, and quality seafood to farming communities across the region.",
    story:[
        "Founded with a deep passion for agriculture, AgroFresh began as a small family business dedicated to supporting local farmers with quality products and reliable service. Over the years, we've grown into a trusted name in the agricultural community.",
        "Our journey started when we recognized the need for a reliable supplier that truly understood the challenges facing modern farmers. We committed ourselves to sourcing the finest livestock feeds, freshest meats, and highest quality seafood products.",
        "Today, we serve hundreds of farms and agricultural businesses, maintaining the same personal touch and commitment to quality that defined our early days. Our success is measured by the success of our customers and the thriving agricultural community we serve",
    ],
    mission:"To empower agricultural communities by providing premium quality products, exceptional service, and expert knowledge that helps farmers and businesses thrive in today's competitive marketplace.",
    values:[
        {
            title:"Quality First",
            desc:"We source only the highest quality products for our customers, ensuring freshness and nutritional value.",
            icon:Leaf
        },
        {
            title:"Community Focus",
            desc:"Supporting local farmers and agricultural communities is at the heart of everything we do.",            
            icon:Users
        },
        {
            title:"Trusted Expertise",
            desc:"With years of experience in agriculture, we understand the needs of modern farming operations.",
            icon:Award
        },
        {
            title:"Sustainable Practices",
            desc:"We promote environmentally responsible farming practices and sustainable agriculture.",
            icon:Target
        },        
    ]
}


export const ECOFARMS_DISPLAY_CATEGORIES: Cat[] = [
    {
    title: "Livestock Feeds",
    desc:"Premium nutrition for your livestock",
    icon: Wheat
  },
  {
    title: "Fresh Livestock",
    desc: "Healthy livestock for your farm",
    icon: Beef
    
  },
  {
    title: "Frozen Meats",
    desc: "Quality frozen meat products",
    icon:Egg
  },
  {
    title: "Fish & Seafood",
    desc: "Fresh catch from the sea",
    icon:Fish
    
  },
]
