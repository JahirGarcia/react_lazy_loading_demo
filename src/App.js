import React, { Fragment, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar, Loading } from './components';
import FontSizeRoot from './components/FontSizeRoot';
import { FontSizeContextProvider } from './contexts/fontsize';
import routes from './routes';

function App() {

  return (
    <Fragment>
      <FontSizeContextProvider>
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
      </FontSizeContextProvider>
    </Fragment>
  );
}

export default App;
