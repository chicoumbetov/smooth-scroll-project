import React from 'react'
import { Button } from '../ButtonElements';
//import { Button } from 'react-scroll';
import {
    InfoContainer,
    InfoWrapper, InfoRow,
    Column1, Column2,
    TextWrapper, TopLine,
    Heading, Subtitle,
    BtnWrap, Img, ImgWrap
} from './InfoElements';

//import {electric-car} from '../../images/electric-car.svg';

const InfoSection = ({

    lightBg, id, imgStart, topLine,
    lightText, headline, darkText,
    description, buttonLabel, img, alt,
    primary, dark, dark2

}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>

                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}> {description}</Subtitle>
                                <BtnWrap>
                                    <Button to='/'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        activeClass="active"
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>

                        <Column2 imgStart={imgStart}>
                            <ImgWrap imgStart={imgStart}>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
