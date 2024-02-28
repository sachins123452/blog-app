import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from './components/Theme/ThemeProvider';
import { useEffect, useState } from 'react';
import { API } from 'api/API';
import { lightTheme, darkTheme } from 'components/Theme/themes';
import useApiCall from 'api/useApiCall';
const App = () => {
  const [getLightTheme, setLightTheme] = useState({});
  const [getDarkTheme, setDarkTheme] = useState({});
  const {makeRequestWithoutLogin}=useApiCall()

  useEffect(() => {
    const ConfigColor = async () => {
      try {
        const res = await makeRequestWithoutLogin({ method: 'GET', url: API.checkDatabaseURL });
        // console.log("makeRequestWithoutLogin:::::",res);
        if (res.statusCode == 200 && res) {
          setLightTheme({
            primaryColor: '#3862F8',
            secondaryColor: '#FFF',
            textColor: res?.data?.light?.FontColor,
            bodyColor: res?.data?.light?.BackgroundColor,
            cardColor: res?.data?.light?.ForegroundColor,
            LogoUrl: res?.data?.light?.LogoUrl
          });
          setDarkTheme({
            primaryColor: '#3862F8',
            secondaryColor: '#FFF',
            textColor: res?.data?.dark?.FontColor,
            bodyColor: res?.data?.dark?.BackgroundColor,
            cardColor: res?.data?.dark?.ForegroundColor,
            LogoUrl: res?.data?.dark?.LogoUrl
          });
        } else {
          setLightTheme({ ...lightTheme });
          setDarkTheme({ ...darkTheme });
        }
      } catch (error) {
        setLightTheme({ ...lightTheme });
        setDarkTheme({ ...darkTheme });
        console.error(`Error =================: ${error}`);
      }
    };

    ConfigColor();
  }, []);

  return (
    <ThemeCustomization>
      <ThemeProvider customLightTheme={getLightTheme} customDarkTheme={getDarkTheme}>
        <ScrollTop>
          <ToastContainer />
          <Routes />
        </ScrollTop>
      </ThemeProvider>
    </ThemeCustomization>
  );
};

export default App;
