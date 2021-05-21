import React, { useEffect, useState } from "react";
import { ItchGameEmbedProps } from "./props";

type itchGameData = {
  title: string;
  sale: boolean;
  id: number;
  cover_image: string;
  original_price: boolean;
  price: string;
};

export const ItchGameEmbed: React.FC<ItchGameEmbedProps> = ({
  gameName,
  gamePublisher,
  gameSlug,
  description,
}) => {
  const [imageUrl, setImageUrl] = useState<string | false>(false);
  useEffect(() => {
    const validateGameData = (
      response: any
    ): response is itchGameData => {
      return true;
    };

    const fetchGameImage = async (publisher: string, slug: string) =>
      await fetch(`https://${publisher}.itch.io/${slug}/data.json`)
        .then((data) => data.json())
        .then((response) =>
          setImageUrl(validateGameData(response) && response.cover_image)
        );

    fetchGameImage(gamePublisher, gameSlug);
  }, [gamePublisher, gameSlug]);

  return (
    <>
      <img
        src={imageUrl ? imageUrl : ""}
        alt={`${gamePublisher}'s ${gameName} game`}
      />
    </>
  );
};
