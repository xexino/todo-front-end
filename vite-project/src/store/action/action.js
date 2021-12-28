import { MOVIE_DELETE } from "../type/movie";

export const deleteTaskAction = (id) => ({
    type:  MOVIE_DELETE,
    payload: { id }
})