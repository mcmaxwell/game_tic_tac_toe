import './app.scss';

import React from 'react';
import Header from './header/header';
import ContentContainer from './content/content_container';

export default class App extends React.Component {
  render() {
    return(
      <div className="main">
          <Header />
          <ContentContainer />
      </div>
    );
  }
}
