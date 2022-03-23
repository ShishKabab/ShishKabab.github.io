// import original module declarations
import "styled-components";
import { THEME } from "./theme";

declare module "styled-components" {
  type Theme = typeof THEME;
  export interface DefaultTheme extends Theme {}
}
