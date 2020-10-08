
// List of pages

import Http from "./Http/Http";
import Home from "./Home/Home";



export interface PageDataItem {
  name: string;
  menu: string;
  title: string;
  reactPage: React.FunctionComponent;
}
// title is for meta title

export type PageData = PageDataItem[];

export const allPages: PageData = [
  
  {
    name: "Home",
    menu: "Home page",
    title: "Home page",
    reactPage: Home
  },
  {
    name: "Http",
    menu: "Http return codes",
    title: "Http return codes",
    reactPage: Http
  },
]