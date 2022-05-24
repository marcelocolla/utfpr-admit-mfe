import styled from 'styled-components'

export const CardHeader = styled.div`
  padding: 4.8rem 3rem 3.2rem;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 2rem;

  gap: 1.6rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 90%;
    }
  }

  strong {
    font-size: 2.4rem;
    line-height: 2.5rem;
    font-weight: 700;
    text-align: center;

    margin: unset;
  }

  span {
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #fa4a0c;

    strong {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 375px) {
    max-width: 330px;
    padding: 4.8rem 6.9rem 3.2rem;
    div {
      width: 177px;
    }
  }
`

export const DetailedCard = styled.div`
  padding: 3rem 1.8rem 2.5rem;
  display: flex;
  margin: 2rem auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 2rem;

  gap: 1.6rem;

  div {
    display: grid;
    justify-items: start;
    grid-template-columns: 10rem 14rem;
    grid-template-rows: 2rem 2rem 2rem 4rem;

    div {
      display: flex;
      font-weight: normal;
      font-size: 1.4rem;
      line-height: 2rem;
      color: var(--color-label);

      strong {
        line-height: 2rem;
        font-size: 1.4rem;
      }
    }
  }
`
