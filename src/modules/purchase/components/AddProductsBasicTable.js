import { API } from 'api/API';
import { makeRequest } from 'api/Request';
import useApiCall from 'api/useApiCall';
import { showDanger } from 'components/nudges/Alert';
// import { useProductState } from 'context/Product';
import BasicTabel from 'pages/dashboard/BasicTabel';
import React, { useState, useEffect } from 'react';

const AddProductsBasicTable = () => {
  const {makeRequest}=useApiCall()
  const [productData, setProductData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        let productParams = {
          // CategoryParentId: 1417,
        };
        let productResponse = await makeRequest({ method: 'GET', url: API.getProducts, params: productParams });
        // console.log('productResponse', productResponse.data);

        if (productResponse?.statusCode === 200) {
          setProductData(productResponse.data);
        } else {
          showDanger(`${productResponse?.message}`);
        }
      } catch (productError) {
        showDanger(`${productError}`);
      }
    };

    fetchData();
  }, []);
  const rows2 = productData?.map((product) => ({
    sku: product?.ProductSku,
    product: product?.ProductName,
  }));
  // console.log('rows2', rows2);



  return (
    <div>
      <BasicTabel
        columns={headCells2}
        rows={rows2}
        verticalAlign={'top'}
        actionButton={{
          key: 'qty',
          value: (
            <input
              type="text"
              style={{
                width: '60px',
                textAlign: 'center',
                backgroundColor: '#E5F1F8',
                borderRadius: '5px',
                border: '0px',
                color: '#0174BF'
              }}
              defaultValue={0}
            />
          )
        }}
        pagination={true}
      />
    </div>
  );
};

export default AddProductsBasicTable;

const headCells2 = [
  {
    id: 'sku',
    align: 'left',
    disablePadding: false,
    label: 'SKU',
    minWidth: 100
  },
  {
    id: 'product',
    align: 'left',
    // disablePadding: true,
    label: 'Product',
    minWidth: 10
  },
  {
    id: 'uom',
    align: 'left',
    disablePadding: false,
    label: 'UOM'
  },
  {
    id: 'size',
    align: 'left',
    disablePadding: false,
    label: 'Size'
  },
  {
    id: 'mrp',
    align: 'center',
    disablePadding: false,
    label: 'MRP'
  },
  {
    id: 'price',
    align: 'left',
    disablePadding: false,
    label: 'Price(PTD)'
  },
  {
    id: 'instock',
    align: 'center',
    disablePadding: false,
    label: 'IN-Stock'
  },
  {
    id: 'qty',
    align: 'center',
    disablePadding: false,
    label: 'Quantity'
  }
];
