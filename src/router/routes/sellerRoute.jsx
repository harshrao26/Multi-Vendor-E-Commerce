import { lazy } from "react";

const Home = lazy(() => import("../../views/Home"));
const SellerDashboard = lazy(() =>
  import("../../views/seller/SellerDashboard")
);
const AddProduct = lazy(() => import("../../views/seller/AddProduct"));
const AllProduct = lazy(() => import("../../views/seller/AllProduct"));
const DiscountProduct = lazy(() =>
  import("../../views/seller/DiscountProduct")
);
const Orders = lazy(() => import("../../views/seller/Orders"));
const Payments = lazy(() => import("../../views/seller/Payments"));
const SellerToAdmin = lazy(() => import("../../views/seller/SellerToAdmin"));
const Profile = lazy(() => import("../../views/seller/Profile"));
const SellerToCustomer = lazy(() => import("../../views/seller/SellerToCustomer"));
const EditProduct = lazy(() => import("../../views/seller/EditProduct"));
const OrdersDetails = lazy(() => import("../../views/seller/OrdersDetails.jsx"));

export const sellerRoute = [
  
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard/edit-product/:productId",
    element: <EditProduct />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard/all-products",
    element: <AllProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/discount-products",
    element: <DiscountProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/orders",
    element: <Orders />,
    role: "seller",
    status: ["deactive", "active"],
  },
  {
    path: "/seller/dashboard/orders/details/:orderId",
    element: <OrdersDetails/>,
    role: "seller",
    status: ["deactive", "active"],
  },
  {
    path: "/seller/dashboard/payements",
    element: <Payments />,
    ability: [ "seller"],
  },
  {
    path: "/seller/dashboard/chat-support",
    element: <SellerToAdmin />,
    role: "seller",
    status: ["deactive", "active", 'pending'],
  },
  {
    path: "/seller/dashboard/chat-customer/:customerId",
    element: <SellerToCustomer />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-customers",
    element: <SellerToCustomer />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/profile",
    element: <Profile />,
    role: "seller",
    status: "active",
  },
];
