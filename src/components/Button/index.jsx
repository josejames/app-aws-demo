// Common
import Link from "next/link";

const Button = ({ children }) => {
    return (
        <Link className="hover:bg-main-gradient text-white hover:text-black py-2 px-7 border hover:border-none border-white transition-all ease-in-out rounded-full" href='#'>
            { children }
        </Link>
    )
}

export default Button