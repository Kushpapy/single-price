import styled from "styled-components";

const StyledApp = styled.div`
  width: 50rem;
  background-color: #f8fafc;
  color: var(--Grayish-Blue);
  display: grid;
  grid-template-rows: 40fr 60fr;
  border-radius: 11px;
  overflow: hidden;
`;

const TopicBox = styled.div`
  padding: 3rem 3rem 2.4rem 3rem;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  & h1 {
    color: var(--Cyan);
    font-size: 1.6rem;
  }

  & #days {
    color: var(--Bright-Yellow);
    font-size: 1.6rem;
  }
`;

const DescriptionBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: var(--Light-Gray);
`;

const PriceBox = styled.div`
  background-color: var(--Cyan);
  padding: 3rem 3rem 2.4rem 3rem;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & #text {
    line-height: 1.6;
  }

  & div {
    display: flex;
    gap: 0.8rem;
    align-items: center;

    & p {
      font-size: 1.8rem;
      color: #fff;
    }

    & span {
      font-size: 1rem;
    }
  }
`;

const Us = styled.div`
  background-color: var(--Emerald);
  padding: 3rem 3rem 2.4rem 3rem;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  justify-content: space-around;

  & div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
`;

const H2 = styled.h2`
  color: #fff;
`;

const Button = styled.button`
  font-family: inherit;
  background-color: var(--Bright-Yellow);
  padding: 1.2rem 2.4rem;
  border: none;
  border-radius: 5px;
  color: #fff;
  width: 100%;
  box-shadow: 0 5px 3px rgba(0, 0, 0 0.9);
  transition: 0.3s all ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const UL = styled.ul`
  list-style: none;
`;

const list = [
  "Tutorials by industry experts",
  "Peer & expert code review",
  "Coding exercises",
  "Access to our GitHub repos",
  "Community forum",
  "Flashcard decks",
  "New videos every week",
];

function App() {
  return (
    <StyledApp>
      <TopicBox>
        <h1 role="heading">Join our community</h1>
        <p id="days" role="contentinfo">
          30-day, hassle-free money back guarantee
        </p>
        <p id="text" aria-roledescription="information content">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </TopicBox>
      <DescriptionBox>
        <PriceBox>
          <H2> Monthly Subscription</H2>
          <div>
            <p>&#36;29 </p>
            <span>per month</span>
          </div>
          <p>Full access for less than &#36;1 a day</p>
          <Button>Sign Up</Button>
        </PriceBox>
        <Us>
          <H2>Why Us</H2>
          <div role="listbox">
            {list.map((s, i) => (
              <UL key={i} role="list">
                <li role="listitem">{s}</li>
              </UL>
            ))}
          </div>
        </Us>
      </DescriptionBox>
    </StyledApp>
  );
}

export default App;
