import { EstateCard } from "../components/EstateCard/EstateCard";
import { GridContainer } from "../components/GridContainer/GridContainer"
import { useFetch } from "../hooks/useFetch"

export function EstatePage() {
    //Fetch Estate data
    const {
        data: estateData,
        isLoading: estateLoading,
        error: estateError,
    } =useFetch (import.meta.env.VITE_PUBLIC_BASE_URL + "/api/estates");

    const [sortedData, setSortedData] = useState();

    //Smart sortering
    const sort = (e) => {
        const clone = {...estateData};
        const sorted = clone.sort((a, b) => a[e.target.value] < b[e.target.value]);
        setSortdData(sorted);
    };

    //Smart filtering
    const filter = (e) => {
    const clone = [...estateData];
    const filtering = clone.filter((item) => item.type.name === e.target.value);
    setSortedData(sorted);
    }

    return (
        <>
        <div>
        <h1>Estate page</h1>
        <select>
            <option value="{'price'}">Pris</option>
            <option value="{'size'}">Størrelse</option>
            <option value="{'rooms'}">Værelser</option>
        </select>

        <select onChange={(event) => filterArray(event)}>
            <option value={"villa"}>Villa</option>
            <option value={"estate"}>Ejendomsbolig</option>
            <option value={"coop"}>Andelsbolig</option>
        </select>
        </div>
        <GridContainer styleProps={{
            gridTemplateColumns: "repeat (3, 1fr)", 
            width: '80%', 
            margin: 'auto'
        }}
        >
            {sortedData
            ?sortedData?.map((estate)=> {
                return (
                    <EstateCard
                    key={estate.id}
                    adress={estate.id}
                    city={estate.city}
                    id={estate.id}
                    energyLabel={estate.energyLabel}
                    estateImages={estate.estateImages}
                    numRooms={estate.numRooms}
                    floorSpace={estate.floorSpace}
                    price={estate.price}
                    type={estate.type}
                    />
                );
            })
        : estatedata?.map((estate) => {
            return (
                    <EstateCard
                    key={estate.id}
                    adress={estate.id}
                    city={estate.city}
                    id={estate.id}
                    energyLabel={estate.energyLabel}
                    estateImages={estate.estateImages}
                    numRooms={estate.numRooms}
                    floorSpace={estate.floorSpace}
                    price={estate.price}
                    type={estate.type}
                    />
                );
            })}
        </GridContainer>
        </>
    );
}