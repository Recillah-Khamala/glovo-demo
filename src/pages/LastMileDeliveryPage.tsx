import { useState, useEffect, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchOffices } from '@/store/slices/officesSlice'
import { createOrder } from '@/store/slices/ordersSlice'
import { setMockUser } from '@/store/slices/userSlice'

const LastMileDeliveryPage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { offices, isLoading: officesLoading } = useAppSelector(
    (state) => state.offices
  )
  const { isLoading: orderLoading, error: orderError } = useAppSelector(
    (state) => state.orders
  )
  const { currentUser } = useAppSelector((state) => state.user)

  const [formData, setFormData] = useState({
    office_id: '',
    package_description: '',
    weight: '',
    delivery_address: '',
  })

  useEffect(() => {
    if (!currentUser) {
      dispatch(setMockUser())
    }
    dispatch(fetchOffices())
  }, [dispatch, currentUser])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!currentUser) return

    const payload = {
      user_id: currentUser.id,
      office_id: parseInt(formData.office_id),
      package_description:
        formData.package_description,
      weight: parseFloat(formData.weight),
      delivery_address: formData.delivery_address,
    }

    try {
      const result = await dispatch(createOrder(payload))
      if (createOrder.fulfilled.match(result)) {
        navigate(`/tracking/${result.payload.id}`)
      }
    } catch (error) {
      console.error('Failed to create order:', error)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Request Last-Mile Delivery
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Office Selection */}
          <div>
            <label
              htmlFor="office_id"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select Transport Office
            </label>
            <select
              id="office_id"
              value={formData.office_id}
              onChange={(e) =>
                setFormData({ ...formData, office_id: e.target.value })
              }
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Choose an office...</option>
              {officesLoading ? (
                <option disabled>Loading offices...</option>
              ) : (
                offices.map((office) => (
                  <option key={office.id} value={office.id}>
                    {office.name} - {office.location}
                  </option>
                ))
              )}
            </select>
          </div>

          {/* Package Description */}
          <div>
            <label
              htmlFor="package_description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Package Description
            </label>
            <textarea
              id="package_description"
              value={formData.package_description}
              onChange={(e) =>
                setFormData({ ...formData, package_description: e.target.value })
              }
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              placeholder="Describe your package..."
            />
          </div>

          {/* Weight */}
          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              value={formData.weight}
              onChange={(e) =>
                setFormData({ ...formData, weight: e.target.value })
              }
              required
              min="0.1"
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              placeholder="0.0"
            />
          </div>

          {/* Delivery Address */}
          <div>
            <label
              htmlFor="delivery_address"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Delivery Address
            </label>
            <textarea
              id="delivery_address"
              value={formData.delivery_address}
              onChange={(e) =>
                setFormData({ ...formData, delivery_address: e.target.value })
              }
              required
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              placeholder="Enter delivery address..."
            />
          </div>

          {/* Error Message */}
          {orderError && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <p className="text-sm text-red-700">{orderError}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={orderLoading || officesLoading}
              className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {orderLoading ? 'Creating...' : 'Create Order'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LastMileDeliveryPage

