import styled from "styled-components";

export const StyledSliderContainer = styled.div`
border-radius: 0.625rem;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(141deg, #EB5231 -29.15%, #571FCF 151.64%);
color:#fff;
padding:3rem;
& .slick-dots li.slick-active button:before{
    color:#fff !important;
}
& .slick-dots li button:before{
    color:#fff !important;
    font-size:0.5rem;
}
`;