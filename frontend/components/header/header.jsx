import './header.scss';

import React from 'react';

const Header = (props) => (
  <div className="header-component">
    <select id="field">
      <option selected value="10">10</option>
      <option value="12">12</option>
      <option value="14">14</option>
      <option value="16">16</option>
      <option value="20">20</option>
    </select>
    <button id="restart">Restart</button>
  </div>
);

export default Header;
