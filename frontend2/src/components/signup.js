import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import {API_URL} from "../services/httpService";

function Signup(props){

    let { register, handleSubmit, formState: { errors } } = useForm();

    const styleTags = {
        span:{
          color:"red"
        }
      }

      const onSubmit =  async (data) => {
        console.log(data);
       try{
          await axios.post(`${API_URL}/users`, data);
      }
      catch(ex){
          console.log(ex);
      }
    };
    


    return(
        <div>
            <h1>Signup</h1>
            <form className="container col-lg-4" onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input className="form-control"
        {...register("firstName", {required: true, minlength: 2, maxlength: 255,})}/>
        {errors.firstName && <span style={styleTags.span}>This field is required*</span>}
        <br></br>

        <label>Last Name</label>
        <input className="form-control"
        {...register("lastName", {required: true, minlength: 2, maxlength: 255,})}/>
        {errors.lastName && <span style={styleTags.span}>This field is required*</span>}
        <br></br>

        <label className="">Email</label>
        <input className="form-control"
        {...register("email", { required: true, minlength: 11, maxlength: 255 })}/>
        {errors.email && <span style={styleTags.span}>This field is required*</span>}
        <br></br>

        <label>Password</label>
        <input className="form-control"
        {...register("password", { required: true, minlength: 8, maxlength: 10 })}/>
        {errors.password && <span style={styleTags.span}>This field is required*</span>}
        <br></br>

        <label>Phone</label>
        <input className="form-control"
        {...register("phone", { required: true, minlength: 8, maxlength: 10 })}/>
        {errors.phone && <span style={styleTags.span}>This field is required*</span>}
        <br></br>

        <label>Adress</label>
        <input className="form-control"
        {...register("adress", {  minlength: 2, maxlength: 300 })}/>
        {errors.adress && <span style={styleTags.span}></span>}
        <br></br>

        <button className="btn btn-danger m-4">Submit</button>

      </form>
        </div> 
    )
}

export default Signup;