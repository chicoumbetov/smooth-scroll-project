import yacht from '../../images/Yacht.svg'
import car from '../../images/svg-1.svg'
import doctor from '../../images/doctors.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get started',
    imgStart: true,
    img: `${car}`,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited access',
    headline: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: `${yacht}`,
    alt: 'Car',
    dark: false,
    primary: true,
    darkText: true
}

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Join our Team',
    headline: 'Creating an account is extremely easy',
    description: 'Get everything set up and ready in under 10minutes. All you need to do is add your information and you are ready to go.',
    buttonLabel: 'Start Now',
    imgStart: false,
    img: `${doctor}`,
    alt: 'Paper',
    dark: false,
    primary: true,
    darkText: false
}