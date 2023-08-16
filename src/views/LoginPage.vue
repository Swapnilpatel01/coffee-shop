<template>
  <div class="card-container">
    <div class="card">

      <h1>LOGIN</h1>
      <p v-if="errMsg" id="errorMsg">{{ errMsg }}</p>
      <!-- <p>sdfkjds</p> -->

      <form action="" @submit.prevent>  

        <div class="container">        
          <input type="text" placeholder="Email" v-model="email" required> <!-- Bind email -->
          <input type="password" placeholder="Password" v-model="password" required> <!-- Bind password -->

        </div>

        <div class="remember-me">

          <label >
            <input type="checkbox" checked="checked" name="remember">
            <span class="tooltip">Remember me</span>
          </label>

          <a href="#" class="forgot-password">Forgot Password?</a>

          <div class="buttons">
            <button type="button" @click="login">Login</button>

            <!-- <div class="g-signin2" data-onsuccess="onSignIn"></div> -->

            <button id="googbtn" type="button" @click="signInWithGoogle">Sign In With Google</button>
          </div>

        </div>

        <div class="signup-link">
          Don't have an account? <a href="/register">Sign Up</a>
        </div>

      </form>
    </div>
  </div>
</template>



  
<style scoped>
.card-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  /* align-items: center; Center vertically */
  min-height: 100vh; /* Full viewport height */
}

.card {
  margin: 50px;
  height: 50%;
  width: 35%;
  padding: 20px;
  background-color: white;
  font-family: 'Figtree', sans-serif;
  border-radius: 20px;
}


.container{
  width: 100%;
}

input[type=text], input[type=password] {
  width: 100%;
  padding: 16px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: large;
  font-weight: bolder;
}

.remember-me {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center; /* Center-align elements */
    gap: 10px; /* Space between elements */
}

.tooltip{
  border-bottom: 1px dotted #555;
  cursor: help;
  position: relative;
}

.tooltip:hover::after {
  content: "Keep me logged in on this device.";
  position: absolute;
  left: 0;
  top: 20px;
  background-color: #f9f9f9;
  padding: 5px;
  border: 1px solid #ddd;
  width: 200px;
}

.forgot-password {
  margin-left: auto;
  text-decoration: none;
  color: #007BFF;
  /* width: 100%; */
  text-align: right;
}


/* label{
  float: left;
} */

button {
  /* float: right; */
  background-color: #BDB2A7;
  color: white;
  padding: 14px 20px; /* Increased padding for a more balanced look */
  margin: 10px 0;
  border: none;
  cursor: pointer;
  width: 100; /* Auto width to fit the content */
  font-size: larger;
  font-weight: bold;
  border-radius: 20px;
  transition: 0.3s; /* Transition effect for smooth hover */
}

.buttons{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

button:hover {
  background-color: #A29B91; /* Slightly darker shade on hover */
}

button[type="submit"] {
    background-color: #BDB2A7;
}

button[type="submit"]:hover {
    background-color: #A29B91;
}

#googbtn{
    background-color: #4285F4; /* Google color */
    color: white;
}

#googbtn:hover {
    background-color: #357ABD; /* Darker Google color on hover */
}


#errorMsg{
  color: red;
  font-weight: bold;
  font-size: large;
}

.signup-link {
  text-align: center;
  margin-top: 10px;
}


</style>




<script>

/* eslint-disable */   
//REMOVE THIS LINE LATER
  import { ref } from "vue";
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; //used this API to create user
  import { useRouter } from 'vue-router';

/*
FIREBASE AUTH ERROR CODES

- Auth/Invalid-email
- Auth/user-not-found
- Auth/wrong-password 
- Auth/user-disabled


*/


  export default {
    name: 'LoginPage',
    setup() {
      const email = ref(""); // get ref to vue router
      const password = ref(""); // get ref to v-model
      const errMsg = ref("") //error message
      const router = useRouter(); // get ref to our router

      const login = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email.value, password.value)
          .then((data) => {
            console.log("logged IN!", data);
            // console.log(auth.currentUser);
            router.push('/feed'); //TEMP PAGE redirect to feed page if successfully complteteed regustersation

          })
          .catch((error) => {
            console.log(error.code);

            switch (error.code) {
              case "auth/invalid-email":
                errMsg.value = "Invalid E-mail";
                break;
              case "auth/user-not-found":
                errMsg.value = "No account was associated with that email";
                break;
              case "auth/wrong-password":
                errMsg.value = "Incorrect user/password"; //used for security purposes
                break;
              default:
                errMsg.value = "Email or password was incorrect";
                break;
            }

            // alert(error.message);
          });
      };

      const signInWithGoogle = () => {
        console.log("test");
      };

      return {
        email,
        password,
        errMsg,
        login,
        signInWithGoogle
      };
    }
  }
</script>