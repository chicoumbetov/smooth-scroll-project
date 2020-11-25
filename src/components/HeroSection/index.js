import React from 'react';
import Video from '../../videos/video1.mp4';
import { HeroContainer, HeroBg, VideoBg } from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video1.mp4' />
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection
