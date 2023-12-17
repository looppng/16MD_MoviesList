import Button from "../Button/button.tsx";
import style from './singleMovieCard.module.css'
import {useNavigate} from "react-router-dom";

type SingleCardProps = {
	id: number
	title: string
	releaseYear: string
	genre: string
	rating: string
	stars: string
	lengthTime: string
	loading?: boolean
	onDelete?: () => void
}


const SingleMovieCard = ({id, title, releaseYear, genre, rating , stars, lengthTime, loading, onDelete}: SingleCardProps) => {
	const navigate = useNavigate()

	return (
			<div className={style.card}>
				<h3 onClick={() => navigate(`/movies/${id}`)} className={style.title}>{title}</h3>
				<h5 className={style.year}>Year: {releaseYear}</h5>
				<div className={style.info}>
					<p className={style.genre}>Genre: {genre}</p>
					<p className={style.rating}>Rating: {rating}</p>
					<p className={style.length}>{lengthTime}</p>
					<p className={style.stars}>{stars}</p>
				</div>
				<div className={style.action}>
					<Button text='Delete' onClick={onDelete} disabled={loading}/>
				</div>
			</div>
	)
}

export default SingleMovieCard