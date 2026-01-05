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

export interface CountryDetails{
  name: {
    common:string
    official:string
    nativeName: {official:string}
  }
  flags:{
    png:string,
    svg:string,
    alt:string
  }
  currencies: Object
  capital:string
  continents:string
  region:string
  languages:string
  borders:[]
}