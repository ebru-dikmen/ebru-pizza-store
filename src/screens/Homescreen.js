import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getAllPizzas } from '../actions/pizzaActions'
import Pizza from '../components/Pizza'
import { Button, Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react';
export default function Homescreen() {

  const dispatch = useDispatch();

  const pizzasstate = useSelector(state => state.getAllPizzas);
  const { pizzas, error, loading } = pizzasstate;
  
  useEffect(() => {
    dispatch(getAllPizzas())
  }, [dispatch])

  return (

    <Flex
    display='flex'
    flexDirection={'column'}
    alignItems='center'
    justifyContent='center'
    width='full'
  >
    {loading ? (
      <h1>Loading</h1>
    ) : error ? (
      <h1>Something went wrong</h1>
    ) : (
      <>
        <SimpleGrid
          columns={[1, 1, 2, 3]}
          width='full'
          margin={5}
          alignItems={'center'}
          justifyContent={'center'}
          spacing={[5, 5, 10, 10]}
        >
          {pizzas.map((pizza) => {
            return (
              <Flex
                width={'full'}
                alignItems={'center'}
                justifyContent='center'
              >
                <Pizza key={pizza._id} pizza={pizza} />
              </Flex>
            );
          })}
        </SimpleGrid>
        <Flex
          width='100%'
          backgroundColor='#b33030'
          padding='20px'
          justifyContent='center'
        >
    
        </Flex>
      </>
    )}
  </Flex>
  );
}
