import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { GlobalStyle, MainAppSt } from './App.css';
import Header from './shared/components/Header/Header';

const PopularReposPage = React.lazy(
  () => import('./containers/PopularRepos/PopularRepos')
);
const StarredRepos = React.lazy(
  () => import('./containers/StarredRepos/StarredRepos')
);
const queryClient = new QueryClient();

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <Header />
        <MainAppSt>
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route
                  exact
                  path="/popular"
                  render={() => <PopularReposPage />}
                />
                <Route exact path="/stared" render={() => <StarredRepos />} />
                <Redirect to="/popular" />
              </Switch>
            </Suspense>
          </QueryClientProvider>
        </MainAppSt>
      </Router>
    </React.Fragment>
  );
}

export default App;
