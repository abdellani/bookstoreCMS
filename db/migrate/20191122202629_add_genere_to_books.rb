class AddGenereToBooks < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :genere_id, :integer
    add_foreign_key :books, :genere
  end
end
