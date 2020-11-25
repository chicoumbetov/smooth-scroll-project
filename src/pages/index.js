import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    //change state from false to true & vice versa:
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
        </>
    )
}

export default Home
