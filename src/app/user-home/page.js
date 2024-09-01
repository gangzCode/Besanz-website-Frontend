'use client'

import React, {useEffect, useState} from "react";
import {
    Backdrop,
    Box,
    Chip,
    CircularProgress, Collapse, Divider,
    Grid, IconButton, Modal,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from "@mui/material";
import UserNavigationBar from "@/app/components/header/user-navigation-bar";
import {useRouter} from "next/navigation";
import {useUser} from "@auth0/nextjs-auth0/client";
import {
    downloadInvoicePdf,
    getOldBillsUser,
    getPayableBillsUser,
    getPDFData,
    openInvoicePDF
} from "@/service/bill-service";
import Button from "@mui/material/Button";
import {getPaymentUrl} from "@/service/clover-service";
import {FaDownload, FaEye, IoChevronDownCircleOutline} from "react-icons/all";

export default function UserHome() {

    const {user, error, isLoading} = useUser();
    const router = useRouter();
    const [showLoading, setShowLoading] = useState(false)
    const [userCreationModal, setUserCreationModal] = useState(false)

    const [selectedItem, setSelectedItem] = useState(0)

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const [payableBills, setPayableBills] = useState([]);
    const [oldBills, setOldBills] = useState([]);
    const [updateObj, setUpdateObj] = useState(null);
    const [showViewModel, setShowViewModel] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


    const createUserModalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: 5,
        boxShadow: 24,
        p: 4,
    };

    const createModalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        bgcolor: 'background.paper',
        borderRadius: 5,
        boxShadow: 24,
        p: 4,
    };


    function logout() {
        router.push('/api/auth/logout');
    }

    useEffect(() => {
        if (!isLoading && user) {
            setShowLoading(true);
            getPayableBillsUser().then((response) => {
                setPayableBills(response.data);
                getOldBillsUser().then((response) => {
                    setOldBills(response.data);
                    setShowLoading(false);
                });
            });
        } else if (!isLoading && (!user || !user.sub)) {
        }
    }, [isLoading]);

    const customSelect = {
        "&.Mui-selected": {
            backgroundColor: "#152E4A",
            color: 'white',
            "svg": {
                color: 'white'
            },
            ":hover": {
                backgroundColor: "#1e4977"
            }
        }
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // Table Helper Functions
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const payClicked = (billId) => {
        setShowLoading(true);
        getPaymentUrl({
            email: user.email,
            bill_id: billId,
            firstName: null,
            lastName: null
        }).then((response) => {
            setShowLoading(false);
            if (response) {
                window.open(response.url, '_blank');
            }
        });
    };

    const openInvoice = (package_id) => {
        setShowLoading(true);
        getPDFData(package_id).then((response) => {
            setShowLoading(false);
            if (response.data && response.data.length > 0) {
                openInvoicePDF(response.data[0].data);
            }
        });
    }

    const downloadInvoice = (package_id, name) => {
        setShowLoading(true);
        getPDFData(package_id).then((response) => {
            setShowLoading(false);
            if (response.data && response.data.length > 0) {
                downloadInvoicePdf(response.data[0].data, name);
            }
        });
    }

    return (
        <>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.modal + 10}}
                open={showLoading}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
            <Box m={0} p={0} height="100%" width={1}>
                <UserNavigationBar></UserNavigationBar>
                <Box container height={"100%"}>
                    <Grid item xs={10} pt={"69px"} height={'100%'} width={'100%'}>
                        <div>
                            {(isLoading) ?
                                <div className='loader'>
                                    <img src={"/assets/images/logoIcon.svg"} alt="logo_icon" className='loader_icon'/>
                                    <p className='loader_text'>Loading</p>
                                </div>
                                :
                                <Box p={2}>
                                    <Box display={'flex'} alignItems={'center'} mb={1} px={1}>
                                        <Typography sx={{flexGrow: 1}} variant='h5' margin={0}>Payable Bills</Typography>
                                    </Box>
                                    <Paper sx={{width: '100%', maxHeight: '100%', overflow: 'hidden'}}>
                                        <TableContainer sx={{maxHeight: 'calc(100% - 80px)'}}>
                                            <Table stickyHeader aria-label="sticky table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Name</TableCell>
                                                        <TableCell align={"center"}>Created At</TableCell>
                                                        <TableCell align={"center"}>Status</TableCell>
                                                        <TableCell align={"center"}>Invoice</TableCell>
                                                        <TableCell align={"center"}>Price</TableCell>
                                                        <TableCell></TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {(payableBills.length > 0) ?
                                                        payableBills.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((packageRow) => {
                                                            return (
                                                                <TableRow hover role="checkbox" tabIndex={-1}
                                                                          key={packageRow._id}>
                                                                    <TableCell>{packageRow.name}</TableCell>
                                                                    <TableCell
                                                                        align={"center"}>{new Date(packageRow.created_date).toLocaleString()}
                                                                    </TableCell>
                                                                    <TableCell align={"center"}>
                                                                        {(packageRow.status === 'P') ?
                                                                            <Chip label="Pending" color="primary"
                                                                                  size='small'/>
                                                                            :
                                                                            (packageRow.status === 'T') ?
                                                                                <Chip label="To Be Paid" color="warning" size='small'/>
                                                                                :
                                                                            (packageRow.status === 'C') ?
                                                                                <Chip label="Paid" color="success"
                                                                                      size='small'/>
                                                                                :
                                                                                (packageRow.status === 'E') ?
                                                                                    <Chip label="Error" color="error"
                                                                                          size='small'/>
                                                                                    :
                                                                                    <Chip label="Invalid"
                                                                                          color="warning" size='small'/>
                                                                        }
                                                                    </TableCell>
                                                                    <TableCell align={"center"}>
                                                                        {(packageRow.contain_invoice) ?
                                                                            <>
                                                                                <IconButton size="small" color={"primary"}
                                                                                            onClick={() => {
                                                                                                openInvoice(packageRow._id);
                                                                                            }}>
                                                                                    <FaEye/>
                                                                                </IconButton>
                                                                                <IconButton size="small" sx={{ml: 2}} color={"primary"}
                                                                                            onClick={() => {
                                                                                                downloadInvoice(packageRow._id, packageRow.name + '_invoice.pdf');
                                                                                            }}>
                                                                                    <FaDownload/>
                                                                                </IconButton>
                                                                            </>
                                                                            :
                                                                            "N/A"
                                                                        }
                                                                    </TableCell>
                                                                    <TableCell align={"right"}>
                                                                        $ {(Math.round(packageRow.price * 100) / 100).toFixed(2)}
                                                                    </TableCell>
                                                                    <TableCell align={"center"}>
                                                                        <IconButton size="small" color="primary" sx={{mr: 3}}
                                                                                    onClick={() => {
                                                                                        setUpdateObj(packageRow);
                                                                                        setTimeout(() => {
                                                                                            setShowViewModel(true)
                                                                                        });
                                                                                    }}>
                                                                            <FaEye/>
                                                                        </IconButton>
                                                                        <Button variant="contained" type='button'
                                                                                onClick={() => payClicked(packageRow._id)}
                                                                        >
                                                                            PAY
                                                                        </Button>
                                                                    </TableCell>
                                                                </TableRow>
                                                            );
                                                        }) :
                                                        <TableRow hover role="checkbox" tabIndex={-1}>
                                                            <TableCell colSpan={6} align={"center"}>
                                                                <h2>No Bills To Pay</h2>
                                                            </TableCell>
                                                        </TableRow>
                                                    }
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        <TablePagination
                                            size='medium'
                                            component="div"
                                            rowsPerPageOptions={[]}
                                            count={oldBills.length}
                                            rowsPerPage={25}
                                            page={page}
                                            onPageChange={handleChangePage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                        />
                                    </Paper>

                                    <Divider sx={{mt: 3, mb: 2, color: '#0003'}}/>

                                    <Box display={'flex'} alignItems={'center'} mb={1} px={1}>
                                        <Typography sx={{flexGrow: 1}} variant='h5' margin={0}>Processed Bills</Typography>
                                    </Box>
                                    <Paper sx={{width: '100%', maxHeight: '100%', overflow: 'hidden'}}>
                                        <TableContainer sx={{maxHeight: 'calc(100% - 80px)'}}>
                                            <Table stickyHeader aria-label="sticky table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Name</TableCell>
                                                        <TableCell align={"center"}>Created At</TableCell>
                                                        <TableCell align={"center"}>Status</TableCell>
                                                        <TableCell align={"center"}>Invoice</TableCell>
                                                        <TableCell align={"center"}>Price</TableCell>
                                                        <TableCell></TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {(oldBills.length > 0) ?
                                                        oldBills.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((packageRow) => {
                                                            return (
                                                                <TableRow hover role="checkbox" tabIndex={-1}
                                                                          key={packageRow._id}>
                                                                    <TableCell>{packageRow.name}</TableCell>
                                                                    <TableCell
                                                                        align={"center"}>{new Date(packageRow.created_date).toLocaleString()}
                                                                    </TableCell>
                                                                    <TableCell align={"center"}>
                                                                        {(packageRow.status === 'P') ?
                                                                            <Chip label="Pending" color="primary"
                                                                                  size='small'/> : (packageRow.status === 'T') ?
                                                                                <Chip label="To Be Paid" color="warning"
                                                                                      size='small'/> : (packageRow.status === 'C') ?
                                                                                    <Chip label="Paid" color="success"
                                                                                          size='small'/> : (packageRow.status === 'E') ?
                                                                                        <Chip label="Error"
                                                                                              color="error"
                                                                                              size='small'/> :
                                                                                        <Chip label="Invalid"
                                                                                              color="warning"
                                                                                              size='small'/>}
                                                                    </TableCell>
                                                                    <TableCell align={"center"}>
                                                                        {(packageRow.contain_invoice) ?
                                                                            <>
                                                                                <IconButton size="small" color={"primary"}
                                                                                            onClick={() => {
                                                                                                openInvoice(packageRow._id);
                                                                                            }}>
                                                                                    <FaEye/>
                                                                                </IconButton>
                                                                                <IconButton size="small" sx={{ml: 2}} color={"primary"}
                                                                                            onClick={() => {
                                                                                                downloadInvoice(packageRow._id, packageRow.name + '_invoice.pdf');
                                                                                            }}>
                                                                                    <FaDownload/>
                                                                                </IconButton>
                                                                            </>
                                                                            :
                                                                            "N/A"
                                                                        }
                                                                    </TableCell>
                                                                    <TableCell align={"right"}>
                                                                        $ {(Math.round(packageRow.price * 100) / 100).toFixed(2)}
                                                                    </TableCell>
                                                                    <TableCell align={"center"}>
                                                                        <IconButton size="small" color="primary"
                                                                                    onClick={() => {
                                                                                        setUpdateObj(packageRow);
                                                                                        setTimeout(() => {
                                                                                            setShowViewModel(true)
                                                                                        });
                                                                                    }}>
                                                                            <FaEye/>
                                                                        </IconButton>
                                                                    </TableCell>
                                                                </TableRow>
                                                            );
                                                        }) :
                                                        <TableRow hover role="checkbox" tabIndex={-1}>
                                                            <TableCell colSpan={6} align={"center"}>
                                                                <h2>No Processed Bills</h2>
                                                            </TableCell>
                                                        </TableRow>
                                                    }
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        <TablePagination
                                            size='medium'
                                            rowsPerPageOptions={[]}
                                            component="div"
                                            count={oldBills.length}
                                            rowsPerPage={25}
                                            page={page}
                                            onPageChange={handleChangePage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                        />
                                    </Paper>
                                </Box>
                            }
                        </div>
                    </Grid>
                </Box>
            </Box>
            <Modal open={showViewModel}>
                <Box sx={createModalStyle}>
                    <Box display='flex' fontSize={"x-large"} fontWeight={'bold'}>
                        {updateObj?.name} - $ {(Math.round(updateObj?.price * 100) / 100).toFixed(2)}
                    </Box>
                    <Box bgcolor={'whitesmoke'} borderRadius={3} mt={2} p={1} width='100%'
                         maxHeight='80vh' overflow='auto'>
                        {
                            updateObj?.features.map((feature, index) => (
                                <Box key={feature._id}>
                                    <Box fontWeight={'bold'} pt={1} display={'flex'} alignItems={'center'}>
                                        <IoChevronDownCircleOutline
                                            sx={{
                                                transition: "transform 0.2s linear",
                                                transform: feature.collapsed ? 'rotate(-90deg)' : 'rotate(0deg)',
                                                visibility: feature.children.length > 0 ? 'visible' : 'hidden'
                                            }}
                                            onClick={() => {
                                                feature.collapsed = !feature.collapsed;
                                                setUpdateObj({...updateObj});
                                            }}
                                        >
                                        </IoChevronDownCircleOutline>
                                        <Box pl={1}>{feature.name}</Box>
                                    </Box>
                                    <Collapse in={!feature.collapsed}>
                                        <Box ml={'52px'} pl={0} borderLeft={'1px solid #0003'}>
                                            {
                                                feature.children.map((child) => (
                                                    <Box key={child._id} py={1} display={'flex'}
                                                         alignItems={'center'}>
                                                        <Box pl={2} height="1px" bgcolor="#0003"></Box>
                                                        <Box pl={1}>{child.name}</Box>
                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                    </Collapse>
                                    {
                                        index < updateObj.features.length - 1 &&
                                        <Divider sx={{pt: (feature.collapsed) ? 1 : 0}}/>
                                    }
                                </Box>
                            ))
                        }
                        {updateObj?.features.length === 0 &&
                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}
                                 fontWeight="bold" minHeight={'40vh'}>
                                No features available.
                            </Box>
                        }
                    </Box>
                    <Box width='100%' display='flex' justifyContent='center' mt={2}>
                        <Button sx={{display: 'block'}} variant="contained" color="primary" size="small"
                                onClick={() => {
                                    setShowViewModel(false);
                                }}>
                            Close
                        </Button>
                    </Box>
                </Box>
            </Modal>
            {/*<Modal open={userCreationModal}>
                <Box sx={createUserModalStyle}>
                    <CreateUser setUserCreationModal={setUserCreationModal} setShowLoading={setShowLoading}/>
                </Box>
            </Modal>*/}
        </>
    );
}