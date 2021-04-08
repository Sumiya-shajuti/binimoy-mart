import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Ordered from '../Ordered/Ordered';

const Order = () => {
    // const { } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
        checkOut: new Date()
    });

   
    const handleCheckOutDate = (date) => {
        const newDates = { ...selectedDate }
        newDates.checkOut = date;
        setSelectedDate(newDates);
    };

    const handleOrder = () => {
        const newOrder = { ...loggedInUser, ...selectedDate };
        fetch('https://rhubarb-surprise-12760.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Hello, {loggedInUser.name}! </h1>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Order Date"
                        format="dd/MM/yyyy"
                        value={selectedDate.checkOut}
                        onChange={handleCheckOutDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
                <Button onClick={handleOrder} variant="contained" color="primary">Confirm Order</Button>
            </MuiPickersUtilsProvider>
            <Ordered></Ordered>
        </div>
    );
};

export default Order;




