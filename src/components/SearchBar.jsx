import React, { useState, useEffect, Fragment, useCallback } from "react";
import {useHistory} from "react-router-dom";
import {SectionSearch, SearchBarContainer, TablaChamps, Element, ErrorNotification, Item1} from "../styles/SearchBarStyles"
import Item from "../img/Item1.svg"
const SearchBar = () => {
    const [champs, setchamps] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [searchamp, setsearchamp] = useState("");
    const [validatorChamp, setvalidatorChamp] = useState(false);
    const [UnknowChamp, setUnknowChamp] = useState(null);
    // consultar campeones 
    useEffect(() => {
        const GetChamps = async () => {
            let response = await fetch("https://ddragon.leagueoflegends.com/cdn/11.6.1/data/es_ES/champion.json");
            response = await response.json()
            setchamps(Object.keys(response.data))
            setisLoading(false)
        }
        GetChamps()
    }, [])
    // capturar texto de input
    const handleChange = (e) => {
        const value = e.target.value
        setsearchamp(value);
        champs.includes(value) ? setvalidatorChamp(true) : setvalidatorChamp(false)
        setUnknowChamp(false)

    }
    // Autocomplete al clickear un campeon
    const handleClick = (e) => {
        setsearchamp(e.currentTarget.id)
        setvalidatorChamp(true)
    }
    // Ruta dinamica con nombre del campeon seleccionado
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault();
        setsearchamp("");
        validatorChamp ? history.push(`/Champions/${searchamp}`)  : setUnknowChamp(true);
    }

    return (
        <SectionSearch>
            <SearchBarContainer>
                <input type="text"
                    onChange={handleChange}
                    value={searchamp}></input>
                <button type="submit" onClick={handleSubmit}/>
            </SearchBarContainer>
            {
                // Mensaje de Error
                UnknowChamp && (<ErrorNotification>
                    <p>Lo sentimos el nombre del campeón ingresado no existe</p>
                </ErrorNotification>)
            }
            <h2>LEAGUE OF LEGENDS</h2>
            <Item1 src={Item} />
            <TablaChamps>
                {
                    // Cargar los Datos solo si se a cumplido la async 
                    !isLoading && champs.map(element => 
                        element.includes(searchamp) && (<Element id={element} onClick={handleClick}><img src={`http://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/${element}.png`}  /> <p> {element} </p></Element>)
                    )}
            </TablaChamps>
        </SectionSearch>
        )
}
export default SearchBar;