import './style.scss'
import { Grid, TextField } from '@mui/material'
import ContentBox from '../../../components/atoms/ContentBox'
import Navbar from '../../../components/atoms/navbar/Navbar'
import Sidebar from '../../../components/atoms/sidebar/Sidebar'
import { styled } from '@material-ui/styles'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getOrder } from '../../../apis/orderApi'
import { DataGrid } from '@mui/x-data-grid'
import { Divider, Typography } from 'antd'

const OrderComponent = () => {
  const [order, setOrder] = useState()
  const { orderId } = useParams()
  useEffect(() => {
    const handleGetOrder = async () => {
      const resp = await getOrder(orderId)
      const data = resp?.data?.data
      setOrder(data)
    }
    handleGetOrder()
  }, [orderId])

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
      headerName: 'Attribute ID',
      width: 100,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'productName',
      headerName: 'Product name',
      width: 600,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'variationName',
      headerName: 'Attribute',
      width: 180,
      align: 'left',
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
      field: 'quantity',
      headerName: 'Quantity',
      width: 100,
      align: 'center',
      headerAlign: 'center',
    },
  ]

  const content = order?.orderDetails?.map((item, index) => {
    return {
      stt: index + 1,
      id: item?.productVariation?.id,
      productName: item?.productVariation?.product?.name,
      variationName: item?.productVariation?.variationName,
      price: item?.productVariation?.price,
      quantity: item?.quantity,
    }
  })

  return (
    <div className="view">
      <Sidebar />
      <div className="viewContainer">
        <Navbar />
        <div className="body">
          <ContentBox.Container className="viewForm">
            <ContentBox.Title title="View order information" />
            <ContentBox.Body>
              <div style={{ width: '100%', padding: '0.4rem' }}>
                <label className="header">Customer information</label>
                <Grid container spacing={0} alignItems="flex-start" alignContent="space-around">
                  <div className="form">
                    <label className="title" for="orderCode">
                      Order ID
                    </label>
                    <Item disabled className="textField" id="orderCode" value={order?.id} />
                  </div>
                  <div className="form">
                    <label className="title" for="customerId">
                      Customer ID
                    </label>
                    <Item disabled className="textField" id="customerId" value={order?.buyer?.id} />
                  </div>
                  <div className="form">
                    <label className="title" for="customerName">
                      Customer name
                    </label>
                    <Item
                      disabled
                      className="textField"
                      id="customerName"
                      value={order?.buyer?.fullname}
                    />
                  </div>
                  <div className="form">
                    <label className="title" for="phone">
                      Customer phone
                    </label>
                    <Item
                      disabled
                      className="textField"
                      id="customerName"
                      value={order?.buyer?.phone}
                    />
                  </div>
                  <div className="form">
                    <label className="title" for="customerGroup">
                      Customer group
                    </label>
                    <Item
                      disabled
                      className="textField"
                      id="customerGroup"
                      value={order?.buyer?.rank?.name}
                    />
                  </div>
                  <div className="form">
                    <label className="title" for="email">
                      Email
                    </label>
                    <Item disabled className="textField" id="email" value={order?.buyer?.email} />
                  </div>
                  <div className="form">
                    <label className="title" for="phone">
                      Phone
                    </label>
                    <Item disabled className="textField" id="phone" value={order?.phone} />
                  </div>
                  <div className="form">
                    <label className="title" for="address">
                      Address
                    </label>
                    <Item
                      disabled
                      className="textField"
                      id="address"
                      value={order?.deliveryAddress?.addressDetail}
                    />
                  </div>
                  <div className="form">
                    <Item
                      disabled
                      className="address"
                      id="address"
                      value={order?.deliveryAddress?.addressWard?.name}
                    />
                  </div>
                  <div className="form">
                    <Item
                      disabled
                      className="address"
                      id="address"
                      value={order?.deliveryAddress?.addressWard?.district?.name}
                    />
                  </div>
                  <div className="form">
                    <Item
                      disabled
                      className="address"
                      id="address"
                      value={order?.deliveryAddress?.addressWard?.district?.provinceCity?.name}
                    />
                  </div>
                </Grid>
                <label className="header">Product information</label>
                <Grid container spacing={0} alignItems="flex-start" alignContent="space-around">
                  <div className="form">
                    <label className="title" for="paymentMethod">
                      Payment method
                    </label>
                    <Item
                      disabled
                      className="textField"
                      id="paymentMethod"
                      value={order?.paymentMethod}
                    />
                  </div>
                  <div className="form">
                    <label className="title" for="status">
                      Status
                    </label>
                    <Item disabled className="textField" id="status" value={order?.status} />
                  </div>
                </Grid>
                <div className="template">
                  <div className="datatable">
                    {content && (
                      <Tab
                        rows={content}
                        columns={header}
                        pageSize={5}
                        rowsPerPageOptions={[10]}
                        style={{
                          backgroundColor: 'white',
                          fontSize: '1.4rem',
                        }}
                      />
                    )}
                  </div>
                </div>
                <Grid
                  className="text"
                  alignItems="flex-end"
                  container
                  justifyContent="flex-end"
                  direction="column"
                >
                  <Typography>
                    {'Price: '}
                    {order?.price}
                  </Typography>
                  <Typography>{'Ship: 30000'}</Typography>
                  <Divider style={{ width: '100%' }} />
                  <div style={{ display: 'flex' }}>
                    <Typography
                      style={{
                        fontWeight: 'bolder',
                      }}
                    >
                      {'Total amount order: '}
                      {order?.payPrice}
                    </Typography>
                  </div>
                </Grid>
              </div>
            </ContentBox.Body>
            <ContentBox.Footer isGoBack>
              <Link to="/order" style={{ textDecoration: 'none' }} />
            </ContentBox.Footer>
          </ContentBox.Container>
        </div>
      </div>
    </div>
  )
}

const Item = styled(TextField)({
  '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled': {
    height: '0.4rem',
    fontSize: '1.4rem',
    WebkitTextFillColor: '#717171',
    backgroundColor: '#f0f0f0',
  },
})

const Tab = styled(DataGrid)({
  '& .css-levciy-MuiTablePagination-displayedRows': {
    fontSize: '1.4rem',
  },
})

export default OrderComponent