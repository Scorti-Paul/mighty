import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Services from './components/Services';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';
import FeaturedProjects from './components/FeaturedProjects';
import LatestProjects from './components/LatestProjects';
import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';

const LazyUser = React.lazy(() => import('./components/Users'))


function App() {
  return (
    <div>
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<FeaturedProjects />} />
            <Route path='featured-projects' element={<FeaturedProjects />} />
            <Route path='latest-projects' element={<LatestProjects />} />
          </Route>
          <Route path='/services' element={<Services />} />
          <Route path='/users' element={
            <React.Suspense fallback='Loading...'>
              <LazyUser />
            </React.Suspense>
          } />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
