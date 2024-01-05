import { Checkbox, HStack, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

type OneMailProps = {
  mail: MailType;
};

const OneMail: FC<OneMailProps> = ({ mail }) => {
  const [checked, setChecked] = useState<boolean>(false)
  return (
    <HStack border={'1px'} marginTop={'2px'} cursor={'pointer'} {...checked && {background:"#c2dbff"} }>
      <Checkbox isChecked={checked} onChange={(e)=>setChecked(e.target.checked)}/>
      <Link to={`/id/${mail.id}`}>
        <Text fontSize={'large'}>{mail.sender}</ Text>
      </Link>
    </ HStack>
  );
};

export default OneMail;
