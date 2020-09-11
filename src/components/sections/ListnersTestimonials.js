import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "./Testimonials/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "./Testimonials/Headings.js";
import { SectionDescription } from "./Testimonials/Typography.js";
import { ReactComponent as QuoteIconBase } from "./Testimonials/images/quotes-l.svg";
import { ReactComponent as ArrowLeftIcon } from "./Testimonials/images/arrow-left-3-icon.svg";
import { ReactComponent as ArrowRightIcon } from "./Testimonials/images/arrow-right-3-icon.svg";

import "slick-carousel/slick/slick.css";

// const PrimaryBackgroundContainer = tw(
//   Container
// )`-mx-8 px-8 bg-blue-900 text-gray-100`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const TestimonialsSlider = styled(Slider)`
  ${tw`flex mt-16 mx-auto max-w-xs sm:max-w-xl lg:max-w-4xl text-left bg-gray-100 rounded-lg text-gray-900`}
  .slick-track {
    ${tw`flex!`}
  }
  .slick-slide {
    ${tw`h-auto`}
  }
  .slick-slide > div {
    ${tw`h-full`}
  }
`;
const Testimonial = tw.div`px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`;
const QuoteContainer = tw.div`relative`;
const QuoteIcon = tw(
  QuoteIconBase
)`absolute opacity-100 top-0 left-0 transform -translate-y-2 -translate-x-1/2 sm:-translate-x-full w-10 fill-current text-blue-500`;
const Quote = tw.blockquote`font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left`;
const CustomerInfoAndControlsContainer = tw.div`mt-8 flex items-center flex-col sm:flex-row justify-center text-center sm:text-left`;
const CustomerImage = tw.img`w-16 h-16 rounded-full`;
const CustomerNameAndProfileContainer = tw.div`mt-4 sm:mt-0 sm:ml-4 flex flex-col`;
const CustomerName = tw.span`text-lg font-semibold`;
const CustomerProfile = tw.span`text-sm font-normal text-gray-700`;
const ControlsContainer = tw.div`sm:ml-auto flex`;
const ControlButton = styled.button`
  ${tw`text-gray-600 hover:text-blue-700 focus:outline-none transition-colors duration-300 ml-4 first:ml-0 sm:first:ml-4 mt-4 sm:mt-0`}
  .icon {
    ${tw`fill-current w-6`}
  }
`;

export default ({
  subheading = "",
  heading = "Testimonials",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  testimonials = [
    {
      customerName: "Pragarthi muthukumar ",
      quote:
        "The work that Teja does is so inspirational to me, the way of speaking and providing valuable information to others is fascinating.. personally I liked 'On Hiking Your Own Hike', that mostly meant my life on how most of the people here running towards some profession that we don't want to do. I love to art-works but I couldn't able to take up a career on that. Listening to Teja's Podcast made a change in my thinking towards a career towards my interest. I wish your work grows with lots of success. ",
    },
    {
      customerName: "Jyothirmai Thimmaraju",
      quote:
        "Teja is an excellent speaker and always a joy to listen. He has insightful perspectives and brings in a catalog of interesting conversations. A perfect mix of - Technology, Humour and Experience. The points raised over each episode are highly succinct. The podcast has ample of real life examples, resources and learning. Eagerly looking forward to the next ones. DEFINITELY worth a listen!",
    },
    {
      customerName: "Sai Sumanth",
      quote:
        "A Worthwhile Listen!! Greatly enjoyed Teja's perspective of exploring the Tech. A top-shelf podcast with a clear and concise matter. The way you deal with guests is impressive. Thank you for all your efforts and for providing good content. ",
    },
    {
      customerName: "Sruthi",
      quote:
        "I can say with no doubt that The Exploiting Podcast is really wonderful, the conversations are absolutely interesting, informative and entertaining,  I could see Teja's in-depth homework for all the podcast as it turns out very professional when we listen, keep doing this, best wishes. ",
    },
    {
      customerName: "Anonymous",
      quote:
        "The Exploiting podcast is helping out people who want to learn or know about technical domain skills which are really helpful in this competitive world to achieve something. The unicast episode was really impactful hope will get more.'Every time I see a new episode I learn something new. Excellent work on the interview questions!.'",
    },
  ],
}) => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <ContentWithPaddingXl>
      <HeadingContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <div
          class="section-heading-2 text-center wow fadeInUp"
          data-wow-delay="300ms"
        >
          <p>Listners</p>
          <h4>TESTIMONIALS</h4>
        </div>
      </HeadingContainer>
      <TestimonialsSlider arrows={false} ref={setSliderRef}>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index}>
            <QuoteContainer>{testimonial.quote}</QuoteContainer>
            <CustomerInfoAndControlsContainer>
              <CustomerNameAndProfileContainer>
                <CustomerName>
                  <b>{testimonial.customerName}</b>
                </CustomerName>
                <CustomerProfile>{testimonial.customerProfile}</CustomerProfile>
              </CustomerNameAndProfileContainer>
              <ControlsContainer>
                <div></div>

                <i
                  className="zmdi zmdi-long-arrow-left"
                  onClick={sliderRef?.slickPrev}
                  style={{
                    paddingRight: "20px",
                    fontSize: "24px",
                    color: "#5011CC",
                  }}
                ></i>
                <i
                  className="zmdi zmdi-long-arrow-right"
                  onClick={sliderRef?.slickNext}
                  style={{ fontSize: "24px", color: "#5011CC" }}
                ></i>
              </ControlsContainer>
            </CustomerInfoAndControlsContainer>
          </Testimonial>
        ))}
      </TestimonialsSlider>
    </ContentWithPaddingXl>
  );
};
