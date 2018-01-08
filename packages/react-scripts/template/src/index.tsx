// import environment from './utils/environment';
// environment.request = requestWrap(environment);

import * as bowser from 'bowser';
import * as React from 'react';
import dva from 'dva';
import { ConnectedRouter } from 'react-router-redux'; // tslint:disable-line
import { Switch, Route } from 'react-router'; // tslint:disable-line
import createBrowserHistory from 'history/createBrowserHistory'; // tslint:disable-line
import LangModel from './pages/home/components/lang/lang.model';
// import LoginModel from './pages/login/Login.model';
import HomeModel from './pages/home/Home.model';
// import IndexHeader from './pages/home/components/header/IndexHeader.model';

import registerServiceWorker from './registerServiceWorker';
import Home from './pages/home/Home';
// import Login from './pages/login/Login';
import 'antd/dist/antd.less'; // tslint:disable-line
import { requestWrap } from 'joys-react-common'; // tslint:disable-line

const app = dva({
  history: createBrowserHistory()
});

app.model(LangModel);
// app.model(LoginModel);
app.model(HomeModel);
// app.model(IndexHeader);

app.router(({ history }: any) => {
  const { mobile } = bowser.detect(window.navigator.userAgent);
  if (mobile) {
    // window.location.href = environment.mobileurl;
    return <h3>loading...</h3>;
  }
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        {/* <Route path="/login" exact={true} component={Login} /> */}
      </Switch>
    </ConnectedRouter>
  );
});
app.start(document.getElementById('root'));
// environment.dispatch = app._store.dispatch;
registerServiceWorker();
