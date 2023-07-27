import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPublicGists } from "../services/gistService";
import { set, setSearch } from "../redux/userSlice";
import styled from "styled-components";
import Gist from "./Gist";

// list component

const GistList = () => {
  const { value, searchValue, notFound } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const res = await getPublicGists();
      dispatch(set(res.data));
    } catch (error) {
      dispatch(setSearch([]));
      dispatch(notFound(false));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // not found handling
  if (notFound) {
    return <Container>not found</Container>;
  }

  // logic hers is to display old state data
  // from state management if search result empty
  return (
    <Container>
      {searchValue.length > 0
        ? searchValue.map((gist) => <Gist key={gist.id} gist={gist} />)
        : value.map((gist) => <Gist key={gist.id} gist={gist} />)}
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 68px);
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export default GistList;
