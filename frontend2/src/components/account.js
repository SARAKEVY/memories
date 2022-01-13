import React from "react";
import { useForm } from "react-hook-form";
import accountService from '../services/accountService';

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
    <div className="container divAc col-lg-3">
      <h1 className="text-center">Open Account</h1>

      <form className="container text-center" onSubmit={handleSubmit(onSubmit)}>
       {/*  <label class>Account Name</label> */}
       <input className="form-control" placeholder="Account Name" 
        {...register("name", {required: true, minlength: 2, maxlength: 255,})}/>
        {errors.name && <span style={styleTags.span}>This field is required*</span>}
        <br></br>

        {/* <label>Account Type</label> */}
        <select
          className="form-select" placeholder="Account Type"
          {...register("type", { required: true, minlength: 2, maxlength: 30,})}>
            {errors.type && <span style={styleTags.span}>This field is required*</span>}
          <option>Chosse Account Type</option>
          {type_ar.map((type, index) => (
            <option key={index} value={type}>{type}</option>))}
        </select>
        {errors.type && <span style={styleTags.span}>This field is required*</span>}
        <br></br>

        {/* <label className="">Account Target</label> */}
        <input className="form-control" placeholder="Account Target"
        {...register("target", { required: true, minlength: 2, maxlength: 1000 })}/>
        {errors.target && <span style={styleTags.span}>This field is required*</span>}
        <br></br>

        {/* <label>Account Description</label> */}
        <input className="form-control" placeholder="Account Description"
        {...register("description", { required: true, minlength: 2, maxlength: 5000 })}/>
        {errors.description && <span style={styleTags.span}>This field is required*</span>}
        <br></br>

        {/* <label>Manager Name</label> */}
        <input className="form-control" placeholder="Manager Name"
        {...register("managerName", { required: true, minlength: 2, maxlength: 255 })}/>
        {errors.managerName && <span style={styleTags.span}>This field is required*</span>}
        <br></br>

      {/*   <label>Manager Email</label> */}
        <input type="email" className="form-control" placeholder="Manager Email"
        {...register("managerEmail", { required: true, minlength: 11, maxlength: 255})} />
        {errors.managerEmail && <span style={styleTags.span}>Enater invalid email*</span>}
        <br></br>
        {/* <label>Manager Password</label> */}
        <input className="form-control" placeholder="Manager Password"
        {...register("managerPassword", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ })} />
        {errors.managerPassword && <span style={styleTags.span}>Must contain lowercase and uppercase letters and numbers *</span>}
        <br></br>

        {/* <label>Participants in the account</label>
        <input className="form-control" {...register("users", {})} /> */}
        <button className="btn btn-primary mb-5 col-lg-12">Submit</button>
      </form>
    </div>
  );
}

export default Account;
