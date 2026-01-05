export interface Country {
  name: {
    common:string
    official:string
  }
  flags:{
    png:string,
    svg:string,
    alt:string
  }
  nativeName: {official:string}
}

export interface ComponentProps {
  countries: Country[];
}

