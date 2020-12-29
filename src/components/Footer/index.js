import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram,
         FaYoutube, FaTwitter, FaLinkedin
        } from 'react-icons/fa';
import { FooterContainer,
         FooterWrap, 
         FooterLinksContainer,
         FooterLinksWrapper,
         FooterLinkItems,
         FooterLinkTitle,
         FooterLink, SocialMedia, SocialMediaWrap, 
         SocialLogo, WebsiteRights, 
         SocialIcon, SocialIconLink
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/">
                                How it works
                            </FooterLink>
                            <FooterLink to="/">
                                Testimonials
                            </FooterLink>
                            <FooterLink to="/">
                                Careers
                            </FooterLink>
                            <FooterLink to="/">
                                Investors
                            </FooterLink>
                            <FooterLink to="/">
                                Terms of Service
                            </FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/">
                                Contact
                            </FooterLink>
                            <FooterLink to="/">
                                Support
                            </FooterLink>
                            <FooterLink to="/">
                                Destinations
                            </FooterLink>
                            <FooterLink to="/">
                                Sponsorships
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/">
                                Submit Video
                            </FooterLink>
                            <FooterLink to="/">
                                Ambassadors
                            </FooterLink>
                            <FooterLink to="/">
                                Agency
                            </FooterLink>
                            <FooterLink to="/">
                                Influencer
                            </FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/">
                                Instagram
                            </FooterLink>
                            <FooterLink to="/">
                                Facebook
                            </FooterLink>
                            <FooterLink to="/">
                                Youtube
                            </FooterLink>
                            <FooterLink to="/">
                                Twitter
                            </FooterLink>

                        </FooterLinkItems>
                    </FooterLinksWrapper>

                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            logo
                        </SocialLogo>
                        <WebsiteRights>logo ⓒ {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcon>
                            <SocialIconLink href="/" target="_blank"
                                            area-labels="Facebook">
                                            <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                                            area-labels="Instagram">
                                            <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                                            area-labels="Youtube">
                                            <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                                            area-labels="Twitter">
                                            <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                                            area-labels="Linkedin">
                                            <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcon>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
