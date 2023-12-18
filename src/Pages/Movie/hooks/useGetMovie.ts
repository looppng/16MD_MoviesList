import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import { Movie } from "../../MoviesList/MoviesList.tsx";
import { useNavigate } from "react-router-dom";

export const useGetMovie = (id: string) => {
	const navigate = useNavigate()

	return useQuery({
		queryKey: ['movie'],
		queryFn: () => {
			return axios
				.get<Movie[]>(`http://localhost:3000/movies/${id}`)
				.then(({data}) => {
					return data;

			})
				.catch((e) =>{
					if (e.response.status === 404) {
						navigate('/404')
					}

					return e;
				})
		},
	});
}