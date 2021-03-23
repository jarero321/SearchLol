import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { Section, ContainerChamp, InfoChamp, ImgChampion, TitleChamp, Role, Rol, Habilidades,
        ContainerHabilidades ,Back} from "../styles/Champion";

const Champion = () => {
    // traemos el nombre dinamico 
    const { champions } = useParams()
    // Loader
    const [isLoading, setisLoading] = useState(false);
    const [Datachamp, setDatachamp] = useState([]);
    const ConsumingApi = async (champions) => {
        try {
            let response = await fetch(`https://ddragon.leagueoflegends.com/cdn/11.6.1/data/es_ES/champion/${champions}.json`);
            response = await response.json()
            setDatachamp(response.data[champions]);
            setisLoading(true)


        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        ConsumingApi(champions);
    }, [])
    return (
        <Section>
            <Back to="/">Regresar</Back>
            <ContainerChamp>
                <ImgChampion champion={champions} />
                <TitleChamp>
                    <h1>
                        {champions}
                    </h1>
                    <h2>
                        {Datachamp.title}
                    </h2>
                </TitleChamp>
                <InfoChamp>
                    <p>
                        {Datachamp.lore}
                    </p>
                    <Role>
                        <h2>Roles</h2>
                        <Rol>
                            { isLoading && Datachamp.tags.map(element => (
                                <h3>{element}</h3>
                            ))}
                        </Rol>
                    </Role>
                    <Habilidades>
                        <h2>Habilidades</h2>
                        <ContainerHabilidades>
                            <img src={isLoading && `http://ddragon.leagueoflegends.com/cdn/11.6.1/img/passive/${Datachamp.passive.image.full}`} />
                            {
                                isLoading && Datachamp.spells.map(element => (
                                    <img src={`http://ddragon.leagueoflegends.com/cdn/11.6.1/img/spell/${element.image.full}`}/>
                                )
                                )}
                        </ContainerHabilidades>
                    </Habilidades>
                </InfoChamp>
            </ContainerChamp>
        </Section>)
}
export default Champion;