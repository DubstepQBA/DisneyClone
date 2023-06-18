
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function HeaderSkeleton({ cards }) {
    return (
        Array(cards).fill(1).map(i =>
            <div key={i} className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth " >

                <Skeleton containerClassName="flex-1 " className='rounded-2xl hover:-translate-x-10' height={300} />
            </div>

        )

    )
}
export default HeaderSkeleton