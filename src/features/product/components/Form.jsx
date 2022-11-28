import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import styled from 'styled-components'

const FormProduct = () => {
  const [variation, setVariation] = useState()
  return (
    <>
      <AccordionDetails>
        <Accordion className="group">
          <AccordionSummary className="headerGroup">
            <Typography className="titleGroup">{variation?.name || 'Variation'}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Grid container spacing={0} alignItems="flex-start" alignContent="space-around">
                <div className="level">
                  <div className="form">
                    <label className="title" for="variationName">
                      Variation name
                    </label>
                    <input
                      className="textField variantName"
                      id="variationName"
                      value={variation?.name}
                      onChange={(e) =>
                        setVariation((state) => {
                          return { ...state, name: e.target.value }
                        })
                      }
                    />
                  </div>
                  <div className="form">
                    <label className="title" for="price">
                      Price
                    </label>
                    <input className="textField variantPrice" id="price" />
                  </div>
                  <div className="form">
                    <label className="title" for="discount">
                      Discount
                    </label>
                    <input className="textField variantDiscount" id="discount" />
                  </div>
                </div>
              </Grid>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </AccordionDetails>
    </>
  )
}

const Item = styled(TextField)({
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

export default FormProduct
