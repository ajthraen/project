import React from 'react';
import { useState } from 'react';
import { auth, db } from "../firebase/init"
import { collection, addDoc, getDocs, getDoc, doc } from 'firebase/firestore';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

const Page = () => {
    const [user, setUser] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const users = {email, password}

    function createPost() {
        const post = {
            title: "Post #3",
            description: "This is the 3rd description"
        };
        addDoc(collection(db, "posts"), post)
    }

    async function getAllPosts() {
        const {docs} = await getDocs(collection(db, "posts"));
        const posts = docs.map(elem =>({ ...elem.data(), id: elem.id}));
        console.log(posts)
    }

    async function getPostById() {
        const hardCodedId = "pe6a8vHuLMFnFJAajtNp"
        const postRef = doc(db, "posts", hardCodedId);
        const postSnap = await getDoc(postRef)
        const post = postSnap.data();
        console.log(post);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // alert(`The name you entered was: ${email}`)
        users[email, password] = {email, password}
        console.log(users.email)
    }
  
    React.useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          console.log(user)
          if (user) {
              setLoading(false);
              setUser(user)
        }
      })
    }, []);
    function register() {
      createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      })
    }
    function login() {
      console.log('login')
      signInWithEmailAndPassword(auth, 'a@gmail.com', 'password123' )
      .then(({user}) => {
        console.log(user)
        setUser(user);
      })
      .catch((error) => {
        console.log(error)
      })
    }
    function logout() {
        signOut(auth);
        setLoading(true);
        console.log('logout');
        setUser({});
    }

    return (
        <div className='container1'>
            <form onSubmit={onSubmitHandler}>
                <div><label htmlFor="first_name">Email</label></div>
                <div>        
                    <input
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div><label htmlFor="last_name">Password</label></div>
                <div>
                    <input
                        type="text" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <input type="submit"/>
            </form>
            <button className='navLinks1' onClick={register}>Register</button>
            <button className='navLinks1' onClick={login}>Login</button>
            <button className='navLinks1' onClick={logout}>Logout</button>
            <div>
                <button onClick={createPost}>Create Post</button>
            </div>
            <div>
                <button onClick={getAllPosts}>Get All Posts</button>
            </div>
            <div>
                <button onClick={getPostById}>Get Specific Post</button>
            </div>
        </div>
    );
}

export default Page;
