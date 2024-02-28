import PropTypes from 'prop-types';
import React, { forwardRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Typography } from '@mui/material';
import { activeItem } from 'store/reducers/menu';
import { API } from 'api/API';
import { showDanger, showSuccess } from 'components/nudges/Alert';
import { useNavigate } from 'react-router-dom';
import useApiCall from 'api/useApiCall';
import { updateAuth } from 'store/reducers/auth';



const NavItem = ({ item, level }) => {
  const [openSubItems, setOpenSubItems] = useState(false);
  const navigate = useNavigate();
  const {makeRequest}=useApiCall()
  const handleSubItemsToggle = () => {
    setOpenSubItems(!openSubItems);
  };

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const  {drawerOpen,openItem}  = useSelector((state) => state.persistedReducer.menu);

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps = { component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />) };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const itemHandler = (id) => {
    dispatch(activeItem({ openItem: [id] }));
  };

  const Icon = item.icon;
  const itemIcon = item.icon ? <Icon style={{ fontSize: drawerOpen ? '1rem' : '1.25rem' }} /> : false;

  const isSelected = openItem.findIndex((id) => id === item.id) > -1;
  
  useEffect(() => {
    // 
    if (item.title == 'Dashboard') {
      dispatch(activeItem({ openItem: ['dashboard1'] }));
    }
  }, []);

  const textColor = '#BABABA';
  const iconSelectedColor = '#1EA14C';
  const handleLogout = async () => {
    try {
      let res = await makeRequest({ method: 'GET', url: API.logout });
      console.log('resssssssssss', res);
      if (res?.statusCode == 200) {
        localStorage.removeItem('@login');
        localStorage.removeItem('@user')
        dispatch(updateAuth({ status: false }));
        showSuccess('Logout successfully');
        navigate('/Login');
      } else {
        showDanger(`${res?.message}`);
      }
    } catch (e) {
      showDanger(`${e}`);
    }
  };
  

  return (
    <>
      <ListItemButton
        {...listItemProps}
        disabled={item.disabled}
        onClick={() => {
          if (item.title === 'Logout') {
            handleLogout();
          } else {
            itemHandler(item.id);
            handleSubItemsToggle();
          }
        }}
        selected={isSelected}
        sx={{
          zIndex: 1201,
          pl: drawerOpen ? `${level * 28}px` : 1.5,
          py: !drawerOpen && level === 1 ? 1.25 : 1,
          ...(drawerOpen && {
            '&:hover': {
              bgcolor: '#F5FCF8'
            },
            '&.Mui-selected': {
              bgcolor: '#F5FCF8',
              borderRadius: '15px',
              // borderRight: '2px solid #000',
              color: iconSelectedColor,
              '&:hover': {
                color: iconSelectedColor,
                bgcolor: '#F5FCF8'
              }
            }
          }),
          ...(!drawerOpen && {
            '&:hover': {
              bgcolor: 'transparent'
            },
            '&.Mui-selected': {
              '&:hover': {
                bgcolor: 'transparent'
              },
              bgcolor: 'transparent'
            }
          })
        }}
      >
        {itemIcon && (
          <ListItemIcon
            sx={{
              minWidth: 28,
              color: isSelected ? iconSelectedColor : textColor,
              ...(!drawerOpen && {
                borderRadius: 1.5,
                width: 36,
                height: 36,
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  bgcolor: 'secondary.lighter'
                }
              }),
              ...(!drawerOpen &&
                isSelected && {
                  bgcolor: 'primary.lighter',
                  '&:hover': {
                    bgcolor: 'primary.lighter'
                  }
                })
            }}
          >
            {itemIcon}
          </ListItemIcon>
        )}
        {(drawerOpen || (!drawerOpen && level !== 1)) && (
          <ListItemText
            primary={
              <Typography
                variant="h6"
                sx={{ color: isSelected ? iconSelectedColor : textColor }}
                style={{ fontSize: 13, fontWeight: '500' }}
              >
                {item.title}
              </Typography>
            }
          />
        )}
      </ListItemButton>
      {item.subitems && (
        <Collapse in={openSubItems} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.subitems.map((subitem) => (
              <NavItem key={subitem.id} item={subitem} level={level + 1} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number
};

export default NavItem;
