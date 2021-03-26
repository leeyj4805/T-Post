import React from "react";
import { AttachmentIcon } from "@chakra-ui/icons";
import { Input, Textarea, IconButton, Button, ButtonGroup} from "@chakra-ui/react";
import "./index.scss";

function Email() {
  return (
    <div className="user">
      <h1>
        안녕하세요 <span className="userName">침착맨</span>님!
      </h1>
      <span className="title">제목</span>
      <Input placeholder="Basic usage" />
      <span className="title">글쓰기</span>
      <Textarea placeholder="Here is a sample placeholder" size="lg" />
      <span className="subTitle">※ 최대 250자까지 허용합니다.</span>
      <IconButton
        colorScheme="blue"
        aria-label="Search database"
        size="sm"
        icon={<AttachmentIcon />}
      />
      <Button colorScheme="blue">저장</Button>
      <ButtonGroup variant="outline" spacing="10">
        <Button>취소</Button>
      </ButtonGroup>
    </div>
  );
}

export default Email;
