import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Movie } from "../../MoviesList/MoviesList.tsx";

export const useCreateComment = () => {
	const queryClient = useQueryClient();

	useMutation({
		mutationFn: (payload) => {
			return axios.post<Movie[]>(`http://localhost:3000/movies/`, { payload });
		},

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['comments'] });
		},
	});
};
