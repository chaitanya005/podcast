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
      customerName: "Luis Serrano",
      customerProfile: "Serrano Academy",
      imageSrc: "../img/Podcast/episodes/ep_4/guest/luisserrano.jpg",
      quote:
        "The Exploiting podcast is wonderful for anyone who wants to stay in touch with the latest technology in AI and related fields. Teja does a wonderful job making the guests feel at home, and asking the right questions to keep the users informed and entertained. All in all, a wonderful podcast!",
    },
    {
      customerName: "Frank Kane",
      customerProfile: "Founder, Sundog Education",
      imageSrc: "../img/Podcast/episodes/ep_5/guest/dp_FrankKane.png",
      quote:
        "Teja's a good interviewer; he was prepared, punctual, and had the technology figured out for good recording quality on both ends. I enjoyed our talk!",
    },
    {
      customerName: "Michael Kennedy",
      customerProfile: "Founder,Tak Python Training",
      imageSrc: "../img/Podcast/episodes/ep_9/guest/Michael.jpg",
      quote:
        "I love Teja's Idea of The Exploiting Podcast about taking ownership of life, career, and what we are actually passionate about and taking them to the next level.His questions to me are deep with full of fun, we had a lovely and exciting conversation. That was fantastic.",
    },
    {
      customerName: "Miguel Morales",
      customerProfile: "Staff Software Engineer, Lockheed Martin",
      imageSrc: "../img/Podcast/episodes/ep_11/guest/Morales_Miguel.jpg",
      quote:
        "Teja's questions were really interesting, he does work a lot before asking something, those questions are well connected and deeply engaging, I enjoyed our conversation with a lot of fun, didn't realize we spoke over hours and totally enjoyed our chat. I appreciate his work towards podcasting, Btw, I love the name 'Exploiting'.",
    },
    {
      customerName: "Radmila ercegovac",
      customerProfile: "Marketing Research, Manning",
      imageSrc: "../img/core-img/radmila.jpg",
      quote:
        "Great podcast with interesting guests and an original approach. Looking forward to further collaboration",
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
          <p>Guests</p>
          <h4>TESTIMONIALS</h4>
        </div>
      </HeadingContainer>
      <TestimonialsSlider arrows={false} ref={setSliderRef}>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index}>
            <QuoteContainer>{testimonial.quote}</QuoteContainer>
            <CustomerInfoAndControlsContainer>
              <CustomerImage src={testimonial.imageSrc} />
              <CustomerNameAndProfileContainer>
                <CustomerName>{testimonial.customerName}</CustomerName>
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
