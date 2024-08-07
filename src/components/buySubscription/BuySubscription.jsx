import{useState as e}from"react";import{IoClose as t}from"react-icons/io5";import{CiServer as r}from"react-icons/ci";import{TbCircleNumber1Filled as l}from"react-icons/tb";let BuySubscription=({onDismiss:t})=>{let[r,l]=e("5 گیگابایت"),[i,n]=e(1),[o]=e(0),[f,$]=e(!0),m=()=>{"function"==typeof t?t():$(!1)};return f?<div style={{transform:`translateY(${o}px)`,transition:"transform 0.2s ease-out"}}className="fixed bottom-0 left-0 right-0 bg-zinc-50 shadow-lg rounded-t-[30px] rtl z-[100]">

      <div className="flex flex-col items-center mb-2 pt-2">

        <div className="w-10 h-1 bg-gray-300 rounded-full mb-1"></div>

      </div>

      <div className="relative p-4">

        <div className="flex justify-between items-center mb-4">

          <button onClick={m}>

            <t size={24}/>

          </button>

          <span className="text-lg font-VazirMedium font-bold flex items-center">

            سرویس  آرچ نت

          </span>

          <l size={20}/>

        </div>

        <h3 className="text-base font-bold font-VazirMedium text-gray-800 flex items-center justify-center">

          اشتراک های یک ماه

        </h3>

        <p className="text-sm font-medium text-gray-500 my-4 flex items-center justify-center">

          سرویس آرچ نت امن و سریع برای تمام نیازهای آنلاین شما

        </p>



        <div className="mb-4">

          <input type="range"min="0"max="3"value={["5 گیگابایت","50 گیگابایت","100 گیگابایت","نامحدود"].indexOf(r)}onChange={e=>l(["5 گیگابایت","50 گیگابایت","100 گیگابایت","نامحدود"][e.target.value])}className="w-full accent-purple-600"/>

          <div className="flex justify-between text-sm text-gray-600 mt-1 font-semibold">

            <span >5 گیگابایت</span>

            <span >50 گیگابایت</span>

            <span >100 گیگابایت</span>

            <span >نامحدود</span>

          </div>

        </div>



        <div className="flex flex-col-reverse justify-between items-center gap-4 mb-6">

          <div >

            <span className="text-xl font-bold font-VazirLight text-gray-800">۶۷۰,۰۰۰  تومان</span>

            {}

          </div>

          <div className="flex flex-col gap-2 items-center">

            <span className="text-sm text-gray-600 font-medium mb-1 flex items-center">

              <r size={20}className="ml-2"/>

              محدودیت IP (دستگاه‌ها)

            </span>

            <div className="flex items-center border border-gray-300 rounded-full">

              <button className="px-3 py-1 text-purple-600 text-3xl"onClick={()=>n(Math.max(1,i-1))}>

                -

              </button>

              <span className="mx-3 text-2xl font-VazirLight ">{i}</span>

              <button className="px-3 py-1 text-purple-600 text-3xl"onClick={()=>n(Math.min(4,i+1))}>

                +

              </button>

            </div>

          </div>

        </div>



        <button className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold flex items-center justify-center">

          خرید اشتراک 

        </button>

      </div>

    </div>:null};export default BuySubscription;