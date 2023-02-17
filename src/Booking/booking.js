import React, { useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { InputAdornment, MenuItem, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Booking = (): any => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            country: "",
            numberOfTraveller: "",
            amount: ""
        },
        validationSchema: yup.object().shape({
            name: yup.string().required("Please enter name"),
            email: yup.string()
                .email("Invalid email address")
                .required("Please enter email"),
            country: yup.string()
                .required("Please enter country"),
            numberOfTraveller: yup.string()
                .required("Please enter Number of Traveller")
        }),
        onSubmit: (values) => {
            console.log("enter the values", values)
        },
    });
    useEffect(() => {
        var val = 0;
        if (formik.values.numberOfTraveller == 'india') {
            val = formik.values.numberOfTraveller * 100;
        }
        else if (formik.values.numberOfTraveller == 'africa') {
            val = formik.values.numberOfTraveller * 200;
        }
        else {
            val = formik.values.numberOfTraveller * 300;
        }
        formik.setFieldValue("amount", val);
    }, [formik.values.numberOfTraveller]);
    console.log(formik)
    return (
        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <form onSubmit={formik.handleSubmit}>
                        <Stack m={2} spacing={3}>
                            <TextField label="Name"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name} />
                            <TextField label="Email Address"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email} />
                            <TextField select label="Country"
                                name="country"
                                value={formik.values.country}
                                onChange={formik.handleChange}
                                error={formik.touched.country && Boolean(formik.errors.country)}
                                helperText={formik.touched.country && formik.errors.country}>
                                <MenuItem value="india">India</MenuItem>
                                <MenuItem value="africa">Africa</MenuItem>
                                <MenuItem value="europe">Europe</MenuItem>
                            </TextField>
                            <TextField
                                label="No. of travellers"
                                type="number"
                                name="numberOfTraveller"
                                value={formik.values.numberOfTraveller}
                                onChange={formik.handleChange}
                                error={formik.touched.numberOfTraveller && Boolean(formik.errors.numberOfTraveller)}
                                helperText={formik.touched.numberOfTraveller && formik.errors.numberOfTraveller}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                label="Amount"
                                name="amount"
                                value={formik.values.amount}
                                onChange={formik.handleChange}
                                disabled
                                error={formik.touched.amount && Boolean(formik.errors.amount)}
                                helperText={formik.touched.amount && formik.errors.amount}
                                id="outlined-start-adornment"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                            />
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
