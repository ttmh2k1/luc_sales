import './roleStyle.scss'
import Navbar from '../../components/atoms/navbar/Navbar'
import Sidebar from '../../components/atoms/sidebar/Sidebar'
import { useEffect, useState } from 'react'
import { getRoles } from '../../apis/roleApi'
import { DataGrid } from '@mui/x-data-grid'
import styled from 'styled-components'
import ContentBox from '../../components/atoms/ContentBox'

const RoleComponent = () => {
  const [roles, setRoles] = useState()

  useEffect(() => {
    const handleGetRole = async () => {
      const resp = await getRoles()
      const data = resp?.data?.data
      setRoles(data)
    }
    handleGetRole()
  }, [])

  const roleHeader = [
    {
      field: 'id',
      headerName: 'No',
      width: 100,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'name',
      headerName: 'Role name',
      width: 400,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'permissions',
      headerName: 'Permissions',
      width: 700,
      align: 'center',
      headerAlign: 'center',
    },
  ]

  const roleContent = [
    {
      id: 1,
      name: roles?.name,
      permissions: roles?.permissions,
    },
  ]

  return (
    <div className="role">
      <Sidebar />
      <div className="roleContainer">
        <Navbar />
        <div className="body">
          <ContentBox.Title title="Role list" />
          <div className="template">
            <div className="datatable">
              <Tab
                rows={roleContent}
                columns={roleHeader}
                pageSize={5}
                rowsPerPageOptions={[5]}
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

export default RoleComponent
