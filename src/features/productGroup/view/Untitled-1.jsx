import './style.scss'
import { Grid, TextField } from '@mui/material'
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
                    <label className="levelHeader">PRODUCT GROUP LEVEL 0</label>
                    <Grid container spacing={0} alignItems="flex-start" alignContent="space-around">
                      <div className="level">
                        <div className="form">
                          <label className="title" for="productGroupCode">
                            Product group code
                          </label>
                          <Item
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
                          <Item
                            disabled
                            className="textField"
                            id="name"
                            value={productGroup?.name}
                          />
                        </div>
                      </div>
                    </Grid>
                  </div>
                )}
                {productGroup?.child &&
                  productGroup?.child.map((item) => (
                    <div className="level1">
                      <label className="levelHeader">PRODUCT GROUP LEVEL 1</label>
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
                            <Item
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
                            <Item disabled className="textField" id="name" value={item?.name} />
                          </div>
                        </div>
                      </Grid>
                      {item?.child &&
                        item?.child.map((item1) => (
                          <div className="level2">
                            <label className="levelHeader">PRODUCT GROUP LEVEL 2</label>
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
                                  <Item
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
                                  <Item
                                    disabled
                                    className="textField"
                                    id="name"
                                    value={item1?.name}
                                  />
                                </div>
                              </div>
                            </Grid>
                          </div>
                        ))}
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
const Item = styled(TextField)({
  '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled': {
    height: '0.4rem',
    fontSize: '1.4rem',
    WebkitTextFillColor: '#717171',
    backgroundColor: '#f0f0f0',
  },
})

export default ProductGroupComponent
