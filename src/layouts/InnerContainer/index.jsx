const InnerContainer = ({ children }) => (
    <>
        <div className='w-full h-full flex justify-center'>
            <div className='w-full max-w-[85rem] px-4 md:px-6'>
                { children }
            </div>
        </div>
    </>
)

export default InnerContainer
