import { useEffect, useState, useRef } from 'react'
import { getMovieGenereId } from '../../services/fetchApi'
import MoviesCard from './MoviesCard'
import HrMovieCard from './HrMovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import MovieSkeleton from './MovieSkeleton';

function MoviesList({ genereId, index_ }) {
    const [movieLists, setMovieLists] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const elementRef = useRef(null);

    useEffect(() => {
        getMoviesId()
    }, [])

    const getMoviesId = async () => {
        await getMovieGenereId(genereId).then(resp => {
            setMovieLists(resp.data.results)
            setIsloading(false)
        })
    }

    const slideRight = (element) => {
        element.scrollLeft += 500;
    }
    const slideLeft = (element) => {
        element.scrollLeft -= 500;
    }

    return (
        <div className='relative'>
            <IoChevronBackOutline onClick={() => slideLeft(elementRef.current)}
                className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute
            ${index_ % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'} `} />

            <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-4 px-3 pb-4'>
                {isLoading && <MovieSkeleton cards={5} />}
                {movieLists.map((item, index) => (
                    <>
                        {index_ % 3 == 0 ? <HrMovieCard movies={item} key={index} /> : <MoviesCard key={index} movies={item} />}
                    </>
                ))}
            </div>

            <IoChevronForwardOutline onClick={() => slideRight(elementRef.current)}
                className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_ % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'}`} />
        </div>
    )
}
export default MoviesList