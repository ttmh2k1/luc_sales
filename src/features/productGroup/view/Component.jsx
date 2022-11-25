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
import { getProductGroup } from '../../../apis/productGroupApi'

const ProductGroupComponent = () => {
  const [productGroup, setProductGroup] = useState()
  const { productGroupId } = useParams()
  useEffect(() => {
    const handleGetProductGroup = async () => {
      const resp = await getProductGroup(productGroupId)
      const data = resp?.data?.data
      setProductGroup(data)
    }
    handleGetProductGroup()
  }, [productGroupId])

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
                                        <label className="title" for="productGroupName">
                                          Product group name
                                        </label>
                                        <ItemTextField
                                          disabled
                                          className="textField"
                                          id="productGroupName"
                                          value={item1?.name}
                                        />
                                      </div>
                                      <div className="form">
                                        <label className="title" for="status">
                                          Status
                                        </label>
                                        <ItemTextField
                                          disabled
                                          className="textField"
                                          id="status"
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
              <Link to="/productGroup" style={{ textDecoration: 'none' }} />
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

export default ProductGroupComponent
