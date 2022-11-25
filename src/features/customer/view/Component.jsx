import './style.scss'
import { Grid, TextField } from '@mui/material'
import ContentBox from '../../../components/atoms/ContentBox'
import Navbar from '../../../components/atoms/navbar/Navbar'
import Sidebar from '../../../components/atoms/sidebar/Sidebar'
import { styled } from '@material-ui/styles'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCustomer } from '../../../apis/customerApi'

const CustomerComponent = () => {
  const [customer, setCustomer] = useState()
  const { customerId } = useParams()
  useEffect(() => {
    const handleGetCustomer = async () => {
      const resp = await getCustomer(customerId)
      const data = resp?.data?.data
      setCustomer(data)
    }
    handleGetCustomer()
  }, [customerId])

  return (
    <div className="view">
      <Sidebar />
      <div className="viewContainer">
        <Navbar />
        <div className="body">
          <ContentBox.Container className="viewForm">
            <ContentBox.Title title="View customer information" />
            <ContentBox.Body>
              <div style={{ width: '100%', padding: '0.4rem' }}>
                <Grid container spacing={0} alignItems="flex-start" alignContent="space-around">
                  <div className="form">
                    <label className="title" for="customerCode">
                      Customer ID
                    </label>
                    <Item disabled className="textField" id="customerCode" value={customer?.id} />
                  </div>
                  <div className="form">
                    <label className="title" for="fullname">
                      Customer name
                    </label>
                    <Item disabled className="textField" id="fullname" value={customer?.fullname} />
                  </div>
                  <div className="form">
                    <label className="title" for="username">
                      Username
                    </label>
                    <Item disabled className="textField" id="username" value={customer?.username} />
                  </div>
                  <div className="form">
                    <label className="title" for="customerGroup">
                      Customer group
                    </label>
                    <Item
                      disabled
                      className="textField"
                      id="customerGroup"
                      value={customer?.rank?.name}
                    />
                  </div>
                  <div className="form">
                    <label className="title" for="email">
                      Email
                    </label>
                    <Item disabled className="textField" id="email" value={customer?.email} />
                  </div>
                  <div className="form">
                    <label className="title" for="phone">
                      Phone
                    </label>
                    <Item disabled className="textField" id="phone" value={customer?.phone} />
                  </div>
                  <div className="form">
                    <label className="title" for="gender">
                      Gender
                    </label>
                    <Item disabled className="textField" id="role" value={customer?.gender} />
                  </div>
                  <div className="form">
                    <label className="title" for="dob">
                      Date of birth
                    </label>
                    <Item disabled className="textField" id="dob" value={customer?.dob} />
                  </div>
                  <div className="form">
                    <label className="title" for="status">
                      Status
                    </label>
                    <Item disabled className="textField" id="status" value={customer?.status} />
                  </div>
                </Grid>
              </div>
            </ContentBox.Body>
            <ContentBox.Footer isGoBack>
              <Link to="/customer" style={{ textDecoration: 'none' }} />
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

export default CustomerComponent
