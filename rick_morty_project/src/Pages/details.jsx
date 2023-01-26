import { useLoaderData } from "react-router-dom";

export default function Details() {
   const specificData = useLoaderData();

   console.log(specificData);

   return (
    <div>
     <p>Status: {specificData.status}</p>
     <p>Species: {specificData.species}</p>
     <p>Name: {specificData.name}</p>
     <p>Type: {specificData.type}</p>
     <img src={specificData.image} />
     
    </div>
   )
}