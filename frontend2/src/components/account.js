import React from "react";
import { useForm } from "react-hook-form";
import accountService from '../services/accountService';
import axios from 'axios';

function Account(props) {
  let type_ar = ["Family", "Freindly", "Company", "Recipes", "Other"];
  


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
        <input className="form-control mb-2"
        {...register("managerPassword", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ })} />
        {errors.name && <span style={styleTags.span}>Must contain lowercase and uppercase letters and numbers *</span>}
        <br></br>

        {/* <label>Participants in the account</label>
        <input className="form-control" {...register("users", {})} /> */}
        <button className="btn btn-danger m-4">Submit</button>
      </form>
    </div>
  );
}

export default Account;
