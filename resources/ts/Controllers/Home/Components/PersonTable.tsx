import React, {useState} from "react";
import axios from "axios";
import {Button, Table} from "react-bootstrap";
import EditPersonModal from "./EditPersonModal";

interface Person {
    id: number;
    name: string;
}

interface PersonTableProps {
    persons: Person[];
    fetchPersons: () => void;
}

const PersonTable: React.FC<PersonTableProps> = ({persons, fetchPersons}) => {
    const [editModalShow, setEditModalShow] = useState(false);
    const [editPerson, setEditPerson] = useState({id: '', name: ''});

    const handleDelete = (id) => {
        axios.delete(`/persons/${id}`).then(() => {
            fetchPersons();
        });
    };

    const handleEdit = (person) => {
        setEditPerson(person);
        setEditModalShow(true);
    };

    const handleEditSave = () => {
        axios.put(`/persons/${editPerson.id}`, editPerson).then(() => {
            setEditModalShow(false);
            fetchPersons();
        });
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setEditPerson({...editPerson, [name]: value});
    };

    return (
        <>
            <Table responsive={true} bordered={true} striped={true} hover={true}>
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col" style={{width: "20%"}}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {persons && persons.map((person) => (
                    <tr key={person.id}>
                        <td valign="middle">{person.name}</td>
                        <td className="d-flex justify-content-center gap-2">
                            <Button variant="warning" onClick={() => handleEdit(person)}>Edit</Button>
                            <Button variant="danger" onClick={() => handleDelete(person.id)}>Delete</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>

            <EditPersonModal show={editModalShow}
                             handleClose={() => setEditModalShow(false)}
                // @ts-ignore
                             person={editPerson}
                             handleChange={handleChange}
                             handleSave={handleEditSave}/>
        </>
    );
}

export default PersonTable;
