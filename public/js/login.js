
/*eslint-disable */     
import axios from 'axios';
import {Showalert} from './alert';

export const login = async (email, password) => {
    try{
        const result =  await axios({
              method:'POST',
              url:'http://localhost:3000/api/v1/users/login',
              data:{
                  email:email,
                  password:password,
       
              }
          });
          if(result.data.status === 'success'){
            Showalert('success','Logged in successfully!');
              window.setTimeout(()=>{
                  location.assign('/');
              },1500);
          }
       
    } catch(err){
        Showalert('error',err.response.data.message);
    }
}   


export const logout = async ()=>{
    try{
        const res= await axios({
            method:'GET',
            url:'http://localhost:3000/api/v1/users/logout',

        })
         if(res.data.status == 'success')
         Showalert('success','Logged out successfully!');
         location.reload(true);
         
    }catch(err){
        Showalert('error','Error logging out! Try again');
    }
}