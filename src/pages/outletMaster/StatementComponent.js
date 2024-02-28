import { Grid } from "../../../node_modules/@mui/material/index"

import { Button } from '@mui/material';
import PrintIcon from '@mui/icons-material/LocalPrintshopOutlined'
import Download from '@mui/icons-material/Download'
import StatementComponentCss from "./StatementComponentCss";
import companyImage from '../../assets/images/products/CompanyImages.png'
import SubTotalCart from "components/subTotalCart/SubTotalCart";
import AmountTabel from "./AmountTabel";
import {useNavigation} from 'react-router-dom'
const StatementComponent = () => {
    const navigate = useNavigation();

const  title= [
    {
        id: 'Opening Balance',
        label: 'Opening Balance'
    },
    {
        id: 'Invoiced Amount',
        label: 'Invoiced Amount'
    },
    {
        id: 'Amount Received',
        label: 'Amount Received'
    },
  

]
const  data= [
    { 'Opening Balance': '₹0', 'Invoiced Amount': '₹8,77,920', 'Amount Received': '₹16,81,440' }
]
    return (<Grid style={{ backgroundColor: '#fff' }}>
        <Grid style={{ height: '1px', backgroundColor: '#DDDD' }} />

        <Grid
            sx={StatementComponentCss.mainContainer}
        >

            <Grid
                onClick={() => navigate('/dashboard/GRNScreen')}
                sx={{ display: 'flex', alignItems: 'center', }}
            >

                <Grid
                    sx={StatementComponentCss.OrderViewtext}
                >
                    DropDown
                </Grid>
            </Grid>
            <Grid sx={{}}>

                <Button size="small"
                    startIcon={<PrintIcon
                    />}
                    sx={{ borderRadius: 2 }}
                    variant="contained"
                >
                    Print
                </Button>
                <Button size="small"
                    startIcon={<Download

                    />}
                    sx={{ borderRadius: 2, margin: '0.7rem' }}
                    variant="contained"
                >
                    Download
                </Button>
            </Grid>
        </Grid>
        <Grid style={{ marginTop: '1%' }} />
        <Grid style={{ height: '1px', backgroundColor: '#DDDD' }} />
        <Grid style={{ marginTop: '1%' }} />

        <Grid container direction="column" alignItems="center" justifyContent="center">
            <Grid item style={{ color: '#000', fontFamily: 'GilroyBold', fontSize: 16 }}>

                Outlet Statement for  Medesirve Pvt Ltd

            </Grid>
            <Grid item style={{ fontSize: '12px', fontFamily: 'Regular' }}>
                from 01 Apr 2023 to 01 Apr 2024

            </Grid>
        </Grid>
        <Grid style={{ marginTop: '3%' }} />
        <Grid style={{ height: '1px', backgroundColor: '#DDDD', }} />
        <Grid container alignItems="center"
            style={{ display: 'flex', justifyContent: 'space-between' }}
        >
            <Grid style={{ display: 'flex', marginLeft: '2%', }}>

                <img src={companyImage} alt="company" />
            </Grid>
            <Grid direction="column" style={{ display: 'flex', marginRight: '2%', }} >
                <Grid item style={{ color: '#000', fontFamily: 'GilroyBold', fontSize: 16 }}>

                    Outlet Statement for  Medesirve Pvt Ltd

                </Grid>
                <Grid item style={{ fontSize: '13px', fontFamily: 'Regular', textAlign: 'right' }}>
                    from 01 Apr 2023 to 01 Apr 2024

                </Grid>
                <Grid item style={{ fontSize: '10px', fontFamily: 'Regular', textAlign: 'right', }}>
                    101,Vikasgurh road,paldi,Ahmedabaad 38007,Gujrat

                </Grid>
            </Grid>
        </Grid>
        <Grid style={{ marginTop: '3%' }} />
        <Grid direction="column" style={{ display: 'flex', marginLeft: '2%', }} >
            <Grid item style={{ color: '#000', fontFamily: 'GilroyBold', fontSize: 16 }}>

                Medesirve Pvt Ltd

            </Grid>
            <Grid item style={{ fontSize: '12px', fontFamily: 'Regular', textAlign: 'left' }}>
                ZW-CST-001

            </Grid>
            <Grid direction="column" style={{ fontSize: '11px', fontFamily: 'Regular', textAlign: 'left', }}>
                101,Vikasgurh road,paldi,Ahmedabaad 38007,Gujrat

            </Grid>
            <Grid direction="column" style={{ fontSize: '11px', fontFamily: 'Regular', textAlign: 'left', }}>
                GST:ZW1234

            </Grid>
            <Grid direction="column" style={{ fontSize: '11px', fontFamily: 'Regular', textAlign: 'left', }}>
                PAN:ZW1234

            </Grid>
        </Grid>
        <Grid style={{ marginTop: '2%' }} />
        <Grid direction="column" style={{ display: 'flex', marginRight: '2%', }} >
            <Grid item style={{ color: '#000', fontFamily: 'GilroyBold', fontSize: 16, textAlign: 'right' }}>

                 Statements of Account

            </Grid>
            <Grid item style={{ fontSize: '13px', fontFamily: 'Regular', textAlign: 'right' }}>
                from 01 Apr 2023 to 01 Apr 2024

            </Grid>
        </Grid>
        <Grid style={{ marginTop: '2%' }} />
        <Grid style={{ display: 'flex', marginRight: '2%', justifyContent: 'space-between' }} >
            <Grid/>
            <Grid>

            <Grid direction="column"  style={{ display:'flex',color: '#fff', fontFamily: 'GilroyBold', fontSize: 16, textAlign: 'left',backgroundColor:'#0174bf',width:'15rem',height:'2.5rem',justifyContent:'center',padding:'5px' }}>

               Account Summary

            </Grid>
            <SubTotalCart
            borderRadius={0}
            title={title}
            data={data}
            totalAmount={'₹-16,81,440'}
            />
            </Grid>
            </Grid>
        <Grid style={{ marginTop: '1%' }} />

            <AmountTabel
           
            />
    </Grid>)
}
export default StatementComponent