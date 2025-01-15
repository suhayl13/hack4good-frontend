import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"; // Common login page
import ResidentDashboard from "./pages/resident/Dashboard";
import ProductCatalog from "./pages/resident/ProductCatalog";
import VoucherManagement from "./pages/resident/VoucherManagement";
import AdminDashboard from "./pages/admin/Dashboard";
import UserManagement from "./pages/admin/UserManagement";
import InventoryManagement from "./pages/admin/InventoryManagement";
import RequestManagement from "./pages/admin/RequestManagement";
import Reports from "./pages/admin/Reports";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Shared Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Resident Routes */}
        <Route path="/resident/dashboard" element={<ResidentDashboard />} />
        <Route path="/resident/catalog" element={<ProductCatalog />} />
        <Route path="/resident/vouchers" element={<VoucherManagement />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/inventory" element={<InventoryManagement />} />
        <Route path="/admin/requests" element={<RequestManagement />} />
        <Route path="/admin/reports" element={<Reports />} />

        {/* Default Route */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
