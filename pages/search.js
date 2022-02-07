import Link from "next/link";
import React from "react";
import tw from "tailwind-styled-components";
import { IMAGES } from "../styles/assets.js";

const Search = () => {
  return (
    <Wrapper>
      {/* Button Container */}
      <ButtonContainer>
        <Link href="/">
          <BackButton src={IMAGES.BackButton} />
        </Link>
      </ButtonContainer>
      {/* Input Container */}
      <InputContainer>
        <FromToIcons>
          <Circle src={IMAGES.CircleIcon} />
          <Line src={IMAGES.Line} />
          <Square src={IMAGES.SquareIcon} />
        </FromToIcons>
        <InputBoxes>
          <Input placeholder="Enter pickup location" />
          <Input placeholder="Where to?" />
        </InputBoxes>
        <PlusIcon src={IMAGES.PlusIcon} />
      </InputContainer>
      {/* Saved Places */}
      <SavedPlaces>
        <StarIcon src={IMAGES.StarIcon} />
        Saved Places
      </SavedPlaces>
      {/* Confirm Locations Button */}
      <ConfirmContainer>Confirm Locations</ConfirmContainer>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
  bg-gray-200 h-screen
`;

const ButtonContainer = tw.div`
  bg-white px-4
`;

const BackButton = tw.img`
  h-12 cursor-pointer transform hover:scale-105 transition
`;

const InputContainer = tw.div`
  bg-white flex items-center px-4 mb-2
`;

const FromToIcons = tw.div`
  w-10 flex flex-col mr-2 items-center
`;

const Circle = tw.img`
  h-2.5
`;

const Line = tw.img`
  h-10
`;

const Square = tw.img`
  h-3
`;

const InputBoxes = tw.div`
  flex flex-col flex-1
`;

const Input = tw.input`
  h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`;

const PlusIcon = tw.img`
  w-10 h-10 bg-gray-200 rounded-full ml-3
`;

const SavedPlaces = tw.div`
  flex items-center bg-white px-4 py-2
`;

const StarIcon = tw.img`
  bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`;

const ConfirmContainer = tw.div`
  bg-black text-white text-center text-2xl mx-4 mt-2 px-4 py-3 cursor-pointer
`;
