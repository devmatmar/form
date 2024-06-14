import React, {useRef} from "react";
import axios from "axios";
import {Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {toast} from "react-toastify";

interface PersonFormProps {
    fetchPersons: () => void;
}

const PersonForm: React.FC<PersonFormProps> = ({fetchPersons}) => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(formRef.current);

        axios.post("/store", data)
            .then(response => {
                toast.success(response.data.success);
                formRef.current.reset();
                fetchPersons();
            })
            .catch(error => {
                toast.error(error.response.data.message);
            })
    };

    return (
        <>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                    <FormLabel>name</FormLabel>
                    <FormControl required={true} type="text" placeholder="name" name="name"/>
                </FormGroup>
                <Button type="submit">submit</Button>
            </Form>
        </>
    );
}

export default PersonForm;
