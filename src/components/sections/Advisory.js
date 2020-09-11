import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto `;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-0`;

const Card = styled.div((props) => [
  tw` md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-128 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Designation = tw.h4`text-xl font-light text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

export default () => {
  const cards = [
    {
      imageSrc: "../img/adv_img/venkat.jpg",
      title: "Venkatesh Mainani",
      designation: "Founder | CyberVie",
      description:
        "Venkatesh mainani been in information security for more than a decade to work in various sectors like IT software, Hospitality, and Financial sector. This Experienced career of Venkatesh mainani to implement the Framework for Securing the IT Infrastructure from Cyber Attacks.Which leads to start Cybervie Cyber Security Awareness or Training for Employees with in-depth knowledge on Web Applications and Penetration Testing.",
      url: "",
    },
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Advisory</HeadingTitle>
          <HeadingDescription></HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Designation>{card.designation}</Designation>
                <Description>{card.description}</Description>
                <Link href={card.url}></Link>{" "}
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
    </Container>
  );
};
