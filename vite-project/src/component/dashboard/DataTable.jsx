import TableList from './TableList'
import React from 'react'
import Add from '../../Modals/Add'
import Edit from '../../Modals/Edit'
import Delete from '../../Modals/Delete'


export default function DataTable() {
    return (
        <>
            <div className="row">
                <div className="dd">
                    <h4><b> Movie List:</b></h4>
                    <p data-placement="top" data-toggle="tooltip" title="Edit">
                        <button type="button" className="btn btn-success btn-xs" data-title="add" data-toggle="modal" data-target="#add">
                            + ADD MOVIE
                        </button>
                    </p>
                </div>
                <div className="col-md-12">
                    <div className="table-responsive">
                        <table id="mytable" className="table table-bordred table-striped">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" id="checkall" /></th>
                                    <th>Thumbnail</th>
                                    <th>Title</th>
                                    <th>description</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableList />
                            </tbody>
                        </table>
                        <div className="clearfix" />
                        <ul className="pagination pull-right">
                            <li className="disabled"><a href="#"><span className="glyphicon glyphicon-chevron-left" /></a></li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-chevron-right" /></a></li>
                        </ul>
                    </div>
                </div>
                <Add />
                <Edit />
                <Delete />

            </div>
        </>
    )
}



