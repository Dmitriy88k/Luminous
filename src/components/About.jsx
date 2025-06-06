import { motion } from "framer-motion"
import House from "../assets/brand_img.png"



const About = () => {
    return(
        <motion.div
        initial={{opacity: 0, x:200}} transition={{duration: 1}} whileInView={{opacity: 1, x:0}} viewport={{once: true}} className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id="About">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2">About <span className='underline underline-offset-4 decoration-1 under font-light'>Luminous</span></h1>
            <p className="text-gray-500 max-w-100 text-center mb-8 mt-2 text-sm leading-normal">At Luminous Properties, we believe that finding a home is more than just a transaction—it's a journey toward a brighter future. Our mission is to guide you through that journey with clarity, trust, and a personal touch. Whether you're buying your first home, upgrading to match your lifestyle, or investing for tomorrow, our experienced team is dedicated to helping you navigate the market with confidence. With a passion for modern living and a deep understanding of what makes a house feel like home, Luminos is here to bring your vision to life.</p>
            <div className="flex flex-col md:flex justify-center items-center my-10 md:gap-20 lg:flex-row lg:items-start">
                <img src={House} alt="" className="w-full  max-w-md"/>
                <div className="flex flex-col items-center md:items-start mt-5 text-gray-600 lg:mt-10">
                    <div className="grid grid-cols-2 gap-6 text-center md:w-full lg:text-start 2xl:pr-28 ">
                        <div>
                            <p className="text-4xl font-medium text-gray-800">10+</p>
                            <p>Years of Excellence</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-800">125+</p>
                            <p>Projects Completed</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-800 ">30+</p>
                            <p>Million Sq. Ft. Sold</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-800">15+</p>
                            <p>Ongoing Projects</p>
                        </div>
                    </div>
                    <p className="my-15 max-w-xl w-120 text-center md:my-7 lg:text-left">We combine local expertise with cutting-edge technology to deliver smart, sustainable spaces tailored to your lifestyle. Our client-first approach has earned us a reputation for reliability, transparency, and exceptional results. Every project we take on reflects our commitment to quality, innovation, and creating lasting value for homeowners and investors alike.</p>
                    <button className="bg-blue-600 text-white px-8 py-2 rounded mx-auto cursor-pointer active:scale-95 transition-all delay-75 lg:mx-0">Learn more</button>
                </div>
            </div>
        </motion.div>
    )
}

export default About;