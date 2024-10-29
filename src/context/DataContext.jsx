import { createContext , useState , useEffect} from "react";

export const DataContext = createContext();

export const DataContextProvider = ({children}) => {

    const [triggerFetch, setTriggerFetch] = useState(false);
    const [data , setData] = useState(null);

    function fetchData(url) {
        useEffect (() => {
            if(triggerFetch) {
                (async() => {
                    try{
                       const response = await fetch(url);
                       const result = await response.json();
                       setData(result);
                    }   
                    catch(error) {
                        console.log(error)
                    }
                    finally {
                        setTriggerFetch(false);
                    }
                })()
            }   
         } ,[url , triggerFetch])    
    }
   
    return(
        <DataContext.Provider value={{data , fetchData , setTriggerFetch , triggerFetch}}>
                {children}
        </DataContext.Provider>
    )
}
