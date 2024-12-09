import { createContext , useState , useEffect} from "react";

export const DataContext = createContext();

export const DataContextProvider = ({children}) => {

    const [triggerFetch, setTriggerFetch] = useState(false);
    const [weatherData , setWeatherData] = useState(null);

    function fetchWeatherData(url) {
        useEffect (() => {
            if(triggerFetch) {
                (async() => {
                    try{
                       const response = await fetch(url);
                       const result = await response.json();
                       setWeatherData(result)
                    }   
                    catch(error) {
                        console.log(error)
                    }
                    finally {
                        setTriggerFetch(false);
                    }
                })()
            }   
         } ,[triggerFetch])    
    }

    return(
        <DataContext.Provider value={
            {weatherData , 
            fetchWeatherData , 
            setTriggerFetch , 
            triggerFetch , 
            }
        }
        >
                {children}
        </DataContext.Provider>
    )
}
