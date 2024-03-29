import styled from "styled-components";
import { SnapSection } from "./ui";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  width: 100%;
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  max-height: 100vh;
  padding: 32px 0;
  object-fit: contain;
  max-width: ${(p) => p.maxW};
`;

const BigGallery = ({ imgs, maxW }) => {
  return (
    <>
      {imgs.map((img, index) => (
        <Container
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? 300 : -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-200px 300px -200px 300px" }}
          transition={{
            ease: "easeOut",
            duration: 1,
          }}
        >
          <Image
            key={index}
            src={`/assets/imgs/${img}`}
            alt={`img${index}`}
            maxW={maxW}
          />
        </Container>
      ))}
    </>
  );
};

export default BigGallery;
