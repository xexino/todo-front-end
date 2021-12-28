import React from 'react'
import { useSelector } from 'react-redux'
import DataTableItem from './DataTableItem'

const TableList = ({ data = [] }) => {
    return (
        <>
            {
                data.map((d) => <DataTableItem
                    key={d.id}
                    movie={d}
                />)
            }
        </>
    )
}


const TableListStore = () => {
    const data = useSelector(state => state.data)
    return <TableList data={data} />
}

export default TableListStore 