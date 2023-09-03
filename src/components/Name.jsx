import {motion} from "framer-motion"
import React from "react"

const Name = () => {

    const pathVariants = {
        hidden: {
            opacity: 1, pathLength: 0,
        }, visible: {
            opacity: 1, pathLength: 1, transition: {
                duration: 2.5, ease: "easeInOut",
            }
        }
    }

    return (
        <motion.svg initial="hidden"
                    animate="visible"
                    viewBox="0 0 775 230" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path variants={pathVariants}
                         d="M5 80.4728V31.0516H6.34087L26.007 66.3366V80.4728H5Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M5 12.797V2.55654H21.3885L49.8448 54.0926L65.6373 27.4898H67.1272V63.6652L57.1451 80.4728H42.6935L5 12.797Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants} d="M75.1724 80.4728V2.55654H96.1794V80.4728H75.1724Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants} d="M108.694 80.4728V2.55654H129.701V80.4728H108.694Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M141.62 60.3259V22.8148C141.62 18.5108 143.756 14.3182 148.027 10.2369C153.688 4.81983 161.336 2.07421 170.97 2V17.6946C166.799 17.7688 164.117 19.2158 162.925 22.0356C162.726 22.3324 162.627 22.5922 162.627 22.8148V60.3259C162.627 61.5132 163.471 62.6634 165.16 63.7765C166.749 64.8154 168.686 65.3348 170.97 65.3348V81.0294C159.846 81.0294 151.453 77.5417 145.792 70.5663C143.011 67.0044 141.62 63.591 141.62 60.3259Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M179.016 81.0294V65.3348C179.016 65.3348 180.158 65.0009 182.442 64.333C183.833 63.591 184.776 62.8118 185.273 61.9955C185.77 61.0309 186.018 59.6581 186.018 57.8771V56.5414L206.578 60.2146C206.578 66.6705 203.102 72.0134 196.149 76.2431C190.885 79.434 185.174 81.0294 179.016 81.0294Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M179.016 17.6946V2C186.266 2 192.822 4.37459 198.682 9.12378C203.946 13.4277 206.578 18.0656 206.578 23.0374L186.018 27.0445V25.3749C186.018 23.5197 185.77 22.1469 185.273 21.2565C184.876 20.5144 184.131 19.8465 183.038 19.2529C182.045 18.6592 181.151 18.2511 180.356 18.0285L179.016 17.6946Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M215.517 80.4728V2.55654H236.524V33.6118H242.335V48.9724H236.524V80.4728H215.517Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M250.529 48.9724V33.6118H256.339V2.55654H277.346V80.4728H256.339V48.9724H250.529Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M288.073 80.4728L307.293 15.691H309.527L318.466 46.8575L308.633 80.4728H288.073Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M319.807 71.0116L324.277 55.6509H329.64L313.848 2.55654H334.557L359.14 80.4728H338.282L335.302 71.0116H319.807Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M368.228 80.4728V2.55654H422.459V18.1398H389.235V33.9457H408.454V49.6402H389.235V64.7783H422.459V80.4728H368.228Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M434.378 80.4728V2.55654H455.385V64.8896H490.396V80.4728H434.378Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M497.399 80.4728L516.618 15.691H518.853L527.792 46.8575L517.959 80.4728H497.399Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M529.133 71.0116L533.602 55.6509H538.966L523.173 2.55654H543.882L568.465 80.4728H547.607L544.627 71.0116H529.133Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M5 220.443V171.022H6.34087L26.007 206.307V220.443H5Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M5 152.768V142.527H21.3885L49.8448 194.063L65.6373 167.46H67.1272V203.636L57.1451 220.443H42.6935L5 152.768Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants} d="M75.1724 220.443V142.527H96.1794V220.443H75.1724Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M107.204 220.443L126.424 155.662H128.658L137.598 186.828L127.764 220.443H107.204Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M138.938 210.982L143.408 195.622H148.771L132.979 142.527H153.688L178.271 220.443H157.413L154.433 210.982H138.938Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants} d="M187.359 220.443V142.527H208.366V220.443H187.359Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M216.411 188.609V174.695H218.348C224.705 174.695 228.777 172.766 230.565 168.907C230.962 167.943 231.161 166.941 231.161 165.902C231.161 161.969 228.678 159.335 223.711 157.999C222.122 157.554 220.334 157.331 218.348 157.331H216.411V142.527H219.689C232.7 142.676 241.838 146.126 247.102 152.879C249.585 156.07 250.827 159.669 250.827 163.676C250.728 171.319 247.351 177.181 240.696 181.263C245.662 183.637 248.84 187.941 250.231 194.175C250.33 194.917 250.43 195.622 250.529 196.289L253.062 220.443H233.693L231.459 200.63C230.664 194.694 228.38 191.021 224.605 189.611C222.817 189.017 220.632 188.683 218.05 188.609H216.411Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants} d="M262.597 220.443V142.527H283.604V220.443H262.597Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M289.563 182.487L305.505 142.527H326.214L310.421 182.487L326.81 220.443H306.25L289.563 182.487Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M333.812 220.443L353.031 155.662H355.266L364.205 186.828L354.372 220.443H333.812Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M365.546 210.982L370.016 195.622H375.379L359.587 142.527H380.296L404.878 220.443H384.02L381.041 210.982H365.546Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M413.371 200.297V162.785C413.371 158.481 415.506 154.289 419.777 150.207C425.438 144.79 433.086 142.045 442.721 141.971V157.665C438.549 157.739 435.867 159.186 434.676 162.006C434.477 162.303 434.378 162.563 434.378 162.785V200.297C434.378 201.484 435.222 202.634 436.91 203.747C438.5 204.786 440.436 205.305 442.721 205.305V221C431.597 221 423.204 217.512 417.542 210.537C414.761 206.975 413.371 203.562 413.371 200.297Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M450.766 221V205.305C450.766 205.305 451.908 204.972 454.193 204.304C455.583 203.562 456.527 202.782 457.023 201.966C457.52 201.001 457.768 199.629 457.768 197.848V196.512L478.328 200.185C478.328 206.641 474.852 211.984 467.899 216.214C462.635 219.405 456.924 221 450.766 221Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M450.766 157.665V141.971C458.017 141.971 464.572 144.345 470.432 149.094C475.696 153.398 478.328 158.036 478.328 163.008L457.768 167.015V165.346C457.768 163.49 457.52 162.118 457.023 161.227C456.626 160.485 455.881 159.817 454.789 159.224C453.795 158.63 452.901 158.222 452.107 157.999L450.766 157.665Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M485.778 220.443V204.749L517.065 158.11H485.778V142.527H540.307V157.776L509.02 204.415H540.307V220.443H485.778Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M550.438 198.738V162.118C550.438 158.185 552.672 154.177 557.142 150.096C563.101 144.753 570.65 142.045 579.788 141.971V157.665C575.716 157.739 573.034 159.446 571.743 162.785C571.544 163.305 571.445 163.676 571.445 163.898V198.738C571.445 201.781 573.679 203.858 578.149 204.971C578.844 205.12 579.341 205.194 579.639 205.194V221C573.977 221 568.316 219.479 562.654 216.436C554.609 211.984 550.537 206.085 550.438 198.738Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M587.833 221V205.194C589.422 205.194 591.21 204.563 593.197 203.302C595.084 202.04 596.077 200.519 596.176 198.738V163.898C596.176 162.563 595.332 161.153 593.644 159.669C592.054 158.407 590.118 157.739 587.833 157.665V141.971C597.865 141.971 605.91 145.199 611.969 151.654C615.445 155.365 617.183 158.852 617.183 162.118V198.738C617.183 206.975 612.267 213.283 602.434 217.661C597.269 219.887 592.402 221 587.833 221Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M624.037 142.527H645.491L669.179 202.857L661.283 220.443H654.281L624.037 142.527Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M662.326 163.231L670.52 142.527H691.974C691.875 142.75 685.767 157.962 673.649 188.164H672.159L662.326 163.231Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M727.433 135.181L732.945 118.262H751.867L740.991 135.181H727.433Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M697.934 220.443L717.153 155.662H719.388L728.327 186.828L718.494 220.443H697.934Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
            <motion.path variants={pathVariants}
                         d="M729.668 210.982L734.137 195.622H739.501L723.708 142.527H744.417L769 220.443H748.142L745.162 210.982H729.668Z"
                         stroke="white" stroke-width="2" shape-rendering="crispEdges"/>
        </motion.svg>

    )
}
export default Name