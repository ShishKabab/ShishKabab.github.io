import React from "react";
import styled from "styled-components";

export function CoworkingPics() {
  return <Container>
    <PicContainer>
      <Pic src="/coworking-1.jpg" alt="Picture of inside" />
      <div style={{ width: '20px' }}></div>
      <Pic src="/coworking-2.jpg" alt="Picture of terrace" />
    </PicContainer>
    <Caption>Space in progress, eager to evolve</Caption>
  </Container>
}

function Pic(props: { src: string, alt: string }) {
  return <ImageLink href={props.src} target="_blank"><Image src={props.src} alt={props.alt} /></ImageLink>
}

const Container = styled.div`
  margin-bottom: 20px;
`

const PicContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  align-items: center;
`

const Caption = styled.div`
  font-size: 12px;
  text-align: center;
`

const ImageLink = styled.a`
  width: auto
  height: auto;
`

const Image = styled.img`
width: 100%;
height: auto;
`