//style
import { ImageStyle } from "./style";

export const Image = ({ src, widthImage, heightImage, alt }) => {
  return (
    <ImageStyle
      src={src}
      alt={alt || ''}
      $width={widthImage}
      $height={heightImage}
    />
  );
};
