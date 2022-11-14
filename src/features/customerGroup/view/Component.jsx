import './style.scss'
import { Grid, TextField } from '@mui/material'
import ContentBox from '../../../components/atoms/ContentBox'
import Navbar from '../../../components/atoms/navbar/Navbar'
import Sidebar from '../../../components/atoms/sidebar/Sidebar'
import { styled } from '@material-ui/styles'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCustomerGroup } from '../../../apis/customerGroupApi'

const CustomerGroupComponent = () => {
  const [customerGroup, setCustomerGroup] = useState()
  const { customerGroupId } = useParams()
  useEffect(() => {
    const handleGetCustomerGroup = async () => {
      const resp = await getCustomerGroup(customerGroupId)
      const data = resp?.data?.data
      setCustomerGroup(data)
    }
    handleGetCustomerGroup()
  }, [customerGroupId])

  return (
    <div className="view">
      <Sidebar />
      <div className="viewContainer">
        <Navbar />
        <div className="body">
          <ContentBox.Container className="viewForm">
            <ContentBox.Title title="View customer group information" />
            <ContentBox.Body>
              <div style={{ width: '100%', padding: '0.4rem' }}>
                <Grid container spacing={0} alignItems="flex-start" alignContent="space-around">
                  <div className="form">
                    <label className="title" for="customerGroupCode">
                      Customer group code
                    </label>
                    <Item
                      disabled
                      className="textField"
                      id="customerGroupCode"
                      value={customerGroup?.id}
                    />
                  </div>
                  <div className="form">
                    <label className="title" for="name">
                      Customer group name
                    </label>
                    <Item disabled className="textField" id="name" value={customerGroup?.name} />
                  </div>
                  <div className="form">
                    <label className="title" for="customerGroupDiscount">
                      Customer group discount
                    </label>
                    <Item
                      disabled
                      className="textField"
                      id="customerGroupDiscount"
                      value={customerGroup?.discountRate}
                    />
                  </div>
                </Grid>
              </div>
            </ContentBox.Body>
            <ContentBox.Footer isGoBack>
              <Link to="/customerGroup" style={{ textDecoration: 'none' }} />
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

export default CustomerGroupComponent
