import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import BackgroundImage from 'gatsby-background-image';
import { BgImage, convertToBgImage } from 'gbimage-bridge';

const GpiTest = () => {
  const {
    placeholderImage,
    oldImage,
    mobileImage,
    desktopImage,
  } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bubbles.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        desktopImage: file(relativePath: { eq: "seamless-bg-desktop.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        mobileImage: file(relativePath: { eq: "490x352.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  );
  const image = getImage(placeholderImage);

  const backgroundFluidImageStack = [
    `linear-gradient(rgba(220, 15, 15, 0.73), rgba(4, 243, 67, 0.73))`,
    image,
  ].reverse();

  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.
  const sources = [
    getImage(mobileImage),
    {
      ...getImage(desktopImage),
      media: `(min-width: 491px)`,
    },
  ];

  // Use like this:
  const bgImage = convertToBgImage(image);

  const testImage = oldImage;
  return (
    <>
      {/*<BackgroundImage*/}
      {/*  Tag="section"*/}
      {/*  // Spread bgImage into BackgroundImage:*/}
      {/*  {...bgImage}*/}
      {/*  style={{*/}
      {/*    backgroundRepeat: 'repeat',*/}
      {/*    backgroundSize: 'unset',*/}
      {/*    minHeight: 1000,*/}
      {/*    minWidth: 1000,*/}
      {/*  }}*/}
      {/*  preserveStackingContext*/}
      {/*>*/}
      {/*  <div style={{ minHeight: 1000, minWidth: 1000 }}>*/}
      {/*    /!*<GatsbyImage image={image} alt={"testimage"}/>*!/*/}
      {/*  </div>*/}
      {/*</BackgroundImage>*/}
      <BgImage
        Tag="section"
        // Spread bgImage into BackgroundImage:
        style={{
          backgroundRepeat: 'repeat',
          backgroundSize: 'unset',
          minHeight: 1000,
          minWidth: 1000,
        }}
        preserveStackingContext
        image={backgroundFluidImageStack}
      >
        <div style={{ minHeight: 1000, minWidth: 1000 }}>
          {/*<GatsbyImage image={image} alt={"testimage"}/>*/}
        </div>
      </BgImage>
    </>
  );
};
export default GpiTest;
