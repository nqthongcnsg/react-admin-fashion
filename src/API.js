import { domain } from "./constant";
import axios from "axios";

class API{
  getProductLimit(){
    const url= domain + "/product/getProductLimit";
    return axios.get(url);
  }
  getAll(){
    const url= domain + "/product/getAll";
    return axios.get(url);
  }
  addProduct(data){
    const url=domain+"/product/add";
    console.log(data);
    console.log(url);
    return axios.post(url,data);
  }
  UpdateProduct(data){
    const url=domain+"/product/update";
    console.log(data);
    console.log(url);
    return axios.post(url,data);
  }
  deleteProduct(id){
    const url= domain+'/product/delete'+id;
    console.log(url)
    return axios.delete(url);
  }
  getProductId(id){  
    const url= domain +"/product/getProduct/"+id;
    return axios.get(url);
  }
  getProductType(type){  
 
    const url= domain +"/product/getProductType/"+type;
    console.log(url);
    console.log(type);
    return axios.get(url);
  }
 
  getCart(email){
    const url=domain+"/cart/getAll/"+email;
    console.log(url);
    return axios.get(url);

  }
  addCart(data,id){
    const url=domain+"/cart/addCart"+id;
    return axios.post(url,data);
  }
  updateCart(data){
    const url=domain+"/cart/updateCart";
    console.log(url);
    return axios.post(url,data);
  }
  getCartId(data,id){
    const url=domain+"/cart/editCart/"+id;
    console.log(url);
    return axios.post(url,data);
  }
  deleteCart(data){
    
    const url=domain+"/cart/deleteCart";
   
    return axios.post(url,data);
   
  }
insertUser=(data)=>{
    const url=domain+"/user/insertUser";
    return axios.post(url,data);

  }
  getUser=()=>{
    const url=domain+"/user/getUser";
    console.log(url)
    return axios.get(url);
  }
  getUserChat=()=>{
    const url=domain+"/user/getUserChat";
    console.log(url)
    return axios.get(url);
  }
  getUserEmail=(email)=>{
    const url=domain+"/user/getUserEmail"+email;
    console.log(url)
    return axios.get(url);
  }
  getUserMess=(email)=>{
    const url=domain+"/chat/getUserMess"+email;
    
    return axios.get(url);
  }
  getChat=(email)=>{
    const url=domain+"/chat/getChat"+email;
 
    return axios.get(url);
  }
  addChat=(data)=>{
    const url=domain+"/chat/addChat";
    
    return axios.post(url,data);
  }
  getBrand=()=>{
    const url=domain+"/brand/getAll";
    
    return axios.get(url);
  }
  getBrandId=(id)=>{
    const url=domain+"/brand/getBrand"+id;
   
    return axios.get(url);
  }
  deleteBrand(id){
    const url= domain+'/brand/delete'+id;
  
    return axios.delete(url);
  }
  addBrand(data){
    const url= domain+'/brand/add';
    console.log(data)
    return axios.post(url,data);
  }
  updateBrand(data){
    const url= domain+'/brand/update';
    console.log(data)
    return axios.post(url,data);
  }
  getCategories=()=>{
    const url=domain+"/categories/getAll";
    console.log(url)
    return axios.get(url);
  }
  getCategoriesId=(id)=>{
    const url=domain+"/categories/getCategories"+id;
    console.log(url)
    return axios.get(url);
  }
  deleteCategories(id){
    const url= domain+'/categories/delete'+id;
    console.log(url)
    return axios.delete(url);
  }
  addCategories(data){
    const url= domain+'/categories/add';
    console.log(data)
    return axios.post(url,data);
  }
  updateCategories(data){
    const url= domain+'/categories/update';
    console.log(data)
    return axios.post(url,data);
  }
  getCate=()=>{
    const url=domain+"/categories/getAll";
    console.log(url)
    return axios.get(url);
  }
  getDiscount=()=>{
    const url=domain+"/discount/getAll";
    console.log(url)
    return axios.get(url);
  }

  getDiscountId=(id)=>{
    const url=domain+"/discount/getDiscount"+id;
    console.log(url)
    return axios.get(url);
  }
  deleteDiscount(id){
    const url= domain+'/discount/delete'+id;
    console.log(url)
    return axios.delete(url);
  }
  addDiscount(data){
    const url= domain+'/discount/add';
    console.log(data)
    return axios.post(url,data);
  }
  updateDiscount(data){
    const url= domain+'/discount/update';
    console.log(data)
    return axios.post(url,data);
  }
  getType=()=>{
    const url=domain+"/type/getAll";
    console.log(url)
    return axios.get(url);
  }
  getTypeId=(id)=>{
    const url=domain+"/type/getType"+id;
    console.log(url)
    return axios.get(url);
  }
  deleteType(id){
    const url= domain+'/type/delete'+id;
    console.log(url)
    return axios.delete(url);
  }
  addType(data){
    const url= domain+'/type/add';
    console.log(data)
    return axios.post(url,data);
  }
  updateType(data){
    const url= domain+'/type/update';
    console.log(data)
    return axios.post(url,data);
  }
  getSize(){
    const url = domain+"/size/getAll";
    return axios.get(url);
  }
  
  getSizeId=(id)=>{
    const url=domain+"/size/getSize"+id;
    console.log(url)
    return axios.get(url);
  }
  deleteSize(id){
    const url= domain+'/size/delete'+id;
    console.log(url)
    return axios.delete(url);
  }
  addSize(data){
    const url= domain+'/size/add';
    console.log(data)
    return axios.post(url,data);
  }
  updateSize(data){
    const url= domain+'/size/update';
    console.log(data)
    return axios.post(url,data);
  }
  getOrder(){
    const url = domain+"/order/getAll";
    return axios.get(url);
  }
  getOrderDetail(mahd){
    const url = domain+"/order/getdetail"+mahd;
    console.log(url)
    return axios.get(url);
  }
  getWarehouse(){
    const url = domain+"/warehouse/getAll";
    console.log(url)
    return axios.get(url);
  
  }
  EnterStock(data){
    const url= domain+'/warehouse/insert';
    console.log(data)
    return axios.post(url,data);
  }
  UpdateEnterStock(data){
    const url= domain+'/warehouse/update';
    console.log(data)
    return axios.post(url,data);
  }
  getOrderTrangThai(data){
    const url = domain+"/order/getodertrangthaiadmin";
    console.log(data)
    return axios.post(url,data);
  }
  updateTrangThai(data){
    const url = domain+"/order/updatetrangthai";
    console.log(data)
    return axios.post(url,data);
  }
  updateThanhToan(data){
    const url = domain+"/order/updatethanhtoan";
    console.log(data)
    return axios.post(url,data);
  }
  updateTrangThaiChat=(email)=>{
    const url = domain+"/chat/updateTrangThaiChat"+email;

    return axios.post(url);

  }
  getTonKho=(id)=>{
    const url = domain+"/warehouse/gettonkho"+id;
    console.log(url)
    return axios.get(url);
  
  }
  deleteProductWarehouse=(id)=>{
    const url = domain+"/warehouse/deleteProductWarehouse"+id;
    console.log(url)
    return axios.get(url);
  
  }
  deleteProductNumber=(id)=>{
    const url = domain+"/warehouse/deleteProductNumber"+id;
    console.log(url)
    return axios.get(url);
  
  }
getadmin=()=>{
    const url = domain+"/admin/getall";
    console.log(url)
    return axios.get(url);
  
  }
}
export default new API()