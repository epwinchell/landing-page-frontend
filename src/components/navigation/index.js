import React from 'react';
import { Nav, NavItem, NavList } from '@patternfly/react-core';
import { useSelector } from 'react-redux';
import NavigationItem from './navigation-item';

import './navigation.scss';

const Navigation = () => {
  const loaded = useSelector(({ technologies }) => technologies.loaded);
  const navigationItems = useSelector(({ technologies }) =>
    technologies?.activeTechnologies.filter(({ disabled }) => !disabled)
  );

  if (!loaded) {
    return null;
  }
  return (
    <Nav className="ins-c-navigation">
      <NavList>
        <NavItem preventDefault component="span">
          <b>Red Hat Hybrid Could Console</b>
        </NavItem>
        {navigationItems.map((item, index) => (
          <NavigationItem key={item.id} tabIndex={index} {...item} />
        ))}
      </NavList>
    </Nav>
  );
};

export default Navigation;
