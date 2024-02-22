/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { СhangeThemeProvider, Context } from 'components/Helpers';
import { GlobalStyle } from 'components/Helpers/GlobalStyle';
import { store, persistor } from './redux/store';
import 'modern-normalize';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter basename='/node_front_fs_88_BishopNik'>
					<Context>
						<СhangeThemeProvider>
							<App />
							<Toaster
								position='top-right'
								reverseOrder={false}
								gutter={8}
								toastOptions={{
									duration: 5000,
									style: {
										background: '#fdfbea',
										color: '#000000',
									},
								}}
							/>
							<GlobalStyle />
						</СhangeThemeProvider>
					</Context>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
