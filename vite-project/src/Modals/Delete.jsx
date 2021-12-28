import React, { useState } from 'react'

export default function Delete() {

    const handleClick = () => {


    }
    return (
        <>
            <div className="modal fade" id="delete" tabIndex={-1} role="dialog" aria-labelledby="edit" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="glyphicon glyphicon-remove" aria-hidden="true" /></button>
                            <h4 className="modal-title custom_align" id="Heading">Delete this entry</h4>
                        </div>
                        <div className="modal-body">
                            <div className="alert alert-danger"><span className="glyphicon glyphicon-warning-sign" /> Are
                                you sure
                                you want to delete this Record?</div>
                        </div>
                        <div className="modal-footer ">
                            <button type="button" className="btn btn-success" onClick={handleClick}><span className="glyphicon glyphicon-ok-sign">&nbsp;Yes</span> </button>
                            <button type="button" className="btn btn-default" data-dismiss="modal"><span className="glyphicon glyphicon-remove" />&nbsp;No</button>
                        </div>
                    </div>
                    {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
            </div>
        </>
    )
}
