class LabsController < ApplicationController
  # before_action :authenticate_user!

  def create
    @subject = Subject.find(params[:subject_id])
    @lab = @subject.labs.build lab_params

    if @lab.save
      render json: @lab
    else
      render json: { result: "fail" }
    end
  end

  def update
    @lab = Lab.find(params[:id])

    if @lab.update lab_params
      redirect_to root_url
    else
      render :edit
    end
  end

  def destroy
    @subject = Subject.find(params[:subject_id])
    @labs = @subject.labs
    @lab = Lab.find(params[:id])
    @lab.destroy
    render json: @labs
  end

  private

  def lab_params
    params.require(:lab).permit(:title, :deadline)
  end
end
