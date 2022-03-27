import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  overflow: hidden;

  ${(props) =>
    props.loader
      ? "display: flex; justify-content: center; align-items: center;"
      : ""}

  &::before {
    content: "";
    height: 100%;
    width: 100%;

    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;

    background: var(--clr-primary-700);
    opacity: ${(props) => (props.loader ? 0.1 : 0.7)};
  }

  & > button {
    position: absolute;
    border-radius: 50%;
    border: none;

    width: var(--spacing-xlarge);
    height: var(--spacing-xlarge);
    top: 50%;
    transform: translateY(-50%);

    font-size: var(--text-regular);

    background: var(--clr-primary-100);
    color: var(--clr-primary-700);
  }

  .prev {
    left: var(--spacing-medium);
  }

  .next {
    right: var(--spacing-medium);
  }

  @media (max-width: 600px) {
    & > button {
      width: var(--spacing-large);
      height: var(--spacing-large);
      top: unset;
      bottom: 10%;
    }

    .prev {
      left: calc(50% - var(--spacing-xlarge));
    }

    .next {
      right: calc(50% - var(--spacing-xlarge));
    }
  }
`;

export const SlideShowContainer = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SlideShowItem = styled.div`
  display: none;

  & img {
    display: block;
    max-width: 100%;

    object-fit: cover;
  }
`;
