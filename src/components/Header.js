import React, { useEffect } from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import Search from "./Search";
import { getPublicGists } from "../services/gistService";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../redux/userSlice";

function Header() {
  const { value, searchValue } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const res = await getPublicGists();
      dispatch(set(res.data));
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log({ value, searchValue });
  }, [value, searchValue]);

  return (
    <Wrapper>
      <Octicon name="mark-github" mega />
      <Search />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

export default Header;
