import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Button } from 'reactstrap';
import { UserContext } from './userContext';

const MyHook = () => {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(26);
    const [post, setPost] = useState({})

    useEffect(() => {
        console.log('Count Updated', count);

        return () => {
            console.log('Unsbscribe');
        }
    }, [count]);

    useEffect(() => {
        console.log('I have Grown-Up Age', age);

    }, [age])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(data => {
                setPost(data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    const { user } = useContext(UserContext)


    return (
        <div>
            <h3>I am hook , I am awesome</h3>
            <h1>Count: {count}</h1>
            <Button color="success" onClick={() => setCount(count + 1)}>Increment</Button>
            <Button color="warning" onClick={() => setCount(prev => prev > 0 ? prev - 1 : prev)}>Decrement</Button>
            <Button color="danger" onClick={() => setCount(0)}>Reset</Button>

            <div>
                <hr />
                <h2>My Age is {age}</h2>
                <Button color='secondary' onClick={() => setAge(prev => prev + 1)}>Incerment Age</Button>
            </div>
            <hr />
            <div>
                <h3>I am {user.name}</h3>
                <h3>My Email Is {user.email}</h3>
                <ul>{user.languages  && user.languages.map((lan, id) => <li key={id}>{lan}</li>)}</ul>
            </div>
            <hr />
            <div>
                {Object.keys(post).length > 0 && (
                    <Fragment>
                        <h3>Title: {post.title}</h3>
                        <p><strong>Body: {post.body}</strong></p>
                    </Fragment>
                )}
            </div>
        </div>
    )
}

export default MyHook
