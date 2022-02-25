import styled from "styled-components";

/**
 * Notes:
 *
 * A simple container that is used to restrict that max width of the
 * application.
 */

interface Props {
  children: React.ReactNode;
}

export function Container({ children }: Props) {
  return <StyledProps>{children}</StyledProps>;
}

const StyledProps = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  padding: 1rem;
`;
