import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";

const apiClient = new APIClient<Genre>('/genres')

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => ({data: genres, isLoading: false, error: null});

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 1 Day = 24 hours * 60m * 60s * 1000 ms
    initialData: genres, 
  });
};

export default useGenres;
