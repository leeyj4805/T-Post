import React from "react";
import { Link as RouteLink, useHistory } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  InputGroup,
  InputLeftElement,
  Spacer,
  Image,
  Input,
  LinkBox,
  Center,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { EmailIcon, Search2Icon } from "@chakra-ui/icons";
import logo from "../../../assets/images/t-logo.png";
import "./index.scss";

function Header({ isLogIn = false }) {
  const history = useHistory();

  const onLoginBtnClick = () => {
    history.push("/login");
  };

  return (
    <Flex width="100%" bg="white">
      <Image
        src={logo}
        alt="logo"
        htmlWidth="112px"
        height="100%"
        mx="86px"
        my="27px"
      />
      <Flex width="100%" alignItems="center">
        <InputGroup w="408px">
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input placeholder="검색" />
        </InputGroup>
        <Spacer />
        <LinkBox px="4" h="100%" cursor="pointer" pos="relative" role="group"mr="90px">
          <Center h="100%" >
            <RouteLink to="/login">TODAY</RouteLink>
          </Center>
          <Box
            d="none"
            pos="absolute"
            bottom="0"
            left="0"
            w="100%"
            h="3px"
            bg="blue.500"
            _groupHover={{
              display: "block",
            }}
          />
        </LinkBox>
        <LinkBox px="4" h="100%" cursor="pointer" pos="relative" role="group" mr="90px">
          <Center h="100%">
            <RouteLink to="/login">편지목록</RouteLink>
          </Center>
          <Box
            d="none"
            pos="absolute"
            bottom="0"
            left="0"
            w="100%"
            h="3px"
            bg="blue.500"
            _groupHover={{
              display: "block",
            }}
          />
        </LinkBox>
        <Avatar
          icon={<EmailIcon boxSize="8" color="blue.200" />}
          mx="2"
          bg="white"
          cursor="pointer" mr="40px"
        >
          <AvatarBadge
            borderColor="white"
            bg="blue.400"
            boxSize="1.25em"
            color="white"
            top="-5px"
            left="-10px"
            userSelect="none"
          >
            1
          </AvatarBadge>
        </Avatar>
        {isLogIn ? (
          <Button colorScheme="blue" size="sm" mr="30px" px="30px">
            로그아웃
          </Button>
        ) : (
          <Button
            onClick={onLoginBtnClick}
            colorScheme="blue"
            size="sm"
            mr="30px"
            px="30px"
          >
            로그인
          </Button>
        )}
      </Flex>
    </Flex>
  );
}

export default Header;
