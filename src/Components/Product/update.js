
import React, { useEffect, useState } from "react";
import API from "../../API";
import Option from "./option";
import { useParams,Link } from "react-router-dom";
const UpdateProduct =()=>{
    const id= useParams();
    const [info,setInfo]=useState();
    const [Brand,setBrand]=useState();
	const [Categories,setCate]=useState();
	const [Discount,setDis]=useState();
	const [Type,setType]=useState();
    const [img1,setImg1]=useState();
    const [img2,setImg2]=useState();
    const [img3,setImg3]=useState();
     const [searchTerm, setSearchTerm] = useState(0);
     const [success, setSuccess]= useState({show: false, state: null, message: ""});
     console.log(id.id);
    useEffect(()=>{
        API.getProductId(id.id).then((res=>{
            if(res.data.success){
                setInfo(res.data.result);
            }
        }));
        API.getCate(searchTerm).then((res=>{
            if(res.data.success){
                setCate(res.data.result);
            }
        }));
        API.getDiscount(searchTerm).then((res=>{
            if(res.data.success){
                setDis(res.data.result);
            }
        }));
        API.getType(searchTerm).then((res=>{
            if(res.data.success){
                setType(res.data.result);
            }
        }));
        API.getBrand(searchTerm).then((res=>{
            if(res.data.success){
                setBrand(res.data.result);
            }
        }));
      
    },[searchTerm]);
    const onClick=()=>{
      let namProduct=info[0].namProduct;
      let priceO=info[0].priceOld;
      let priceN=info[0].priceNew;
        let name=document.getElementById('name').value;
        
      let priceOld=document.getElementById('old').value;
     let priceNew=document.getElementById('new').value;
      
     let brand=document.getElementById('brand').value;
      let type=document.getElementById('type').value;
      let cate=document.getElementById('cate').value;
       let dis=document.getElementById('dis').value;
        let note=document.getElementById('note').value;
        if(name){
          namProduct=name;
        }
        if(priceNew){
          priceN=priceNew;
        }
        if(priceOld){
          priceO=priceOld;
        }
      console.log(namProduct,priceN,priceO,cate,img1);
      
       const data= new FormData();
       data.append("id",info[0].idProduct)
       data.append("name", namProduct);
       data.append("priceOld", priceO);
       data.append("priceNew", priceN);
       data.append("brand", brand);
       data.append("type", type);
       data.append("cate", cate);
       data.append("dis", dis);
       data.append("note", note);
       if(img1){
        for(let i=0;i<img1.length;i++){
            console.log(img1[i]);
            data.append("files", img1[i])
        }
       }
console.log(data);
       let dem=0;
      
      if(dem==0){
       API.UpdateProduct(data).then((res)=>{
           alert(res.data.message);
           setSuccess({...success, show: true, state: res.data.success, message:res.data.message })
           window.location="/product";
       })    
      }
     
    
   

   }
    
    const imgchange1=(event)=>{
        setImg1(event.target.files);
     }
     if(info)
     {
        return(
            <>
            <div class="main-panel">        
            <div class="content-wrapper">
          <div className="row">
                <div className="col-md-8 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Update Product</h4>
                      
                      <form className="forms-sample" >
                        <div className="form-group">
                          <label for="exampleInputUsername1">Name Product</label>
                          <input type="text" className="form-control" placeholder={info[0].namProduct}id="name"  name="name" ></input>
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Price Old</label>
                          <input type="number" className="form-control" id="old" placeholder={info[0].priceOld} name="priceOld" />
                        </div>
                      
                        <div className="form-group">
                          <label for="exampleInputEmail1">Price New</label>
                          <input type="number" className="form-control" id="new" placeholder={info[0].priceNew} name="priceNew"/>
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Image</label>
                          <input type="file" multiple className="form-control" onChange={(event)=>imgchange1(event)} placeholder="Price Old"/>
                        </div>
                        {/* <div className="form-group">
                          <label for="exampleInputEmail1">Image 2</label>
                          <input type="file" className="form-control"onChange={(event)=>imgchange2(event)}  placeholder="Price Old"/>
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Image 3</label>
                          <input type="file" className="form-control" onChange={(event)=>imgchange3(event)} placeholder="Price Old"/>
                        </div> */}
                    
                        <div className="form-group">
                          <label for="exampleInputEmail1">Brand</label>
                          <select class="js-example-basic-single w-100" id="brand" >
                          {
                              Brand&&Brand.map((item,index)=>{
                                  return <Option
                                  key={index}
                                  value={item.idBrand}
                                  name={item.nameBrand}
                                  id={info[0].idBrand}
                                  ></Option>
                              })
                          }
                        </select>
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Categories</label>
                          <select class="js-example-basic-single w-100" id="cate" >
                          {
                              Categories&&Categories.map((item,index)=>{
                                  return <Option
                                  key={index}
                                  value={item.idCategories}
                                  name={item.nameCategories}
                                  id={info[0].idCategories}
                                  ></Option>
                              })
                          }
                        </select>
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Type</label>
                          <select class="js-example-basic-single w-100" id='type' >
                          {
                              Type&&Type.map((item,index)=>{
                                  return <Option
                                  key={index}
                                  value={item.idType}
                                  name={item.nameType}
                                  id={info[0].idType}
                                  ></Option>
                              })
                          }
                        </select>
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Discount</label>
                          <select class="js-example-basic-single w-100" id="dis" >
                          {
                             Discount&&Discount.map((item,index)=>{
                                  return <Option
                                  key={index}
                                  value={item.idDiscount}
                                  name={item.nameDiscount}
                                  id={info[0].idDiscount}
                                  ></Option>
                              })
                          }
                        </select>
                        </div>
                        <div class="form-group">
                          <label for="exampleTextarea1">Note</label>
                          <textarea class="form-control" id="note" rows="4" placeholder={info[0].des}></textarea>
                        </div>
                       
                     
                        {/* <button type="submit" class="btn btn-primary me-2" >Submit</button> */}
                        <div className="btn btn-primary" onClick={onClick}>submit</div>
                        <button className="btn btn-light"><a href="/product" >Cancel</a></button>
                      </form>
                    </div>
                  </div>
                </div>
             
           
              </div>
              </div>
              </div>
            </>
        )
     }
    
    
}
export default UpdateProduct;