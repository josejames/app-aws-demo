import Input from '@components/Input'
import { motion } from 'framer-motion'

const NewsLetter = () => {
    return (
        <section className="flex flex-col w-full min-h-screen bg-news bg-cover items-center justify-center text-center mt-32">
            <div>
                <motion.h3
                    transition={{ duration: 1 }}
                    initial={{ y: -150, opacity: 0, scale: 1.8 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    className="text-transparent bg-clip-text text-4xl bg-main-gradient max-w-fit mx-auto"
                >
          All for One
                </motion.h3>
                <motion.h2
                    transition={{ duration: 1 }}
                    initial={{ y: 150, opacity: 0, scale: 1.8 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    className="text-white text-[10rem] leading-none">
          Come see us in Dubai.
                </motion.h2>
                <motion.h3
                    transition={{ duration: 1 }}
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="text-white text-4xl max-w-[800px] mx-auto">
          Get exclusive acces to community updates and an opportunity to join us
          for the event of the year.
                </motion.h3>
            </div>
            <motion.div
                transition={{ duration: 1 }}
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}className="my-16">
                <p className="my-2 italic">join the waitlist</p>
                <Input />
            </motion.div>
        </section>
    )
}

export default NewsLetter
