import { SpacingValue } from "styled-components-spacing"

const spacing: { [Key in SpacingValue]: string } = {
    none: '0',
    smallest: '0.25rem',
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
    largest: '3rem',
}

export const THEME = {
    spacing,
    colors: {
        primary: '#333',
        subtitle: '#888'
    }
}