<template>
  <div class="card-container">
    <div class="card">

      <h1>Create an Account</h1>

      <form action="" @submit.prevent>  

        <div class="container">        
          <input type="text" placeholder="Email" v-model="email" required>
          <input type="password" placeholder="Password" v-model="password" required>
        </div>

        <div class="buttons">
          <button type="button" @click="register">Submit</button>
          <button id="googbtn" type="button" @click="signInWithGoogle">Sign In With Google</button>
        </div>

        <div class="signup-link">
          Already have an account? <a href="/login">Login</a>
        </div>

      </form>
    </div>
  </div>
</template>
  
  
  
    
<style scoped>
  .card-container {
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

.card {
  margin: 50px;
  height: 50%;
  width: 35%;
  padding: 20px;
  background-color: white;
  font-family: 'Figtree', sans-serif;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

.container {
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

.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

button {
  background-color: #BDB2A7;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: auto;
  font-size: larger;
  font-weight: bold;
  border-radius: 20px;
  transition: 0.3s;
}

button:hover {
  background-color: #A29B91;
}

#googbtn {
  background-color: #4285F4;
  color: white;
}

#googbtn:hover {
  background-color: #357ABD;
}

.signup-link {
  text-align: center;
  margin-top: 10px;
}
  
</style>
  
  
  
  
<script>
  
//REMOVE THIS LINE LATER
  import { ref } from "vue";
  import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; //used this API to create user
  import { useRouter } from 'vue-router';

  export default {
    name: 'RegisterPage',
    setup() {
      const email = ref(""); // get ref to vue router
      const password = ref(""); // get ref to v-model
      const router = useRouter(); // get ref to our router

      const register = () => {
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
          .then((data) => {
            console.log("registered!", data);

            // console.log(auth.currentUser);

            router.push('/feed'); //TEMP PAGE redirect to feed page if successfully complteteed regustersation

          })
          .catch((error) => {
            console.log(error.code);
            alert(error.message);
          });
      };

      const signInWithGoogle = () => {
        // console.log("test");
        const provider = new GoogleAuthProvider();
        signInWithPopup(getAuth(), provider)
          .then((result) => {
            console.log(result.user)
            router.push("/feed") //change to cart
          })
          .catch((error) => {
            console.error("Error signing in with Google:", error);

            // Handle specific error codes differently if needed
            switch (error.code) {
                case 'auth/account-exists-with-different-credential':
                    alert('An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.');
                    break;
                case 'auth/popup-closed-by-user':
                    alert('The popup has been closed before finalizing the operation.');
                    break;
                case 'auth/cancelled-popup-request':
                    alert('This can happen if multiple popups are triggered at once, or the user closed the popup.');
                    break;
                default:
                    alert('An error occurred while signing in with Google. Please try again.');
                    break;
            }
          });
      };

      return {
        email,
        password,
        register,
        signInWithGoogle
      };
    }
  }
</script>