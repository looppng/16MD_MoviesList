import {useParams} from "react-router-dom";
import {useGetMovie} from "./hooks/useGetMovie.ts";
import style from './Movie.module.css'
import MovieComments from "./MovieComments.tsx";

const SingleMovie = () => {
	const {id} = useParams();
	const {data: movie, isLoading } = useGetMovie(id!);

	if (isLoading) {
		return <div className='container'>Loading...</div>
	}

	if (!movie) {
		throw Error('Something went wrong...')
	}
	return (
			<section>
				<div className="container mt-3">
					<div className={style.card}>
						<h3 className={style.title}>{movie.title}</h3>
						<p className={style.year}>{movie.releaseYear}</p>
						<p className={style.genre}>Genre: {movie.genre}</p>
						<div className={style.info}>
							<p className={style.stars}>Starring: {movie.stars}</p>

							<p className={style.rating}>iMDB : {movie.rating}</p>
							<p className={style.length}>Movie Length: {movie.lengthTime}</p>
						</div>
					</div>
				</div>
				<MovieComments/>
			</section>
	)
}

export default SingleMovie