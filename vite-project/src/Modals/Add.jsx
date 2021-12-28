import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Movie } from '../models/movie'
import { MOVIE_ADD } from '../store/type/movie'

const Add = ({ addMovie }) => {

    const [movie, setMovie] = useState(new Movie())
    const modal = useRef()

    const hancdelChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value })
    }

    const handelClick = () => {
        //validation of inputs
        if (movie.title === "", movie.image === "", movie.description === "") alert("invalid sytanx 🏃‍♂️")
        else {
            addMovie(movie)
            setMovie(new Movie())
            modal.current.click()
        }
    }

    return (
        <>
            <div className="modal fade" id="add" tabIndex={-1} role="dialog" aria-labelledby="edit" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button ref={modal} type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="glyphicon glyphicon-remove" aria-hidden="true" /></button>
                            <h4 className="modal-title custom_align" id="Heading">Add a movie</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <input className="form-control " type="text" placeholder="title" onChange={hancdelChange} name="title" />
                            </div>
                            <div className="form-group">
                                <input className="form-control " type="text" placeholder="image url" onChange={hancdelChange} name="image" />
                            </div>
                            <div className="form-group">
                                <textarea rows={2} className="form-control" placeholder="Description" onChange={hancdelChange} name="description" />
                            </div>
                        </div>
                        <div className="modal-footer ">
                            <button type="button" className="btn btn-success" onClick={handelClick} style={{ width: '100%' }}><span className="glyphicon glyphicon-ok-sign" />&nbsp;Update</button>
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
        addMovie: movies => dispatch({
            type: MOVIE_ADD,
            payload: movies
        })
    }))
export default MovieTableStore(Add)

