import '@/wdyr';
import {withApollo} from "@/utils/withApollo";
import {ThemeProvider} from "styled-components";
import {theme} from "@/config/styles/theme";
import {GlobalStyle } from "@/config/styles/globalStyles";
import MainLayout from "@/components/Layouts/Main";
import Auth from "@/HOC/Auth";
import { Provider } from 'react-redux'
import rootReducer from "@/redux/reducers/root";
import {createStore} from "redux";

const store = createStore(rootReducer);

function App({ Component, pageProps }: any) {
    return (
          <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Auth>
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                </Auth>
                <GlobalStyle />
            </ThemeProvider>
          </Provider>
    
    );
}

export default withApollo({ ssr: false })(App);
