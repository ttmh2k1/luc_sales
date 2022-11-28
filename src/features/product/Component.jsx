import './productStyle.scss'
import Navbar from '../../components/atoms/navbar/Navbar'
import Sidebar from '../../components/atoms/sidebar/Sidebar'
import { DataGrid } from '@mui/x-data-grid'
import { FaEye, FaLock, FaPen, FaPlusCircle, FaTrashAlt } from 'react-icons/fa'
import ContentBox from '../../components/atoms/ContentBox'
import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { getListProduct } from '../../apis/productApi'
import { Button } from '@mui/material'

const ProductComponent = () => {
  const [listProduct, setListProduct] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const handleListProduct = async () => {
      const resp = await getListProduct()
      const list = resp?.data?.data
      setListProduct(list)
    }
    handleListProduct()
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
      headerName: 'Product ID',
      width: 100,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'name',
      headerName: 'Product name',
      width: 450,
      align: 'left',
      headerAlign: 'center',
    },
    {
      field: 'groupName',
      headerName: 'Group name',
      width: 200,
      align: 'left',
      headerAlign: 'center',
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      align: 'center',
      headerAlign: 'center',
    },
  ]

  const content = listProduct.map((item, index) => {
    return {
      stt: index + 1,
      id: item?.id,
      name: item?.name,
      groupName: item?.category.name,
      status: item?.status,
    }
  })

  const action = [
    {
      headerName: 'Action',
      width: 200,
      align: 'center',
      headerAlign: 'center',
      renderCell: (props) => {
        return (
          <div className="cellAction">
            <Link to={`/product/view/${props.id}`} style={{ textDecoration: 'none' }}>
              <div className="viewButton">
                <FaEye />
              </div>
            </Link>
            <Link to={`/product/update/${props.id}`} style={{ textDecoration: 'none' }}>
              <div className="updateButton">
                <FaPen />
              </div>
            </Link>
            {/* <div className="disableButton">
              <FaLock />
            </div>
            <div className="deleteButton">
              <FaTrashAlt />
            </div> */}
          </div>
        )
      },
    },
  ]

  return (
    <div className="product">
      <Sidebar />
      <div className="productContainer">
        <Navbar />
        <div className="body">
          <div className="header">
            <ContentBox.Title title="List product" />
            <Button
              className="createButton"
              startIcon={<FaPlusCircle />}
              onClick={() => navigate('/product/create')}
            >
              New
            </Button>
          </div>
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

export default ProductComponent
