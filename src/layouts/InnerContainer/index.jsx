const InnerContainer = ({ children }) => (
    <>
        <div className='w-full h-full flex justify-center'>
            <div className='w-full max-w-6xl px-4'>
                { children }
            </div>
        </div>
    </>
)

export default InnerContainer
