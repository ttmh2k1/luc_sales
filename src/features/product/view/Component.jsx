import './style.scss'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import ContentBox from '../../../components/atoms/ContentBox'
import Navbar from '../../../components/atoms/navbar/Navbar'
import Sidebar from '../../../components/atoms/sidebar/Sidebar'
import { styled } from '@material-ui/styles'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProduct } from '../../../apis/productApi'
import { Image } from 'antd'

const ProductComponent = () => {
  const [product, setProduct] = useState()
  const { productId } = useParams()
  useEffect(() => {
    const handleGetProduct = async () => {
      const resp = await getProduct(productId)
      const data = resp?.data?.data
      setProduct(data)
    }
    handleGetProduct()
  }, [productId])

  return (
    <div className="view">
      <Sidebar />
      <div className="viewContainer">
        <Navbar />
        <div className="body">
          <ContentBox.Container className="viewForm">
            <ContentBox.Title title="View product information" />
            <ContentBox.Body>
              <div style={{ width: '100%', padding: '0.4rem' }}>
                {product?.category?.idParent === null && product?.variations && (
                  <div className="level0">
                    <label className="levelHeader">{product?.name}</label>
                    <Grid container spacing={0} alignItems="flex-start" alignContent="space-around">
                      <div className="form">
                        <label className="title" for="productCode">
                          Product ID
                        </label>
                        <Item disabled className="textField" id="productCode" value={product?.id} />
                      </div>
                      <div className="form">
                        <label className="title" for="name">
                          Product name
                        </label>
                        <Item
                          disabled
                          className="textField"
                          id="productName"
                          value={product?.name}
                        />
                      </div>
                      <div className="form">
                        <label className="title" for="product">
                          Product group
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
                        <Item disabled className="textField" id="status" value={product?.status} />
                      </div>
                    </Grid>
                  </div>
                )}
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
              <Link to="/product" style={{ textDecoration: 'none' }} />
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

export default ProductComponent
