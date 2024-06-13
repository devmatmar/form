import React, { useRef, useState } from "react";
import axios from "axios";
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

interface PersonFormProps {
    fetchPersons: () => void;
}

const PersonForm: React.FC<PersonFormProps> = ({ fetchPersons }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [message, setMessage] = useState<{ text: string, type: "success" | "error" } | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(formRef.current);
        try {
            const response = await axios.post("/store", data);
            formRef.current.reset();
            fetchPersons();
            setMessage({ text: response.data.success, type: "success" });
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.response?.data?.error || "An error occurred. Please try again.";
            setMessage({ text: errorMsg, type: "error" });
        }
    };

    return (
        <Form ref={formRef} onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
                <FormLabel>name</FormLabel>
                <FormControl required={true} type="text" placeholder="name" name="name" />
            </FormGroup>
            <Button type="submit">submit</Button>
            {message && (
                <div style={{ color: message.type === "success" ? 'green' : 'red', marginTop: '10px' }}>
                    {message.text}
                </div>
            )}
        </Form>
    );
}

export default PersonForm;
