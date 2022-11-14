import './customerGroupStyle.scss'
import Navbar from '../../components/atoms/navbar/Navbar'
import Sidebar from '../../components/atoms/sidebar/Sidebar'
import { DataGrid } from '@mui/x-data-grid'
import ContentBox from '../../components/atoms/ContentBox'
import { FaEye, FaPen } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getListCustomerGroup } from '../../apis/customerGroupApi'
import styled from 'styled-components'

const CustomerGroupComponent = () => {
  const [listCustomerGroup, setListCustomerGroup] = useState([])

  useEffect(() => {
    const handleListCustomerGroup = async () => {
      const resp = await getListCustomerGroup()
      const list = resp?.data?.data
      setListCustomerGroup(list)
    }
    handleListCustomerGroup()
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
      headerName: 'Customer group ID',
      width: 300,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'name',
      headerName: 'Customer group name',
      width: 350,
      align: 'left',
      headerAlign: 'center',
    },
    {
      field: 'discountRate',
      headerName: 'Customer group discount',
      width: 250,
      align: 'center',
      headerAlign: 'center',
    },
  ]

  const content = listCustomerGroup.map((item, index) => {
    return {
      stt: index + 1,
      id: item?.id,
      name: item?.name,
      discountRate: item?.discountRate * 100 + '%',
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
            <Link to={`/customerGroup/view/${props.id}`} style={{ textDecoration: 'none' }}>
              <div className="viewButton">
                <FaEye />
              </div>
            </Link>
            <Link to={`/customerGroup/update/${props.id}`} style={{ textDecoration: 'none' }}>
              <div className="updateButton">
                <FaPen />
              </div>
            </Link>
          </div>
        )
      },
    },
  ]

  return (
    <div className="customerGroup">
      <Sidebar />
      <div className="customerGroupContainer">
        <Navbar />
        <div className="body">
          <ContentBox.Title title="List customer group" />
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

export default CustomerGroupComponent
