import React, { useEffect, useState } from "react";
import API from "../../API";

const AddPCategories=({data,handleChange, handleSubmit})=>{

     const [success, setSuccess]= useState({show: false, state: null, message: ""});
   
    
 
    const onClick=()=>{
         let name=document.getElementById('name').value;
     
    
       
       
        const data={name:name}
       
    
      
        
   
        let dem=0;
      
       if(dem==0){
        API.addCategories(data).then((res)=>{
            alert(res.data.message);
            setSuccess({...success, show: true, state: res.data.success, message:res.data.message })
            window.location="/categories";
        })    
       }
       
       
    
    

    }
    
    return(<>
    <div class="main-panel">        
        <div class="content-wrapper">
      <div className="row">
            <div className="col-md-8 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Add Categories</h4>
                  
                  <form className="forms-sample" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label for="exampleInputUsername1">Name Categories</label>
                      <input type="text" className="form-control" id="name" placeholder="Name Categories" name="name"/>
                    </div>
                   
                   
                 
                    {/* <button type="submit" class="btn btn-primary me-2" >Submit</button> */}
                    <div className="btn btn-primary" onClick={onClick}>submit</div>
                    <button className="btn btn-light"><a href="/categories" >Cancel</a></button>
                  </form>
                </div>
              </div>
            </div>
         
       
          </div>
          </div>
          </div>
    </>)
}
export default AddPCategories;