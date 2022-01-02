import React from "react";
import { useForm } from "react-hook-form";
import accountService from '../services/accountService';
import axios from 'axios';

function Account(props) {
  let type_ar = ["Family", "Freindly", "Company", "Recipes", "Other"];
  let tags_ar = ["Joys", "parties", "documentation from the past", "daily documentation", "other"];
  let properties_ar = ["bfb","fdfgs"];

 


  let { register, handleSubmit, formState: { errors } } = useForm();
  
  const styleTags = {
    span:{
      color:"red"
    }
  }

  const onSubmit =  async (data) => {
      console.log(data);
     try{
        await accountService.addAccount(data);
    }
    catch(ex){
        console.log(ex);
    }
  };


  /* var expanded = false;

   function showCheckboxes(){
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
      checkboxes.style.display = "block";
      expanded = true;
    } else {
      checkboxes.style.display = "none";
      expanded = false;
    }
  } */


  return (
    <div className="container">
      <h1>Open Account</h1>

      <form className="container col-lg-4" onSubmit={handleSubmit(onSubmit)}>
        <label>Account Name</label>
        <input className="form-control"
        {...register("name", {required: true, minlength: 2, maxlength: 255,})}/>
        {errors.name && <span style={styleTags.span}>This field is required*</span>}
        <br></br>

        <label>Account Type</label>
        <select
          className="form-select"
          {...register("type", { required: true, minlength: 2, maxlength: 30,})}>
            {errors.type && <span style={styleTags.span}>This field is required*</span>}
          <option className="text-center">choose type...</option>
          {type_ar.map((type, index) => (
            <option className="text-center" key={index} value={type}>{type}</option>))}
        </select>
        {errors.type && <span style={styleTags.span}>This field is required*</span>}
        <br></br>

        <label className="">Account Target</label>
        <input className="form-control"
        {...register("target", { required: true, minlength: 2, maxlength: 1000 })}/>
        {errors.target && <span style={styleTags.span}>This field is required*</span>}
        <br></br>

        <label>Account Description</label>
        <input className="form-control"
        {...register("description", { required: true, minlength: 2, maxlength: 5000 })}/>
        {errors.description && <span style={styleTags.span}>This field is required*</span>}
        <br></br>

        <label>Manager Name</label>
        <input className="form-control"
        {...register("managerName", { required: true, minlength: 2, maxlength: 255 })}/>
        {errors.managerName && <span style={styleTags.span}>This field is required*</span>}
        <br></br>

        <label>Manager Email</label>
        <input type="email" className="form-control"
        {...register(" managerEmail", { required: true, minlength: 2, maxlength: 255 })} />
        {errors.acEmail && <span style={styleTags.span}>Enater invalid email*</span>}
        <label>Manager Password</label>
        <input placeholder="8 caracters, lowercase and uppercase letters and numbers" className="form-control mb-2"
        {...register("managerPassword", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ })} />
        {errors.name && <span style={styleTags.span}>This field is required*</span>}
        <br></br>

        {/* <label>Tags</label>
        <input type="checkbox" id="scales" checked/>
        <label for="scales">Scales</label>
        <input type="checkbox" id="scales" checked/>
        <label for="scales">Scales</label>
        <input type="checkbox" id="scales" checked/>
        <label for="scales">Scales</label>
        <input type="checkbox" id="scales" checked/>
        <label for="scales">Scales</label> */}

{/* <div class="multiselect">
    <div class="selectBox" onClick={ () => showCheckboxes}>
      <select>
        <option>Select an option</option>
      </select>
      <div class="overSelect"></div>
    </div>
    <div id="checkboxes">
      <label for="one">
        <input type="checkbox" id="one" />First checkbox</label>
      <label for="two">
        <input type="checkbox" id="two" />Second checkbox</label>
      <label for="three">
        <input type="checkbox" id="three" />Third checkbox</label>
    </div>
  </div> */}
        {/* <select className="form-select"
        {...register("tags", { required: true, minlength: 2, maxlength: 30,})} multiple>
          <option className="text-center">choose tags...</option>
          {tags_ar.map((tag, index) => (
          <option className="text-center" key={index} value={tag}>{tag}</option>))}
        </select>
        {errors.type && <span style={styleTags.span}>This field is required*</span>}
        <br></br> */}

         <label>Properties</label>
        <input className="form-control" 
        {...register("properties", {})} />
        <br></br>

        <label>Participants in the account</label>
        <input className="form-control" {...register("users", {})} />
        <button className="btn btn-danger m-4">Submit</button>
      </form>
    </div>
  );
}

export default Account;
