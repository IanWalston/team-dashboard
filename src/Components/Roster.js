import React, { useState, useEffect } from "react";
import people from "../people.json"
import { Typography, Grid, Box, Switch } from "@material-ui/core"

const wrapperStyle = { maxWidth: '700px', margin: '12px auto' }

const sortedPeople = people.sort((a, b) => (a.name > b.name) ? 1 : -1)

function getTime(offset, d, hour12) {
    let localTime = d.getTime();
    let localOffset = d.getTimezoneOffset() * 60000;

    // obtain UTC time in msec
    let utc = localTime + localOffset;
    // create new Date object for different city
    // using supplied offset
    let nd = new Date(utc + (3600000 * offset));
    //nd = 3600000 + nd;
    utc = new Date(utc);
    // return time as a string

    var options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: hour12
    };

    return nd.toLocaleString('en-US', options)
}

function Roster() {
    const [time, setTime] = useState(new Date())
    const [hour12, setHour12] = useState(false)

    useEffect(
        () => {
            setInterval(() => {
                setTime(new Date())
            }, 1000)
        },
        []
    )

    return (<Box style={wrapperStyle}>

        <Box mb={4}>
            <Typography variant='h3' align='center'>Qasong Team</Typography>
        </Box>
        <Typography>  Qaong is an app for listening to music with minimal ads to none! 
            Qaong is an open-source project the code can be found in github
            Qasong's offical release is December 20, 2020
            </Typography>
        <Grid component="label" container justify='flex-end' alignItems="center" spacing={1}>
            <Grid item><Typography>24 Hour</Typography></Grid>
            <Grid item>
                <Switch checked={hour12} onChange={() => setHour12(!hour12)} />
            </Grid>
            <Grid item><Typography>12 Hour</Typography></Grid>
        </Grid>

        <Grid container>
            <Grid container item>
                <Grid item xs={3} sm={2}>
                    <Typography variant="h6">NAME</Typography>
                </Grid>
                <Grid item xs={3} sm={4}>
                    <Typography variant="h6">ROLE</Typography>
                </Grid>
                <Grid item xs={3} sm={2}>
                    <Typography variant="h6">TIME ZONE</Typography>
                </Grid>
                <Grid item xs={3} sm={4}>
                    <Typography variant="h6" align='right'>CURRENT TIME</Typography>
                </Grid>
            </Grid>

            {sortedPeople.map((person, i) => {

                return <Grid style={{ background: i % 2 == 0 ? '#242424' : '#292929' }} container item>
                    <Grid item xs={3} sm={2}>
                        <Typography>{person.name}</Typography>
                    </Grid>
                    <Grid item xs={3} sm={4}>
                        <Typography>{person.role}</Typography>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                        <Typography>GMT{person.timezone >= 0 && "+"}{person.timezone}</Typography>
                    </Grid>
                    <Grid item xs={3} sm={4}>
                        <Typography align='right'>{getTime(person.timezone, time, hour12)}</Typography>
                    </Grid>
                </Grid>
            })}
        </Grid>
    </Box>
    )
}

export default Roster
