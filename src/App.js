import React, { Fragment, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar, Loading } from './components';
import FontSizeRoot from './components/FontSizeRoot';
import FontSizeContext, { useFontSizeContext } from './contexts/fontsize';
import routes from './routes';

function App() {
  // Estado del tamaño de fuente
  const value = useFontSizeContext();

  return (
    <Fragment>
      <FontSizeContext.Provider value={ value } >
        <FontSizeRoot>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Suspense fallback={ <Loading /> } >
                {
                  routes.map((route, index) => {
                    return (
                      <Route key={ index } { ...route } />
                    );
                  })
                }
              </Suspense>
            </Switch>
          </BrowserRouter>
        </FontSizeRoot>
      </FontSizeContext.Provider>
    </Fragment>
  );
}

export default App;
