// Layout
import Counter from '@components/landing/Counter/Counter'
import LandingLayout from '@layouts/LandingLayout'
// Components
import Hero from '@components/landing/Hero'

export default function LandingPage() {
    return (
        <>
            <LandingLayout>
                <Hero />
                <Counter />
            </LandingLayout>
        </>
    )
}
