import { Button, HStack, Image, List, ListItem, SkeletonText } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
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
            <Button onClick={() => onSelectGenre(genre)} fontSize='large' variant="link">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
