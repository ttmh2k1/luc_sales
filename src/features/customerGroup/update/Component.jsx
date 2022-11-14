import './style.scss'
import { Grid, TextField } from '@mui/material'
import ContentBox from '../../../components/atoms/ContentBox'
import Navbar from '../../../components/atoms/navbar/Navbar'
import Sidebar from '../../../components/atoms/sidebar/Sidebar'
import { styled } from '@material-ui/styles'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCustomerGroup, updateCustomerGroup } from '../../../apis/customerGroupApi'
import { FaSave } from 'react-icons/fa'
import { Button } from '@material-ui/core'
import { toast } from 'react-toastify'

const CustomerGroupComponent = () => {
  const [customerGroup, setCustomerGroup] = useState()
  const params = useParams()
  const customerGroupId = params.customerGroupId
  const navigate = useNavigate()
  useEffect(() => {
    const handleGetCustomerGroup = async () => {
      const resp = await getCustomerGroup(customerGroupId)
      const data = resp?.data?.data
      setCustomerGroup(data)
    }
    handleGetCustomerGroup()
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

  const handleSave = async () => {
    const discountRate = customerGroup?.discountRate
    try {
      await updateCustomerGroup(customerGroupId, discountRate)
      toast.success('Update successful!', style)
      setTimeout(() => {
        navigate('/customerGroup')
      }, 2000)
    } catch (error) {
      toast.error('Update failed!', style)
    }
  }

  return (
    <div className="update">
      <Sidebar />
      <div className="updateContainer">
        <Navbar />
        <div className="body">
          <ContentBox.Container className="updateForm">
            <ContentBox.Title title="Update customer group information" />
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
                      isRequired
                      className="textField"
                      id="customerGroupDiscount"
                      value={customerGroup?.discountRate}
                      onChange={(e) =>
                        setCustomerGroup((state) => ({ ...state, discountRate: e.target.value }))
                      }
                    />
                  </div>
                </Grid>
              </div>
            </ContentBox.Body>
            <ContentBox.Footer isGoBack>
              <Button className="saveButton" startIcon={<FaSave />} onClick={(e) => handleSave()}>
                Lưu
              </Button>
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
  '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
    height: '0.4rem',
    fontSize: '1.4rem',
  },
})

export default CustomerGroupComponent
