

export interface ICard {
    linkTo: string,
    name: string,
    photo: string,
    bgColor: string;

}

export interface customCardStyle {
    background: string,
    border: string
}

export interface IValueMeassures {
    imperial:string,
    metric: string
}

export interface IDogObject {
   bred_for: string,
   breed_group: string,
   height: IValueMeassures,
   weight: IValueMeassures,
   id: number,
   life_span: string,
   name: string,
   reference_image_id: string,
   temperament: string,
   origin: string
}

export interface ISingleDog {
    height : number,
    id : string,
    url: string,
    width: number,
    breeds: IDogObject[]
}

export interface IBreedChunk {
    name:string,
    id: number
}

interface IDogImageData {
    id: string,
    width: number,
    height: number,
    url: string
}

export interface IFullDogInfo {
    weight: IValueMeassures,
    height: IValueMeassures,
    id: number,
    name: string,
    bred_for: string,
    breed_group: string,
    life_span: string,
    temperament: string,
    origin: string,
    reference_image_id: string,
    image: IDogImageData
}

export interface IVotingBody {
    image_id : string,
    value: number
}

interface IFavoriteImage {
    id: string,
    url: string
}
  
export interface IFavorite {
    created_at: string,
    id: number,
    image: IFavoriteImage,
    image_id: string,
    sub_id: any,
    user_id: string,
}

export interface ILogItem {
    country_code: string,
    created_at: string,
    id: number,
    image_id: string,
    sub_id: any,
    value: number,
}


export interface IFavoriteBody {
    image_id: string,
}

export type orderType = "Random" | "Ascending" | "Descending";
export type imageType = "All" | "Static" | "Animated";
export type limitType = 5 | 10 | 15 | 20 | 99

export interface IImageFeedback {
    breed_ids: any,
    breeds: [],
    created_at: string,
    height: any,
    id: string,
    original_filename: string,
    sub_id: any,
    url: string,
    width: any
}


export interface IFavoriteItem {
    created_at: string,
    id: number,
    image: IFavoriteImage,
    image_id: string,
    sub_id: any,
    user_id: string
}

export interface IReduxState {
    appWidth : number,
    isDarkTheme: boolean
}