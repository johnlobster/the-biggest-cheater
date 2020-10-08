
// List of pages

import Home from "./Home/Home";
import Page1 from "./Page1/Page1"



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
    name: "Page1",
    menu: "Page1",
    title: "Page1",
    reactPage: Page1
  },
]