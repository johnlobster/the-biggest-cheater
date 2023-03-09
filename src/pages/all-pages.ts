
// List of pages

import Home from "./Home/Home";
import Page1 from "./Page1/Page1"
import Page2 from "./Page2/Page2"



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
  {
    name: "Page2",
    menu: "Page2",
    title: "Page2",
    reactPage: Page2
  },
]