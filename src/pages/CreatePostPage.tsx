import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { API_URL } from "../utils/constants.ts";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

function CreatePostPage() {
    const [userId, setUserID] = useState<string | undefined>()
    const [title, setTitle] = useState<string | undefined>()
    const [body, setBody] = useState<string | undefined>()

    const navigate = useNavigate();

    const onUserIdChange = (event) => {
        setUserID(event.target.value);
    }

    const onTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const onBodyChange = (event) => {
        setBody(event.target.value);
    }

    const onSubmit = async () => {
        const rawResponse = await fetch(`${API_URL}/posts`, {
            method: 'POST',
            body: JSON.stringify({title, body, userId}),
            headers: {'Content-type': 'application/json; charset=UTF-8'},
        });
        const response = await rawResponse.json();
        console.log(response)
        navigate("/")
    }

    return (
        <Container className="d-flex flex-column">
            <p className="fw-bold fs-5">Create Post</p>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>UserId</Form.Label>
                    <Form.Control className="bg-white" placeholder="User ID" onChange={onUserIdChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control className="bg-white" onChange={onTitleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                    <Form.Label>Body</Form.Label>
                    <Form.Control className="bg-white" as="textarea" rows={3} onChange={onBodyChange}/>
                </Form.Group>
                <Button onClick={onSubmit}>Submit</Button>
            </Form>
        </Container>
    )
}

export default CreatePostPage

