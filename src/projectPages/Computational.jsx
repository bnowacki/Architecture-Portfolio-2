import styled from "styled-components";
import { Description, ProjectBanner, Split, device } from "../components";
import { c1, c2 } from "../data/computational";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Section = styled.div`
  /* height: 100vh; */
  width: calc(100% - 32px);
  margin-top: 64px;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    width: calc(100% - 64px);
  }
`;

const Text = styled.div`
  padding: 32px;

  @media ${device.mobileM} {
    padding: 64px;
  }
  @media ${device.tablet} {
    padding: 0 10%;
  }
  @media ${device.laptop} {
    padding: 0 20%;
  }
`;

const TopImg = styled.img`
  /* width: 100%; */
  object-fit: scale-down;
`;

const Bottom = styled.div`
  display: flex;
  width: 100%;
  gap: 32px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const BotImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Video = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 3/2;
  width: 100%;

  @media ${device.tablet} {
    flex: 1;
    height: auto;
    align-self: stretch;
  }

  a {
    color: inherit;
  }
`;

const Section2 = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  gap: 32px;
  @media ${device.mobileL} {
    padding: 32px;
  }
  @media ${device.tablet} {
    padding: 64px;
  }
  @media ${device.laptop} {
    flex-direction: row;
    gap: 0px;
    padding: 128px 10%;
  }
  @media ${device.laptopL} {
    height: 100vh;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media ${device.mobileL} {
    flex-direction: row;
    gap: 0px;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const RImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img {
    width: 100%;
    margin-bottom: 16px;
  }
`;

const ImageC2 = styled.div`
  position: relative;
  margin-left: 32px;
  flex: 1;

  span {
    position: absolute;
    top: 0;
    left: -1rem;
    transform: rotate(90deg) scaleY(-1) scaleX(-1) translateX(-100%);
    transform-origin: left;
    white-space: nowrap;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Anemones = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  div {
    flex: 1;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
`;

const Computational = () => {
  return (
    <Container>
      <ProjectBanner p={c1} btn />
      <Split img={c1.split.img} sm>
        <Text>
          <Description textArr={c1.split.desc} />
        </Text>
      </Split>
      <Section>
        <TopImg src={`/assets/imgs/${c1.topGif}`} />
        <Bottom>
          <ImgContainer>
            <BotImg src={`/assets/imgs/${c1.bottomImg}`} />
          </ImgContainer>

          <Video>
            <iframe
              title="Computational Design"
              src="https://player.vimeo.com/video/721936351?h=9ee5aeb1f6&color=464f51&title=0&byline=0&portrait=0"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
            <script src="https://player.vimeo.com/api/player.js"></script>
            <p>
              <a href="https://vimeo.com/721936351">
                D3 FLOWCHART - APARTMENTS
              </a>{" "}
              from{" "}
              <a href="https://vimeo.com/user178707627">
                Experimental Design 2022
              </a>{" "}
              on <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </Video>
        </Bottom>
      </Section>
      <ProjectBanner p={c2} />
      {/* <Section2>
        <Left>
          <ImageC2>
            <img src={`/assets/imgs/${c2.panel.img}`} alt="panel" />
            <span>{c2.panel.caption}</span>
          </ImageC2>
          <ImageC2>
            <Anemones>
              {c2.anemones.gifs.map((g) => (
                <div key={g}>
                  <img src={`/assets/imgs/${g}`} alt={g} />
                </div>
              ))}
            </Anemones>
            <span>{c2.anemones.caption}</span>
          </ImageC2>
        </Left>
        <Right>
          <Text>
            <Description textArr={c2.desc} />
          </Text>
          <RImg>
            <img src="/assets/imgs/Comp/Tile.jpg" alt="lichens" />
            <span>Lichens-inspired tile scripted in Grasshopper, Kangaroo</span>
          </RImg>
        </Right>
      </Section2> */}
    </Container>
  );
};

export default Computational;
