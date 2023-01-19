// Layout
import LandingLayout from '@layouts/LandingLayout'
// Components
import Hero from '@components/landing/Hero'
import AnimatedText from '@components/Landing/AnimatedText'
import Counter from '@components/Landing/Counter/Counter'
import NewsLetter from '@components/Landing/NewsLetter/NewsLetter'

export default function LandingPage() {
    return (
        <>
            <LandingLayout>
                <div>LandingPage</div>
                <Hero />
                <AnimatedText/>
                <NewsLetter/>
                <Counter />
            </LandingLayout>
        </>
    )
}
