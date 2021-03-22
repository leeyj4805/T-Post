import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import "./index.scss";

function contents() {
  return (
    <div className="user">
      안녕하세요 <span className="userName">침착맨</span>님!
      <div className="userBox">
        <h2 className="userheader">
          받은 편지지
          <a href="//#endregion">
            <AddIcon w={4} h={4} />
          </a>
        </h2>
      </div>
    </div>
  );
}

export default contents;

