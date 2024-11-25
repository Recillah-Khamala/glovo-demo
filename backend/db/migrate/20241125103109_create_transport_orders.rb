class CreateTransportOrders < ActiveRecord::Migration[8.0]
  def change
    create_table :transport_orders do |t|
      t.string :pickup_location
      t.string :delivery_location
      t.string :package_size
      t.string :status
      t.decimal :price

      t.timestamps
    end
  end
end
