import React from 'react'
import Link from "next/link";

function BottomNAV() {
  return (
	<div className='max-w-[1440px] flex w-full py-[19px] flex-col items-center gap-[10px] bg-primary'>
		<Link
              className="text-white text-center font-plus text-[19px] font-[800] leading-[150%]"
              href="/"
            >
              About us
            </Link>
	</div>
  )
}

export default BottomNAV