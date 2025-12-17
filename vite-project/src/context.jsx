import { Children, createContext } from "react";
import { useState, useEffect } from 'react';


export const DataContext = createContext({

})



export const DataProvider = (Children) => {


    return(
        <DataContext.Provider>
            {Children}
        </DataContext.Provider>
    )
}