import React from 'react'

function ShiftTimming({dayHandler,day1,day2,model,handleChange,validation}) {
  return (
    <>
      <h5 className="modal-title" id="exampleModalLabel">
        Schedule Working Day and Shift Timming
      </h5>
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <button className="btn btn-primary spacing" type="submit" disabled>
              S
            </button>
            <button
              className="btn btn-primary spacing"
              type="submit"
              onClick={() => dayHandler('M')}

              style={{backgroundColor: (day1 === 'M' || day2 === 'M') ? "red" : "gray"}}

            >
              M
            </button>
            <button
              className="btn btn-primary spacing"
              type="submit"
              onClick={() => dayHandler('T')}
              style={{backgroundColor: (day1 === 'T' || day2 === 'T') ? "red" : "gray"}}

            >
              T
            </button>
            <button
              className="btn btn-primary spacing"
              type="submit"
              onClick={() => dayHandler('W')}
            >
              W
            </button>
            <button
              className="btn btn-primary spacing"
              type="submit"
              onClick={() => dayHandler('Tu')}
            >
              T
            </button>
            <button
              className="btn btn-primary spacing"
              type="submit"
              onClick={() => dayHandler('F')}
            >
              F
            </button>{' '}
            <button className="btn btn-primary spacing" type="submit" disabled>
              S
            </button>
          </div>
        </div>

        <div className="col-md-6 my-1">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">Sunday</div>
            </div>

            <input
              type="text"
              className="form-control"
              id="sundayStTime"
              placeholder="9:00AM"
              disabled={true}
              name="sundayStTime"
              value={model.sundayStTime}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control"
              id="sundayEnTime"
              placeholder="5:00PM"
              disabled={true}
              name="sundayEnTime"
              value={model.sundayEnTime}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6 my-1">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">Monday</div>
            </div>

            <input
              disabled={day1 === 'M' || day2 === 'M' ? false : true}
              type="text"
              className="form-control"
              id="mondayStTime"
              placeholder="9:00AM"
              name="mondayStTime"
              value={model.mondayStTime}
              onChange={handleChange}
            />

            <input
              disabled={day1 === 'M' || day2 === 'M' ? false : true}
              type="text"
              className="form-control"
              id="mondayEnTime"
              placeholder="5:00PM"
              name="mondayEnTime"
              value={model.mondayEnTime}
              onChange={handleChange}
            />
            {validation.valSameTime}
          </div>
        </div>
        <div className="col-md-6 my-1">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">Tuesday</div>
            </div>
            <input
              disabled={day1 === 'T' || day2 === 'T' ? false : true}
              type="text"
              className="form-control"
              id="tuesStTime"
              placeholder="9:00AM"
              name="tuesStTime"
              value={model.tuesStTime}
              onChange={handleChange}
            />
            <input
              disabled={day1 === 'T' || day2 === 'T' ? false : true}
              type="text"
              className="form-control"
              id="tuesEnTime"
              placeholder="5:00PM"
              name="tuesEnTime"
              value={model.tuesEnTime}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6 my-1">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">Wednesday</div>
            </div>
            <input
              disabled={day1 === 'W' || day2 === 'W' ? false : true}
              type="text"
              className="form-control"
              id="wedStTime"
              placeholder="9:00AM"
              name="wedStTime"
              value={model.wedStTime}
              onChange={handleChange}
            />
            <input
              disabled={day1 === 'W' || day2 === 'W' ? false : true}
              type="text"
              className="form-control"
              id="wedEnTime"
              placeholder="5:00PM"
              name="wedEnTime"
              value={model.wedEnTime}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6 my-1">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">Thusday</div>
            </div>
            <input
              disabled={
                day1 === 'Tu' || day2 === 'Tu' ? false : true
              }
              type="text"
              className="form-control"
              id="thusStTime"
              placeholder="9:00AM"
              name="thusStTime"
              value={model.thusStTime}
              onChange={handleChange}
            />
            <input
              disabled={
                day1 === 'Tu' || day2 === 'Tu' ? false : true
              }
              type="text"
              className="form-control"
              id="thusEnTime"
              placeholder="5:00PM"
              name="thusEnTime"
              value={model.thusEnTime}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6 my-1">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">Friday</div>
            </div>
            <input
              disabled={day1 === 'F' || day2 === 'F' ? false : true}
              type="text"
              className="form-control"
              id="friStTime"
              placeholder="9:00AM"
              name="friStTime"
              value={model.friStTime}
              onChange={handleChange}
            />
            <input
              disabled={day1 === 'F' || day2 === 'F' ? false : true}
              type="text"
              className="form-control"
              id="friEnTime"
              placeholder="5:00PM"
              name="friEnTime"
              value={model.friEnTime}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6 my-1">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">Saturday</div>
            </div>
            <input
              type="text"
              className="form-control"
              id="saturStTime"
              placeholder="9:00AM"
              disabled={true}
              name="saturStTime"
              value={model.saturStTime}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control"
              id="saturEnTime"
              placeholder="5:00PM"
              disabled={true}
              name="saturEnTime"
              value={model.saturEnTime}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ShiftTimming
