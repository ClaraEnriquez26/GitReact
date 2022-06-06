
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Fetch from "./Fetch";
import ContainerProduct from "./ItemCount";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        Fetch(2000, data.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ContainerProduct item={dato} />
    );
}

export default ItemDetailContainer;