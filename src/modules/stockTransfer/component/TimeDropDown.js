// import DropDown from 'components/dropdown/DropDown';
// import { useProductState } from 'context/Product';
// import React, { useEffect, useState } from 'react';
// import { useGetCategoriesQuery } from 'store/services/categories';

// const TimeDropDown = () => {
//   const [selectedValue, setSelectedValue] = useState(null);


//   const options = [
//     { label: 'sachin', id: 1 },
//     { label: 'hemu', id: 2 },
//     { label: 'raju', id: 3 },
//     { label: 'Gullu', id: 4 }
//   ];

//   const handleValueChange = (selectedItem) => {
//     console.log('Selected Item:', selectedItem);
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'row' }}>
//       <DropDown
//         options={options}
//         onValueChange={handleValueChange}
//         selectedValue={selectedValue}
//         setSelectedValue={setSelectedValue}
//         backgroundColor="#f8f8f8"
//         color="#000"
//         placeholder="Select an option"
//       />
//     </div>
//   );
// };

// export default TimeDropDown;
