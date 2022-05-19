import 'styled-components'

declare module 'styled-components' {
  export type ColorCode = `#${string}`
  export interface DefaultTheme {
    color: {
      background1: ColorCode,
      background2: ColorCode,
      background3: ColorCode,
      background4: ColorCode,
      primary1: ColorCode,
      primary2: ColorCode,
      primary3: ColorCode,
      secondary1: ColorCode,
      secondary2: ColorCode,
      secondary3: ColorCode,
      secondary4: ColorCode,
      tertiary1: ColorCode,
      tertiary2: ColorCode,
      tertiary3: ColorCode,
      tertiary4: ColorCode,
      tertiary5: ColorCode
    }
  }
}