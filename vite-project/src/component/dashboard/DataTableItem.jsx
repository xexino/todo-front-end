import React from 'react'
import { Movie } from '../../models/movie'

export default function DataTableItem({ movie = new Movie() }) {
    return (
        <>

            <tr>
                <td>
                    <div><span><input type="checkbox" className="checkthis" /></span></div>
                </td>
                <td>
                    <div>
                        <span>
                            <img src={movie.image} width={120} alt='' />
                        </span>
                    </div>
                </td>
                <td>
                    <div><span>{movie.title}</span></div>
                </td>
                <td>{movie.description}</td>
                <td>
                    <p data-placement="top" data-toggle="tooltip" title="Edit"><button className="btn btn-warning btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit"><span className="glyphicon glyphicon-pencil" /></button>
                    </p>
                </td>
                <td>
                    <p data-placement="top" data-toggle="tooltip" title="Delete"><button className="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete"><span className="glyphicon glyphicon-trash" /></button>
                    </p>
                </td>
            </tr>

        </>
    )
}
