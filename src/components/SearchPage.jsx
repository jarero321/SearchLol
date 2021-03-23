import React from "react";
import {SectionSearch, ContainerPage} from "../styles/SearchPageStyles"
import SearchBar from "./SearchBar"

const SearchPage = () => {
    return (
        <SectionSearch>
            <ContainerPage>
                <h1>SEARCH OF CHAMPION</h1>
                <SearchBar/>
            </ContainerPage>
        </SectionSearch>
    )
}
export default SearchPage;