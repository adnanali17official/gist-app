import styled from "styled-components";
import { FiCode } from "react-icons/fi";
import { AiOutlineFork } from "react-icons/ai";
import { TfiComment } from "react-icons/tfi";
import { LiaStarSolid } from "react-icons/lia";

const Gist = ({ gist }) => (
  <>
    <GistHeader>
      <ItemGroup>
        <Avatar src={gist.owner.avatar_url} />
        <Link href={gist.owner.url}>{gist.owner.login}</Link>
      </ItemGroup>

      <ItemGroup>
        <FiCode />
        <Link href={gist.url}>{Object.keys(gist.files).length} Files</Link>
        <AiOutlineFork />
        <Link href={gist.forks_url}>Forks</Link>
        <TfiComment />
        <Link href={gist.forks_url}>Comments</Link>
        <LiaStarSolid />
        <Link href={gist.forks_url}>Stars</Link>
      </ItemGroup>
    </GistHeader>
  </>
);

export default Gist;

const GistHeader = styled.div`
  width: 60%;
  min-width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #0265d6;
  padding: 10px;
  font-weight: 600;
  font-family: sans-serif;
  flex-wrap: wrap;
`;

const ItemGroup = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #0265d6;
  padding: 0px 5px;
`;

const Avatar = styled.img`
  border-radius: 10em;
  height: 30px;
`;
