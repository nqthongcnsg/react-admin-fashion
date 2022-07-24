import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../API";

const UpdateDiscount=({data,handleChange, handleSubmit})=>{

     const [success, setSuccess]= useState({show: false, state: null, message: ""});
     const [searchTerm, setSearchTerm] = useState(0);
     const [Discount, setDiscount]= useState();
     var id=useParams();
     useEffect(()=>{
         API.getDiscountId(id.id).then((res)=>{
             setDiscount(res.data.result);
         })
     },[searchTerm]);
        
  

    const onClick=()=>{
      
         let name=document.getElementById('name').value;
     console.log(Discount[0])
       
       
       
        const data={id:Discount[0].idDiscount,name:name}
       
    
      
        
   
        let dem=0;
      
       if(dem==0){
        API.updateDiscount(data).then((res)=>{
            alert(res.data.message);
            setSuccess({...success, show: true, state: res.data.success, message:res.data.message });
            window.location="/discount";
           
        })    
       }
      
    
    

    }
    
    if(Discount){
        return(<>
            <div class="main-panel">        
                <div class="content-wrapper">
              <div className="row">
                    <div className="col-md-8 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Add Discount</h4>
                          
                          <form className="forms-sample" onSubmit={handleSubmit}>
                            <div className="form-group">
                              <label for="exampleInputUsername1">Name Discount</label>
                              <input type="text" className="form-control" id="name" placeholder={Discount[0].nameDiscount} name="name"/>
                            </div>
                           
                           
                         
                            {/* <button type="submit" class="btn btn-primary me-2" >Submit</button> */}
                            <div className="btn btn-primary" onClick={onClick}>submit</div>
                            <button className="btn btn-light"><a href="/discount" >Cancel</a></button>
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
export default UpdateDiscount;