import React, { Fragment, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar, Loading } from './components';
import routes from './routes';

function App() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default App;
