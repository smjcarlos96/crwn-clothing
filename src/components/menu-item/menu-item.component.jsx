import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

// Because Route properties (ie: location, match and history) are only accessible from Route's child component, to give access to other
// components we should make use of 'withRouter', exporting it. This would return this component along with its parent Route's props.

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);