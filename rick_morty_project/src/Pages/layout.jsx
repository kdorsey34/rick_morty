import { HStack, Box, Link, Heading } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";



export default function Layout() {
  return (
    
    <Box p="2">
      <HStack
        justify="end"
        borderBottom="thick"
        borderBottomColor="lightgray"
        width="100%"
       
      >
        <NavLink to="/characters">Home</NavLink>
       
      </HStack>
      <HStack justify="center">
  
        <NavLink to="/characters">
          {({ isActive }) => (
            <Box
              p="2"
              borderBottomWidth="thick"
              borderBottomColor={isActive ? "blue.700" : "blue.500"}
            >
              Characters
            </Box>
          )}
        </NavLink>
        <NavLink to="/details">
          {({ isActive }) => (
            <Box
              p="2"
              borderBottomWidth="thick"
              borderBottomColor={isActive ? "blue.700" : "blue.500"}
            >
              Details
            </Box>
           
          
          )}
 
          
    
    
        </NavLink>
      
      </HStack>
      <Outlet />
    </Box>
  );
}







