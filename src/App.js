import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutApp from './layouts/LayoutApp';
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import AboutUs from './views/AboutUs';
import SingleAppView from './views/SingleAppView';
import MessageView from './views/MessageView';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path={process.env.PUBLIC_URL + '/'} component={Home} layout={LayoutDefault} />
          <AppRoute path={process.env.PUBLIC_URL + '/aboutcapless'} component={AboutUs} layout={LayoutDefault} />
          <AppRoute path={process.env.PUBLIC_URL + '/feed'} component={SingleAppView} layout={LayoutApp} content={"Daily Feed"}/>
          <AppRoute path={process.env.PUBLIC_URL + '/company'} component={SingleAppView} layout={LayoutApp} content={"Company Profile"}/>
          <AppRoute path={process.env.PUBLIC_URL + '/vc'} component={SingleAppView} layout={LayoutApp} content={"VC Profile"}/>
          <AppRoute path={process.env.PUBLIC_URL + '/settings'} component={SingleAppView} layout={LayoutApp} content={"Settings"}/>
          <AppRoute path={process.env.PUBLIC_URL + '/messages'} component={MessageView} layout={LayoutApp} />
        </Switch>
      )} />
  );
}

export default App;