/*!
 * Dependencies
 */

import * as React from 'react';

/*!
 * Expo
 */

const MainNav = ({ items }) => (
  <nav>
    <ul>
      {items.map(({ name, slug }) => <li key={slug}><a href={`/${slug}`}>{name}</a></li>)}
    </ul>
  </nav>
);

export default MainNav;
