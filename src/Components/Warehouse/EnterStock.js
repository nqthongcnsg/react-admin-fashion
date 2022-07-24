import React, { useEffect, useState } from "react";
import API from "../../API";
import Option from "./option";

const EnterStock=({data,handleChange, handleSubmit})=>{
    const [product, setProduct] = useState([]);
    const [kho, setKho] = useState([]);
    const [searchTerm, setSearchTerm] = useState(0);
     const [success, setSuccess]= useState({show: false, state: null, message: ""});
  
   
     useEffect(()=>{
       
           
        API.getAll(searchTerm).then((res)=>{
            if(res.data.success){
            
                    setProduct(res.data.result);
                }
            }
        )
        API.getWarehouse(searchTerm).then((res)=>{
          if(res.data.success){
          
                  setKho(res.data.result);
              }
          }
      )
        
   
},[searchTerm])


const onClick =()=>{
  let id=document.getElementById('id').value;
         
  let soluong=Number(document.getElementById('amount').value);
  let flag=true;
  if(soluong <0 || soluong==null){
    alert("Quantity cannot be left blank ")
    flag=false;
  }
  let update=false;
  console.log(kho[0].soluong);
  for(let i=0;i<kho.length;i++){
    if(kho[i].idProduct==id){
      update=true;
      soluong=soluong+kho[i].soluong;
      console.log(kho[i].soluong);
    }
  }
  if(flag){
    const data= {id:id,soluong:soluong}
    console.log(soluong)
 console.log(data)
   if(update){
    API.UpdateEnterStock(data).then((res)=>{
      alert(res.data.message);

      setSuccess({...success, show: true, state: res.data.success, message:res.data.message })
     window.location="/warehouse"; 
     
     
  })  
   }else{
    API.EnterStock(data).then((res)=>{
      alert(res.data.message);

      setSuccess({...success, show: true, state: res.data.success, message:res.data.message })
      window.location="/warehouse"; 
     
     
  })  
   }
   
 
  
  }
 
}
 
   
    return(<>
    <div class="main-panel">        
        <div class="content-wrapper">
      <div className="row">
            <div className="col-md-8 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Enter Stock</h4>
                  
                  <form className="forms-sample" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label for="exampleInputUsername1">Name Product</label>
                      <select class="js-example-basic-single w-100" id="id">
                      {
                          product&&product.map((item,index)=>{
                              return <Option
                              key={index}
                              value={item.idProduct}
                              name={item.namProduct}
                              ></Option>
                          })
                      }
                    </select>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputUsername1">Amount</label>
                      <input type="number" className="form-control" id="amount" name="sl"/>
                    </div>
                   
                   
                 
                    {/* <button type="submit" class="btn btn-primary me-2" >Submit</button> */}
                    <div className="btn btn-primary"onClick={onClick} >submit</div>
                    <button className="btn btn-light"><a href="/warehouse" >Cancel</a></button>
                  </form>
                </div>
              </div>
            </div>
         
       
          </div>
          </div>
          </div>
    </>)
}
export default EnterStock;