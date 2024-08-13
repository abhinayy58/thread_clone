import {
  Avatar,
  Flex,
  Image,
  Text,
  Box,
  Menu,
  MenuButton,
  Portal,
  MenuList,
  MenuItem,
  MenuDivider,
  Divider,
  Button,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import React from "react";
import Actions from "../components/Actions";
import Comment from "../components/Comment";

const PostPage = () => {
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src="/abhi-avatar.png" size={"md"} name="Abhinay Yadav" />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              Abhinay Yadav
            </Text>
            <Image src="/verified.png" w="4" h={4} ml={4} />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"}>
            1d
          </Text>
          <Box>
            <Menu>
              <MenuButton>
                <BsThreeDots size={24} cursor={"pointer"} />
              </MenuButton>
              <Portal>
                <MenuList bg={"gray.dark"} minW={"30px"}>
                  <MenuItem
                    bg={"gray.dark"}
                    fontSize={"14px"}
                    color={"red"}
                    onClick={() => console.log("post deleted")}
                  >
                    Delete thread
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem
                    bg={"gray.dark"}
                    fontSize={"14px"}
                    onClick={() => console.log("post is Saved")}
                  >
                    Save Post
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>
      <Text my={3}>Let's talk about freinds</Text>
      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src={"/post1.png"} w={"full"} />
      </Box>
      <Flex gap={3} my={3}>
        <Actions />
      </Flex>
      <Flex gap={2} alignItems={"center"}>
        <Text fontSize={"sm"} color={"gray.light"}>
          238 replies
        </Text>
        <Box w={0.5} borderRadius={"full"} bg="gray.light" />
        <Text fontSize={"sm"} color={"gray.light"}>
          154 likes
        </Text>
      </Flex>
      <Divider my={4} />
      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>
            Get the app to like, reply, and post.
          </Text>
        </Flex>
        <Button>Get</Button>
      </Flex>
      <Divider my={4} />
      <Comment lastReply={true} />
      <Comment lastReply={true} />
      <Comment lastReply="congratulation" />
    </>
  );
};

export default PostPage;
