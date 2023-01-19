// Layout
import Counter from '@components/Landing/Counter/Counter'
import LandingLayout from '@layouts/LandingLayout'

export default function LandingPage() {
    return (
        <>
            <LandingLayout>
                <div>LandingPage</div>
                <Counter></Counter>
            </LandingLayout>
        </>
    )
}
