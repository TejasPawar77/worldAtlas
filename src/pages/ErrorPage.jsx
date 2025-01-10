import { useRouteError } from "react-router-dom"

export const ErrorPage = () =>{
    // A new hook useRouteError
    const error = useRouteError();
    // console.log(error);
    return( 
    <>
    <h1>OOP! An Error occured</h1>
    <p>The page is {error.statusText} , status code {error.status}</p>
    <p>{error.data}</p>
    <a href="/" style={{color: "green"}}>Go Home</a>
    </>
    )
}

{/*
   This is Error page when user search a wrong
   route then this will execute    
*/}