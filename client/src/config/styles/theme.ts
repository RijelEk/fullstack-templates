
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            social:{
              facebook:string,
              linkedin:string,
              twitter:string,
              email:string
            },
            font:{
              main:string,
              hover: string
            },
            background:string,
            main:string,
            secondary:string
          },
          fonts: string[],
          fontSizes: {
            sm: string,
            md:string,
            bg: string,
          },
          breakpoints: object
    }
  }


export const theme = {
    colors: {
      social:{
        facebook:"#3B5998",
        linkedin:"#0077B5",
        twitter:"#1DA1F2",
        email:"#7C7C7C"
      },
      font:{
        main:"#2d2926",
        hover:"#757575"
      },
      background:"#505050",
      main:"#7a9c49",
      secondary:"gray"
    },
    fonts: [],
    fontSizes: {
      sm: "1.4rem",
      md:"1.8rem",
      bg: "2.2rem",
    },
    breakpoints: {}
  };