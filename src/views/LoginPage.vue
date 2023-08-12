<template>
    
  <div class="card-container">
    <div class="card">
      <h1>SIGN UP & LOGIN</h1>

      <form action="">  
        <div class="container">        
          <input type="text" placeholder="Username" name="uname" required>
          <input type="password" placeholder="Password" name="psw" required>
        </div>

        <div class="remember-me">
          <label >
            <input type="checkbox" checked="checked" name="remember">
            <span class="tooltip">Remember me</span>
          </label>
          <a href="#" class="forgot-password">Forgot Password?</a>
          <button type="submit">Login</button>
        </div>

        <div class="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
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

.remember-me{
  display: flex;
  /* width: 100%;
  margin-top: 8px;
  float: left; */
  justify-content: space-between;
  align-items: center;
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
  float: left;
  text-decoration: none;
  color: #007BFF;
}


/* label{
  float: left;
} */

button {
  float: right;
  background-color: #BDB2A7;
  color: white;
  padding: 14px 20px; /* Increased padding for a more balanced look */
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: auto; /* Auto width to fit the content */
  font-size: larger;
  font-weight: bold;
  border-radius: 20px;
  transition: 0.3s; /* Transition effect for smooth hover */
}

button:hover {
  background-color: #A29B91; /* Slightly darker shade on hover */
}


.signup-link {
  text-align: center;
  margin-top: 10px;
}




</style>




<script>
  export default {
    name: 'LoginPage'
  }
</script>