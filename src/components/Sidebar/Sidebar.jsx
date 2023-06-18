import { useEffect, useRef, useState } from "react"
import { getTrendingVideo } from '../../services/fetchApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import HeaderSkeleton from '../Header/HeaderSkeleton'

const IMG_BASE_URL = "https://image.tmdb.org/t/p/original"
const screenWidth = window.innerWidth;

function Sidebar() {
    const [movieLists, setMovieLists] = useState([])
    const [isloading, setIsloading] = useState(true)
    const elemenRef = useRef()

    useEffect(() => {
        getTreadingMovies()
    }, [])

    const SidebarRight = (elemen) => {
        elemen.scrollLeft += screenWidth - 110
    }
    const SidebarLeft = (elemen) => {
        elemen.scrollLeft -= screenWidth - 110
    }

    const getTreadingMovies = async () => {
        await getTrendingVideo.then(resp => {
            setMovieLists(resp.data.results)
            setIsloading(false)

        })
    }
    return (
        <div>
            <HiChevronLeft className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer "
                onClick={() => SidebarLeft(elemenRef.current)} />
            <HiChevronRight className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0 "
                onClick={() => SidebarRight(elemenRef.current)}
            />


            <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth " ref={elemenRef}>
                {isloading && <HeaderSkeleton cards={1} />}
                {movieLists.map((item, index) => (
                    <img key={index} src={IMG_BASE_URL + item.backdrop_path} className="min-w-full  md:h-[310px] object-cover
                    object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in
                    shadow-md shadow-gray-800
                    " />
                ))}
            </div>
        </div>
    )
}
export default Sidebar