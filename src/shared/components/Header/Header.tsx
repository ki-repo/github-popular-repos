import { ReactElement } from 'react';
import {
  HeaderLink,
  HeaderLinks,
  HeaderTitleLink,
  PageHeader,
} from './Header.css';
import { useRouteMatch } from 'react-router-dom';
const Header = (): ReactElement => {
  const isPopularRotute = useRouteMatch({
    path: '/popular',
    exact: true,
  });
  const isStartedRotute = useRouteMatch({
    path: '/stared',
    exact: true,
  });
  return (
    <PageHeader>
      <HeaderTitleLink to="/popular">
        {isPopularRotute
          ? 'Popular Repos'
          : isStartedRotute
          ? 'Starred Repos'
          : 'Error'}
      </HeaderTitleLink>
      <HeaderLinks>
        <HeaderLink to="/popular">Popular Repos</HeaderLink>
        <HeaderLink to="/stared">Starred Repos</HeaderLink>
      </HeaderLinks>
    </PageHeader>
  );
};

export default Header;
