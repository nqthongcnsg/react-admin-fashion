import React, { useEffect, useState } from "react";
import API from "../../API";
import Option from "./option";

const AddProduct=({data,handleChange, handleSubmit})=>{

    const [Brand,setBrand]=useState();
	const [Categories,setCate]=useState();
	const [Discount,setDis]=useState();
	const [Type,setType]=useState();
    const [img1,setImg1]=useState();
    const [img2,setImg2]=useState();
    const [img3,setImg3]=useState();
     const [searchTerm, setSearchTerm] = useState(0);
     const [success, setSuccess]= useState({show: false, state: null, message: ""});
    useEffect(()=>{
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
    
    console.log(Brand);
    console.log(Categories);
    console.log(Discount);
    console.log(Type);
    
    const onClick=()=>{
         let name=document.getElementById('name').value;
         
    let priceOld=document.getElementById('old').value;
    let priceNew=document.getElementById('new').value;
       
    let brand=document.getElementById('brand').value;
       let type=document.getElementById('type').value;
       let cate=document.getElementById('cate').value;
     let dis=document.getElementById('dis').value;
         let note=document.getElementById('note').value;
       
       
        const data= new FormData();
        data.append("name", name);
        data.append("priceOld", priceOld);
        data.append("priceNew", priceNew);
        data.append("brand", brand);
        data.append("type", type);
        data.append("cate", cate);
        data.append("dis", dis);
        data.append("note", note);
        for(let i=0;i<img1.length;i++){
            console.log(img1[i]);
            data.append("files", img1[i])
        }
console.log(data);
        let dem=0;
       for(let i=0;i<data.length;i++){
           if(data[i]==''||data[i]==0){
               alert('Không được bỏ trống');
           }
       }
       if(dem==0){
        API.addProduct(data).then((res)=>{
          alert(res.data.message);
            setSuccess({...success, show: true, state: res.data.success, message:res.data.message })
            window.location="/product";
        })    
       }
      
    

    }
    const imgchange1=(event)=>{
       setImg1(event.target.files);
    }
    const imgchange2=(event)=>{
        setImg2(event.target.files);
     }
     const imgchange3=(event)=>{
        setImg3(event.target.files);
     }
    return(<>
    <div class="main-panel">        
        <div class="content-wrapper">
      <div className="row">
            <div className="col-md-8 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Add Product</h4>
                  
                  <form className="forms-sample" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label for="exampleInputUsername1">Name Product</label>
                      <input type="text" className="form-control" id="name" placeholder="Name Product" name="name"/>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Price Old</label>
                      <input type="number" className="form-control" id="old" placeholder="Price Old"name="priceOld"/>
                    </div>
                  
                    <div className="form-group">
                      <label for="exampleInputEmail1">Price New</label>
                      <input type="number" className="form-control" id="new" placeholder="Price New" name="priceNew"/>
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
                      <select class="js-example-basic-single w-100" id="brand">
                      {
                          Brand&&Brand.map((item,index)=>{
                              return <Option
                              key={index}
                              value={item.idBrand}
                              name={item.nameBrand}
                              ></Option>
                          })
                      }
                    </select>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Categories</label>
                      <select class="js-example-basic-single w-100" id="cate">
                      {
                          Categories&&Categories.map((item,index)=>{
                              return <Option
                              key={index}
                              value={item.idCategories}
                              name={item.nameCategories}
                              ></Option>
                          })
                      }
                    </select>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Type</label>
                      <select class="js-example-basic-single w-100" id='type'>
                      {
                          Type&&Type.map((item,index)=>{
                              return <Option
                              key={index}
                              value={item.idType}
                              name={item.nameType}
                              ></Option>
                          })
                      }
                    </select>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Discount</label>
                      <select class="js-example-basic-single w-100" id="dis">
                      {
                         Discount&&Discount.map((item,index)=>{
                              return <Option
                              key={index}
                              value={item.idDiscount}
                              name={item.nameDiscount}
                              ></Option>
                          })
                      }
                    </select>
                    </div>
                    <div class="form-group">
                      <label for="exampleTextarea1">Note</label>
                      <textarea class="form-control" id="note" rows="4"></textarea>
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
    </>)
}
export default AddProduct;