import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import UserProfilePage from './pages/UserProfilePage'
import LastMileDeliveryPage from './pages/LastMileDeliveryPage'
import OrderTrackingPage from './pages/OrderTrackingPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<UserProfilePage />} />
        <Route path="/delivery" element={<LastMileDeliveryPage />} />
        <Route path="/tracking/:orderId" element={<OrderTrackingPage />} />
      </Routes>
    </Layout>
  )
}

export default App

