import {
  Avatar,
  Box,
  Flex,
  Link,
  Menu,
  Text,
  VStack,
  MenuButton,
  Portal,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

const UserHeader = () => {
  const toast = useToast();

  const copyURL = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL).then(() => {
      toast({
        title: "Success.",
        status: "success",
        description: "Profile link copied.",
        duration: 3000,
        isClosable: true,
      });
    });
  };

  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Abhinay Yadav
          </Text>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}>abhinayy</Text>
            <Text
              fontSize={{
                base: "xs",
                md: "sm",
                lg:"md"
              }}
              bg={"gray.dark"}
              color={"gray.light"}
              p={1}
              borderRadius={"full"}
            >
              thread.net
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar size={
            {
              base: "md",
              md: "xl",
            }
          } name="Abhinay Yadav" src="/abhi-avatar.png" />
        </Box>
      </Flex>
      <Text>Co-founder, executive chairman and CEO of Meta Platforms.</Text>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}>3.2K followers</Text>
          <Box w={1} h={1} bg={"gray.light"} borderRadius={"full"} />
          <Link
            href="https://www.instagram.com/"
            isExternal
            color={"gray.light"}
          >
            instagram.com
          </Link>
        </Flex>

        <Flex>
          <Box className="icon-container">
            <BsInstagram size={24} cursor={"pointer"} />
          </Box>
          <Box className="icon-container">
            <Menu>
              <MenuButton>
                <CgMoreO size={24} cursor={"pointer"} />
              </MenuButton>
              <Portal>
                <MenuList bg={"gray.dark"}>
                  <MenuItem bg={"gray.dark"} onClick={copyURL}>
                    Copy link
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>

      <Flex w={"full"}>
        <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pb={"3"} cursor={"pointer"}>
            <Text fontWeight={"bold"}>Threads</Text>
        </Flex>
        <Flex flex={1} borderBottom={"1.5px solid gray"} justifyContent={"center"} color={"gray.light"} pb={"3"} cursor={"pointer"}>
            <Text fontWeight={"bold"}>Replies</Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
