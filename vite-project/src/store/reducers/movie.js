import DATA_TABLE from "../../data/TableData";
import { Movie } from "../../models/movie";
import { MOVIE_ADD, MOVIE_DELETE } from "../type/movie";

const initialState = {
    data : DATA_TABLE
}



export const RoteReducer = (prevState = initialState , {type , payload}) =>{

    switch (type) {
        case MOVIE_ADD :
            return {
                data:[...prevState.data , 
                         new Movie(
                             prevState.data.length+1,
                             payload.title,
                             payload.description,
                             payload.image
                         )]
            }   

        case MOVIE_DELETE : 
            return {
                data:[
                    ...prevState.data.filter(d=> d.id !==  payload.id)
                ]
            }
        default: return prevState
        
    }
}
