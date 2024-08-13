import {
  Avatar,
  Divider,
  Flex,
  Text,
  Menu,
  MenuButton,
  Portal,
  MenuList,
  MenuItem,
  MenuDivider,
  Box,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";

const Comment = ({ reply, lastReply }) => {
  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar
          // src={reply.userProfilePic}
          src={"/zuck-avatar.png"}
          size={"sm"}
        />
        <Flex gap={1} w={"full"} flexDirection={"column"}>
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize="sm" fontWeight="bold">
              {/* {reply.username} */}
              abhinayy
            </Text>
            <Flex gap={2}>
              <Text color={"gray.light"} fontSize="sm">
                1d
              </Text>
              <Box>
                <Menu>
                  <MenuButton>
                    <BsThreeDots size={16} cursor={"pointer"} />
                  </MenuButton>
                  <Portal>
                    <MenuList bg={"gray.dark"} p={1} minW={'25px'}>
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
          <Text>
            {/* {reply.text} */}
            it is good
          </Text>
          <Actions />
          <Text fontSize={"sm"} color={"gray.light"}>100 likes</Text>
        </Flex>
      </Flex>
      <Divider />
      {/* {!lastReply ? <Divider /> : null} */}
    </>
  );
};

export default Comment;
