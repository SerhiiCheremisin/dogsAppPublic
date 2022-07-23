import { IDogObject, IFullDogInfo } from '../types/commonTypes';

export interface ICards {
      
}

export interface IBigImageProps {
    url : string,
}

export interface singleMapImage {
    url: string,
    id: number,
    name:string,
    image_id?: string
}

export interface IGridImagesProps {
    images: singleMapImage[],
    limit? : number
}


export interface INavBarProps {
    isSearchPage? : boolean,
    searchName?: string
}

export interface IRectangleProps {
    imageLink: string,
    linkTo: string,
    isActive: boolean
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
    needToUpdate?: Function,
    refresh?: Function,
    update?:Function
}

export interface ISingleDogCardProps {
    dog : IDogObject
}

export interface IGalleryFilterProps {
    setType : Function,
    setOrder: Function,
    setLimit : Function,
    breeds: IFullDogInfo[],
    refresh: Function,
    setImagesView?:Function,
    images?: singleMapImage[]
}

export interface IPortalProps {
    setVisability : Function
}

export interface IFileFormProps {
    setLoaded : Function,
    setFile: Function,
    setSendedPhoto: Function,
    file: []
}

export interface IGalleryNavProps {
    amount : number;
    currentID: number;
    setChunk : Function
}

export interface IBugrerProps {
    setModal : Function
}