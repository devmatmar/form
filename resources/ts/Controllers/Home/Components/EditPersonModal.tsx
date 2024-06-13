import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface EditPersonModalProps {
    show: boolean;
    handleClose: () => void;
    person: { id: number; name: string };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSave: () => void;
}

const EditPersonModal: React.FC<EditPersonModalProps> = ({
                                                             show,
                                                             handleClose,
                                                             person,
                                                             handleChange,
                                                             handleSave
                                                         }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Person</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            name="name"
                            value={person.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleSave}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditPersonModal;
