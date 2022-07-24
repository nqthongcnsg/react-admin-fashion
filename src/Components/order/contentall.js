import  React from 'react'
import Item from './item';
const ContentAll=(props)=>{
    const product = props.product;
    return(
        <>
          <div class="scrollme">   
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                    <th scope="col">ID đơn đặt hàng</th>
                                    <th scope="col">Email </th>
                                    <th scope="col">Ngày tạo đơn</th>
                                    <th scope="col">Tên người tạo</th>
                                    <th scope="col">Số điện thoại</th>
                                    <th scope="col">Địa chỉ giao</th>
                                    <th scope="col">Ngày nhận dự kiến</th>
                                    <th scope="col">Chi tiết đơn hàng</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        product&&product.map((item,index)=>{
                                            return  <Item
                                            key={index}
                                            product={item}
                                            
                                            ></Item>
                                        })
                                    }
                                
                                </tbody>
                                </table>
                                </div>
        </>
    )
}
export default ContentAll;