import React from 'react'



const HomePage = () => {
  return (
    <div className='bg-yellow-600 w-full h-full'>
     <div className='bg-yellow relative w-full h-full top-[410px] flex justify-center items-center flex-col'>
        <h6 className='pt-3 absolute top-[3px] text-xl text-[#1f1f1f] tracking-wider font-medium opacity-90'>BACKED BY</h6>
        <div className='absolute top-14 left-[422px]'>
          <img src={'https://assets.zyrosite.com/Yyv2WR90PyhOLWlB/66910457a386ce3f215a5f89_ms-mjE9qejbM4HqpJO3.svg'} alt="" width='740px' />
        </div>

      <div className=' absolute top-[160px] gap-[60px] flex  justify-center'>
        <div>
            <div>
                <img src={"https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=720,h=288,fit=crop,trim=0;292.5714285714286;201.27272727272725;286.4761904761905/Yyv2WR90PyhOLWlB/c603a9ed-8bf7-49ff-98f9-eb45ea381e7c-ALpo7ZOzGvSMwg25.jpg"} alt="" width="200px"/>
            </div>
            <span><strong>Accepted into Xartup Fellowship</strong></span>
        </div>

        <div>
            <img src={"https://assets.zyrosite.com/Yyv2WR90PyhOLWlB/google_for_startups_logo-Y4LJxXMor1SB2jel.svg"} alt="" width="560px" />
        </div>

        <div className='absolute right-[-250px]'>
            <img src={"https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=720,h=346,fit=crop/Yyv2WR90PyhOLWlB/wadhwani-foundation-logo-AzG73KxOaefvPgXP.png"} alt="" width="140px" />
            <span>
                <strong>Liftoff Acceleration Program</strong>
            </span>
        </div>

      </div>

      <div className='absolute top-[300px]'>
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=214,fit=crop,trim=227.67567567567568;0;227.67567567567568;0/Yyv2WR90PyhOLWlB/iit-delhis-edc-hosts-inaugural-season-of-venture-studio-for-aspiring-entrepreneurs-AwvkDKBOK7fovDp9.webp" alt="" width="200px"/>
            <span>
                <strong>IIT Delhi eDC
                Alumns Program</strong>
            </span>
      </div>


    </div> 

      
    </div>
  )
}

export default HomePage
