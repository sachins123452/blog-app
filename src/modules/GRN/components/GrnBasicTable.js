import BasicTabel from 'pages/dashboard/BasicTabel';
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

const GrnBasicTable = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard/GRNpending ');
  };

  const styleColor = (status) => {
    switch (status) {
      case 'Pending':
        return { color: '#f4bc6a' };
      case 'GRN Pending':
        return { color: '#f4bc6a' };
      case 'Completed':
        return { color: '#0a79c1' };
      default:
        return { color: 'red' };
    }
  };

  return (
    <div>
      <BasicTabel
        rows={rows}
        columns={columns}
        statusKey={'GRN status'}
        statusColorFun={styleColor}
        actionButton={{
          key: 'Action',
          value: (
            <div
              role="button"
              tabIndex={0}
              onClick={() => {
                handleClick();
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  alert('onKeyDown!');
                }
              }}
              className="btn_styling_GRNScreen"
              style={{ backgroundColor: '#4cb748', color: '#fff', borderRadius: 20, minWidth: 55, fontSize: 12, cursor: 'pointer' }}
            >
              {' '}
              <VisibilityIcon style={{ fontSize: 10 }} /> View
            </div>
          )
        }}
      />
    </div>
  );
};

export default GrnBasicTable;

const rows = [
  {
    '#': '1',
    InvoiceId: 'ZW-INV23-001',
    OrderId: 'ZW20230825-001',
    grnNumber: 'ZW20230825-11',
    CreaatAt: '15 Aug 2023',
    'From Warehouse': 'ZW Abad| WH01',
    'To Warehouse': 'Ahmedabaad |ZQ-DIST-001',
    'GRN status': 'Completed'
  },
  {
    '#': '2',
    InvoiceId: 'ZW-INV23-002',
    OrderId: 'ZW20230825-002',
    grnNumber: 'ZW20230825-012',
    CreaatAt: ' 15 Aug 2023',
    'From Warehouse': 'ZW Gandinagar| WH02',
    'To Warehouse': 'Ahmedabaad |ZQ-DIST-002',
    'GRN status': 'Completed'
  },
  {
    '#': '3',
    InvoiceId: 'ZW-INV23-003',
    OrderId: 'ZW20230825-003',
    grnNumber: 'ZW20230825-013',
    CreaatAt: ' 15 Aug 2023',
    'From Warehouse': 'ZW Abad| WH01',
    'To Warehouse': 'Ahmedabaad |ZQ-DIST-003',
    'GRN status': 'Pending'
  },
  {
    '#': '4',
    InvoiceId: 'ZW-INV23-004',
    OrderId: 'ZW20230825-004',
    grnNumber: 'ZW20230825-014',
    CreaatAt: ' 15 Aug 2023',
    'From Warehouse': 'ZW Abad| WH01',
    'To Warehouse': 'Ahmedabaad |ZQ-DIST-004',
    'GRN status': 'Completed'
  },
  {
    '#': '5',
    InvoiceId: 'ZW-INV23-005',
    OrderId: 'ZW20230825-005',
    grnNumber: 'ZW20230825-015',
    CreaatAt: ' 15 Aug 2023',
    'From Warehouse': 'ZW Abad| WH01',
    'To Warehouse': 'Ahmedabaad |ZQ-DIST-005',
    'GRN status': 'Completed'
  }
];

const columns = [
  { id: '#', label: '#', minWidth: 140 },
  { id: 'InvoiceId', label: 'Invoice Id', minWidth: 140 },
  { id: 'OrderId', label: 'Order Id', minWidth: 140 },
  { id: 'grnNumber', label: 'GRN Number', minWidth: 150 },
  {
    id: 'CreaatAt',
    label: 'Dispatch Date',
    minWidth: 170,
    align: 'center'

    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'From Warehouse',
    label: 'From Warehouse',
    minWidth: 150,
    align: 'center'
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'To Warehouse',
    label: 'To Warehouse',
    minWidth: 170,
    align: 'center'
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'GRN status',
    label: 'GRN Status',
    minWidth: 150,

    align: 'center'
    // format: (value) => value.toFixed(2),
  },

  {
    id: 'Action',
    label: 'Action',
    //  minWidth: 50,
    align: 'center'
    // format: (value) => value.toFixed(2),
  }
];
