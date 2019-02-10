import axios from 'axios';
import {API_URL} from '../config'
import {
  SAVE_USER, LOG_OUT,USER_LIST,STATUS_LIST, DELETE_LIST,EDIT_USER,NEW_USER,FILTER_DATA,ADMIN_DATA
} from './types';


//LOGIN REDUCER
export const signIn = (user, callback) => async dispatch => {
 try {
  let response = await axios.post(API_URL+'/adminLogin', user);
  let {data}=response;
  if(data.status == 1){
    await localStorage.setItem("access_token", data.access_token);
    console.log(JSON.stringify(localStorage.getItem("access_token")));
    let payload = {
        access_token : data.access_token,
        _id : data.data._id,
        firstname:data.data.firstname,
        lastname:data.data.lastname,
         profilePic : data.data.photo
    }
    dispatch({ type: SAVE_USER, payload });
    console.log(JSON.stringify(data.access_token));
  }
  callback(response);
  } catch (error) {
    throw error;
  }
};

//LOGOUT REDUCER
export const logOut = () => async dispatch => {
  try {
    await localStorage.setItem("access_token", null);
    dispatch({ type: LOG_OUT, payload: {undefined} });
  } catch (error) {
    throw error;
  }
};


//USERLIST REDUCER
export const userlist =(body,access_token,callback) => async dispatch =>{
  try {
    let response = await axios({
      method: 'post',
      url:API_URL+'/userListing',
       headers: {
          'Content-Type': 'application/json',
          'Authorization': access_token
        },
      data: JSON.stringify(body),
      
    });
    let {data}=response;

    if(data.status == 1){
      await localStorage.setItem("user", JSON.stringify(data));
      let payload = {
          data : data.data
         
      }
      dispatch({ type: USER_LIST, payload });
    }
    callback(response);
    } catch (error) {
      throw error;
    }
  };

//user toogle
  export const statuslist =(udata,access_token,callback) => async dispatch =>{
    console.log("109"+access_token);
    console.log("110"+ JSON.stringify(udata));
    try {
      let response = await axios({
        method: 'post',
        url:API_URL+'/changeStatus',
         headers: {
            'Content-Type': 'application/json',
            'Authorization': access_token
          },
        data: JSON.stringify(udata),
        
      });
      let {data}=response;
  
      if(data.status == 1){
        await localStorage.setItem("user", JSON.stringify(data));
          }
      callback(response);
      } catch (error) {
        throw error;
      }
    };

  //DELETE REDUCER
export const deleteUserlist =(udata,access_token,callback) => async dispatch =>{
  try {
    console.log(udata)
    let response = await axios({
      method: 'post',
      url:API_URL+'/deleteUsers',
       headers: {
          'Content-Type': 'application/json',
          'Authorization': access_token
        },
      data: JSON.stringify(udata),
      
    });
    let {data}=response;
    if(data.status == 1){
      await localStorage.setItem("user", JSON.stringify(data));
    }
    callback(response);
    } catch (error) {
      throw error;
    }
  };

   //EDIT REDUCER
export const editUser =(udata,access_token) => async dispatch =>{
      dispatch({ type: EDIT_USER, payload: udata });   
 }
  ;

//SUBMIT USER DATA
export const submitUserlist =(udata,access_token,callback) => async dispatch =>{
  console.log("109"+access_token);
  console.log("110"+ JSON.stringify(udata));
  try {
    let response = await axios({
      method: 'post',
      url:API_URL+'/editUserListing',
       headers: {
          'Content-Type': 'application/json',
          'Authorization': access_token
        },
      data: JSON.stringify(udata),
      
    });
    let {data}=response;

    if(data.status == 1){
      await localStorage.setItem("user", JSON.stringify(data));
        }
    callback(response);
    } catch (error) {
      throw error;
    }
  };



  //SUBMIT NEW USER
export const submitnewUser =(udata,token,callback) => async dispatch =>{
  console.log("110"+ JSON.stringify(udata));
  try {
    let response = await axios({
      method: 'post',
      url:API_URL+'/register',
       headers: {
          'Content-Type': 'application/json',
        },
      data: JSON.stringify(udata),
    });
    let {data}=response;
    console.log(data)
    if(data.status == 1){
      await localStorage.setItem("user", JSON.stringify(data)); 
       console.log(response)
     
        }
        callback(response);
   
    } catch (error) {
      throw error;
    }
  };




    


  

  

  

