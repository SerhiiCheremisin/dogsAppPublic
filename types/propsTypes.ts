import { type } from "os"

export interface ICards {
      
}

export interface IBigImageProps {
    url : string,
}

export interface singleMapImage {
    url: string,
    id: string
}

export interface IGridImagesProps {
    images: singleMapImage[]
}


export interface INavBarProps {
    isSearchPage? : boolean,
    searchName?: string
}

export interface IRectangleProps {
    imageLink: string,
    linkTo: string
}


export interface CardRenderProps {
    cards?: ICards
}

export interface IAddersProps {
    id : string,
    update : Function
}

