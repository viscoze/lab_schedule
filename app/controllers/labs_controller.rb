class LabsController < ApplicationController
  def new
    @lab = Lab.new
  end

  def create
    @lab = Lab.new lab_params

    if @lab.save
      redirect_to root_url
    else
      render :new
    end
  end

  def edit
    @lab = Lab.find(params[:id])
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
    @lab = Lab.find(params[:id])
    @lab.destroy
    redirect_to root_url
  end

  private

  def lab_params
    params.require(:lab).permit()
  end
end
