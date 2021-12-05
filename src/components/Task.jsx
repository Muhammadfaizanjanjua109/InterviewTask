import React, { Component, useState } from "react";
import { JobData } from "./TaskData/Datajobs";
import { Modal, Button } from "react-bootstrap";
import CandidateType from "./modelComponents/CandidateType";
import JobInformation from "./modelComponents/JobInformation";
import ShiftTimming from "./modelComponents/ShiftTimming";
import { initModel } from "./TaskData/intialObject";


const initValidateModel = {
    vallookingFor: '',
    valexperience: '',
    valhourlyRate: '',
    valSameTime: '',

    isvalid: false,
  }


function Task() {
  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);setId(-1)};
  const handleShow = () => setShow(true);
  const [model, setModel] = useState(initModel);
  const [validation, setValidation] = useState(initValidateModel);
  const [modelIndex, setmodelIndex] = useState(0);
  const [JOBDAtA,SETJOBDATA]  =useState(JobData);
  const [id,setId]  =useState(-1);


  const handleNext = () => {
    var validate =validateStep();
    
    if(!validate)
    {
      let i = modelIndex + 1;
      setmodelIndex(i);
    }
  };

  const handleSave = () => {
    var validate =validateStep();
    if(!validate)
    {
      if(id==-1){
        
      let data=JOBDAtA;
      data.push(model);
      SETJOBDATA(data);
      handleClose();
      setModel(initModel);
      }
      else {
        
      let data=JOBDAtA;
      data[id]= model;
      SETJOBDATA(data);
      handleClose();
      }
    }
  };

  const handlePrevious = () => {
    let i = modelIndex - 1;
    setmodelIndex(i);
  };

  const handleChange = (e) => {
    //   later
    const { name, value } = e.target;
    console.log(value);
    let mod = {
      ...model,
      [name]: value,
    };
    console.log(mod)
    setModel(mod);
  };


const handleNumericCheck=(event)=> {
    if (event.charCode >= 48 && event.charCode <= 57) {
      return true
    } else {
      event.preventDefault()
      return false
    }
  }
const [day1,setDay1]=useState('')
const [day2,setDay2]=useState('')  

