import { HStack, Image, List, ListItem, SkeletonText, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";


const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();
  if( error ) return null;
  if (isLoading) return <SkeletonText mt='4' noOfLines={15} spacing='4' skeletonHeight='2' />
  return (
    <List >
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize='large'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
