import { IDogObject } from '../types/commonTypes';

export interface ICards {
      
}

export interface IBigImageProps {
    url : string,
}

export interface singleMapImage {
    url: string,
    id: string,
    name:string
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

export interface BreadcrumbProps {
    breeds? : IDogObject[],
    setLimit?: Function,
    setSort? : Function,
    id?: number;
}

export interface ISingleDogCardProps {
    dog : IDogObject
}