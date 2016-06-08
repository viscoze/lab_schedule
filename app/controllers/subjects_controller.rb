class SubjectsController < ApplicationController
  def serialize_subject(subject)
    labs = subject.labs
    subject.as_json.merge(labs: labs.as_json)
  end

  def root
    render component: 'Layout'
  end

  def index
    @subjects = Subject.all.order('id ASC')
    subjects_with_labs = @subjects.map { |subject| serialize_subject(subject) }
    render json: subjects_with_labs
  end

  def show
    @subject = Subject.find(params[:id])
    render json: { subject: @subject, labs: @subject.labs.as_json }
  end

  def create
    @subject  = Subject.new subject_params

    if @subject.save
      render json: @subject
    else
      render json: { result: "fail" }
    end
  end

  def update
    @subject = Subject.find(params[:id])

    if @subject.update(subject_params)
      render json: @subjects
    else
      render json: { result: "fail" }
    end
  end

  def destroy
    @subject = Subject.find(params[:id])
    @subject.destroy
    render json: @subjects
  end

  private

  def subject_params
    params.require(:subject).permit(:title, :quantity_of_labs,
                                    :deadline, :priority)
  end
end
