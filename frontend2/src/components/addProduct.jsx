import React from 'react';
import Joi from "joi-browser";
import Form from './common/form';
//import PageHeader from './common/pageHader';
import { toast } from 'react-toastify';
//import productService from '../services/productService';
//import UploadImage from './common/uploadImage';
import http from '../services/httpService';
import {apiUrl} from '../config.json';


class AddProduct extends Form {

    categoriesAr = ['ציורי הקסם','סרגלי הקסם','מדבקות הקסם','בניה מעץ','בניה מקאפה','מתיחת חוטים','מניאטורות','צביעה באקריליק','יצירות יהלומים','קישוטי סוכה'];

    state = { 
        data:{name:"", price:"", category:"", catalogNumber:"", description:"", tags:"", age:""},
        errors:{ },
        file:""
     }

    schema = {
        name:Joi.string().min(2).max(255).required().label("שם המוצר").error(()=>{
            return {
                message:"חייב להכיל שתי תווים"
                }}),
        price: Joi.number().min(1).max(100000).required().label("מחיר").error(()=>{
            return {
                message:"חייב להיות מספר"
            }}),
        category: Joi.string().min(2).max(255).required().invalid('בחר').label("קטגוריה").error(()=>{
            return {
                message:"בחר קטגוריה",
                }}),
        catalogNumber: Joi.string().min(1).max(2000000).required().label('מספר מק"ט').error(()=>{
            return {
                message:"חייב להיות מספר יחודי שעדיין לא קיים",
                }}),
        description: Joi.string().min(2).max(1000).label("תאור").error(()=>{
            return {
                message:"חייב להכיל שתי תווים"
            }
        }),
        tags: Joi.string().label("תגיות"),
        age: Joi.string().label("גיל"),
        sale: Joi.number().min(2).max(100000).label("מחיר מבצע"),
        /* image: Joi.string().min(2).max(1000).label("תמונה") */
    }

    

    /* doSubmit = async() => {
        const { data } = this.state;
        try{
        await productService.addProduct(data);
        toast('המוצר התווסף בהצלחה!');
        this.props.history.push(`/showProduct/${data.category}`);
        }
        catch(ex){
            if (ex.response  && ex.response.status === 409){
                this.setState({ errors:{catalogNumber: 'מספר מק"ט קיים'}});
            }
        }
    } */
        

    /* handleImageUpload (e){
        this.setState({image:e.target.files})
        console.log(this.state.image)
    
    } */

    handleSelect = ({ currentTarget: select}) => {
        if( this.state.data.category === ""){
            this.setState({errors:"לא בחרת קטגוריה"})
        }
        const data = { ...this.state.data };
        data[select.name] = select.value;
        this.setState({ data });
    }
    
    doSubmit = async() =>{
        
        const formData = new FormData();
        /*formData.append('image',this.state.file); */
        
        formData.append('data', JSON.stringify(this.state.data));
        formData.append('image', this.state.file);
        const config = {
            
            headers: {
                'content-type': 'multipart/form-data'
            },
           
        };
        try{
        http.post( `${apiUrl}/images`,formData,config)
        }
        catch(ex){
                    if (ex.response  && ex.response.status === 409){
                        this.setState({ errors:{catalogNumber: 'מספר מק"ט קיים'}});
                    }
            
        };
        toast('המוצר התווסף בהצלחה!');
        this.props.history.push(`/showProduct/${this.state.data.category}`);
    }

    onChange = (e) => {
        this.setState({file:e.target.files[0]});
      
    }

    
    render() { 

 

        return ( 
            <React.Fragment>
                <div className="container">
                    <div titleText="הוספת מוצר"/>
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                    
                                <form onSubmit={this.handleSubmit} autoComplete="off" method="post" className="form-control mt-3 h2" encType="multipart/form-data" action="/upload">
                                    {this.renderInput("name", "שם המוצר", "rachel")}
                                    {this.renderInput("description", "תאור")}
                                    {this.renderSelect("category","קטגוריה", this.categoriesAr)}
                                    {this.renderInput("catalogNumber", 'מספר מק"ט',"number" )}
                                    {this.renderInput("age", 'גיל' )}
                                    {this.renderInput("price", "מחיר","number")}
                                    {this.renderInput("tags", "תגיות")}
                                    {this.renderInput("sale", "מחיר מבצע")}
                                    {/* {this.renderInput("image", "תמונה")} */}
                                    <lable className="h5 text-secondary me-5">הוסף תמונה</lable>
                                    <input  className="form-control col-lg-10 me-5 ms-5 mb-3" type="file" onChange={this.onChange} />
                                    {this.renderButton("הוסף")}
                                </form>
                                 {/* <UploadImage data={this.state.data}/>  */}
                            </div>
                        </div>
                    </div>
                </React.Fragment>
        );
    }
}
 
export default AddProduct