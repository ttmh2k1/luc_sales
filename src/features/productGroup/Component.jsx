import './productGroupStyle.scss'
import Navbar from '../../components/atoms/navbar/Navbar'
import Sidebar from '../../components/atoms/sidebar/Sidebar'
import { useEffect, useState } from 'react'
import { getListProductGroup } from '../../apis/productGroupApi'
import { DataGrid } from '@mui/x-data-grid'
import styled from 'styled-components'
import ContentBox from '../../components/atoms/ContentBox'
import { Link } from 'react-router-dom'
import { FaEye, FaLock, FaPen, FaTrashAlt } from 'react-icons/fa'

const ProductGroupComponent = () => {
  const [listProductGroup, setListProductGroup] = useState([])

  useEffect(() => {
    const handleListProductGroup = async () => {
      const resp = await getListProductGroup()
      const list = resp?.data?.data
      setListProductGroup(list)
    }
    handleListProductGroup()
  }, [])

  const header = [
    {
      field: 'stt',
      headerName: 'No',
      width: 100,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'id',
      headerName: 'Product group ID',
      width: 300,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'name',
      headerName: 'Product group name',
      width: 500,
      align: 'left',
      headerAlign: 'center',
    },
  ]

  const content = listProductGroup.map((item, index) => {
    return {
      stt: index + 1,
      id: item?.id,
      name: item?.name,
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
            <Link to={`/productGroup/view/${props.id}`} style={{ textDecoration: 'none' }}>
              <div className="viewButton">
                <FaEye />
              </div>
            </Link>
            <Link to={`/productGroup/update/${props.id}`} style={{ textDecoration: 'none' }}>
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
    <div className="productGroup">
      <Sidebar />
      <div className="productGroupContainer">
        <Navbar />
        <div className="body">
          <ContentBox.Title title="List product group" />
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

export default ProductGroupComponent
