import './logsStyle.scss'
import Navbar from '../../components/atoms/navbar/Navbar'
import Sidebar from '../../components/atoms/sidebar/Sidebar'
import ContentBox from '../../components/atoms/ContentBox'
import { getLogs } from '../../apis/logsApi'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid'

const LogSystemComponent = () => {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    const handleGetLogs = async () => {
      const resp = await getLogs()
      const list = resp?.data?.data
      setLogs(list)
      console.log('🚀 ~ file: Component.jsx ~ line 20 ~ handleGetLogs ~ list', list)
    }
    handleGetLogs()
  }, [])

  const logsHeader = [
    {
      field: 'stt',
      headerName: 'No',
      width: 100,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'id',
      headerName: 'User ID',
      width: 150,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 250,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'logType',
      headerName: 'Logs type',
      width: 200,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'content',
      headerName: 'Content',
      width: 500,
      align: 'left',
      headerAlign: 'center',
    },
  ]

  const logsContent = logs.map((item, index) => {
    return {
      stt: index + 1,
      id: item.id,
      date: item.date,
      logType: item.logType,
      content: item.content,
    }
  })

  return (
    <div className="logs">
      <Sidebar />
      <div className="logsContainer">
        <Navbar />
        <div className="body">
          <ContentBox.Title title="Log system" />
          <div className="template">
            <div className="datatable">
              <Tab
                rows={logsContent}
                columns={logsHeader}
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

export default LogSystemComponent
