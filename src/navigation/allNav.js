import { MdOutlineDashboard } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdCategory } from "react-icons/md"; // Import a valid icon

export const allNav = [
  {
    id: 1,
    title: "Dashboard",
    icon: MdOutlineDashboard,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: 2,
    title: "Order",
    icon: IoCartOutline,
    role: "admin",
    path: "/admin/dashboard/orders",
  },
  {
    id: 3,
    title: "Category",
    icon: MdCategory,
    role: "admin",
    path: "/admin/dashboard/category",
  },
  {
    id: 4,
    title: "Sellers",
    icon: MdCategory,
    role: "admin",
    path: "/admin/dashboard/sellers",
  },
  {
    id: 5,
    title: "Payment Requests",
    icon: MdCategory,
    role: "admin",
    path: "/admin/dashboard/payment-request",
  },
  {
    id: 6,
    title: "Deactive Sellers",
    icon: MdCategory,
    role: "admin",
    path: "/admin/dashboard/deactive-sellers",
  },
  {
    id: 7,
    title: "Seller Requests",
    icon: MdCategory,
    role: "admin",
    path: "/admin/dashboard/seller-requests",
  },
  {
    id: 8,
    title: "Live Chat",
    icon: MdCategory,
    role: "admin",
    path: "/admin/dashboard/chat-sellers",
  },


  // Seller
  {
    id: 9,
    title: "Dashboard",
    icon: MdOutlineDashboard,
    role: "seller",
    path: "/seller/dashboard",
  },
  {
    id: 10,
    title: "Add Product",
    icon: MdOutlineDashboard,
    role: "seller",
    path: "/seller/dashboard/add-product",
  },
  {
    id: 11,
    title: "All Products",
    icon: MdOutlineDashboard,
    role: "seller",
    path: "/seller/dashboard/all-products",
  },
  {
    id: 12,
    title: "Discount Products",
    icon: MdOutlineDashboard,
    role: "seller",
    path: "/seller/dashboard/discount-products",
  },
  {
    id: 13,
    title: "Orderes ",
    icon: MdOutlineDashboard,
    role: "seller",
    path: "/seller/dashboard/orders",
  },
  {
    id: 14,
    title: "Payments",
    icon: MdOutlineDashboard,
    role: "seller",
    path: "/seller/dashboard/payements",
  },
  {
    id: 15,
    title: "Chat Customers",
    icon: MdOutlineDashboard,
    role: "seller",
    path: "/seller/dashboard/chat-customers",
  },
  {
    id: 16,
    title: "Chat Support",
    icon: MdOutlineDashboard,
    role: "seller",
    path: "/seller/dashboard/chat-support",
  },
  {
    id: 16,
    title: "Profile",
    icon: MdOutlineDashboard,
    role: "seller",
    path: "/seller/dashboard/profile",
  },
];
