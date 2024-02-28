import React from 'react';

import ArrowBack from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { Grid } from '../../../node_modules/@mui/material/index';
import GRNTabel from '../../components/GRNTable/GRNTabel';
import { useNavigate } from 'react-router-dom';
import Pendinginvoiceview from 'components/modals/contentmodal/Pendinginvoiceview';
import { useTheme } from 'components/Theme/ThemeProvider';
import './StockTransferDetail.css'
const StockTransferDetail = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const { currentTheme } = useTheme();

  const data = [
    {
      'Transfer ID': 'ZW20230825-002',
      'Transfer Date': '15 jan 2023',
      'Transfer Unit': '355',
      'Transferred From': 'Ahemdabad | ZW-DIST-001 101 , Vikasgruh road, Paldi, Ahemdabad 380007, Gujarat',
      'Tranferred To': 'Gandhinagar | ZW-DIST-002 Sector13C,Sector13,Gandhinagar 382016,Gujarat'
    }
  ];

  const heading_Title = [
    { id: 'Transfer ID', label: 'Transfer ID' },
    { id: 'Transfer Date', label: 'Transfer Date' },
    { id: 'Transfer Unit', label: 'Transfer Unit' },
    { id: 'Transferred From', label: 'Transferred From' },
    { id: 'Tranferred To', label: 'Tranferred To' }
  ];

  const stockdata = [
    { SKU: 'ZWCO#01', 'Batch No.': 'ZWO1', Product: 'Complan-Nutrition and Health Drink Royale Chocolate', 'Transferred Units': '10' },
    { SKU: 'ZWCO#02', 'Batch No.': 'ZWO2', Product: 'Complan Nutrition and Health Drink Pista Badam', 'Transferred Units': '43' },
    { SKU: 'ZWCO#03', 'Batch No.': 'ZWO3', Product: 'Sugar Free Green Natural Sweetener & Sugar Substitute', 'Transferred Units': '34' },
    { SKU: 'ZWCO#04', 'Batch No.': 'ZWO4', Product: 'Sugar Free Gold Low Calorie Sweetener', 'Transferred Units': '98' },
    { SKU: 'ZWCO#05', 'Batch No.': 'ZWO5', Product: 'Sugar Free Natura Low Calorie Sweetner-75g (100 N*0.75g)', 'Transferred Units': '11' },
    { SKU: 'ZWCO#06', 'Batch No.': 'ZWO6', Product: "Sugar Free D'lite Quinoa & Almonds Dark Chocolate Bar", 'Transferred Units': '34' },
    { SKU: 'ZWCO#07', 'Batch No.': 'ZWO7', Product: "Sugar Free D'lite Dark Assorted Chocolate Gift Pack", 'Transferred Units': '56' },
    { SKU: 'ZWCO#08', 'Batch No.': 'ZWO8', Product: 'Sugar Free Green Natural Stevia Jar (200g)', 'Transferred Units': '12' },
    { SKU: 'ZWCO#09', 'Batch No.': 'ZWO9', Product: 'Sugar Free Natura-Sweeting Drops 10ml', 'Transferred Units': '98' },
    { SKU: 'ZWCO#010', 'Batch No.': 'ZW10', Product: 'Sugar Free Green 100% Natural Sweetener', 'Transferred Units': '22' }
  ];

  const stocks_title = [
    { id: 'SKU', label: 'SKU' },
    { id: 'Batch No.', label: 'Batch No.' },
    { id: 'Product', label: 'Product' },
    { id: 'Transferred Units', label: 'Transferred Units' }
  ];

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Grid className="main__container">
        <Grid className="iconbuttoncontainer">
          <IconButton onClick={() => navigate('/dashboard/StockTransfer')} className="iconbtnstyle">
            <ArrowBack className="arrowback" />
          </IconButton>
          <Grid className="title" sx={{ color: currentTheme.textColor }}>
            Stock Transfer
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <GRNTabel rows={data} columns={heading_Title} align={'left'} rowalign={'left'} />
        <Grid style={{ marginBottom: '3%' }} />
      </Grid>
      <Grid className="transferstockstyle" sx={{ color: currentTheme.textColor }}>
        Transferred Stocks
      </Grid>
      <GRNTabel rows={stockdata} columns={stocks_title} />
      <div style={{ backgroundColor: 'red' }}>
        {<Pendinginvoiceview setIsOpen={setIsOpen} isOpen={isOpen} handleCloseModal={handleCloseModal} />}
      </div>
    </div>
  );
};
export default StockTransferDetail;
