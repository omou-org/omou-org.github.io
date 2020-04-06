import { createMuiTheme } from '@material-ui/core/styles';
import {primaryColor} from "./colors";

export const appBarTheme = createMuiTheme({
	palette: {
		primary: {main: "#ffffff"},
		secondary: {main: "#a6a6a6"},
		background: {
			main: "#ffffff",
			default: "#ffffff",
		},
	},
	typography:{
		h3:{
			fontFamily: "Roboto Slab, serif",
			fontWeight:700,
			color:"#43B5D9",
		}
	},
	overrides:{
		MuiAppBar:{
			root:{
				boxShadow: "none",
			}
		}
	}
});

export const theme = createMuiTheme({
	palette: {
		primary: {main: primaryColor},
		secondary: {main: "#a6a6a6"},
		background: {
			main: "#ffffff",
			default: "#ffffff",
		},
	},
	typography:{
		h1:{
			fontFamily: "Roboto Slab, serif",
			fontWeight:700,
		},
		h2:{
			fontFamily: "Roboto Slab, serif",
			fontWeight:700,
		},
		h3:{
			fontFamily: "Roboto Slab, serif",
			fontWeight:700,
		},
		h4:{
			fontFamily: "Roboto Slab, serif",
			fontWeight:700,
		}
	},
})