'use client'

import {AppBar, Avatar, Box, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography} from "@mui/material";
import Container from "react-bootstrap/Container";
import {useUser} from "@auth0/nextjs-auth0/client";
import {useRouter} from "next/navigation";
import Button from "@mui/material/Button";
import {useState} from "react";
import {IoChevronBackOutline} from "react-icons/all";

export default function UserNavigationBar() {

    const pages = [];
    const settings = ['Logout'];

    const {user, error, isLoading} = useUser();
    const router = useRouter();

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = (data) => {
        setAnchorElUser(null);
        if (data === "Logout") {
            router.push('/api/auth/logout');
        }
    };

    return (
        <AppBar position="fixed" sx={{backgroundColor: "#82c7e6"}}>
                <Toolbar disableGutters sx={{width: '100%', pl: 2, pr: 8}}>
                    <Box sx={{pr: 2}}>
                        <Button variant='outlined' onClick={() => {
                            router.push('/');
                        }}>
                            <IoChevronBackOutline style={{margin: '0 5px 3px 0'}}/>
                            Home
                        </Button>
                    </Box>
                    <img src={"/assets/images/logo/Logo_Full.svg"} alt="Beasanz" height={'40'} width={'140'}/>
                    <Box sx={{flexGrow: 1, display: 'flex'}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'black', display: 'block'}}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title={user?.email}>
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt="Image" src={(user && user.picture) ? user.picture : "/static/images/avatar/2.jpg"}/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={() => handleCloseUserMenu(null)}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
        </AppBar>
    );

}