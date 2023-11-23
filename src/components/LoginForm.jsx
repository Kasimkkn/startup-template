import { Link } from "react-router-dom"

const LoginForm = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="py-10 rounded-2xl shadow-2xl flex gap-10">
                <div className="loginForm flex flex-col items-center">
                    <h2 className="text-2xl ">login</h2>
                    <form className="flex flex-col  gap-2 px-10">
                        <label htmlFor="email">Email</label>
                        <input className="rounded-lg p-1 border border-gray-400" type="email" name="email" id="email" />
                        <label htmlFor="password">Password</label>
                        <input className="rounded-lg p-1 border border-gray-400" type="password" name="password" id="password" />
                        <Link to={'/register'} className="text-xs my-1">Dont Have An Acc?</Link>
                        <button type="submit" className="my-2 p-1 rounded-lg bg-black text-white">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
