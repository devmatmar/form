import React from "react";
import {Modal, Button, Form, ModalHeader, ModalTitle, ModalBody, FormGroup, FormLabel, FormControl, ModalFooter} from "react-bootstrap";

interface EditPersonModalProps {
    show: boolean;
    handleClose: () => void;
    person: { id: number; lastname: string, firstname: string };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSave: () => void;
}

const EditPersonModal: React.FC<EditPersonModalProps> = ({show, handleClose, person, handleChange, handleSave}) => {

    return (
        <Modal show={show} onHide={handleClose}>
            <ModalHeader closeButton>
                <ModalTitle>Edit Person</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <FormLabel>lastname</FormLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter lastname"
                            name="lastname"
                            value={person.lastname}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>firstname</FormLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter firstname"
                            name="firstname"
                            value={person.firstname}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleSave}>Save changes</Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditPersonModal;
