import { lazy } from "react";
const Home = lazy(() => import("../../views/Home"));
const SellerDashboard = lazy(() => import("../../views/seller/SellerDashboard"));
const AddProduct = lazy(() => import("../../views/seller/AddProduct"));
const AllProduct = lazy(() => import("../../views/seller/AllProduct"));
const DiscountProduct = lazy(() => import("../../views/seller/DiscountProduct"));
const Orders = lazy(() => import("../../views/seller/Orders"));
const Payments = lazy(() => import("../../views/seller/Payments"));

export const sellerRoute = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard/all-products",
    element: <AllProduct />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard/discount-products",
    element: <DiscountProduct />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard/orders",
    element: <Orders />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard/payements",
    element: <Payments />,
    ability: ["admin", "seller"],
  },
];