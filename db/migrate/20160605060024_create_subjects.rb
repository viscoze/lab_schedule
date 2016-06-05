class CreateSubjects < ActiveRecord::Migration
  def change
    create_table :subjects do |t|
      t.string :title
      t.integer :quantity_of_labs
      t.date :deadline
      t.integer :priority

      t.timestamps null: false
    end
  end
end
