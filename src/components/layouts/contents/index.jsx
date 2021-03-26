import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import {
  Input,
  Tag,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./index.scss";

function contents() {
  return (
    <div className="user">
      <h1>
        안녕하세요 <span className="userName">침착맨</span>님!
      </h1>
      <div className="userBox fl">
        <h2 className="userheader">
          받은 편지지
          <Link to="#">
            <AddIcon w={4} h={4} />
          </Link>
        </h2>
        <div className="userContants">
          <ul>
            <li>
              <Link to="#" className="userContantsText">
                이메일 제목이 들어갑니다.
                <span className="calendar">3 oct 2020</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="userContantsText">
                이메일 제목이 들어갑니다.
                <span className="calendar">3 oct 2020</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="userContantsText">
                이메일 제목이 들어갑니다.
                <span className="calendar">3 oct 2020</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="userContantsText">
                이메일 제목이 들어갑니다.
                <span className="calendar">3 oct 2020</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="userBox fr">
        <h2 className="userheader">
          보낸 편지지
          <Link to="#">
            <AddIcon w={4} h={4} />
          </Link>
        </h2>
        <div className="userContants">
          <ul>
            <li>
              <Link to="#" className="userContantsText">
                이메일 제목이 들어갑니다.
                <span className="calendar">3 oct 2020</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="userContantsText">
                이메일 제목이 들어갑니다.
                <span className="calendar">3 oct 2020</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="userContantsText">
                이메일 제목이 들어갑니다.
                <span className="calendar">3 oct 2020</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="userContantsText">
                이메일 제목이 들어갑니다.
                <span className="calendar">3 oct 2020</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="blockbox fl">
        <h2 className="blockheader">
          차단 단어 목록
          <Input placeholder="Basic usage" />
        </h2>
        <div className="blockContants">
          <div className="TagLabelbox">
            {["lg"].map((size) => (
              <Tag
                size={size}
                key={size}
                borderRadius="full"
                variant="solid"
                colorScheme="blue"
              >
                <TagLabel>GreenGreenGreenGreen</TagLabel>
                <TagCloseButton />
              </Tag>
            ))}
            {["lg"].map((size) => (
              <Tag size={size} key={size} variant="outline" colorScheme="blue">
                <TagLabel>GreenGreenGreenGreen</TagLabel>
                <TagCloseButton />
              </Tag>
            ))}
            {["lg"].map((size) => (
              <Tag size={size} key={size} variant="outline" colorScheme="blue">
                <TagLabel>GreenGreenGreenGreen</TagLabel>
                <TagCloseButton />
              </Tag>
            ))}
            {["lg"].map((size) => (
              <Tag size={size} key={size} variant="outline" colorScheme="blue">
                <TagLabel>GreenGreenGreenGreen</TagLabel>
                <TagCloseButton />
              </Tag>
            ))}
            {["lg"].map((size) => (
              <Tag size={size} key={size} variant="outline" colorScheme="blue">
                <TagLabel>GreenGreenGreenGreen</TagLabel>
                <TagCloseButton />
              </Tag>
            ))}
            {["lg"].map((size) => (
              <Tag size={size} key={size} variant="outline" colorScheme="blue">
                <TagLabel>GreenGreenGreenGreen</TagLabel>
                <TagCloseButton />
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default contents;

