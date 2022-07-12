
export interface ICard {
    linkTo: string,
    name: string,
    photo: string,
    bgColor: string;

}

export interface CardRenderProps {
    cards?: ICards
}

export interface ICards {
      
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
}

export interface ISingleDog {
    height : number,
    id : string,
    url: string,
    width: number,
    breeds: IDogObject[]
}

export interface IRectangleProps {
    imageLink: string,
    linkTo: string
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