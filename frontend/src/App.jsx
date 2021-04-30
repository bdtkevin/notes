import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import SApp from './SApp';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

export default function App() {
  const [darkmode, setDarkmode] = useState(true);

  return (
    <SApp darkmode={darkmode}>
      <GlobalStyle darkmode={darkmode} />
      <Header darkmode={darkmode} setDarkmode={setDarkmode} />
      <main>
        <Switch>
          <Route exact path='/'>
            <Dashboard darkmode={darkmode} />
          </Route>
        </Switch>
      </main>
    </SApp>
  );
}
