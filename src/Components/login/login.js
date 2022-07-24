import React,{useState,useEffect}from 'react'
import API from '../../API';
import md5 from '../MD5/md5';

const Login = ()=>{
    const [user,setUser]=useState();
	const [searchTerm, setSearchTerm] = useState(0);
	useEffect(()=>{
        API.getadmin(searchTerm).then((res)=>{
            if(res.data.success){
                setUser(res.data.result)
            }
        }) 
		
      
    },[searchTerm]);
    console.log(user)
    const onclick = ()=>{
        let email=document.getElementById('email').value;
        let pass=document.getElementById('pass').value;
 
        let a= md5(pass);
        console.log(email,pass,a)
        if(email===''||pass===''){
            alert("Không được bỏ trống");
        }else{
          let n=false;
                  for( let i =0;i<user.length;i++){
                      if (user[i].username===email && user[i].pass===a)
                      {
                          n=true
                          sessionStorage.setItem('user',user[i].ten);
                          sessionStorage.setItem('email',user[i].username);
                      }
                  }
                  if(n){
                      alert('login success')
                  
                      console.log(sessionStorage.getItem('email'));
                     window.location='/'
                      
                  }
                  else(
                      alert('not find account')
                  )
              
        }
    }

    return(
        <>
         <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth px-0">
        <div class="row w-100 mx-0">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left py-5 px-4 px-sm-5">
              <div class="brand-logo">
                <img src="../../images/logo.svg" alt="logo"/>
              </div>
              <h4>Xin chào ! bạn hãy đăng nhập để bắt đầu</h4>
              <h6 class="fw-light">Đăng nhập ở đây</h6>
              <form class="pt-3">
                <div class="form-group">
                  <input type="email" class="form-control form-control-lg" id="email" placeholder="Tên đăng nhập"/>
                </div>
                <div class="form-group">
                  {/* <input type="password" class="form-control form-control-lg"  placeholder="Password"/> */}
                  <input type="password" class="form-control form-control-lg" id="pass" placeholder="Password"/>
                </div>
                <div class="mt-3">
                  <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"  onClick={onclick}>Đăng nhập</a>
                </div>
                {/* <div class="my-2 d-flex justify-content-between align-items-center">
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input"/>
                      Keep me signed in
                    </label>
                  </div>
                  <a href="#" class="auth-link text-black">Forgot password?</a>
                </div>
                <div class="mb-2">
                  <button type="button" class="btn btn-block btn-facebook auth-form-btn">
                    <i class="ti-facebook me-2"></i>Connect using facebook
                  </button>
                </div> */}
                {/* <div class="text-center mt-4 fw-light">
                  Bạn không có tài khoản ? <a href="register.html" class="text-primary">Đăng ký</a>
                </div> */}
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
export default Login;