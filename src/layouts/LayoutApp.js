import React from 'react';
import AppHeader from '../components/layout/AppHeader';
import Footer from '../components/layout/Footer';

const LayoutApp = ({ children }) => (
  <>
    <AppHeader navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutApp;