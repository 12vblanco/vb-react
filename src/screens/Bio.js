import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import MainContainer from "../components/MainContainer";
import Img3 from "../images/bio/ley1.jpg";
import Img2 from "../images/bio/maple-400.jpg";
import Img1 from "../images/bio/round.jpg";

const Bio = () => {
  return (
    <MainContainer>
      <Div>
        <DivTextImg>
          <Img src={Img1} />
          <BioText>
            Before becoming a software developer, my professional life has
            always revolved around trees. <br />
            <br />
            The structures and shapes of wood and the pathogens and conditions
            that affect and delimit its growth have always had an impact on me
            and at the end of 2019 I started printing these patterns in paper.
          </BioText>
        </DivTextImg>
        <BioText>
          All my work comes from diseased trees or trees with structural
          imperfections that must be felled for safety. I rescue the wood from
          becoming firewood or ending up decomposed on the ground. In this way,
          the tree has a chance to leave a mark after its physical body has
          disappeared allowing us to appreciate its life history and the beauty
          within wood growth.
        </BioText>
        <DivTextImg>
          <BioText>
            The engraving occurs thanks to the difference in density of the wood
            that grows in the rings during spring and fall. In the warmer
            months, the rings grow fast accumulating nutrients and the growth
            slows down in the months with reduced sun hours (although
            evergreens' growth is slightly different and so are their wood's
            properties). This affects the hardness of the rings.
          </BioText>
          <Img src={Img2} />
        </DivTextImg>

        <BioText>
          In my prints one can see the marks left by pathologies, age growth,
          the good years and those that lacked water or sunlight, the imprint
          that physical objects left in the trunk when the tree grew over them,
          the formation and physiology of wood structures such as branches and
          many other details.
        </BioText>

        <DivTextImg>
          <Img src={Img3} />
          <BioText>
            My prints are organic, I couldn't make two the same even if I wanted
            to. Each print is unique and slightly different even if there are
            several based on the same piece of wood. My editions are open and
            the colours and type of paper can be modified to suit individual
            taste.{" "}
          </BioText>
        </DivTextImg>
        <BioText
          style={{
            textAlign: "center",
          }}
        >
          Thank you for taking the time to look at my work.
        </BioText>
      </Div>
      <Footer />
    </MainContainer>
  );
};

const Div = styled.div`
  max-width: 100rem;
  height: auto;
  padding-top: 2rem;
  margin: 0 auto;
  @media (max-width: 646px) {
    /* padding-top: 24rem; */
  }
`;

const DivTextImg = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 8px 0;
`;

const Img = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin: 6px;
  @media (max-width: 646px) {
    width: 120px;
    height: 120px;
    margin: 2px;
    right: 1rem;
  }
`;

const BioText = styled.p`
  line-height: 1.5;
  flex: 1;
  font-size: 1.8rem;
  font-weight: 300;
  padding: 1rem 5rem;
  @media (max-width: 646px) {
    font-size: 15px;
  }
`;

export default Bio;
