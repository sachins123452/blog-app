// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

import {
  AssignmentOutlined,
  ShoppingCartOutlined,
  GridViewOutlined,
  BusinessCenterOutlined,
  InventoryOutlined,
  LogoutOutlined,
  AccountCircleOutlined,
  AssessmentOutlined,
  NewReleasesOutlined
} from '@mui/icons-material';

const icons = {
  LoginOutlined,
  ProfileOutlined,
  AssignmentOutlined,
  ShoppingCartOutlined,
  GridViewOutlined,
  BusinessCenterOutlined,
  InventoryOutlined,
  LogoutOutlined,
  AccountCircleOutlined,
  AssessmentOutlined,
  NewReleasesOutlined
};

function createMenuItem({ id, title, icon, url, subitems = [] }) {
  return {
    id,
    title,
    type: 'item',
    icon: icons[icon],
    url: url,
    breadcrumbs: true,
    subitems: subitems.map((subitem) => createMenuItem({ id: subitem.id, title: subitem.title, url: subitem.url }))
  };
}

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'DMS',
  title: 'DMS',
  type: 'group',
  children: [
    {
      id: 'dashboard1',
      title: 'Dashboard',
      type: 'item',
      url: '/',
      icon: icons.GridViewOutlined
    },
    createMenuItem({
      id: 'purchase',
      title: 'Purchase',
      icon: 'ShoppingCartOutlined',
      url: '/dashboard/Purchase',
      subitems: [
        { id: 'Invoice Due', title: 'Invoice Due', url: '/dashboard/InvoiceDueScreen' },
        { id: 'GRN', title: 'GRN', url: '/dashboard/GRNScreen' },
        { id: 'Return Request', title: 'Return Request', url: '/dashboard/ReturnRequest' }
      ]
    }),
    createMenuItem({
      id: 'sales',
      title: 'Sales',
      icon: 'BusinessCenterOutlined',
      url: '/dashboard/Sales',
      subitems: [
        { id: 'Invoices', title: 'Invoices', url: '/dashboard/Invoice' },
        { id: 'Return request', title: 'Return request', url: '/dashboard/SalesReturn' }
      ]
    }),
    createMenuItem({
      id: 'inventory',
      title: 'Inventory',
      icon: 'InventoryOutlined',
      url: '/dashboard/Inventory',
      subitems: [
        { id: 'Stock Transfer', title: 'Stock Transfer', url: '/dashboard/StockTransfer' }
        // { id: 'GRN', title: 'GRN' },
        // { id: 'Return Request', title: 'Return Request' }
      ]
    }),
    createMenuItem({ id: 'customer-master', title: 'Outlet Master', icon: 'AccountCircleOutlined', url: '/dashboard/OutletMaster' }),
    createMenuItem({ id: 'schemes-offers', title: 'Schemes & Offers', icon: 'NewReleasesOutlined', url: '/dashboard/Schemes_Offers' }),
    createMenuItem({
      id: 'dsr',
      title: 'DSR',
      icon: 'NewReleasesOutlined',
      url: '/dashboard/DSR',
      subitems: [
        { id: 'Beat Management', title: 'Beat Management', icon: 'SomeIcon', url: '/dashboard/BeatManagement' },
        { id: 'Expense Management', title: 'Expense Management', icon: 'AnotherIcon', url: '/dashboard/ExpenseManagement' }
      ]
    }),
    createMenuItem({ id: 'report', title: 'Report', icon: 'AssessmentOutlined', url: '/dashboard/customer' }),
    createMenuItem({ id: 'case-tickets', title: 'Case & Tickets', icon: 'AssignmentOutlined', url: '/dashboard/CaseTicketScreen' }),
    createMenuItem({ id: 'logout', title: 'Logout', icon: 'LogoutOutlined' })
  ]
};

export default pages;
