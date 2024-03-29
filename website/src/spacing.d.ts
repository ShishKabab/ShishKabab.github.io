declare module "styled-components-spacing" {
  type DefaultSpacingBreakpoints = "mobile" | "tablet" | "desktop";
  type SpacingLength<Breakpoints extends string> =
    | SpacingValue
    | { [Breakpoint in Breakpoints]: SpacingValue };
  type SpacingValue =
    | "none"
    | "smallest"
    | "small"
    | "medium"
    | "large"
    | "largest";
  // type SpacingLength<Breakpoints extends string> = keyof typeof theme.spacing | { [Breakpoint in Breakpoints]: keyof typeof theme.spacing }

  interface SpacingOptions<
    Breakpoints extends string = DefaultSpacingBreakpoints
  > {
    horizontal: SpacingLength<Breakpoints>;
    vertical: SpacingLength<Breakpoints>;
    top: SpacingLength<Breakpoints>;
    bottom: SpacingLength<Breakpoints>;
    left: SpacingLength<Breakpoints>;
    right: SpacingLength<Breakpoints>;
  }

  declare function Margin(
    props: { children: React.ReactNode } & Partial<SpacingOptions>
  );
  declare function Padding(
    props: { children: React.ReactNode } & Partial<SpacingOptions>
  );
}
