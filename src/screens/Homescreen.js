import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Pizza from "../components/Pizza";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter from "../components/Filter"
export default function Homescreen() {
  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzas);
  const { pizzas, error, loading } = pizzasstate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
      <Filter/>
      <Flex
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent="center"
        width="full"
      >
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong" />
        ) : (
          <>
            <SimpleGrid
              columns={[1, 1, 2, 3]}
              width="full"
              margin={5}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={[5, 5, 10, 10]}
            >
              {pizzas.map((pizza) => {
                return (
                  <Flex
                    width={"full"}
                    alignItems={"center"}
                    justifyContent="center"
                  >
                    <Pizza key={pizza} pizza={pizza} />
                  </Flex>
                );
              })}
            </SimpleGrid>
            <Flex
              width="100%"
              backgroundColor="#b33030"
              padding="20px"
              justifyContent="center"
            ></Flex>
          </>
        )}
      </Flex>
    </div>
  );
}
