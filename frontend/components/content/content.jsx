import './content.scss';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Content = ({ o, x }) => (
  <div className="content-component">
    <div className="row">
      <div className="small-12 columns">
        <div className="game-place">
          <div className="game-grid">
          </div>
          <div className="win-show">
            Win { x ? 'X' : 'O' }
          </div>
          <div className="inform-block">Start <div className="game-col x"></div></div>
        </div>
      </div>
    </div>
  </div>
);

Content.propTypes = {
  o: PropTypes.bool,
  x: PropTypes.bool
};

export default Content;
