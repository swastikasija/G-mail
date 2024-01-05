import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  ChakraProvider,
  IconButton,
  Input,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Button,
  PopoverFooter,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
// import { MdSettings } from 'react-icons/md'
import {
  DragHandleIcon,
  HamburgerIcon,
  QuestionIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import { BiSolidInbox, BiErrorAlt, BiErrorCircle } from "react-icons/bi";
import { AiOutlineStar, AiOutlineClockCircle } from "react-icons/ai";
import { GoPaperAirplane } from "react-icons/go";
import { LuFileSpreadsheet } from "react-icons/lu";
import {
  MdLabelImportantOutline,
  MdOutlineScheduleSend,
  MdOutlineForum,
  MdOutlineDiscount,
} from "react-icons/md";
import { BsChatSquareText, BsPlus } from "react-icons/bs";
import { LiaMailBulkSolid } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

const DrawerComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ChakraProvider>
        <div
          className="menu-whole"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <div className="menuDrawer">
            {/* <Button colorScheme="blue" onClick={onOpen}> */}
            <IconButton
              variant="outline"
              color="#5f6368"
              aria-label="Search Database"
              isRound={true}
              icon={<HamburgerIcon boxSize={5} />}
              onClick={onOpen}
            />
          </div>
          <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
              <DrawerBody cursor={"pointer"}>
                <HStack
                  _hover={{ background: "#dadce0" }}
                  style={{
                    paddingInline: "20px",
                    borderRadius: "50px",
                    transition: "all 0.1s ease",
                  }}
                >
                  <BiSolidInbox style={{ fontSize: "20px" }} />
                  <h1>Inbox</h1>
                </HStack>
                <HStack
                  _hover={{ background: "#dadce0" }}
                  style={{
                    paddingInline: "20px",
                    borderRadius: "50px",
                    transition: "all 0.1s ease",
                  }}
                >
                  <AiOutlineStar style={{ fontSize: "20px" }} />
                  <h1>Starred</h1>
                </HStack>
                <HStack
                  _hover={{ background: "#dadce0" }}
                  style={{
                    paddingInline: "20px",
                    borderRadius: "50px",
                    transition: "all 0.1s ease",
                  }}
                >
                  <AiOutlineClockCircle style={{ fontSize: "20px" }} />
                  <h1>Snoozed</h1>
                </HStack>
                <HStack
                  _hover={{ background: "#dadce0" }}
                  style={{
                    paddingInline: "20px",
                    borderRadius: "50px",
                    transition: "all 0.1s ease",
                  }}
                >
                  <GoPaperAirplane style={{ fontSize: "20px" }} />
                  <h1>Sent</h1>
                </HStack>
                <HStack
                  _hover={{ background: "#dadce0" }}
                  style={{
                    paddingInline: "20px",
                    borderRadius: "50px",
                    transition: "all 0.1s ease",
                  }}
                >
                  <LuFileSpreadsheet style={{ fontSize: "20px" }} />
                  <h1>Drafts</h1>
                </HStack>
                <HStack
                  _hover={{ background: "#dadce0" }}
                  style={{
                    paddingInline: "20px",
                    borderRadius: "50px",
                    transition: "all 0.1s ease",
                  }}
                >
                  <MdLabelImportantOutline style={{ fontSize: "20px" }} />
                  <h1>Important</h1>
                </HStack>
                <HStack
                  _hover={{ background: "#dadce0" }}
                  style={{
                    paddingInline: "20px",
                    borderRadius: "50px",
                    transition: "all 0.1s ease",
                  }}
                >
                  <BsChatSquareText style={{ fontSize: "20px" }} />
                  <h1>Chats</h1>
                </HStack>
                <HStack
                  _hover={{ background: "#dadce0" }}
                  style={{
                    paddingInline: "20px",
                    borderRadius: "50px",
                    transition: "all 0.1s ease",
                  }}
                >
                  <MdOutlineScheduleSend style={{ fontSize: "20px" }} />
                  <h1>Scheduled</h1>
                </HStack>
                <HStack
                  _hover={{ background: "#dadce0" }}
                  style={{
                    paddingInline: "20px",
                    borderRadius: "50px",
                    transition: "all 0.1s ease",
                  }}
                >
                  <LiaMailBulkSolid style={{ fontSize: "20px" }} />
                  <h1>All Mails</h1>
                </HStack>
                <HStack
                  _hover={{ background: "#dadce0" }}
                  style={{
                    paddingInline: "20px",
                    borderRadius: "50px",
                    transition: "all 0.1s ease",
                  }}
                >
                  <BiErrorAlt style={{ fontSize: "20px" }} />
                  <h1>Spam</h1>
                </HStack>
                <HStack
                  _hover={{ background: "#dadce0" }}
                  style={{
                    paddingInline: "20px",
                    borderRadius: "50px",
                    transition: "all 0.1s ease",
                  }}
                >
                  <RiDeleteBin6Line style={{ fontSize: "20px" }} />
                  <h1>Bin</h1>
                </HStack>
                <HStack
                  _hover={{ background: "#dadce0" }}
                  style={{
                    paddingInline: "20px",
                    borderRadius: "50px",
                    transition: "all 0.1s ease",
                  }}
                >
                  <FiUsers style={{ fontSize: "20px" }} />
                  <h1>Social</h1>
                </HStack>
                <HStack
                  _hover={{ background: "#dadce0" }}
                  style={{
                    paddingInline: "20px",
                    borderRadius: "50px",
                    transition: "all 0.1s ease",
                  }}
                >
                  <BiErrorCircle style={{ fontSize: "20px" }} />
                  <h1>Updates</h1>
                </HStack>
                <HStack
                  _hover={{ background: "#dadce0" }}
                  style={{
                    paddingInline: "20px",
                    borderRadius: "50px",
                    transition: "all 0.1s ease",
                  }}
                >
                  <MdOutlineForum style={{ fontSize: "20px" }} />
                  <h1>Forums</h1>
                </HStack>
                <HStack
                  _hover={{ background: "#dadce0" }}
                  style={{
                    paddingInline: "20px",
                    borderRadius: "50px",
                    transition: "all 0.1s ease",
                  }}
                >
                  <MdOutlineDiscount style={{ fontSize: "20px" }} />
                  <h1>Promotions</h1>
                </HStack>
                <HStack
                  _hover={{ background: "#dadce0" }}
                  style={{
                    paddingInline: "20px",
                    borderRadius: "50px",
                    transition: "all 0.1s ease",
                  }}
                >
                  <IoSettingsOutline style={{ fontSize: "20px" }} />
                  <h1>Manage Labels</h1>
                </HStack>
                <Popover placement="right">
                  <PopoverTrigger>
                  <HStack
                  _hover={{ background: "#dadce0" }}
                  style={{
                    paddingInline: "20px",
                    borderRadius: "50px",
                    transition: "all 0.1s ease",
                  }}
                >
                  <BsPlus style={{ fontSize: "20px" }} />
                  <h1>Create Label</h1>
                </HStack>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverHeader fontWeight="semibold">
                      Create Label
                    </PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                     <Input placeholder="Please Enter New Label Name" marginBottom={"30px"}/>
                     <Button colorScheme="teal" marginLeft={"60px"}>Save</Button>
                     <Button colorScheme="red" marginLeft={"20px"}>Cancel</Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <div className="logo">
            <img
              src="data:image/jpeg;base64,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hmStc6eXSEI0i5xJ0pHcATt17T96nWT8BUERDix8pH6R1x9UAA+0KTMYANEAAAWsBYAcLJck/Op2exfoqD0W9Udy5P8A+Uyf+qRfVXYAtqRsFeZ3dlL0zfy1zM1PK3/R3eONWVlLJNPU6PlomyaN9HSF7XtfuC88n5EpadxfFAxjiNElosbEg27AlyLHSVH445fU9dv2bFeC5FVhyile6SSmjc9xuXEXJNrdwROwZyc2PIR62TvUtWrQ0MUDPJxRtY25Nm6hc7StpQSFU+Mx/wBbN0s8DVbCh+M8NPqHCeIXeG2c29tIDYRzq/l1aNKt1nZNW/lexVxdOU6fV7ncr1YW8/I9SDY08v8ADf8Agvn+yqn9Xl/hv/BdJ+5D4l5mS4S4PyZqK4MO8lp/Ux+EKqv7Jqf1eb+G/wDBWrh5pbTU7SCCIWAgixB0RqI3LJzeUXTjZ31LuAi1KV13HSREWEaYREQBERAEREBwcbcim/d/aMVUq2MYQufRyta1znHQsGgkm0jTqA5lWn9j1X6vL/Df+CqV0+kY+YRk6ism9OHzZorK3f7Iqf1eX+G/8F9RZEq3Gwppb87XAe8iy8bPgUf25/C/JnVzfj/rBzMf3BWgovg7DrqUOlkt5R4tYG4a297X3km3uClCuUouMdTcwdOVOklLbqwiIvUtBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf/2Q=="
              alt=""
              width="109px"
              height="40px"
            />
          </div>
          <div className="input">
            <Input
              placeholder="Search mail"
              size="md"
              width="480px"
              variant="filled"
            />
          </div>
          <div className="question-icon">
          <Popover placement="bottom">
                  <PopoverTrigger>
                  
            <IconButton
              variant="outline"
              color="#5f6368"
              aria-label="Search Database"
              isRound={true}
              icon={<QuestionIcon boxSize={5} />}
            />
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody cursor={"pointer"}>
                     <h1>Help</h1>
                     <br />
                     <h1>Training</h1>
                     <br />
                     <h1>Updates</h1>
                    </PopoverBody>
                    <PopoverFooter>
                      Send feedback to google
                    </PopoverFooter>
                  </PopoverContent>
                </Popover>
          </div>
          <div className="setting-icon">
            <IconButton
              variant="outline"
              color="#5f6368"
              aria-label="Search Database"
              isRound={true}
              icon={<SettingsIcon boxSize={5} />}
            />
          </div>
          <div className="apps-icon">
            <IconButton
              variant="outline"
              color="#5f6368"
              aria-label="Search Database"
              isRound={true}
              icon={<DragHandleIcon boxSize={5} />}
            />
          </div>
        </div>
      </ChakraProvider>
    </>
  );
};

export default DrawerComponent;
