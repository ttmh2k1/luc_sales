import './style.scss'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material'
import ContentBox from '../../../components/atoms/ContentBox'
import Navbar from '../../../components/atoms/navbar/Navbar'
import Sidebar from '../../../components/atoms/sidebar/Sidebar'
import { styled } from '@material-ui/styles'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProduct, updateProduct } from '../../../apis/productApi'
import { FaSave } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { Image } from 'antd'

const ProductComponent = () => {
  const [product, setProduct] = useState()
  const params = useParams()
  const productId = params.productId
  const navigate = useNavigate()

  useEffect(() => {
    const handleGetProduct = async () => {
      const resp = await getProduct(productId)
      const data = resp?.data?.data
      setProduct(data)
    }
    handleGetProduct()
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
    const info = {
      name: product?.name,
      description: product?.description,
      idCategory: product?.category?.id,
      status: product?.status,
    }
    var transform = new FormData()
    const json = JSON.stringify(info)
    const blob = new Blob([json], {
      type: 'application/json',
    })

    transform.append('info', blob)
    try {
      await updateProduct(productId, transform)
      toast.success('Update successful!', style)
      setTimeout(() => {
        navigate('/product')
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
            <ContentBox.Title title="Update product information" />
            <ContentBox.Body>
              <div style={{ width: '100%', padding: '0.4rem' }}>
                <div className="level0">
                  <label className="levelHeader">{product?.name}</label>
                  <Grid
                    className="infor"
                    container
                    spacing={0}
                    alignItems="flex-start"
                    alignContent="space-around"
                  >
                    <div className="form">
                      <label className="title" for="productCode">
                        Product ID
                      </label>
                      <Item disabled className="textField" id="productCode" value={product?.id} />
                    </div>
                    <div className="form" style={{ width: '64%' }}>
                      <label className="title" for="name">
                        Product name
                      </label>
                      <Item
                        className="textField"
                        id="productName"
                        value={product?.name}
                        onChange={(e) =>
                          setProduct((state) => {
                            return { ...state, name: e.target.value }
                          })
                        }
                      />
                    </div>
                    <div className="form">
                      <label className="title" for="product parents">
                        Product group
                      </label>
                      <Item
                        disabled
                        className="textField"
                        id="product"
                        value={product?.category?.parents[0]?.name}
                      />
                    </div>
                    <div className="form">
                      <Item
                        disabled
                        className="textField"
                        id="productGroup"
                        style={{ marginTop: '2rem' }}
                        value={product?.category?.parents[1]?.name}
                      />
                    </div>
                    <div className="form">
                      <label className="title" for="product type">
                        Product type
                      </label>
                      <Item
                        disabled
                        className="textField"
                        id="product"
                        value={product?.category?.name}
                      />
                    </div>
                    <div className="form">
                      <label className="title" for="status">
                        Status
                      </label>
                      <ItemSelect
                        className="select"
                        id="status"
                        value={product?.status}
                        onChange={(e) =>
                          setProduct((state) => ({ ...state, status: e.target.value }))
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
                <div className="descriptionForm">
                  <label className="descriptionTitle" for="name">
                    Description
                  </label>
                  <TextareaAutosize
                    className="description"
                    aria-label="maximum height"
                    id="description"
                    value={product?.description}
                    onChange={(e) =>
                      setProduct((state) => {
                        return { ...state, description: e.target.value }
                      })
                    }
                  />
                </div>
                {product?.tierVariations &&
                  product?.tierVariations.map((item) => (
                    <div>
                      <Accordion className="groupParent">
                        <AccordionSummary className="headerGroup">
                          <Typography className="titleGroup">{item}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {product?.variations &&
                            product?.variations?.map((item1) => (
                              <Accordion className="group">
                                <AccordionSummary className="headerGroup">
                                  <Typography className="titleGroup">
                                    {item1?.variationName}
                                  </Typography>
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
                                          <label className="title" for="variationID">
                                            Variation ID
                                          </label>
                                          <Item
                                            disabled
                                            className="textField"
                                            id="variationID"
                                            value={item1?.id}
                                          />
                                        </div>
                                        <div className="form">
                                          <label className="title" for="variationName">
                                            Variation name
                                          </label>
                                          <Item
                                            disabled
                                            className="textField"
                                            id="variationName"
                                            value={item1?.variationName}
                                          />
                                        </div>
                                        <div className="form">
                                          <label className="title" for="price">
                                            Price
                                          </label>
                                          <Item
                                            disabled
                                            className="textField"
                                            id="price"
                                            value={item1?.price}
                                          />
                                        </div>
                                        <div className="form">
                                          <label className="title" for="discount">
                                            Discount
                                          </label>
                                          <Item
                                            disabled
                                            className="textField"
                                            id="discount"
                                            value={item1?.discount}
                                          />
                                        </div>
                                        <div className="form">
                                          <label className="title" for="availableQuantity">
                                            Available quantity
                                          </label>
                                          <Item
                                            disabled
                                            className="textField"
                                            id="availableQuantity"
                                            value={item1?.availableQuantity}
                                          />
                                        </div>
                                        <div className="form">
                                          <label className="title" for="status">
                                            Status
                                          </label>
                                          <Item
                                            disabled
                                            className="textField"
                                            id="status"
                                            value={item1?.status}
                                          />
                                        </div>
                                      </div>
                                    </Grid>
                                  </Typography>
                                </AccordionDetails>
                              </Accordion>
                            ))}
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  ))}

                {product?.images?.length > 0 && (
                  <Accordion className="groupParent">
                    <AccordionSummary className="headerGroup">
                      <Typography className="titleGroup">Images</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                          }}
                        >
                          <Grid
                            xs={6}
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              flexWrap: 'wrap',
                            }}
                          >
                            {product?.images?.map((item) => (
                              <Image
                                preview={false}
                                src={item?.url}
                                style={{
                                  width: '20rem',
                                  height: '20rem',
                                  border: '0.08rem solid #955b36',
                                  margin: '1.2rem',
                                }}
                              />
                            ))}
                          </Grid>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                )}
              </div>
            </ContentBox.Body>
            <ContentBox.Footer isGoBack>
              <Button className="saveButton" startIcon={<FaSave />} onClick={(e) => handleSave()}>
                Save
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
    backgroundColor: 'white',
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
  { name: 'Enabled', value: 'ENABLED ' },
  { name: 'Disabled', value: 'DISABLED' },
]

export default ProductComponent
