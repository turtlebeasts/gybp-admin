import { Card, CardContent, Grid, Modal, TextField } from '@mui/material'
import Cards from "./Components/Card/Cards"
import React from 'react'

const data = [
  {
    place: 'Mizoram',
    price: '250',
    active: true
  },
  {
    place: 'Shillong',
    price: '150',
    active: false
  },
  {
    place: 'Nagaland',
    price: '300',
    active: false
  },
]

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  boxShadow: 24,
};

export default function Package() {
  return (
    <Grid container spacing={2} sx={{ mt: 5, p: 5 }}>
      <Grid item xs={12}>
        <Modal
        open={true}
        sx={style}
        >
          <Card>
            <CardContent sx={{display: 'flex', flexDirection: 'column', p: 4}}>
              <TextField variant='outlined' label="Place name" sx={{mb: 2}}/>
              <TextField variant='outlined' label="Price" sx={{mb: 2}}/>
              <TextField variant='outlined' label="Place name" sx={{mb: 2}}/>
            </CardContent>
          </Card>
        </Modal>
      </Grid>
      {
        data.length ?
          data.map(item => <Grid item xs={6} sm={3} key={item.place}><Cards data={item} /></Grid>)
          : "No packages..."
      }
    </Grid>
  )
}
