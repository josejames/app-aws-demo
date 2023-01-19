// Layout
import LandingLayout from '@layouts/LandingLayout'
// Components
import Hero from '@components/landing/Hero'
import AnimatedText from '@components/landing/AnimatedText'
import Counter from '@components/landing/Counter/Counter'
import NewsLetter from '@components/landing/NewsLetter/NewsLetter'

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
