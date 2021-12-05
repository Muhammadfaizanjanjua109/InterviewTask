import React from 'react'

function JobInformation({model,handleChange,validation}) {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="lookingFor">Looking For</label>
            <span className="text-danger">*</span>
            <input
              type="text"
              className="form-control"
              id="lookingFor"
              name="lookingFor"
              value={model.lookingFor}
              onChange={handleChange}
            />
            {validation.vallookingFor}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="experience">Experience:</label>
            <span className="text-danger">*</span>

            <input
              type="text"
              className="form-control"
              id="experience"
              name="experience"
              value={model.experience}
              onChange={handleChange}
            />
            {validation.valexperience}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="education">Education:</label>
            <input
              type="text"
              className="form-control"
              id="education"
              name="education"
              value={model.education}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="skills">Skills:</label>
            <input
              type="text"
              className="form-control"
              id="skills"
              name="skills"
              value={model.skills}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="usr">Description:</label>
            <textarea
              cols={3}
              rows={3}
              className="form-control"
              id="description"
              name="description"
              value={model.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              value={model.image}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default JobInformation
