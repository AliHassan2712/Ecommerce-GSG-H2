//style
import { DotsWrapper, Dot } from './style';

export const PaginationDots = ({ total = 4, activeIndex = 0, onDotClick }) => {
  const dots = Array.from({ length: total });
  return (
    <DotsWrapper>
      {dots.map((_, i) => (
        <Dot key={i} active={i === activeIndex} onClick={() => onDotClick && onDotClick(i)} />
      ))}
    </DotsWrapper>
  );
};

export default PaginationDots;
