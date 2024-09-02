import { FormControlItem, MenuItem, Option } from "./types";

export const menuItems: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "category",
    label: "Category",
    path: "/category/application",
  },
  {
    id: "blogs",
    label: "Blogs",
    path: "/blogs",
  },
  {
    id: "search",
    label: "Search",
    path: "/search",
  },
];

export const categories: Option[] = [
  {
    value: "application",
    label: "Application",
  },
  {
    value: "data",
    label: "Data",
  },
  {
    value: "software",
    label: "Software",
  },
  {
    value: "tech",
    label: "Technology",
  },
  {
    value: "science",
    label: "Science",
  },
  {
    value: "fintech",
    label: "Fintech",
  },
  {
    value: "promotiom",
    label: "Promotiom",
  },
  {
    value: "remittace",
    label: "Remittace",
  },
  {
    value: "digital-assets",
    label: "Digital Assets",
  },
  {
    value: "card",
    label: "Card",
  },
  {
    value: "baas",
    label: "Bass",
  },
  {
    value: "payments",
    label: "Payments",
  },
  {
    value: "startups",
    label: "Startups",
  },
];

export const formControls: FormControlItem[] = [
  {
    id: "title",
    label: "Title",
    placeholder: "Enter Blog Title",
    type: "text",
    component: "input",
    options: [],
  },
  {
    id: "description",
    label: "Description",
    placeholder: "Enter Blog Descripion",
    type: "text",
    component: "textarea",
    options: [],
  },
  {
    id: "content",
    label: "Content",
    placeholder: "Enter Blog Content",
    type: "text",
    component: "markdowneditor",
    options: [],
  },
  {
    id: "category",
    label: "Category",
    placeholder: "Choose Blog Category",
    type: "",
    component: "select",
    options: categories,
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyDWf7cqUMLseVAkvcx_Kueklw2rtbXLWyU",
  authDomain: "blog-aplication123.firebaseapp.com",
  projectId: "blog-aplication123",
  storageBucket: "blog-aplication123.appspot.com",
  messagingSenderId: "890341354594",
  appId: "1:890341354594:web:46543e555f91585106353b",
  measurementId: "G-PMRGZCYPFN"
};

export const initialBlogFormData = {
 title :  '',
 description : '',
 content : '',
 image : '',
 category : '' 
}