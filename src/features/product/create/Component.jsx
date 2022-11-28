import './style.scss'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
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
import {
  getProduct,
  createProduct,
  getListProductParent,
  getListCategory,
} from '../../../apis/productApi'
import { FaPlusSquare, FaRegTimesCircle, FaUpload } from 'react-icons/fa'
import { toast } from 'react-toastify'
import FormProduct from '../components/Form'
const ProductComponent = () => {
  const [avatar, setAvatar] = useState()
  const [images, setImages] = useState([])
  const [imageList, setImageList] = useState([])
  const [product, setProduct] = useState()
  const [listParent, setListParent] = useState([])
  const [listCategory, setListCategory] = useState([])
  const [listType, setListType] = useState([])
  const [variation, setVariation] = useState()
  const [formVariation, setFormVariation] = useState([<FormProduct />])
  const [idParent, setIdParent] = useState()
  const [idCategory, setIdCategory] = useState()
  const [idType, setIdType] = useState()
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

  useEffect(() => {
    const handleGetParent = async () => {
      const resp = await getListProductParent()
      const list = resp?.data?.data
      setListParent(list)
    }
    handleGetParent()
  }, [])

  useEffect(() => {
    const handleGetCategory = async () => {
      const resp = await getListCategory(idParent)
      const list = resp?.data?.data
      setListCategory(list)
    }
    handleGetCategory()
  }, [idParent])

  useEffect(() => {
    const handleGetType = async () => {
      const resp = await getListCategory(idCategory)
      const list = resp?.data?.data
      setListType(list)
    }
    handleGetType()
  }, [idCategory])

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
    const variantName = document.getElementsByClassName('variantName')
    const variantPrice = document.getElementsByClassName('variantPrice')
    const variantDiscount = document.getElementsByClassName('variantDiscount')
    const variantLength = variantName.length
    const avatar = document.getElementById('avatar').files

    let variantions = []
    for (let i = 0; i < variantLength; i++) {
      const v = {
        variationName: variantName[i].value,
        tier: variation?.tier,
        price: Number(variantPrice[i].value),
        availableQuantity: 0,
        discount: Number(variantDiscount[i].value),
      }
      variantions.push(v)
    }
    const info = {
      name: product?.name,
      description: document.getElementById('description').value,
      variations: variantions,
      idCategory: idType,
    }
    var transform = new FormData()
    const json = JSON.stringify(info)
    const blob = new Blob([json], {
      type: 'application/json',
    })

    transform.append('info', blob)
    transform.append('avatar', avatar[0])
    for (let i = 0; i < imageList.length; i++) {
      transform.append('images', imageList[i])
    }
    try {
      await createProduct(transform)
      toast.success('Create product successful!', style)
      setTimeout(() => {
        navigate('/product')
      }, 2000)
    } catch (error) {
      toast.error('Create product failed!', style)
    }
  }

  const onSelectAvatar = (event) => {
    const avatarFile = event.target.files[0]
    avatarFile.preview = URL.createObjectURL(avatarFile)
    setAvatar(avatarFile)
  }

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  }, [avatar])

  const onSelectImages = (event) => {
    const imageFile = event.target.files
    const selectedFile = Array.from(imageFile)
    const imageArray = selectedFile.map((file) => {
      return URL.createObjectURL(file)
    })
    setImages((previousImages) => previousImages.concat(imageArray))
    setImageList((old) => {
      return [...old, ...event.target.files]
    })
  }

  return (
    <div className="create">
      <Sidebar />
      <div className="createContainer">
        <Navbar />
        <div className="body">
          <ContentBox.Container className="createForm">
            <ContentBox.Title title="Create new product" />
            <ContentBox.Body>
              <div style={{ width: '100%', padding: '0.4rem' }}>
                <div className="createProduct">
                  <label className="productInfo">{product?.name}</label>
                  <Grid
                    className="infor"
                    container
                    spacing={0}
                    alignItems="flex-start"
                    alignContent="space-around"
                  >
                    <div className="form">
                      <label className="title" for="name">
                        Product name
                      </label>
                      <input
                        isRequired
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
                      <select
                        className="select"
                        id="productParent"
                        onChange={(e) => {
                          setIdParent(Number(e.target.value))
                        }}
                      >
                        {listParent.map((item) => (
                          <option value={item.id} key={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form">
                      <select
                        className="select"
                        id="productGroup"
                        style={{ marginTop: '2rem' }}
                        onChange={(e) => {
                          setIdCategory(Number(e.target.value))
                        }}
                      >
                        {listCategory?.child?.map((item) => (
                          <option value={item.id} key={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form">
                      <label className="title" for="product type">
                        Product type
                      </label>
                      <select
                        className="select"
                        id="productType"
                        onChange={(e) => {
                          setIdType(Number(e.target.value))
                        }}
                      >
                        {listType?.child?.map((item) => (
                          <option value={item.id} key={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </select>
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
                  />
                </div>

                <div>
                  <Accordion className="groupParent">
                    <AccordionSummary className="headerParent">
                      <Typography className="titleParent">
                        {variation?.tier || 'Attribute'}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Item
                        className="textFieldAttribute"
                        id="attribute"
                        placeholder="Attribute"
                        value={variation?.tier}
                        onChange={(e) =>
                          setVariation((state) => {
                            return { ...state, tier: e.target.value }
                          })
                        }
                      />
                      {formVariation.map((item) => {
                        return item
                      })}
                      <button
                        className="newVariation"
                        onClick={() => {
                          setFormVariation((old) => {
                            return [...old, <FormProduct />]
                          })
                        }}
                      >
                        <FaPlusSquare style={{ marginRight: '0.08rem' }} />
                        New variation
                      </button>
                    </AccordionDetails>
                  </Accordion>
                </div>

                <div className="avatar">
                  <label className="titleAvatar">Avatar</label>
                  <label className="avatarButton">
                    <FaUpload style={{ marginRight: '0.8rem' }} />
                    Add avatar
                    <input
                      type="file"
                      name="images"
                      id="avatar"
                      onChange={onSelectAvatar}
                      accept="image/png, image/jpeg, image/jpg, image/webp"
                    />
                  </label>
                  {avatar && (
                    <div className="imageAvatar">
                      <img src={avatar.preview} height="200rem" style={{ margin: '0.06rem' }} />
                    </div>
                  )}
                </div>

                <div className="imagesGroup">
                  <label className="titleImage">Images</label>
                  <label className="imageButton">
                    <FaUpload style={{ marginRight: '0.8rem' }} />
                    Add images
                    <input
                      type="file"
                      name="images"
                      multiple
                      id="images"
                      onChange={onSelectImages}
                      accept="image/png, image/jpeg, image/jpg, image/webp"
                    />
                  </label>

                  {images.length > 0 && images.length > 10 ? (
                    <p className="note">
                      You can't upload more than 10 images! <br />
                      <span>
                        Please delete <b style={{ color: 'red' }}> {images.length - 10} </b> of them
                      </span>
                    </p>
                  ) : (
                    <>
                      {images.length > 0 && <p className="note">Upload {images.length} images</p>}
                    </>
                  )}
                  <div className="images">
                    {images &&
                      images.map((img, index) => {
                        return (
                          <div key={img} className="image">
                            <img src={img} className="img" />
                            <button
                              className="deleteButton"
                              onClick={() => setImages(images.filter((e) => e !== img))}
                            >
                              <FaRegTimesCircle />
                            </button>
                          </div>
                        )
                      })}
                  </div>
                </div>
              </div>
            </ContentBox.Body>
            <ContentBox.Footer isGoBack>
              <Button
                className="createButton"
                startIcon={<FaPlusSquare />}
                onClick={(e) => handleSave()}
              >
                Create
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

export default ProductComponent
