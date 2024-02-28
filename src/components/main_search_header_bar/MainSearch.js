import React from 'react';
import './MainSearch.css';
import '../dropdown/DropDown.css';
import DropDown from 'components/dropdown/DropDown';
import '../../assets/fonts/Fonts.css';
import { useTheme } from 'components/Theme/ThemeProvider';
import AutoCompleteDropdown from 'components/dropdown/AutoCompleteDropdown';

const MainSearch = ({ options, height }) => {
  const { currentTheme } = useTheme();
  return (
    <div className="cardd" style={{ height: height, backgroundColor: currentTheme.cardColor  }}>
          <div className="content_main_search_component">
            {options == null && options.length==0 && <div>Content Here</div>}
            {
              options.map(dropdown=>{
                if(!dropdown?.isAutoComplete){
                  return(
                    <DropDown
                     key={dropdown.id}
                     onValueChange={(selectedItem) => dropdown.handleValueChange(selectedItem)}
                     options={dropdown.options}
                     selectedValue={dropdown.selectedValues}
                     setSelectedValue={dropdown.setSelectedValue}
                     placeholder={`Select ${dropdown.label}`}
                     paddingVertical={0}
                     radius={10}
                     itemHeight={21}
                     left={null}
                     right={null}
    
                  />
                  )
                }else{
                  return(
                    <AutoCompleteDropdown
                    key={dropdown.id}
                    onChange={(selectedItem) => dropdown.handleValueChange(selectedItem)}
                    options={dropdown.options}
                    selectedValue={dropdown.selectedValues}
                    setSelectedValue={dropdown.setSelectedValue}
                    label="Warehouse"
                    width={220}
                    // height={35}
                    borderRadius={10}
                  />
                  )
                }
               
                
              })
            }
        </div> 
    </div>
  );
};

export default MainSearch;

MainSearch.defaultProps = {
  height:'auto',
  options:null,
  handleValueChange:()=>{},
  selectedValue:null,
  setSelectedValue:null
};


