class CreateLabs < ActiveRecord::Migration
  def change
    create_table :labs do |t|
      t.string :title
      t.text :description
      t.boolean :done
      t.boolean :pass
      t.date :deadline

      t.timestamps null: false
    end
  end
end
