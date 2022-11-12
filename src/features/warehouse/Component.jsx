import './warehouseStyle.scss'
import Navbar from '../../components/atoms/navbar/Navbar'
import Sidebar from '../../components/atoms/sidebar/Sidebar'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import { getListWarehouse } from '../../apis/warehouseApi'
import { DataGrid } from '@mui/x-data-grid'
import styled from 'styled-components'
import ContentBox from '../../components/atoms/ContentBox'

const WarehouseComponent = () => {
  const [warehouse, setWarehouse] = useState([])

  useEffect(() => {
    const handleWarehouse = async () => {
      const resp = await getListWarehouse()
      const list = resp?.data?.data
      setWarehouse(list)
    }
    handleWarehouse()
  })

  const action = [
    {
      headerName: 'Action',
      width: 60,
      align: 'center',
      headerAlign: 'center',
      renderCell: (props) => {
        return (
          <div className="cellAction">
            <Link to={`/warehouse/${props.id}`} style={{ textDecoration: 'none' }}>
              <div className="viewButton">
                <FaEye />
              </div>
            </Link>
          </div>
        )
      },
    },
  ]

  const header = [
    {
      field: 'stt',
      headerName: 'No',
      width: 80,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'id',
      headerName: 'Inventory ID',
      width: 100,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'importerName',
      headerName: 'Importer name',
      width: 200,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'importQuantity',
      headerName: 'Import quantity',
      width: 200,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'importTime',
      headerName: 'Import time',
      width: 200,
      align: 'center',
      headerAlign: 'center',
    },
  ]

  const content = warehouse.map((item, index) => {
    return {
      stt: index + 1,
      id: item?.id,
      importerName: item?.importer?.fullname,
      importQuantity: item?.importQuantity,
      importTime: item?.importTime,
    }
  })

  return (
    <div className="warehouse">
      <Sidebar />
      <div className="warehouseContainer">
        <Navbar />
        <div className="body">
          <ContentBox.Title title="Warehouse" />
          <div className="template">
            <div className="datatable">
              <Tab
                rows={content}
                columns={header}
                pageSize={10}
                rowsPerPageOptions={[10]}
                style={{
                  backgroundColor: 'white',
                  fontSize: '1.4rem',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Tab = styled(DataGrid)({
  '& .css-levciy-MuiTablePagination-displayedRows': {
    fontSize: '1.4rem',
  },
})

export default WarehouseComponent
