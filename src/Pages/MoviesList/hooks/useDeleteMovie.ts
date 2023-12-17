import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";

export const useDeleteMovie = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (id: number) => {
			return axios.delete(`http://localhost:3000/movies/${id}`)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['movies']})
		}
	})
}