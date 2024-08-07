import{useState as e}from"react";import{Link as i}from"react-router-dom";import{FcAndroidOs as a}from"react-icons/fc";import{FaApple as r}from"react-icons/fa6";import{SiWindows11 as d}from"react-icons/si";import{MdOutlineLaptopMac as n}from"react-icons/md";import{FcLinux as o}from"react-icons/fc";export default function c(){let[i,a]=e(0),r=[{id:1,name:"Android",icon:<a size={30}/>,children:[{id:11,name:"ClashMeta",src:"/image/android/clashMeta.webp"},{id:12,name:"HiddifyNext",src:"/image/android/hiddify.webp"},{id:13,name:"V2rayNG",src:"/image/android/v2ray.webp"},{id:14,name:"Nekobox",src:"/image/android/NekoboxAndroid.webp"},]},{id:2,name:"Ios",icon:<r size={30}color="gray"/>,children:[{id:22,name:"Shadowrocket",src:"/image/mac/shadowRocketiconMac.webp"},{id:23,name:"V2box",src:"/image/mac/v2box.webp"},{id:24,name:"Sing Box",src:"/image/ios/singbox.webp"},{id:25,name:"FoXray",src:"/image/ios/foxray.webp"},{id:26,name:"Streisand",src:"/image/mac/streisand2.webp"},]},{id:3,name:"Windows",icon:<d size={30}color="blue"/>,children:[{id:33,name:"V2rayN",src:"/image/android/v2ray.webp"},{id:34,name:"ClashVerge",src:"/image/linux/clashverge.webp"},{id:35,name:"Nekoray",src:"/image/windows/Nekoray.webp"},{id:36,name:"Hiddify Next",src:"/image/android/hiddify.webp"},]},{id:4,name:"Mac",icon:<n size={30}color="darkGray"/>,children:[{id:44,name:"Streisand",src:"/image/mac/streisand2.webp"},{id:45,name:"V2box",src:"/image/mac/v2box.webp"},{id:46,name:"Shadowrocket",src:"/image/mac/shadowRocketiconMac.webp"},{id:47,name:"Hiddify Next",src:"/image/mac/hiddifyNextMac.webp"},]},{id:5,name:"Linux",icon:<o size={30}color=""/>,children:[{id:55,name:"ClashVerge",src:"/image/linux/clashverge.webp"},{id:56,name:"Nekoray",src:"/image/windows/Nekoray.webp"},]}],d=r[i].children;return<div className="min-h-screen pb-5">

  {}

  <div className="flex items-center w-full mt-10 child:hover:cursor-pointer">{r.map((e,r)=><div key={e.id}className={`flex items-center flex-col justify-center gap-2 w-full ${i===r?"bg-zinc-100 text-black shadow-md shadow-purple-300 rounded-md p-1 tr":""}`}onClick={()=>a(r)}>

        {e.icon}

        {e.name}

      </div>)}

  </div>

  {}

  <div className="my-10 mb-20 flex flex-row w-full flex-wrap items-center justify-center gap-4 child:hover:cursor-pointer">

    {d.map(e=><i key={e.id}to={`/learn/${e.name}`}>

        <div key={e.id}className="p-3 mb-10 rounded-md bg-zinc-100 shadow-lg shadow-purple-200 child:w-full"> {}

          <img src={e.src}className="w-10 h-10 object-contain"loading="lazy"/>

          <p className="my-2 text-center font-VazirLight text-base">{e.name}</p>

          <p className="text-center font-VazirLight text-sm">برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه {e.name} روی این آموزش کلیک کنید.</p>

        </div>

        </i>)}

  </div>

  </div>};