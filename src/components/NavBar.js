import React from 'react'
import tw from 'twin.macro'

export default function NavBar() {
    return (
        <StyledNavBar>Play My Mini Game!!</StyledNavBar>
    )
}

const StyledNavBar = tw.header`flex items-center justify-center h-24 text-white text-lg font-semibold absolute w-full bg-blue-900 border-b-2 border-white border-opacity-10 bg-opacity-30 backdrop-blur-[1px]`
