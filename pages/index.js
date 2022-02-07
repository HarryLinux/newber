import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";
import { IMAGES } from "../styles/assets.js";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src={IMAGES.UberLogo} />
          <Profile>
            <Name>Harry Linux</Name>
            <UserImage src={IMAGES.UserImage} />
          </Profile>
        </Header>

        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src={IMAGES.UberX} />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src={IMAGES.BikeImage} />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src={IMAGES.ScheduleImage} />
            Reserve
          </ActionButton>
        </ActionButtons>

        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
  flex-1 p-4
`;

const Header = tw.div`
  flex justify-between items-center
`;

const UberLogo = tw.img`
  h-28
`;

const Profile = tw.div`
  flex items-center
`;

const Name = tw.div`
  mr-4 w-20 text-sm
`;

const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px
`;

const ActionButtons = tw.div`
  flex
`;

const ActionButton = tw.div`
  flex bg-gray-200 flex-1 flex-col m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl
`;

const ActionButtonImage = tw.img`
  h-3/5
`;

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 rounded-lg
`;
