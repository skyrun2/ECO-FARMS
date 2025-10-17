import { HtmlContext } from "next/dist/server/route-modules/pages/vendored/contexts/entrypoints";


export type iClick = React.MouseEvent<HTMLElement>;

export type Product ={
    id: number;
    title: string;
    image: string;
    price: number;
    tag: string;
}