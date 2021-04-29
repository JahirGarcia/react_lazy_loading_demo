import { lazy } from '@loadable/component';
// import Loading from '../components/Loading';
// import { lazy } from 'react';

// standalone
// import { Home, About, Blog, Docs } from '../views';

// loadable component
// const Home = loadable(() => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(import('../views/Home'));
//     }, 5000);
//   });
// }, {
//   fallback: <Loading />
// });
// const About = loadable(() => import('../views/About'));
// const Blog = loadable(() => import('../views/Blog'));
// const Docs = loadable(() => import('../views/Docs'));

// react lazy
// const Home = lazy(() => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(import('../views/Home'));
//     }, 3000);
//   });
// });
// const About = lazy(() => import('../views/About'));
// const Blog = lazy(() => import('../views/Blog'));
// const Docs = lazy(() => import('../views/Docs'));

const Home = lazy(() => {
  return new Promise((res) => {
    setTimeout(() => {
      res(import('../views/Home'));
    }, 3000);
  });
});
const About = lazy(() => import('../views/About'));
const Blog = lazy(() => import('../views/Blog'));
const Docs = lazy(() => import('../views/Docs'));

const routes = [
  {
    exact: true,
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Docs
  },
];

export default routes;