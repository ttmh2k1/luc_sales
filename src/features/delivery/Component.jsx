import './orderStyle.scss'
import Navbar from '../../components/atoms/navbar/Navbar'
import Sidebar from '../../components/atoms/sidebar/Sidebar'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCheck, FaEye } from 'react-icons/fa'
import { DataGrid } from '@mui/x-data-grid'
import ContentBox from '../../components/atoms/ContentBox'
import styled from 'styled-components'
import { listDelivery, listDelivery1, updateOrder } from '../../apis/orderApi'
import { toast } from 'react-toastify'

const DeliveryComponent = () => {
  const [listOrder, setListOrder] = useState([])
  useEffect(() => {
    const handleListDelivery = async () => {
      const resp = await listDelivery()
      const resp1 = await listDelivery1()
      const list = resp?.data?.data
      const list1 = resp1?.data?.data
      setListOrder([...list, ...list1])
    }
    handleListDelivery()
  }, [])

  const style = {
    position: 'bottom-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  }

  const handleApprove = async (id) => {
    try {
      await updateOrder(id, 'DELIVERING')
      toast.success('Approve successful!', style)
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } catch (error) {
      toast.error('Approve failed!', style)
    }
  }

  const handleApprove1 = async (id) => {
    try {
      await updateOrder(id, 'DELIVERED')
      toast.success('Approve successful!', style)
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } catch (error) {
      toast.error('Approve failed!', style)
    }
  }

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
      width: 200,
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
      width: 100,
      align: 'left',
      headerAlign: 'center',
      renderCell: (props) => {
        return (
          <div className="cellAction">
            <Link to={`/delivery/view/${props.id}`} style={{ textDecoration: 'none' }}>
              <div className="viewButton">
                <FaEye />
              </div>
            </Link>
            {props?.row?.status && props?.row?.status === 'WAIT_FOR_SEND' && (
              <div className="approveButton">
                <FaCheck onClick={() => handleApprove(props.id)} />
              </div>
            )}
            {props?.row?.status && props?.row?.status === 'DELIVERING' && (
              <div className="approveButton">
                <FaCheck onClick={() => handleApprove1(props.id)} />
              </div>
            )}
          </div>
        )
      },
    },
  ]

  return (
    <div className="delivery">
      <Sidebar />
      <div className="deliveryContainer">
        <Navbar />
        <div className="body">
          <ContentBox.Title title="List delivery" />
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

export default DeliveryComponent