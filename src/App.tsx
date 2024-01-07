import DashboardLayout from './layouts/dashboard-layout';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/main';
import ClaimPage from './pages/claim/claim';
import PrivateRoute from './components/common/private-route';

function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/check/claim"
          element={
            <PrivateRoute>
              <ClaimPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </DashboardLayout>
  );
}

export default App;
