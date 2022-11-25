import './style.scss'
import { Button, Grid, MenuItem, Select, TextField } from '@mui/material'
import ContentBox from '../../../components/atoms/ContentBox'
import Navbar from '../../../components/atoms/navbar/Navbar'
import Sidebar from '../../../components/atoms/sidebar/Sidebar'
import { styled } from '@material-ui/styles'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCustomer } from '../../../apis/customerApi'
import { toast } from 'react-toastify'
import { updateCustomer } from '../../../apis/customerApi'
import { FaSave } from 'react-icons/fa'

const CustomerComponent = () => {
  const [customer, setCustomer] = useState()
  const params = useParams()
  const customerId = params.customerId
  const navigate = useNavigate()
  useEffect(() => {
    const handleGetCustomer = async () => {
      const resp = await getCustomer(customerId)
      const data = resp?.data?.data
      setCustomer(data)
    }
    handleGetCustomer()
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
    const status = customer?.status
    try {
      await updateCustomer(customerId, status)
      toast.success('Update successful!', style)
      setTimeout(() => {
        navigate('/customer')
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
            <ContentBox.Title title="Update customer information" />
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

                    <ItemSelect
                      className="select"
                      id="status"
                      value={customer?.status}
                      onChange={(e) =>
                        setCustomer((state) => ({ ...state, status: e.target.value }))
                      }
                    >
                      {arrayStatus?.map((item, index) => (
                        <MenuItem key={index} value={item?.value}>
                          {item?.name}
                        </MenuItem>
                      ))}
                    </ItemSelect>
                  </div>
                </Grid>
              </div>
            </ContentBox.Body>
            <ContentBox.Footer isGoBack>
              <Button className="saveButton" startIcon={<FaSave />} onClick={(e) => handleSave()}>
                Save
              </Button>
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
  '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
    height: '0.4rem',
    fontSize: '1.4rem',
  },
})

const ItemSelect = styled(Select)({
  '& .MuiSelect-outlined': {
    padding: '0.8rem',
    fontSize: '1.4rem',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
  },
})

const arrayStatus = [
  { name: 'Active', value: 'ACTIVE' },
  { name: 'Banned', value: 'BANNED' },
]

export default CustomerComponent
