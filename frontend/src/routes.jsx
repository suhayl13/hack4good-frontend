import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"; // Common login page
import ResidentDashboard from "./pages/resident/Dashboard";
import VoucherRequest from "./pages/resident/VoucherRequest";
import RequestItem from "./pages/resident/RequestItem";
import PreOrderItem from "./pages/resident/PreOrderItem";
import TransactionHistory from "./pages/resident/FullTransactionHistory";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserManagement from "./pages/admin/UserManagement";
import InventoryManagement from "./pages/admin/InventoryManagement";
import RequestManagement from "./pages/admin/RequestManagement";
import Reports from "./pages/admin/Reports";
import AddUser from "./pages/admin/AddUser";
import ResetPassword from "./pages/admin/ResetPassword";
import SuspendUser from "./pages/admin/SuspendUser";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Shared Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Resident Routes */}
        <Route path="/resident/dashboard" element={<ResidentDashboard />} />
        <Route path="/resident/vouchers" element={<VoucherRequest />} />
        <Route path="/resident/RequestItem" element={<RequestItem />} />
        <Route path="/resident/PreOrderItem" element={<PreOrderItem />} />
        <Route path="/resident/TransactionHistory" element={<TransactionHistory />} />


        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/inventory" element={<InventoryManagement />} />
        <Route path="/admin/requests" element={<RequestManagement />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/add-user" element={<AddUser />} />
        <Route path="/admin/suspend-user" element={<SuspendUser />} />
        <Route path="/admin/reset-password" element={<ResetPassword />} />
        <Route path="/admin/reports" element={<Reports />} />


        {/* Default Route */}
        <Route path="/" element={<Login />} />
        
      </Routes>
    </Router>
  );
}

export default AppRoutes;
