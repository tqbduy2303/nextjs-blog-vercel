import {locales} from './config';
export type Locale = (typeof locales)[number];

export interface MenuItem {
    id : string;
    label :string;
    path : string;
}

export interface Option {
    label : string;
    value : string;
}

export interface FormControlItem{
    id: string;
    label: string;
    placeholder: string;
    type: string;
    component: string;
    options: Option[]
}

export interface BlogFormData {
    title : string;
    description : string;
    content : string;
    image : string;
    category : string;
}

export interface Blog{
    id : number;
    title : string;
    createdAt : string;
    content : string;
    description : string;
    category : string;
    comment : string[];
    image : string;
}