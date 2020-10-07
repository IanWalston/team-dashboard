import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

import links from "../links.json"
import { Typography, Grid, Box, Switch, Link, FormGroup, FormControlLabel } from "@material-ui/core"
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'space-between',
    }
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}
function SideBar({ handleDrawerClose, handleDrawerOpen, open, SetOpen }) {
    const classes = useStyles();
    const theme = useTheme();
    return (<Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
            paper: classes.drawerPaper,
        }}
    >
        <div className={classes.drawerHeader}>
            <img width='100px' src='https://cdn.discordapp.com/attachments/762277813402599445/762404405416427580/logo-dark.png' />
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
        </div>


        <Divider />
        <List>
            {links.map(link => {
                return <ListItemLink href={link.url} key={link.name}>
                    <ListItemIcon>{
                        {
                            "artistify": <img width='32px' height='32px' src='https://cdn.discordapp.com/attachments/762277813402599445/762415685782470666/icon.png' />,
                            "discord": <img width='32px'  height='32px' src='https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-discord-1.png' />,
                            "calendar": <img width='32px'  height='32px' src='https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-calendar-4.png' />,
                            "code": <img width='32px'  height='32px' src='https://cdns.iconmonstr.com/wp-content/assets/preview/2013/240/iconmonstr-code-2.png' />,
                            "list": <img width='32px'  height='32px' src='https://cdns.iconmonstr.com/wp-content/assets/preview/2013/240/iconmonstr-menu-2.png' />,
                            "checklist": <img width='32px'  height='32px' src='https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-task-1.png' />,
                            "cloud": <img width='32px'  height='32px' src='https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-cloud-21.png' />,
                        }[link.icon]
                    }
                    </ListItemIcon>
                    <ListItemText primary={link.name} />
                </ListItemLink>
            })}
        </List>
    </Drawer>
    )
}

export default SideBar
