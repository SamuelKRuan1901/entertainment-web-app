import logoIcon from '../assets/logo.svg';
import homeIcon from '../assets/icon-nav-home.svg';
import moviesIcon from '../assets/icon-nav-movies.svg';
import seriesIcon from '../assets/icon-nav-tv-series.svg';
import bookmarksIcon from '../assets/icon-nav-bookmark.svg';
import avatarIcon from '../assets/image-avatar.png';

export const navItems = [
  {
    name: 'logo',
    url: '/',
    active: true,
    id: 1,
    img: logoIcon
  },
  {
    name: 'home',
    url: '/',
    active: true,
    id: 2,
    img: homeIcon
  },
  {
    name: 'movies',
    url: '/movies',
    active: false,
    id: 3,
    img: moviesIcon
  },
  {
    name: 'series',
    url: '/series',
    active: false,
    id: 4,
    img: seriesIcon
  },
  {
    name: 'bookmarks',
    url: '/bookmarks',
    active: false,
    id: 5,
    img: bookmarksIcon
  },
  {
    name: 'profile',
    url: '/:id',
    active: false,
    id: 6,
    img: avatarIcon
  }
];
