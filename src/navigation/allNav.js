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
    path: "/admin/dashboard/live-chat",
  }
];
