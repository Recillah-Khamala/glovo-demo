import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setMockUser, fetchUserOrders } from '@/store/slices/userSlice'
import { OrderStatus } from '@/types'

const UserProfilePage = () => {
  const dispatch = useAppDispatch()
  const { currentUser, userOrders, isLoading, error } = useAppSelector(
    (state) => state.user
  )

  useEffect(() => {
    if (!currentUser) {
      dispatch(setMockUser())
    }
    if (currentUser) {
      dispatch(fetchUserOrders(currentUser.id))
    }
  }, [dispatch, currentUser])

  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.PENDING:
        return 'bg-yellow-100 text-yellow-800'
      case OrderStatus.PICKED:
        return 'bg-blue-100 text-blue-800'
      case OrderStatus.IN_TRANSIT:
        return 'bg-purple-100 text-purple-800'
      case OrderStatus.DELIVERED:
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (!currentUser) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-gray-500">Loading user...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* User Info Card */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">User Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Name</p>
            <p className="text-lg text-gray-900">{currentUser.name}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Email</p>
            <p className="text-lg text-gray-900">{currentUser.email}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Phone</p>
            <p className="text-lg text-gray-900">{currentUser.phone}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Address</p>
            <p className="text-lg text-gray-900">{currentUser.address}</p>
          </div>
        </div>
        <div className="mt-6">
          <Link
            to="/delivery"
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
          >
            Request New Delivery
          </Link>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Deliveries</h2>
        {isLoading && (
          <div className="text-center py-8 text-gray-500">Loading orders...</div>
        )}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-700">
            {error}
          </div>
        )}
        {!isLoading && !error && userOrders.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No orders yet. Create your first delivery!
          </div>
        )}
        {!isLoading && !error && userOrders.length > 0 && (
          <div className="space-y-4">
            {userOrders.map((order) => (
              <Link
                key={order.id}
                to={`/tracking/${order.id}`}
                className="block border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{order.package_description}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Tracking: {order.tracking_code}
                    </p>
                    <p className="text-sm text-gray-500">
                      To: {order.delivery_address}
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status.replace('_', ' ').toUpperCase()}
                    </span>
                    {order.estimated_cost && (
                      <p className="text-sm font-medium text-gray-900 mt-1">
                        ${order.estimated_cost.toFixed(2)}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default UserProfilePage

