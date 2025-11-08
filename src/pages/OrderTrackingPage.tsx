import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchOrderById } from '@/store/slices/ordersSlice'
import { OrderStatus } from '@/types'

const OrderTrackingPage = () => {
  const { orderId } = useParams<{ orderId: string }>()
  const dispatch = useAppDispatch()
  const { currentOrder, isLoading, error } = useAppSelector(
    (state) => state.orders
  )

  useEffect(() => {
    if (orderId) {
      dispatch(fetchOrderById(parseInt(orderId)))
    }
  }, [dispatch, orderId])

  const getStatusInfo = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.PENDING:
        return {
          label: 'Pending',
          color: 'bg-yellow-100 text-yellow-800',
          icon: '⏳',
          description: 'Your order is being processed',
        }
      case OrderStatus.PICKED:
        return {
          label: 'Picked Up',
          color: 'bg-blue-100 text-blue-800',
          icon: '📦',
          description: 'Package has been picked up from the office',
        }
      case OrderStatus.IN_TRANSIT:
        return {
          label: 'In Transit',
          color: 'bg-purple-100 text-purple-800',
          icon: '🚚',
          description: 'Your package is on the way',
        }
      case OrderStatus.DELIVERED:
        return {
          label: 'Delivered',
          color: 'bg-green-100 text-green-800',
          icon: '✅',
          description: 'Package has been delivered',
        }
      default:
        return {
          label: 'Unknown',
          color: 'bg-gray-100 text-gray-800',
          icon: '❓',
          description: 'Status unknown',
        }
    }
  }

  const getStatusSteps = (status: OrderStatus) => {
    const steps = [
      { key: OrderStatus.PENDING, label: 'Pending' },
      { key: OrderStatus.PICKED, label: 'Picked Up' },
      { key: OrderStatus.IN_TRANSIT, label: 'In Transit' },
      { key: OrderStatus.DELIVERED, label: 'Delivered' },
    ]

    const currentIndex = steps.findIndex((s) => s.key === status)

    return steps.map((step, index) => ({
      ...step,
      completed: index <= currentIndex,
      current: index === currentIndex,
    }))
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-gray-500">Loading order details...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-red-900 mb-2">Error</h2>
          <p className="text-red-700">{error}</p>
          <Link
            to="/"
            className="mt-4 inline-block text-primary-600 hover:text-primary-700"
          >
            ← Back to Profile
          </Link>
        </div>
      </div>
    )
  }

  if (!currentOrder) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-gray-500">Order not found</p>
          <Link
            to="/"
            className="mt-4 inline-block text-primary-600 hover:text-primary-700"
          >
            ← Back to Profile
          </Link>
        </div>
      </div>
    )
  }

  const statusInfo = getStatusInfo(currentOrder.status)
  const statusSteps = getStatusSteps(currentOrder.status)

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Order Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Order Tracking</h2>
            <p className="text-sm text-gray-500 mt-1">
              Tracking Code: <span className="font-mono font-semibold">{currentOrder.tracking_code}</span>
            </p>
          </div>
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color}`}
          >
            <span className="mr-2">{statusInfo.icon}</span>
            {statusInfo.label}
          </span>
        </div>
      </div>

      {/* Status Timeline */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Delivery Status</h3>
        <div className="space-y-4">
          {statusSteps.map((step, index) => (
            <div key={step.key} className="flex items-start">
              <div className="flex-shrink-0">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step.completed
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step.completed ? '✓' : index + 1}
                </div>
              </div>
              <div className="ml-4 flex-1">
                <p
                  className={`text-sm font-medium ${
                    step.completed ? 'text-gray-900' : 'text-gray-500'
                  }`}
                >
                  {step.label}
                </p>
                {step.current && (
                  <p className="text-xs text-gray-500 mt-1">{statusInfo.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Details */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Package Description</p>
            <p className="text-gray-900 mt-1">{currentOrder.package_description}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Weight</p>
            <p className="text-gray-900 mt-1">{currentOrder.weight} kg</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Delivery Address</p>
            <p className="text-gray-900 mt-1">{currentOrder.delivery_address}</p>
          </div>
          {currentOrder.estimated_cost && (
            <div>
              <p className="text-sm font-medium text-gray-500">Estimated Cost</p>
              <p className="text-gray-900 mt-1">
                ${currentOrder.estimated_cost.toFixed(2)}
              </p>
            </div>
          )}
          {currentOrder.estimated_time && (
            <div>
              <p className="text-sm font-medium text-gray-500">Estimated Time</p>
              <p className="text-gray-900 mt-1">
                {Math.floor(currentOrder.estimated_time / 60)}h{' '}
                {currentOrder.estimated_time % 60}m
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end space-x-4">
        <Link
          to="/"
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Back to Profile
        </Link>
        <Link
          to="/delivery"
          className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
        >
          New Delivery
        </Link>
      </div>
    </div>
  )
}

export default OrderTrackingPage

