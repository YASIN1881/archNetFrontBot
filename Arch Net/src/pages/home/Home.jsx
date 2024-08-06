import{Progress as e}from"antd";import{Select as t}from"antd";import{Collapse as r}from"antd";import{CiWallet as i}from"react-icons/ci";import{VscVmActive as l}from"react-icons/vsc";import{LuRefreshCcw as f}from"react-icons/lu";import{FcDownload as n}from"react-icons/fc";import{FcUpload as o}from"react-icons/fc";import{FcPlanner as c}from"react-icons/fc";import{FcConferenceCall as a}from"react-icons/fc";import{VscEye as s}from"react-icons/vsc";import{VscEyeClosed as d}from"react-icons/vsc";import{FcAndroidOs as m}from"react-icons/fc";import{FaApple as x}from"react-icons/fa6";import{SiWindows as u}from"react-icons/si";import{MdOutlineLaptopMac as g}from"react-icons/md";import{FcLinux as h}from"react-icons/fc";import{FaCloudDownloadAlt as b}from"react-icons/fa";import{RxClipboardCopy as $}from"react-icons/rx";import{FaInfoCircle as w}from"react-icons/fa";import{useState as y}from"react";export default function z(){let[e]=y(!1),t=[{key:0,label:<div className="flex items-center gap-2">

    <l size={20}/>

    <p className="font-VazirMedium font-extrabold text-lg">اشتراک فعال من</p>

  </div>,children:<div className="flex flex-col gap-4 child:text-base">

    {}

    <div className="flex justify-between">

      <p className="font-VazirRegular font-extrabold">نام اشتراک</p>

      <p className="font-VazirLight">اشتراک ۲۰ گیگ تک کاربره</p>

    </div>

    {}

    <div className="flex justify-between">

    <p className="font-VazirRegular font-extrabold">تاریخ پایان</p>

    <p className="font-VazirLight">۱۴۰۳/۰۵/۲۳</p>

    </div>

  </div>,showArrow:!1}];return<>

  {}

  <r accordion={!0}activeKey={0}items={t}className="my-5  shadow-xl"/>

  {}

  <div className="py-5 border-b border-t border-zinc-500 flex flex-col gap-4 child:flex child:justify-between child:items-center child-first:justify-end">

      {}

      <div className="text-blue-500">

          <f size={20}/>

      </div>

      {}

      <div className="child-first:flex child-first:items-center child-first:gap-2">

          {}

          <div >

              {}

              <div >

                  <n size={25}/>

              </div>

              {}

              <div >

                  <p className="font-VazirMedium text-xl">حجم کل</p>

                  <p className="font-VazirLight text-md">۳۰ گیگ</p>

              </div>

          </div>

          {}

          <div dir="ltr">

              <e status="active"percent={55}percentPosition={{align:"center",type:"inner"}}size={[170,15]}/>

          </div>

      </div>

      {}

      <div className="child-first:flex child-first:items-center child-first:gap-2">

          {}

          <div className="flex items-center gap-2">

              {}

              <div >

                  <o size={25}/>

              </div>

              {}

              <div >

                  <p className="font-VazirMedium text-xl ">حجم مصرف شده</p>

                  <p className="font-VazirLight text-md">۱۵۰ مگابایت</p>

              </div>

          </div>

          {}

          <div >

              <div dir="ltr">

                  <e status="active"percent={55}percentPosition={{align:"center",type:"inner"}}size={[170,15]}/>

              </div>

          </div>



      </div>

      {}

      <div className="child-first:flex child-first:items-center child-first:gap-2">

          {}

          <div >

              {}

              <div >

                  <c size={25}/>

              </div>

              {}

              <div >

                  <p className="font-VazirMedium text-xl">تاریخ انقضا</p>

                  <p className="font-VazirLight text-md">۳۰ روز</p>

              </div>

          </div>

          {}

          <div >

              <div dir="ltr">

                  <e percent={0}format={e=>e}percentPosition={{align:"center",type:"inner"}}size={[170,15]}/>

              </div>

          </div>

      </div>

      {}

      <div className="child-first:flex child-first:items-center child-first:gap-2">

          {}

          <div >

              {}

              <div >

                  <a size={20}/>

              </div>

              {}

              <div >

              <p className="font-VazirMedium text-xl">تعداد کاربران</p>

              <p className="font-VazirLight text-md">۴ کاربره</p>

              </div>

          </div>

          {}

          <div >

              <div dir="ltr">

                      <e percent={40}format={e=>e}percentPosition={{align:"center",type:"inner"}}size={[170,15]}/>

              </div>

          </div>

      </div>

  </div>

  {}

  <div className="w-full h-40 mt-10 px-2 rounded-xl flex flex-col justify-between bg-purple-200 shadow-xl">

      {}

      <div className="w-full flex justify-between items-start mt-3">

          <p className="font-VazirMedium text-base flex items-center gap-1"> 

              <i size={20}/>

              حساب دیجیتال آرچ نت

          </p>

          <button className="font-VazirLight font-light h-5 p-3 shadow-xl flex items-center bg-purple-500 rounded-md text-white">افزایش موجودی</button>

      </div>

      {}

      <div className="w-full flex flex-row justify-between items-end mb-3">

          {}

          <button >

              {e?<s size={20}/>:<d size={20}/>}

          </button>

          {}

          <div className="flex flex-col gap-1 child:font-VazirLight child:text-lg text-center">

              <p >موجودی حساب</p>

              <p >۲۲۰,۰۰۰ <span className="font-VazirLight text-sm">تومان</span></p>

          </div>

      </div>

  </div>  

  <div className="border-b border-zinc-500 mt-10"></div>

  {}

  <div className="pt-10 pb-20">

      {}

      <div className="flex">

          <t style={{flex:1}}className="bg-zinc-100"options={[{value:"android",label:<p className="flex justify-between items-center">

                  Android

                  <m size={20}/>

              </p>},{value:"ios",label:<p className="flex justify-between items-center">

                  Ios

                  <x size={20}color="gray"/>

              </p>},{value:"windows",label:<p className="flex justify-between items-center">

                  Windows

                  <u size={20}color="blue"/>

              </p>},{value:"mac",label:<p className="flex justify-between items-center">

                  Mac

                  <g size={20}color="silver"/>

              </p>},{value:"linux",label:<p className="flex justify-between items-center">

                  Linux

                  <h size={20}/>

              </p>}]}defaultValue={"android"}popupMatchSelectWidth={!1}/>

          {}

      </div>



      {}

      <div className="flex flex-col items-center justify-between gap-4 flex-wrap mt-5 mb-8 child:shadow-xl child:w-[60%]">

          <div className="flex rounded-md">

              <r className="w-full"defaultActiveKey={["1"]}accordion={!0}items={[{key:1,label:<div >

                      <p className="flex flex-row-reverse gap-4 justify-center font-VazirRegular text-base">

                          v2rayng

                          <img src="./image/android/v2ray.webp"alt="v2ray"className="size-6"/>

                      </p>

                      </div>,children:<div className="flex flex-col justify-center gap-4 child:font-VazirLight child:text-lg child:text-white">

                          <button className="bg-purple-600 flex items-center justify-center gap-2 rounded-md">

                                لینک اتصال

                              <$ />

                          </button>

                          <button className="bg-amber-500 flex items-center justify-center gap-2 rounded-md"> 

                              آموزش برنامه

                              <w />

                          </button>

                          <button className="bg-green-500 flex items-center justify-center gap-2 rounded-md">

                              دانلود برنامه

                              <b />

                          </button>

                      </div>,showArrow:!1}]}/>

          </div>

          <div className="flex rounded-md">

              <r className="w-full"defaultActiveKey={["1"]}accordion={!0}items={[{key:2,label:<div >

                      <p className="flex flex-row-reverse gap-4 justify-center font-VazirRegular text-base">

                          v2rayng

                          <img src="./image/android/v2ray.webp"alt="v2ray"className="size-6"/>

                      </p>

                      </div>,children:<div className="flex flex-col justify-center gap-4 child:font-VazirLight child:text-lg child:text-white">

                          <button className="bg-purple-600 flex items-center justify-center gap-2 rounded-md">

                                لینک اتصال

                              <$ />

                          </button>

                          <button className="bg-amber-500 flex items-center justify-center gap-2 rounded-md">

                              آموزش برنامه

                              <w />

                          </button>

                          <button className="bg-green-500 flex items-center justify-center gap-2 rounded-md">

                              دانلود برنامه

                              <b />

                          </button>

                      </div>,showArrow:!1}]}/>

          </div>

      </div>

  </div>

</>};