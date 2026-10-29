import api from "@/plugins/axios";

export async function getTopHorrorMovies() {
  const { data } = await api.get("/discover/movie", {
    params: {
      with_genres: 27,
      sort_by: "vote_average.desc",
      vote_count_gte: 200,
      language: "pt-BR",
    },
  });

  return data.results.slice(0, 4);
}
