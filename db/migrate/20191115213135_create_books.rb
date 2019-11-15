class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.integer :ISBN
      t.string :title
      t.string :description
      t.string :link

      t.timestamps
    end
  end
end
