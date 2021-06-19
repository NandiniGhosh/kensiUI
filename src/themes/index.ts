// Any custom theme properties are defined here
interface ICustomTheme {}

// This allows custom theme properties to be strongly typed when used
declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme extends ICustomTheme {}
    interface ThemeOptions extends ICustomTheme {}
}

// Export available themes
export { default as kentosoTheme } from './kentoso';


