# UserAuth_React_Firebase
A template for user authentication using Firebase

### Tech Stack:
![](https://skillicons.dev/icons?i=firebase,react,vite,html,js,tailwind).

# Authentication:
For User Authentication this particular react template uses firebase. To use it, add the env variable in .env file.
then to use, add particular code in web-app:

```
import.meta.env.VARIABLE_NAME
```

### note:
since, we are using vite, env variable name should start with VITE

```
     VITE_VARIABLE_NAME=content
```

### Firebase provides various authentication methods in it' version 9.0:

```
import {initalizeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

//configuration data i.e, apikey,appid,etc;
const configuration={...}
const app=intializeApp(configuration)

//getAuth is used to get the authentication provider service by initalizing the authentication for the particular app
//auth can be used for all the authentication services provided by firebase/auth
const auth=getAuth(app)

```

### Services:

In this particular template we only did creation,login,logout:

```
//below provided methods are introduced in firebase version 9.0
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut} from 'firebase/auth'

const signup=()=>{
 return createUserWithEmailAndPassword(auth,email,password)
 }
 
 const signin=()=>{
 return signInWithEmailAndPassword(auth,email,password)
 }
 
 const signout=()=>{
 return signOut(auth)
 }
 
 //firebase with manage the persitance of the loging through accessToken and refreshToken in the backend.
```
