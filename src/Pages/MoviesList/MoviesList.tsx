import {useGetMovies} from "./hooks/useGetMovies.ts";
import {useDeleteMovie} from "./hooks/useDeleteMovie.ts";
import MovieCard from "../../Components/movieCard/movieCard.tsx";
import style from './MoviesList.module.css'

export type Movie = [
		id: number,
		title: string,
		releaseYear: string,
		genre: string,
		rating: string,
		lengthTime: string
]

const MoviesList = () => {
	const {data : movies, isLoading : loading} = useGetMovies();
	const {mutateAsync: deleteMovie, isPending: deleteMovieLoading} = useDeleteMovie();


	return (
			<section>
					<div className="container mb-3 mt-3">
						<div className={style.cards}>
							{loading ? (
									<div className='col-12'>Loading...</div>
							) : (
									movies?.map(({id, title, releaseYear, genre, rating, lengthTime}: Movie) => (
											<div key={id}>
												<MovieCard
														title={title}
														releaseYear={releaseYear}
														genre={genre}
														rating={rating}
														lengthTime={lengthTime}
														onDelete={() => {
															deleteMovie(id!)
														}}
												/>
											</div>
									))
							)}
						</div>
					</div>
			</section>
	)
}

export default MoviesList