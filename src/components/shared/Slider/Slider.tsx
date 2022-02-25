import styled from "styled-components";

/**
 * Notes:
 *
 * The slider component is used to give a carosel feel to the questions.
 *
 * I did it this way as it used far less css than importing a carosel component.
 * The reasoning behind this was that if this was going to be embedded into a
 * customers page, then its a lot more efficient to have just vanilla react
 *
 * As the slider is also a "wrapper" component, i don't think that its worth
 * having tests for it rendering children, you could write tests for its style
 * but for this, id rather use something like cypress component tests as it
 * gives a visual indicator
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
