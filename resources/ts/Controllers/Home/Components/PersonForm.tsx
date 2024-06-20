import React, {useRef, useState} from "react";
import axios from "axios";
import {Button, Form, FormCheck, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {toast} from "react-toastify";

interface PersonFormProps {
    fetchPersons: () => void;
}

const PersonForm: React.FC<PersonFormProps> = ({fetchPersons}) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isChecked, setIsChecked] = useState(0);

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

    const handleChecked = (event) => {
        setIsChecked(1);
    }

    return (
        <>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                    <FormLabel>lastname</FormLabel>
                    <FormControl type="text" placeholder="lastname" name="lastname"/>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>firstname</FormLabel>
                    <FormControl type="text" placeholder="firstname" name="firstname"/>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>file</FormLabel>
                    <FormControl type="file" placeholder="file" name="file"/>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormCheck type="switch"
                               label="hash"
                               name="hash"
                        // @ts-ignore
                               value={isChecked}
                               onChange={handleChecked}/>
                </FormGroup>
                <Button type="submit">submit</Button>
            </Form>
        </>
    );
}

export default PersonForm;
