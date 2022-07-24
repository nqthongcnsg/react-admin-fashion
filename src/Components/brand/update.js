import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../API";

const UpdateBrand=({data,handleChange, handleSubmit})=>{

     const [success, setSuccess]= useState({show: false, state: null, message: ""});
     const [searchTerm, setSearchTerm] = useState(0);
     const [brand, setBrand]= useState();
     var id=useParams();
     useEffect(()=>{
         API.getBrandId(id.id).then((res)=>{
             setBrand(res.data.result);
         })
     },[searchTerm]);
        
  

    const onClick=()=>{
      
         let name=document.getElementById('name').value;
     console.log(brand[0])
       
       
       
        const data={id:brand[0].idBrand,name:name}
       
    
      
        
   
        let dem=0;
      
       if(dem==0){
        API.updateBrand(data).then((res)=>{
            alert(res.data.message);
            setSuccess({...success, show: true, state: res.data.success, message:res.data.message });
            window.location="/brand";
           
        })    
       }
      
    
    

    }
    
    if(brand){
        return(<>
            <div class="main-panel">        
                <div class="content-wrapper">
              <div className="row">
                    <div className="col-md-8 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Add Brand</h4>
                          
                          <form className="forms-sample" onSubmit={handleSubmit}>
                            <div className="form-group">
                              <label for="exampleInputUsername1">Name Brand</label>
                              <input type="text" className="form-control" id="name" placeholder={brand[0].nameBrand} name="name"/>
                            </div>
                           
                           
                         
                            {/* <button type="submit" class="btn btn-primary me-2" >Submit</button> */}
                            <div className="btn btn-primary" onClick={onClick}>submit</div>
                            <button className="btn btn-light"><a href="/brand" >Cancel</a></button>
                          </form>
                        </div>
                      </div>
                    </div>
                 
               
                  </div>
                  </div>
                  </div>
            </>)
    }
}
export default UpdateBrand;