// Layout
import Counter from '@components/landing/Counter/Counter'
import LandingLayout from '@layouts/LandingLayout'
// Components
import Hero from '@components/landing/Hero'
import AnimatedText from '@components/Landing/AnimatedText'

export default function LandingPage() {
    return (
        <>
            <LandingLayout>
                <Hero />
                <AnimatedText/>
                <Counter />
            </LandingLayout>
        </>
    )
}
