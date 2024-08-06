import{Link as e}from"react-router-dom";import{VscAccount as r}from"react-icons/vsc";import{BsBasket3 as t}from"react-icons/bs";import{GrHomeRounded as o}from"react-icons/gr";import{SlBasket as i}from"react-icons/sl";import{MdCastForEducation as n}from"react-icons/md";import{useState as c}from"react";export default function m(){let e=[{id:1,name:"اکانت",icon:<r />,href:"/account"},{id:2,name:"سفارشات",icon:<t />,href:"/order"},{id:3,name:"خانه",icon:<o />,href:"/"},{id:4,name:"خرید",icon:<i />,href:"/plans"},{id:5,name:"آموزش",icon:<n />,href:"/learn"}],[r,t]=c(2);return<div className="px-4 fixed bottom-2 left-0 right-0 z-50 customBlur">

      <ul className="flex items-center">

        {e.map((e,o)=><li key={e.id}className="w-screen">

              <e to={e.href}className="flex flex-col items-center  h-full text-center"onClick={()=>t(o)}>

                <span className={`text-xl duration-500 z-10 flex items-center justify-center flex-col ${o===r&&"-mt-6 text-white bg-purple-400 border-1 border-white customBorderBlur duration-500 size-16 -top-5 rounded-full flex justify-center items-center"}`}>

                {e.icon}

                </span>

                <span className={`${r===o?"font-VazirMedium translate-y-0 duration-700 opacity-100":"opacity-0 translate-y-10"}`}>{e.name}</span>

              </e>

            </li>)}  

      </ul>

    </div>};