
import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function MovieSkeleton({ cards }) {
    const id = uuidv4();
    return (

        <>
            <Skeleton containerClassName="flex-1 " className='hover:border-2 animate-pulse shadow-lg shadow-slate-900 border-gray-700 rounded-2xl ' width={200} height={200} />
            <Skeleton containerClassName="flex-1 " className='hover:border-2 animate-pulse shadow-lg shadow-slate-900 border-gray-700 rounded-2xl ' width={200} height={200} />
            <Skeleton containerClassName="flex-1 " className='hover:border-2 animate-pulse shadow-lg shadow-slate-900 border-gray-700 rounded-2xl ' width={200} height={200} />
            <Skeleton containerClassName="flex-1 " className='hover:border-2 animate-pulse shadow-lg shadow-slate-900 border-gray-700 rounded-2xl ' width={200} height={200} />
            <Skeleton containerClassName="flex-1 " className='hover:border-2 animate-pulse shadow-lg shadow-slate-900 border-gray-700 rounded-2xl ' width={200} height={200} />
        </>


    )


}
export default MovieSkeleton