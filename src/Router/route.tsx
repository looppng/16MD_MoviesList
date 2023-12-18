import {Routes, Route} from "react-router-dom";
import MoviesList from "../Pages/MoviesList/MoviesList.tsx";
import NotFound from "../Pages/NotFound/NotFound.tsx";
import AboutAuthor from "../Pages/AboutAuthor/AboutAuthor.tsx";
import AboutProject from "../Pages/AboutProject/AboutProject.tsx";
import Movie from "../Pages/Movie/Movie.tsx";

const Router = () => {
	return (
			<Routes>
				<Route path='/' element={<MoviesList/>} />
				<Route path='/movies/:id' element={<Movie/>} />
				<Route path='/aboutAuthor' element={<AboutAuthor/>} />
				<Route path='/aboutProject' element={<AboutProject/>} />
				<Route path='*' element={<NotFound/>} />
			</Routes>
	);
};

export default Router;