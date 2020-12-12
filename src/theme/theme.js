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
			fontFamily: "Montserrat",
			fontWeight:700,
			color: primaryColor,
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
			fontFamily: "Montserrat",
			fontWeight:700,
		},
		h2:{
			fontFamily: "Montserrat",
			fontWeight:700,
		},
		h3:{
			fontFamily: "Montserrat",
			fontWeight:700,
		},
		h4:{
			fontFamily: "Montserrat",
			fontWeight:700,
		}
	},
	overrides:{
		MuiButton:{
			containedPrimary: {
				color:"white",
			},
		}
	},
})

const featuresPageTheme = createMuiTheme({
	overrides: {
		MuiButton: {
			fontFamily: 'Montserrat',
        	fontWeight: '500',
        	fontSize: '28px',
        	lineHeight: '43.77px',
        	fontVariant: 'all-small-caps',
        	letterSpacing: '0.03em',
		}
	},
	textStyle: {
		fontFamily: 'Montserrat',
		fontWeight: '300',
		fontSize: '23px',
		lineHeight: '35.95px',
		letterSpacing: '0.03em',
	},
	imgStyle: {
		width: '913px',
		height: '525px',
	},
	headerStyle: {
		fontFamily: 'Montserrat',
		fontWeight: '700',
		fontSize: '28px',
		lineHeight: '33.42px',
		letterSpacing: '0.03em',
		fontVariant: 'all-small-caps',
	},
	listStyle: {
		fontFamily: 'Montserrat',
		fontWeight: '500',
		fontSize: '23px',
		lineHeight: '33.42px',
		letterSpacing: '0.03em',
	}
})

export default featuresPageTheme;