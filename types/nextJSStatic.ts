import { IDogObject, IFullDogInfo } from './commonTypes';

interface staticPathChunk {
    breed: string
}

export interface staticPath { 
    params: staticPathChunk
}

export interface IStaticPathsReturn {
    paths: staticPath[],
    fallback : boolean
}

interface staticProps {
    breed: IDogObject
}

export interface IStaticPropsReturn {
    props : staticProps
}  