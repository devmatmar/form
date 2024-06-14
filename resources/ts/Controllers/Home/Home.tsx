import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import axios from "axios";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import PersonForm from "./Components/PersonForm";
import PersonTable from "./Components/PersonTable";
import {ToastContainer} from "react-toastify";

interface Person {
    id: number;
    name: string;
}

const Home: React.FC = () => {
    const [persons, setPersons] = useState<Person[]>([]);

    const fetchPersons = () => {
        axios.get<Person[]>("/persons").then((response) => {
            setPersons(response.data);
        });
    };

    useEffect(() => {
        fetchPersons();
    }, []);

    return (
        <>
            <Menu/>
            <Container className="d-flex flex-column gap-3">
                <PersonForm fetchPersons={fetchPersons}/>
                <PersonTable persons={persons} fetchPersons={fetchPersons}/>
            </Container>
            <div>
                <Footer/>
                <ToastContainer
                    autoClose={1500}
                    hideProgressBar={true}
                    position="bottom-center"
                    newestOnTop={true}
                />
            </div>
        </>
    );
};

export default Home;
