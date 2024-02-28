import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import DropDown from 'components/dropdown/DropDown';
import LocalSee from '@mui/icons-material/LocalSee';
import { useTheme } from 'components/Theme/ThemeProvider';
const FileInput = ({ selectedFile, onSelectFile }) => {

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onSelectFile(file);
  };

  const handleClearFile = () => {
    onSelectFile(null);
  };

  return (
    <div style={{ cursor: 'pointer' }}>
      <label htmlFor="file-upload">
        <input id="file-upload" type="file" style={{ display: 'none' }} onChange={handleFileChange} />
        <Button component="span" startIcon={<LocalSee />} disabled={selectedFile === null} onClick={handleClearFile}>
          upload
        </Button>
      </label>
      {selectedFile && <div>{selectedFile.name}</div>}
    </div>
  );
};
const GRNTabel = ({ rows, columns, actionKey, dropDownKey, onFileSelect, options, borderRadius, overflow,backgroundColor }) => {
  const {currentTheme}=useTheme()
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleValueChange = (selectedItem) => {
    setSelectedValue(selectedItem.label);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer
        sx={{
          maxHeight: 500,
          overflow: overflow,
          backgroundColor: 'white',
          borderRadius: borderRadius,
          border: '1px solid #ddd',
          WebkitBorderRadius: borderRadius,
          MozBorderRadius: borderRadius,
          backgroundColor:currentTheme.bodyColor
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column?.id}
                  align={'center'}
                  style={{ minWidth: column?.minWidth, backgroundColor: currentTheme.bodyColor, fontFamily: 'GilroyBold',color:currentTheme.textColor }}
                >
                  {column?.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                {columns?.map((column) => {
                  const value = row[column?.id];
                  return (
                    <TableCell key={column?.id} align={'center'} style={{color:currentTheme.textColor}}>
                      {column?.id === actionKey.key &&
                        React.cloneElement(actionKey?.value, { onClick: () => actionKey?.value.props.onClick(row) })}
                      {column?.id === dropDownKey && (
                        <DropDown
                          selectedValue={selectedValue}
                          setSelectedValue={setSelectedValue}
                          onValueChange={handleValueChange}
                          options={options}
                          itemHeight={23}
                        />
                      )}
                      {column.id === 'media' && (
                        <FileInput
                          selectedFile={selectedFile}
                          onSelectFile={(file) => {
                            setSelectedFile(file);
                            // Pass the selected file to the parent component
                            onFileSelect(file);
                          }}
                        />
                      )}
                      {!column?.id === actionKey && !column?.id === dropDownKey && column?.format && typeof value === 'number'
                        ? column.format(value)
                        : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default GRNTabel;

GRNTabel.defaultProps = {
  rows: [
    { id: '1', SKU: 'ZML059484H', BatchId: 'ZML059484H', Product: 'PRODUddCT1', shippedUnit: 3 },
    { id: '2', SKU: 'ZML059484H', BatchId: 'ZML059485J', Product: 'PRODUddCT2', shippedUnit: 4 },
    { id: '3', SKU: 'ZML059484H', BatchId: 'ZML059486L', Product: 'PRODUddCT3', shippedUnit: 5 }
  ],
  columns: [
    { id: 'id', label: 'ID', minWidth: 100 },
    { id: 'SKU', label: 'SKU', minWidth: 100 },
    { id: 'BatchId', label: 'BatchId', minWidth: 100 },
    { id: 'Product', label: 'Product', minWidth: 170 },
    { id: 'shippedUnit', label: 'Shipped Units', minWidth: 100 },
    { id: 'Action', label: 'Action', minWidth: 100 }
  ],
  actionKey: {
    key: 'Action',
    value: (
      <Button size="small" sx={{ borderRadius: 2, fontSize: 10, backgroundColor: '#006caf' }} variant="contained">
        Discard
      </Button>
    )
  },
  dropDownKey: 'dropDown',
  onFileSelect: () => {},
  options: [
    { label: 'Damaged Goods', id: 1 },
    { label: 'Partial Shipments', id: 2 },
    { label: 'Correct Errors', id: 3 },
    { label: 'Requirement Changed', id: 4 },
    { label: 'Other', id: 4 }
  ],
  overflow: 'auto'

  /* visible  */
};
