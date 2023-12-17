import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Movie} from "../MoviesList.tsx";

export const useGetMovies = () => {

	return useQuery({
		queryKey: ['movies'],
		queryFn: () => {
			return axios.get<Movie[]>('http://localhost:3000/movies').then(({data}) => {
				return data;
			});
		},
	});
}