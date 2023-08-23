
// List of pages

import Http from './Http/Http'
import Markdown from './Markdown/Markdown'
import Css from './Css/Css'
import ReactSheet from './ReactSheet/ReactSheet'
import Regex from './Regex/Regex'
import Sass from './Sass/Sass'
// import Testing from './Testing/Testing'
import TSandJS from './TSandJS/TSandJS'
import Yarn from './Yarn/Yarn'
import Git from './Git/Git'
import React from 'react'
import Layout from './Layout/Layout'
import Netlify from './Netlify/Netlify'
import MySql from './MySql/MySql'

export interface SheetDataItem {
  name: string;
  menu: string;
  title: string;
  reactSheet: React.FunctionComponent;
}
// title is for meta title

export type SheetData = SheetDataItem[];

export const allSheets: SheetData = [

  {
    name: "Http",
    menu: "Http",
    title: "Http return codes",
    reactSheet: Http
  },
  {
    name: "Markdown",
    menu: "Markdown",
    title: "Markdown",
    reactSheet: Markdown
  },
  {
    name: "TSandJS",
    menu: "Typescript",
    title: "Typescript and Javascript",
    reactSheet: TSandJS
  },
  {
    name: "Css",
    menu: "CSS",
    title: "CSS",
    reactSheet: Css
  },
  { name: "Regex",
    menu: "Regex",
    title: "Regular expressions",
    reactSheet: Regex
  },
  {
    name: "YarnNpm",
    menu: "yarn/npm",
    title: "Packages: yarn and npm",
    reactSheet: Yarn
  },
  {
    name: "Git",
    menu: "git",
    title: "Version control: git",
    reactSheet: Git
  },
  {
    name: "React",
    menu: "React",
    title: "React",
    reactSheet: ReactSheet
  },
  {
    name: "Layout",
    menu: "Layout",
    title: "Layout using html/css",
    reactSheet: Layout
  },
  {
    name: "Netlify",
    menu: "Netlify",
    title: "Netlify",
    reactSheet: Netlify
  },
  {
    name: "Sass",
    menu: "Sass/SCSS",
    title: "Sass/SCSS",
    reactSheet: Sass
  },
  {
    name: "SQL",
    menu: "SQL",
    title: "SQL (MySQL)",
    reactSheet: MySql
  },
]