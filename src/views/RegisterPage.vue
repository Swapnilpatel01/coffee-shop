<template>

    <h1>Create an Account</h1>

    <p><input type="text" placeholder="Email" v-model="email"></p>
    <p><input type="password" placeholder="Password" v-model="password"></p>

    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>


</template>
  
  
  
    
<style scoped>
  
  input[type=text], input[type=password] {
    width: 50%;
    padding: 16px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: large;
    font-weight: bolder;
  }
  
  button {
    /* float: right; */
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