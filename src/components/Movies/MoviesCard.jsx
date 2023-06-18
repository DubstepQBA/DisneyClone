
const IMG_BASE_URL = "https://image.tmdb.org/t/p/original"
function MoviesCard({ movies }) {
    return (
        <>

            <img src={IMG_BASE_URL + movies.poster_path} alt="Post Movies"
                className="w-[110px] md:w-[200px] rounded-lg shadow-lg shadow-slate-900
                hover:border-2 border-gray-400 hover:scale-110 transition-all duration-150 ease-in
                cursor-pointer
                "
            />

        </>
    )
}
export default MoviesCard