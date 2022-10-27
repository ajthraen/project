import React from 'react';
import { auth, db } from "../firebase/init"
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

const Page = () => {
    const [user, setUser] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    function createPost() {
        const post = {
            title: "Post #3",
            description: "This is the 3rd description"
        };
        addDoc(collection(db, "posts"), post)
    }

    async function getAllPosts() {
        const {docs} = await getDocs(collection(db, "posts"));
        const posts = docs.map(elem => elem.data());
        console.log(posts)
    }
  
    React.useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          console.log(user)
          if (user) {
              setLoading(false);
              setUser(user)
              console.log('if')
        }
      })
    }, []);
    function register() {
      createUserWithEmailAndPassword(auth, 'a@gmail.com', 'password123')
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
                <button className='navLinks1' onClick={register}>Register</button>
                <button className='navLinks1' onClick={login}>Login</button>
                <button className='navLinks1' onClick={logout}>Logout</button>
                <div>
                    <button onClick={createPost}>Create Post</button>
                </div>
                <div>
                    <button onClick={getAllPosts}>Get All Posts</button>
                </div>
        </div>
    );
}

export default Page;