const dayClick = (value) => {
    if (day1 === '') {
      setDay1(value)
    } else if (day2 === '') {
      setDay2(value)
    }
    else{
       Math.round(Math.random()*10)%2==0? setDay2(value):setDay1(value)
    }
  }

 const validateStep = () => {
    let valModel = { ...validation }
    if (modelIndex === 0) {
      if (model.lookingFor === '') {
        valModel.vallookingFor = (
          <div className="invalid-feedback" style={{ display: 'block' }}>
            Enter Job Title
          </div>
        )
        valModel.isvalid = true
      } else {
        valModel.vallookingFor = ''
        valModel.isvalid = false
      }
      if (model.experience === '') {
        valModel.valexperience = (
          <div className="invalid-feedback" style={{ display: 'block' }}>
            Enter Experience
          </div>
        )
        valModel.isvalid = true
      } else if(!valModel.isvalid||model.lookingFor!='') {
        valModel.valexperience = ''
        valModel.isvalid = false
      }
      console.log(valModel)
      setValidation(valModel)
      if (valModel.isvalid) {
        return true
      }
      else {
        return false
      }
    }

    if (modelIndex === 1) {
      
      if (model.hourlyRate === '') {
        valModel.valhourlyRate = (
          <div className="invalid-feedback" style={{ display: 'block' }}>
            Enter Hours
          </div>
        )
        valModel.isvalid = true
      } else if (
        model.hourlyRate !== '' &&
        model.hourlyRate < 10
      ) {
        valModel.valhourlyRate = (
          <div className="invalid-feedback" style={{ display: 'block' }}>
            Value Should be greater then 10
          </div>
        )
        valModel.isvalid = true
      } else {
        valModel.valhourlyRate = ''
        valModel.isvalid = false
      }

      setValidation(valModel)
      if (valModel.isvalid) {
        return true
      }
      else {
        return false
      }
    }

    if (modelIndex === 2) {
      debugger
      if (day1 === '' || day2 === '') {
        valModel.valSameTime = (
          <div className="invalid-feedback" style={{ display: 'block' }}>
            Select at least 2 days
          </div>
        )
        valModel.isvalid = true
        setValidation(valModel);
        return true;
      } else {
        valModel.valSameTime = ''
        valModel.isvalid = false
      }
      
      if (day1 === 'M' || day2 === 'M') {
        if (
          model.mondayEnTime === '' ||
          model.mondayStTime === ''
        ) {
          valModel.valSameTime = (
            <div className="invalid-feedback" style={{ display: 'block' }}>
              Select at least 2 days
            </div>
          )
          valModel.isvalid = true;
          setValidation(valModel);
          return true;
        } else {
          valModel.valSameTime = ''
          valModel.isvalid = false
        }
      }

      if (day1 === 'T' || day2 === 'T') {
        if (
          model.tuesEnTime === '' ||
          model.tuesStTime === ''
        ) {
          valModel.valSameTime = (
            <div className="invalid-feedback" style={{ display: 'block' }}>
              Select at least 2 days
            </div>
          )
          valModel.isvalid = true;
          setValidation(valModel);
          return true;
        } else {
          valModel.valSameTime = ''
          valModel.isvalid = false
        }
      }

      if (day1 === 'W' || day2 === 'W') {
        if (
          model.wedEnTime === '' ||
          model.wedStTime === ''
        ) {
          valModel.valSameTime = (
            <div className="invalid-feedback" style={{ display: 'block' }}>
              Select at least 2 days
            </div>
          )
          valModel.isvalid = true;
          setValidation(valModel);
          return true;
        } else {
          valModel.valSameTime = ''
          valModel.isvalid = false
        }
      }
      if (day1 === 'Tu' || day2 === 'Tu') {
        if (
          model.thusEnTime === '' ||
          model.thusStTime === ''
        ) {
          valModel.valSameTime = (
            <div className="invalid-feedback" style={{ display: 'block' }}>
              Select at least 2 days
            </div>
          )
          valModel.isvalid = true
          setValidation(valModel);
          return true;
        } else {
          valModel.valSameTime = ''
          valModel.isvalid = false
        }
      }
      if (day1 === 'F' || day2 === 'F') {
        if (
          model.friEnTime === '' ||
          model.friStTime === ''
        ) {
          valModel.valSameTime = (
            <div className="invalid-feedback" style={{ display: 'block' }}>
              Select at least 2 days
            </div>
          )
          valModel.isvalid = true;
          setValidation(valModel);
          return true;
        } else {
          valModel.valSameTime = ''
          valModel.isvalid = false
        }
      }

      setValidation(valModel)
      if (!valModel.isvalid) {
        return false
      }
      
    }
  }

  const handleEdit = (id) => {

    debugger
    console.log(id)
    let NewList = JOBDAtA[id];
    handleShow();
    setModel(NewList)
    setId(id)
  }
  const handleDelete = (id) => {

    debugger
    console.log(id)
    let NewList = JOBDAtA.filter((row) => {
      return row !== JOBDAtA[id]
    })
    
    SETJOBDATA(NewList)
    
  }


  const card = () => {
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <div style={{ color: modelIndex == 1 ? "red" : "black" }}>
                Job Information
              </div>
              <div style={{ color: modelIndex == 0 ? "red" : "black" }}>
                Camidate Type
              </div>
              

              <div style={{ color: modelIndex == 2 ? "red" : "black" }}>
                Shift
              </div>
            </div>
            <div>
              {modelIndex == 1 && (
                <CandidateType
                  model={model}
                  handleChange={(e) => handleChange(e)}
                  KeyPressHandle={(e) => handleNumericCheck(e)}
                  validation={validation}
                />
              )}
              {modelIndex == 0 && <JobInformation model={model} handleChange={handleChange} validation={validation} />}
              {modelIndex == 2 && <ShiftTimming validation={validation} dayHandler={dayClick} day1={day1} day2={day2} model={model} handleChange={handleChange} />}
            </div>
          </Modal.Body>
          <Modal.Footer>
            {modelIndex != 0 && (
              <Button variant="secondary" onClick={handlePrevious}>
                Pevious
              </Button>
            )}
            {modelIndex == 2 ? (<Button variant="primary" onClick={handleSave}>
              Save
            </Button>):<Button variant="primary" onClick={handleNext}>
              Next
            </Button>}
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-10">
                {" "}
                <h4>List of All Jobs Posted</h4>
              </div>
              {show && card()}

              <div className="col-md-2" style={{ display: "contents" }}>
                <div class="dropdown">
                  <i class="fas fa-bell"></i>
                </div>
                <button
                  onClick={() => handleShow()}
                  type="button"
                  className="btn btn-primary"
                >
                  Add New Job
                </button>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <th>Job Title</th>
                  <th>Career Level</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </thead>
                <tbody>
                  {JOBDAtA &&
                    JOBDAtA.map((row,index) => {
                      return (
                        <tr>
                          <td>{row.lookingFor}</td>
                          <td>{row.experience}</td>
                          <td>
                            <button type="button" class="btn btn-primary" onClick={()=>handleEdit(index)}>
                              Edit
                            </button>
                          </td>
                          <td>
                          <button type="button" class="btn btn-primary" onClick={()=>handleDelete(index)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>

              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
      {/* {popup} */}
    </>
  );
}
export default Task;
