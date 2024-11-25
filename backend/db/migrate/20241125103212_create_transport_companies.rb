class CreateTransportCompanies < ActiveRecord::Migration[8.0]
  def change
    create_table :transport_companies do |t|
      t.string :name
      t.string :location
      t.jsonb :operating_hours

      t.timestamps
    end
  end
end
