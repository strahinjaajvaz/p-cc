import styled from "styled-components";

/**
 * Notes:
 *
 * The slider component is used to give a carosel feel to the questions
 * I abstracted the logic so that it can be reused instead of having the css
 * be duplicated throughout the app.
 */

type SliderProps = {
  numOfItems: number;
  offset: number;
};

interface Props extends SliderProps {
  children: React.ReactNode;
}

export function Slider({ children, numOfItems, offset }: Props) {
  return (
    <StyledSlider numOfItems={numOfItems} offset={offset}>
      {children}
    </StyledSlider>
  );
}

const StyledSlider = styled.div<SliderProps>`
  display: flex;
  transform: translateX(calc(-${(props) => props.offset}* 100%));
  transition: all 0.5s ease-in-out;

  & > div {
    width: 100%;
    flex: 1 0 auto;
  }
`;
