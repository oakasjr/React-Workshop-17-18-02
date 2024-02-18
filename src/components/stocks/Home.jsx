import React from 'react'

const Home = () => {
    const logout = () => {
        localStorage.clear()
        setTimeout(() => {
            window.location.reload()
        }, 300)
    }
    return (

        <div>
            <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-3 rounded-lg mt-2 shadow-lg">
                ออกจากระบบ
            </button>
        </div>

    )
}

export default Home