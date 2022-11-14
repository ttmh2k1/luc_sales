import './style.scss'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import ContentBox from '../../../components/atoms/ContentBox'
import Navbar from '../../../components/atoms/navbar/Navbar'
import Sidebar from '../../../components/atoms/sidebar/Sidebar'
import { styled } from '@material-ui/styles'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProductGroup, updateProductGroup } from '../../../apis/productGroupApi'
import { FaSave } from 'react-icons/fa'
import { toast } from 'react-toastify'

const ProductGroupComponent = () => {
  const [productGroup, setProductGroup] = useState()
  const params = useParams()
  const productGroupId = params.productGroupId
  const navigate = useNavigate()

  useEffect(() => {
    const handleGetProductGroup = async () => {
      const resp = await getProductGroup(productGroupId)
      const data = resp?.data?.data
      setProductGroup(data)
    }
    handleGetProductGroup()
  }, [productGroupId])

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
    const status = productGroup?.status
    try {
      await updateProductGroup(productGroupId, status)
      toast.success('Update successful!', style)
      setTimeout(() => {
        navigate('/productGroup')
      }, 2000)
    } catch (error) {
      toast.error('Update failed!', style)
    }
  }

  return (
    <div className="view">
      <Sidebar />
      <div className="viewContainer">
        <Navbar />
        <div className="body">
          <ContentBox.Container className="viewForm">
            <ContentBox.Title title="View product group information" />
            <ContentBox.Body>
              <div style={{ width: '100%', padding: '0.4rem' }}>
                {productGroup?.idParent === null && productGroup?.child && (
                  <div className="level0">
                    <label className="levelHeader">{productGroup?.name}</label>
                    <Grid container spacing={0} alignItems="flex-start" alignContent="space-around">
                      <div className="level">
                        <div className="form">
                          <label className="title" for="productGroupCode">
                            Product group code
                          </label>
                          <ItemTextField
                            disabled
                            className="textField"
                            id="productGroup"
                            value={productGroup?.id}
                          />
                        </div>
                        <div className="form">
                          <label className="title" for="name">
                            Product group name
                          </label>
                          <ItemTextField
                            disabled
                            className="textField"
                            id="name"
                            value={productGroup?.name}
                          />
                        </div>
                        <div className="form">
                          <label className="title" for="status">
                            Status
                          </label>
                          <ItemSelect
                            className="select"
                            id="status"
                            value={productGroup?.status}
                            onChange={(e) =>
                              setProductGroup((state) => ({ ...state, status: e.target.value }))
                            }
                          >
                            {arrayStatus?.map((item, index) => (
                              <MenuItem key={index} value={item?.value}>
                                {item?.name}
                              </MenuItem>
                            ))}
                          </ItemSelect>
                        </div>
                      </div>
                    </Grid>
                  </div>
                )}
                {productGroup?.child &&
                  productGroup?.child.map((item) => (
                    <div>
                      <Accordion className="group">
                        <AccordionSummary className="headerGroup">
                          <Typography className="titleGroup">{item?.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <Grid
                              container
                              spacing={0}
                              alignItems="flex-start"
                              alignContent="space-around"
                            >
                              <div className="level">
                                <div className="form">
                                  <label className="title" for="productGroupCode">
                                    Product group code
                                  </label>
                                  <ItemTextField
                                    disabled
                                    className="textField"
                                    id="productGroup"
                                    value={item?.id}
                                  />
                                </div>
                                <div className="form">
                                  <label className="title" for="name">
                                    Product group name
                                  </label>
                                  <ItemTextField
                                    disabled
                                    className="textField"
                                    id="name"
                                    value={item?.name}
                                  />
                                </div>
                                <div className="form">
                                  <label className="title" for="name">
                                    Status
                                  </label>
                                  <ItemTextField
                                    disabled
                                    className="textField"
                                    id="name"
                                    value={productGroup?.status}
                                  />
                                </div>
                              </div>
                            </Grid>
                          </Typography>
                        </AccordionDetails>
                        {item?.child &&
                          item?.child.map((item1) => (
                            <Accordion className="group">
                              <AccordionSummary className="headerGroup">
                                <Typography className="titleGroup">{item1?.name}</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  <Grid
                                    container
                                    spacing={0}
                                    alignItems="flex-start"
                                    alignContent="space-around"
                                  >
                                    <div className="level">
                                      <div className="form">
                                        <label className="title" for="productGroupCode">
                                          Product group code
                                        </label>
                                        <ItemTextField
                                          disabled
                                          className="textField"
                                          id="productGroup"
                                          value={item1?.id}
                                        />
                                      </div>
                                      <div className="form">
                                        <label className="title" for="name">
                                          Product group name
                                        </label>
                                        <ItemTextField
                                          disabled
                                          className="textField"
                                          id="name"
                                          value={item1?.name}
                                        />
                                      </div>
                                      <div className="form">
                                        <label className="title" for="name">
                                          Status
                                        </label>
                                        <ItemTextField
                                          disabled
                                          className="textField"
                                          id="name"
                                          value={productGroup?.status}
                                        />
                                      </div>
                                    </div>
                                  </Grid>
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
                          ))}
                      </Accordion>
                    </div>
                  ))}
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
const ItemTextField = styled(TextField)({
  '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled': {
    height: '0.4rem',
    fontSize: '1.4rem',
    WebkitTextFillColor: '#717171',
    backgroundColor: '#f0f0f0',
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
  { name: 'Active', value: 'ACTIVE ' },
  { name: 'Banned', value: 'BANNED' },
]

export default ProductGroupComponent
