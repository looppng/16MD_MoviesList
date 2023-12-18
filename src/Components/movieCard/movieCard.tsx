import Button from "../Button/button.tsx";
import style from './movieCard.module.css'
import {Link} from "react-router-dom";

type CardProps = {
	id: number
	title: string
	releaseYear: string
	genre: string
	rating: string
	lengthTime: string
	loading?: boolean
	onDelete?: () => void
}


const MovieCard = ({id, title, releaseYear, genre, rating , loading, onDelete}: CardProps) => {


	return (
			<div className={style.card}>
				<Link to={`/movies/${id}`} className={style.link}>
					<h3 className={style.title}>{title}</h3>
				</Link>
				<h5 className={style.year}>Year: {releaseYear}</h5>
				<div className={style.info}>
					<p className={style.genre}>Genre: {genre}</p>
					<p className={style.rating}>iMDB: {rating}</p>
				</div>
				<div className={style.action}>
					<Button text='Delete' onClick={onDelete} disabled={loading}/>
				</div>
			</div>
	)
}

export default MovieCard