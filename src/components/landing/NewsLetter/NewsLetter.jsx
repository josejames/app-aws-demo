import Input from '@components/Input'

const NewsLetter = () => {
    return (
        <section className="flex flex-col w-full min-h-screen bg-news bg-cover items-center justify-center text-center mt-32">
            <div>
                <h3 className="text-transparent bg-clip-text text-4xl bg-main-gradient max-w-fit mx-auto">All for One</h3>
                <h2 className="text-white text-[10rem] leading-none">Come see us in Dubai.</h2>
                <h3 className="text-white text-4xl max-w-[800px] mx-auto">
          Get exclusive acces to community updates and an opportunity to join us
          for the event of the year.
                </h3>
            </div>
            <div className="my-16">
                <p className="my-2 italic">join the waitlist</p>
                <Input/>
            </div>
        </section>
    )
}

export default NewsLetter