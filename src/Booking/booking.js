import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';

const Booking = (): any => {
 
    return (
      <div>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <form>
      <Stack m={2} spacing={3}>
        <TextField label="Name" required/>
        <TextField label="Email Address" required/>
        <TextField select label="Country" required >
          <MenuItem value="india">India</MenuItem>
          <MenuItem value="africa">Africa</MenuItem>
          <MenuItem value="europe">Europe</MenuItem>
        </TextField>
        <TextField
          label="No. of travellers"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
        <Button variant="contained" type="submit">
          submit
        </Button>
      </Stack>
    </form>
      </CardContent>
    </Card>
      </div>
    )
}
export default Booking;