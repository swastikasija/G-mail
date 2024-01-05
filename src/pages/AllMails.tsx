import { mails } from "../data/mails";
import { Link } from "react-router-dom";
import { ChakraProvider, Checkbox, HStack } from "@chakra-ui/react";
import OneMail from "../components/OneMail";

const AllMails = () => {
  return (
    <>
      <ChakraProvider>
        {mails.map((m) => (
          <>
            <OneMail key={m.id} mail={m}/>
          </>
        ))}
      </ChakraProvider>
    </>
  );
};

export default AllMails;
