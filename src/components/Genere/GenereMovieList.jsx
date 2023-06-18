import MoviesList from "../Movies/MoviesList"
import genere from "./GenresList"
function GenereMovieList() {
    return (
        <div>
            {genere.map((item, index) => index <= 4 && (
                <div className="p-8 px-8 md:px-16" key={index}>
                    <h2 className="text-2xl text-white font-semibold">{item.name}</h2>
                    <MoviesList genereId={item.id} index_={index} />
                </div>
            ))}
        </div>
    )
}
export default GenereMovieList