import DATA_TABLE from '../data/TableData'
import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { MOVIE_EDIT } from '../store/type/movie'


const Edit = ({ editMovie }) => {
    // const [isEditing, setIsEditing] = useState(false);
    const [movie, setMovie] = useState(DATA_TABLE)

    const handleEditInputChange = (e) => {

        setMovie({ ...movie, [e.target.name]: e.target.value });
        console.log(movie);

    }
    const handelClick = () => {
        //validation of inputs
        if (movie.title === "", movie.image === "", movie.description === "") alert("invalid sytanx 🏃‍♂️")
        else {
            editMovie(movie)
            setMovie()
        }
    }

    return (
        <>
            <div className="modal fade" id="edit" tabIndex={-1} role="dialog" aria-labelledby="edit" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="glyphicon glyphicon-remove" aria-hidden="true" /></button>
                            <h4 className="modal-title custom_align" id="Heading">Edit Your Detail</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <input className="form-control "
                                    type="text"
                                    placeholder="title"
                                    onChange={handleEditInputChange}
                                    name="title" />
                            </div>
                            <div className="form-group">
                                <input className="form-control "
                                    type="text"
                                    placeholder="image url"
                                    onChange={handleEditInputChange}
                                    name="image" />
                            </div>
                            <div className="form-group">
                                <textarea rows={2}
                                    className="form-control"
                                    placeholder="description"
                                    onChange={handleEditInputChange}
                                    name="description" />
                            </div>
                        </div>
                        <div className="modal-footer ">
                            <button type="button"
                                onClick={handelClick}
                                className="btn btn-warning btn-lg"
                                style={{ width: '100%' }}>
                                <span className="glyphicon glyphicon-ok-sign">&nbsp;Update</span>
                            </button>
                        </div>
                    </div>
                    {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
            </div>
        </>
    )
}
const MovieTableStore = connect(null,
    (dispatch) => ({
        editMovie: movies => dispatch({
            type: MOVIE_EDIT,
            payload: movies
        })
    }))
export default MovieTableStore(Edit)


