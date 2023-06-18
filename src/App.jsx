import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Product from './components/Product'

import { SkeletonTheme } from 'react-loading-skeleton';
import GenereMovieList from './components/Genere/GenereMovieList';
function App() {


  return (

    <div className=''>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Header />
        <Sidebar />
        <Product />
        <GenereMovieList />

      </SkeletonTheme>
    </div>

  )
}

export default App
