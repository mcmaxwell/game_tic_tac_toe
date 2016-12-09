import './content.scss';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Content = ({ o, x }) => (
  <div className="content-component">
    <div className="row">
      <div className="small-12 columns">
        <div className="game-place">
          <div className="setting">
            <select id="field">
              <option value="5">5</option>
              <option selected value="10">10</option>
              <option value="12">12</option>
              <option value="14">14</option>
              <option value="16">16</option>
              <option value="20">20</option>
            </select>
            <button id="restart">Restart</button>
          </div>
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
