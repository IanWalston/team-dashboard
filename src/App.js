import React, { useState, useEffect } from "react";
import people from "./people.json"
import { Typography, Grid, Box } from "@material-ui/core"

function getTime(offset, d) {
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

    return nd.toLocaleTimeString()
}

export default function App() {
    const [time, setTime] = useState(new Date())


    useEffect(
        () => {
            setInterval(() => {
                setTime(new Date())
            }, 1000)
        }
    )

    return (<div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <img width='100%' src='https://cdn.discordapp.com/attachments/762277813402599445/762404405416427580/logo-dark.png' />
        <Box mb={4}>
            <Typography variant='h4' align='center'>Artistify Team</Typography>
        </Box>

        <Grid container>
            <Grid container item>
                <Grid item xs={1}>
                    <Typography variant="h6">ID</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h6">NAME</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6">ROLE</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h6">TIME ZONE</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" align='right'>CURRENT TIME</Typography>
                </Grid>
            </Grid>

            {people.map((person, i) => {

                return <Grid style={{ background: i % 2 == 0 ? '#eee' : '#fff' }} container item>
                    <Grid item xs={1}>
                        <Typography>{person.id}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography>{person.name}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography>{person.role}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography>GMT{person.timezone >= 0 && "+"}{person.timezone}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography align='right'>{getTime(person.timezone, time)}</Typography>
                    </Grid>
                </Grid>
            })}
        </Grid>

    </div>)
}
