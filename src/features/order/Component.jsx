import './orderStyle.scss'
import Navbar from '../../components/atoms/navbar/Navbar'
import Sidebar from '../../components/atoms/sidebar/Sidebar'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEye, FaLock, FaPen, FaTrashAlt } from 'react-icons/fa'
import { DataGrid } from '@mui/x-data-grid'
import ContentBox from '../../components/atoms/ContentBox'
import styled from 'styled-components'
import { getListOrder } from '../../apis/orderApi'

const OrderComponent = () => {
  const [listOrder, setListOrder] = useState([])

  useEffect(() => {
    const handleListOrder = async () => {
      const resp = await getListOrder()
      const list = resp?.data?.data
      setListOrder(list)
    }
    handleListOrder()
  }, [])

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
      headerName: 'Order ID',
      width: 80,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'customerID',
      headerName: 'Customer ID',
      width: 100,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'customerName',
      headerName: 'Customer name',
      width: 150,
      align: 'left',
      headerAlign: 'center',
    },
    {
      field: 'customerGroup',
      headerName: 'Customer group',
      width: 120,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 100,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'createTime',
      headerName: 'Create time',
      width: 200,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 200,
      align: 'center',
      headerAlign: 'center',
    },
  ]

  const content = listOrder.map((item, index) => {
    return {
      stt: index + 1,
      id: item?.id,
      customerID: item?.buyer?.id,
      customerName: item?.buyer?.fullname,
      customerGroup: item?.buyer?.rank?.name,
      price: item?.price,
      createTime: item?.createTime,
      status: item?.status,
    }
  })

  const action = [
    {
      headerName: 'Action',
      width: 150,
      align: 'center',
      headerAlign: 'center',
      renderCell: (props) => {
        return (
          <div className="cellAction">
            <Link to={`/customer/view/${props.id}`} style={{ textDecoration: 'none' }}>
              <div className="viewButton">
                <FaEye />
              </div>
            </Link>
            <Link to={`/customer/update/${props.id}`} style={{ textDecoration: 'none' }}>
              <div className="updateButton">
                <FaPen />
              </div>
            </Link>
            <div className="disableButton">
              <FaLock />
            </div>
            <div className="deleteButton">
              <FaTrashAlt />
            </div>
          </div>
        )
      },
    },
  ]

  return (
    <div className="order">
      <Sidebar />
      <div className="orderContainer">
        <Navbar />
        <div className="body">
          <ContentBox.Title title="List order" />
          <div className="template">
            <div className="datatable">
              <Tab
                rows={content}
                columns={header.concat(action)}
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

export default OrderComponent
