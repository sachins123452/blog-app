import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { Navigate,createBrowserRouter } from 'react-router-dom';
import Purchase from 'modules/purchase/pages/Purchase';
import Login from '../pages/authentication/Login';
// import CaseTickets_Screen from 'modules/casetickets/pages/CaseTickets_Screen';
import AddProducts from 'modules/purchase/pages/AddProducts';
import { getValueFromRedux } from 'helper/utils';

import Rightsidebar from 'components/rightsidebar/Rightsidebar';
import MyCart from 'pages/mycart/MyCart';
import GRNScreen from 'modules/GRN/pages/GRNScreen';
import GRNpending from 'modules/GRN/pages/GRNpending';
import InvoiceDueScreen from 'modules/invoice/pages/PurchaseInvoice';
import ReturnRequest from 'modules/returnrequest/pages/PurchaseReturnRequest';
// import Sales from 'pages/sales/salesscreen/Sales';
// import Invoice from 'pages/sales/invoicescreen/Invoice';
// import Request from 'pages/sales/returnrequestscreen/Returnrequest';
// import OrderView from 'pages/purchase/orderView/OrderView';
import PurchaseSchemaOffer from 'components/purchase_schema_offer/PurchaseSchemaOffer';
import Inventory from '../modules/inventory/pages/Inventory';
import StockTransfer from '../modules/stockTransfer/pages/StockTransfer';
import StockTransferDetail from 'pages/inventory/StockTransferDetail';
// import CustomStepper from 'components/Stepper/Test';

import ReturnRequest_OrderView from 'modules/returnrequest/pages/PurchaseReturnRequestOrderView';
import Schemes_Offers from 'pages/schemesOffers/Schemes_Offers';
import OutletMaster from 'pages/outletMaster/OutletMaster';
import OutletMaster360View from 'pages/outletMaster/OutletMaster360View';
import AddOutlet from 'pages/outletMaster/AddOutlet';
// import OutletDetail from 'components/outletmastercomponents/OutletDetail';
import OutletDetailGraph from 'components/outletmastercomponents/OutletDetailGraph';
// import ChooseProduct from 'pages/sales/returnrequestscreen/ChooseProduct';
import AllProductInventory from 'pages/inventory/AllProductInventory';
// import SalesOrderView from 'pages/sales/salesscreen/SalesOrderView';
import ViewReturnProducts from 'pages/inventory/ViewReturnProducts';
import BeatManagement from 'pages/dsr/screens/distributor_sales_representatives/BeatManagement';
import ViewBeats from 'pages/dsr/screens/distributor_sales_representatives/ViewBeats';
import ExpenseManagement from 'pages/dsr/screens/distributor_sales_representatives/ExpenseManagement';

import Invoice from 'modules/invoice/pages/SalesInvoice';
import SalesOrderView from 'modules/sales/pages/SalesOrderView';

// import ChooseProduct from 'pages/sales/screens/returnrequest/ChooseProduct';
import SalesChooseProduct from 'modules/returnrequest/pages/SalesChooseProduct';
import AuthRoute from './AuthRoute';
import DSR from 'pages/dsr/screens/DSR';
import DSR360View from 'pages/dsr/screens/DSR360View';
import OrderView from 'modules/purchase/pages/PurchaseOrderView';
import Sales from 'modules/sales/pages/Sales';
import SalesReturn from 'modules/returnrequest/pages/SalesReturn';
import AddInventory from 'modules/inventory/pages/AddInventory';
import CaseTicketScreen from 'modules/casetickets/pages/CaseTicketScreen';
import CreateStockTransfer from 'modules/stockTransfer/pages/CreateStockTransfer';



// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// const Color = Loadable(lazy(() => import('pages/components-overview/Color')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = () => {
  const { isLogin } = getValueFromRedux('auth');
  console.log('User Login Line 22 ---->', isLogin);
  
  return {
    path: '/',
    element:<AuthRoute component={<MainLayout />} />,
    children: [
      {
        path: '/',
        element:<AuthRoute component={<DashboardDefault />} />
      },
      {
        path: 'dashboard',
        children: [
          {
            path: 'default',
            element: isLogin ? <DashboardDefault /> : <Navigate to="login" />
          },
          {
            path: 'purchase',
            element: <Purchase />
          },
          {
            path: 'AddProducts',
            element: <AddProducts />
          },
          {
            path: 'Login',
            element: <Login />
          },
          {
            path: 'CaseTicketScreen',
            element: <CaseTicketScreen />
          },
          {
            path: 'Rightsidebar',
            element: <Rightsidebar />
          },
          {
            path: 'GRNScreen',
            element: <GRNScreen />
          },
          {
            path: 'GRNpending',
            element: <GRNpending />
          },
          {
            path: 'InvoiceDueScreen',
            element: <InvoiceDueScreen />
          },
          {
            path: 'ReturnRequest',
            element: <ReturnRequest />
          },
          {
            path: 'Sales',
            element: <Sales/>
          },
          {
            path: 'Invoice',
            element: <Invoice/>
          },
          {
            path: 'SalesReturn',
            element: <SalesReturn/>
          },
          {
            path: 'OrderView',
            element: <OrderView />
          },
          {
            path: 'PurchaseSchemaOffer',
            element: <PurchaseSchemaOffer />
          },
          {
            path: 'Inventory',
            element: <Inventory />
          },
          {
            path: 'StockTransfer',
            element: <StockTransfer />
          },
          {
            path: 'StockTransferDetail',
            element: <StockTransferDetail />
          },
          {
            path: 'CreateStockTransfer',
            element: <CreateStockTransfer/>
          },
          {
            path: 'AddInventory',
            element: <AddInventory/>
          },
          {
            path: 'ViewReturnProducts',
            element: <ViewReturnProducts />
          },

          {
            path: 'ReturnRequest_OrderView',
            element: <ReturnRequest_OrderView />
          },
          {
            path: 'SalesOrderView',
            element: <SalesOrderView/>
          },

          {
            path: 'OutletMaster',
            element: <OutletMaster />
          },
          {
            path: 'OutletMaster360View',
            element: <OutletMaster360View />
          },
          
          {
            path: 'OutletDetailGraph',
            element: <OutletDetailGraph />
          },
          {
            path: 'MyCart',
            element: <MyCart />
          },
          {
            path: 'SalesChooseProduct',
            element: <SalesChooseProduct/>
          },
          {
            path: 'Schemes_Offers',
            element: <Schemes_Offers />
          },

          {
            path: 'OutletMaster',
            element: <OutletMaster />
          },
          {
            path: 'OutletMaster360View',
            element: <OutletMaster360View />
          },
          {
            path: 'AddOutlet',
            element: <AddOutlet />
          },
          {
            path: 'OutletDetailGraph',
            element: <OutletDetailGraph />
          },
          {
            path: 'MyCart',
            element: <MyCart />
          },
          {
            path: 'DSR',
            element: <DSR />
          },
          {
            path: 'DSR360View',
            element: <DSR360View />
          },
          {
            path: 'BeatManagement',
            element: <BeatManagement />
          },
          {
            path: 'ViewBeats',
            element: <ViewBeats />
          },
          {
            path: 'ExpenseManagement',
            element: <ExpenseManagement />
          }
        ]
      }
    ]
  };
};
export default MainRoutes;
