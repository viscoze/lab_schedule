class SubjectsController < ApplicationController
  def index
    @subjects = Subject.all.order('id ASC')
  end

  def new
    @subject = Subject.new
  end

  def create
    @subject  = Subject.new subject_params
    if @subject.save
      redirect_to root_url
    else
      render :new
    end
  end

  def destroy
    @subject = Subject.find(params[:id])
    @subject.destroy
    redirect_to root_url
  end

  private

  def subject_params
    params.require(:subject).permit(:title, :description, :quantity_of_labs:,
                                    :deadline, :priority)
  end
end
