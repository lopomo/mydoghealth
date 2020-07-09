import App from '@/containers/App/App';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store from '@/store/store';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: blue,
		secondary: blue,
	},
});
ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById('app')
);