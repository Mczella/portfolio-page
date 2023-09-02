import {motion} from "framer-motion"
import React, {useState} from "react"
import {Stack} from "@chakra-ui/react";

const NavigationButtons = ({skills, experience, contact, header}) => {
    const [headerState, setHeaderState] = useState(true)
    const [experienceState, setExperienceState] = useState(false)
    const [skillsState, setSkillsState] = useState(false)
    const [contactState, setContactState] = useState(false)

    const pathVariants = {
        hidden: {
            rotate: 0,
        }, visible: {
            rotate: 180, transition: {
                duration: 1, ease: "easeInOut",
            }
        }
    }


    return (
        <Stack bottom="40px"
               right="40px"
               zIndex={2}
               position="fixed"
               align="center">
            <motion.svg onClick={() => {
                            header()
                            setHeaderState(true)
                            setContactState(false)
                            setExperienceState(false)
                            setSkillsState(false)
                        }}
                        variants={headerState ? pathVariants : null} initial="hidden" width={'20px'}
                        animate="visible" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white"
                        class="bi bi-triangle">
                <motion.path
                    d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
            </motion.svg>
            <motion.svg onClick={() => {
                            experience()
                            setHeaderState(false)
                            setContactState(false)
                            setExperienceState(true)
                            setSkillsState(false)
                        }}
                        variants={experienceState ? pathVariants : null} initial="hidden" width={'20px'}
                        animate="visible" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white"
                        class="bi bi-triangle">
                <motion.path
                    d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
            </motion.svg>
            <motion.svg onClick={() => {
                            skills()
                            setHeaderState(false)
                            setContactState(false)
                            setExperienceState(false)
                            setSkillsState(true)
                        }}
                        variants={skillsState ? pathVariants : null} initial="hidden" width={'20px'}
                        animate="visible" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white"
                        class="bi bi-triangle">
                <motion.path
                    d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
            </motion.svg>
            <motion.svg onClick={() => {
                            setHeaderState(false)
                            setContactState(true)
                            setExperienceState(false)
                            setSkillsState(false)
                        }}
                        variants={contactState ? pathVariants : null} initial="hidden" width={'20px'}
                        animate="visible" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white"
                        class="bi bi-triangle">
                <motion.path
                    d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
            </motion.svg>
        </Stack>

    )
}
export default NavigationButtons
