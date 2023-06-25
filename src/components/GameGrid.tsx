
import { SimpleGrid, Text } from "@chakra-ui/layout";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";




const GameGrid = () => {
    const {error, games} = useGames()

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} padding='10px' spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game}/>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;