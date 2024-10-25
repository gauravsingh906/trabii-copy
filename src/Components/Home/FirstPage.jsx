import React from 'react'

const FirstPage = () => {
  return (
    <div className='w-full flex relative items-center justify-center'>
      <div className='absolute top-[-54px] ' style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1544441452-326ff5a947fd?auto=format&fit=crop&w=1440')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}>
        <div className='bg-gray-950 w-full h-full opacity-50'></div>
      </div>

      <div className='z-10 flex items-center absolute top-[-56px] w-full h-[640px]  justify-center flex-col gap-3'>

        <div className='flex justify-center items-center flex-col gap-[10px]'>
          <div className='z-30 text-[48px] text-gray-200 tracking-wide text- font-bold'>DISCOVER, CONNECT, EXPERIENCE</div>

          <div>
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=720,h=425,fit=crop,trim=8.451127819548871;0;16.902255639097742;0/Yyv2WR90PyhOLWlB/trabii-logo1-png-YX4zJO3M5NIpW8On.png" alt="" width='250px' />
          </div>

          <div className='text-[50px] absolute top-[410px] text-gray-200 font-bold'>MAKES IT HAPPEN</div>
        </div>
      </div>


    </div>
  )
}

export default FirstPage
