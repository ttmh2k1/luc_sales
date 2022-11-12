import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid'
import { userColumns, userRows } from '../../../dataTableSource'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaEye } from 'react-icons/fa'

const Datatable = () => {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 60,
      align: 'center',
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/user/test" style={{ textDecoration: 'none' }}>
              <div className="viewButton">
                <FaEye />
              </div>
            </Link>
          </div>
        )
      },
    },
  ]
  return (
    <div className="template">
      <div className="datatable">
        <Tab
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={10}
          rowsPerPageOptions={[5]}
          style={{
            backgroundColor: 'white',
            fontSize: '1.4rem',
          }}
        />
      </div>
    </div>
  )
}

const Tab = styled(DataGrid)({
  '& .css-levciy-MuiTablePagination-displayedRows': {
    fontSize: '1.4rem',
  },
})

export default Datatable
