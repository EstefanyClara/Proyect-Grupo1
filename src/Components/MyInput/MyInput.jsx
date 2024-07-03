import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./MyInput.css"
const MyInput = ({ variant, type, name, placeHolder, id, buttonSubmit }) => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    if (type == "password") {
        return (
            <Form onSubmit={handleSubmit} validated={validated}>
                <InputGroup hasValidation>
                    <Form.Label>{name}</Form.Label>
                    <Form.Control className={variant}
                        type="password"
                        required
                        placeholder={placeHolder} />
                    <Form.Control.Feedback type="invalid">
                        Invalid email or password
                    </Form.Control.Feedback>
                </InputGroup>
            </Form>
        );
    }
    return (
        <>
            <Form>
                <Form.Group controlId={"inputForm." + { id }}>
                    <Form.Label>{name}</Form.Label>
                    <Form.Control className={variant} placeholder={placeHolder} />
                </Form.Group>
            </Form>
        </>
    );

};

export default MyInput;