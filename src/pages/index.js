// Layout
import Counter from '@components/Landing/Counter/Counter'
import NewsLetter from '@components/Landing/NewsLetter/NewsLetter'
import LandingLayout from '@layouts/LandingLayout'

export default function LandingPage() {
    return (
        <>
            <LandingLayout>
                <div>LandingPage</div>
                <NewsLetter/>
                <Counter></Counter>
            </LandingLayout>
        </>
    )
}
