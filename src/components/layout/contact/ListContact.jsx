import { Box, Link } from "@mui/material";
import React from "react";
import Contact from "./Contact";

const ListContact = () => {
  return (
    <Box position={"fixed"} bottom={40} left={20} zIndex={1}>
      <Link href="" target="_blank">
        <Contact
          image={"/img/ZaloContact.png"}
          bgFill={"rgba(33,150,243,.7)"}
          bsFill={"0 0 0 0 #2196F3"}
          bgCircle={"#2196F3"}
        />
      </Link>

      <Link href="">
        <Contact
          image={"/img/PhoneContact.png"}
          bgFill={"rgb(32, 169, 204,0.7)"}
          bsFill={"0 0 0 0 #20a9cc"}
          bgCircle={"#20a9cc"}
        />
      </Link>
    </Box>
  );
};

export default ListContact;
