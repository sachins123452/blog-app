import React from 'react';
import { Stack, Pagination } from '@mui/material';
import { useTheme } from 'components/Theme/ThemeProvider';
export default function CustomPagination({ page, onChange, count, TotalRecord ,startIndex,endIndex,backgroundColor,color}) {
  const {currentTheme}=useTheme()
  return (
    <Stack style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '15px', backgroundColor:backgroundColor,borderRadius:'0px 0px 15px 15px',border:'1px solid #ddd', color:color}}>
      <span style={{ marginLeft: '5px', padding: '1px', fontFamily: 'Medium' ,
    }}>
        Showing {startIndex} - {endIndex} of {TotalRecord}{' '}
      </span>

      <Pagination
        page={page}
        variant="outlined"
        shape="rounded"
        count={count}
        onChange={onChange}
        defaultPage={1}
        TotalRecord={TotalRecord}
        sx={{
          '.css-1q5lzwz-MuiButtonBase-root-MuiPaginationItem-root': {
            // backgroundColor:'#0174BF',
            color:currentTheme.textColor
          },
          
          '.css-1q5lzwz-MuiButtonBase-root-MuiPaginationItem-root:hover': {
            backgroundColor: '#0174BF',
            color: '#ffff'
          },
          '.css-1q5lzwz-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
            backgroundColor: '#0174BF',
            color: '#ffff'
          }
        }}
        />
    </Stack>
  );
}
