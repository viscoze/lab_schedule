class AddSubjectIdToLabs < ActiveRecord::Migration
  def change
    add_column :labs, :subject_id, :integer
  end
end
