import { Alert, Card, CardContent, Typography } from '@mui/material'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import React from 'react'

export default function Cards(props) {
  const {data} = props
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
            {data.place}
        </Typography>
        <Typography variant="body1">
            <CurrencyRupeeIcon />{data.price}
        </Typography>
        {
          data.active?
          <Alert severity={"success"}>Active</Alert>
          :
          <Alert severity={"error"}>Inactive</Alert>
        }
      </CardContent>
    </Card>
  )
}
