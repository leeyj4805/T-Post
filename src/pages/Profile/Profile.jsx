import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import "./Profile.scss";


function Profile() {
    return (
      <div className="Profile">
        <Button colorScheme="blue" size="xs" className="ProfileButton">more</Button>
        <h2 className="ProfileHeader">스트리머 소개</h2>
        <Textarea placeholder="텍스트를 입력하세요." />
      </div>
    );
}

export default Profile;