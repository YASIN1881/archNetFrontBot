import{Collapse as t}from"antd";import{Carousel as e}from"antd";import{useState as i}from"react";import{SlBasketLoaded as l}from"react-icons/sl";import{PiMoneyWavy as o}from"react-icons/pi";import{BiSolidOffer as r}from"react-icons/bi";import n from"../../components/buySubscription/BuySubscription";export default function d(){let[t,e]=i(!1),l=()=>{e(!0)},o=()=>{e(!1)},r=[{key:0,label:<div className="flex items-center gap-2">

  <l size={20}/>

<p className="font-VazirMedium font-extrabold text-lg">

  اشتراک های پیشنهادی

</p>

</div>,children:<e autoplayarrows={!0}dots={!1}className="my-2 w-[80%] m-auto rounded-lg shadow-md">

      <div className="child:pt-3 mx-[0.1px] text-center customBlurSuggest rounded-lg shadow-md bg-zinc-50"dir="rtl">

        {}

        <p className="font-VazirMedium font-semibold text-xl">

          ۴۰ گیگ 

        </p>

        <p className="font-VazirMedium font-semibold text-xl">

          یک ماه 

        </p>

        {}

        <p className="font-VazirRegular text-lg">۲.۰۰۰ تومان</p>

        {}

        <button className="bg-purple-500 text-white p-2 my-3 rounded-md font-VazirLight font-medium w-[90%] ">خرید اشتراک</button>

      </div>

      <div className="child:pt-3 mx-[0.1px] text-center customBlurSuggest rounded-lg shadow-md bg-zinc-50"dir="rtl">

        {}

        <p className="font-VazirMedium font-semibold text-xl">

          ۷۰ گیگ 

        </p>

        <p className="font-VazirMedium font-semibold text-xl">

          یک ماه 

        </p>

        {}

        <p className="font-VazirRegular text-lg">۷۰.۰۰۰ تومان</p>

        {}

        <button className="bg-purple-500 text-white p-2 my-3 rounded-md font-VazirLight font-medium w-[90%] ">خرید اشتراک</button>

      </div>

  </e>,showArrow:!1}],n=[{key:1,label:<p className="flex items-center gap-2 font-VazirMedium font-extrabold text-lg">

  <o size={20}/>

  خرید اشتراک

</p>,children:<>

  {}

<p className="font-VazirMedium text-lg text-center mb-3">

  مدت زمان اشتراک

</p>

<div className="flex items-center justify-between child:flex child:items-center child:justify-center child:size-10 child:rounded-lg child:bg-purple-500 child:text-white child:shadow-xl child:font-VazirMedium child:min-w-max child:px-2 child:cursor-pointer">

  <div onClick={l}>

    ۱ ماهه

  </div>

  <div onClick={l}>

    ۲ ماهه

  </div>

  <div onClick={l}>

    ۳ ماهه

  </div>

  <div onClick={l}>

    ۴ ماهه

  </div>

</div>

</>,showArrow:!1}],d=[{key:2,label:<p className="flex items-center gap-2 font-VazirMedium font-extrabold text-lg">

  <r size={20}/>

  اشتراک های تخفیف دار

</p>,children:<div className="flex gap-10 my-5 pb-5 overflow-x-scroll customScroll touch-auto max-w-max child:shadow-lg child:min-w-max child:bg-zinc-50  child:h-60 child:p-3 child:rounded-md">

  <div className="flex flex-col items-center justify-between child-last:bg-purple-500">

    <div className="relative"></div>

    <p className="font-VazirMedium font-semibold text-xl">۷۰ گیگ</p>

    <p className="font-VazirMedium font-semibold text-xl">۲ کاربره</p>

    <p className="font-VazirMedium font-semibold text-xl">یک ماه</p>

    <p className="font-VazirRegular text-lg text-red-400 line-through">۲۰,۰۰۰ تومان</p>

    <p className="font-VazirRegular text-lg">۲۰,۰۰۰ تومان</p>

    <button className="text-white p-2 rounded-md font-VazirLight font-medium w-full"> خرید اشتراک </button>

  </div>



  <div className="flex flex-col items-center justify-between child-last:bg-purple-500">

    <div className="relative"></div>

    <p className="font-VazirMedium font-semibold text-xl">۷۰ گیگ</p>

    <p className="font-VazirMedium font-semibold text-xl">۲ کاربره</p>

    <p className="font-VazirMedium font-semibold text-xl">یک ماه</p>

    <p className="font-VazirRegular text-lg text-red-400 line-through">۲۰,۰۰۰ تومان</p>

    <p className="font-VazirRegular text-lg">۲۰,۰۰۰ تومان</p>

    <button className="text-white p-2 rounded-md font-VazirLight font-medium w-full"> خرید اشتراک </button>

  </div>



  <div className="flex flex-col items-center justify-between child-last:bg-purple-500">

    <div className="relative"></div>

    <p className="font-VazirMedium font-semibold text-xl">۷۰ گیگ</p>

    <p className="font-VazirMedium font-semibold text-xl">۲ کاربره</p>

    <p className="font-VazirMedium font-semibold text-xl">یک ماه</p>

    <p className="font-VazirRegular text-lg text-red-400 line-through">۲۰,۰۰۰ تومان</p>

    <p className="font-VazirRegular text-lg">۲۰,۰۰۰ تومان</p>

    <button className="text-white p-2 rounded-md font-VazirLight font-medium w-full"> خرید اشتراک </button>

  </div>



  <div className="flex flex-col items-center justify-between child-last:bg-purple-500">

    <div className="relative"></div>

    <p className="font-VazirMedium font-semibold text-xl">۷۰ گیگ</p>

    <p className="font-VazirMedium font-semibold text-xl">۲ کاربره</p>

    <p className="font-VazirMedium font-semibold text-xl">یک ماه</p>

    <p className="font-VazirRegular text-lg text-red-400 line-through">۲۰,۰۰۰ تومان</p>

    <p className="font-VazirRegular text-lg">۲۰,۰۰۰ تومان</p>

    <button className="text-white p-2 rounded-md font-VazirLight font-medium w-full"> خرید اشتراک </button>

  </div>



  <div className="flex flex-col items-center justify-between child-last:bg-purple-500">

    <div className="relative"></div>

    <p className="font-VazirMedium font-semibold text-xl">۷۰ گیگ</p>

    <p className="font-VazirMedium font-semibold text-xl">۲ کاربره</p>

    <p className="font-VazirMedium font-semibold text-xl">یک ماه</p>

    <p className="font-VazirRegular text-lg text-red-400 line-through">۲۰,۰۰۰ تومان</p>

    <p className="font-VazirRegular text-lg">۲۰,۰۰۰ تومان</p>

    <button className="text-white p-2 rounded-md font-VazirLight font-medium w-full"> خرید اشتراک </button>

  </div>

</div>,showArrow:!1}];return<div className="pb-24 flex flex-col justify-between">

{}

<t items={r}activeKey={0}className="my-5"/>

{}

<t items={n}activeKey={1}className="my-5"/>

{t&&<n onDismiss={o}/>}

{}

<t items={d}activeKey={2}className="max-h-fit mt-5"/>

</div>};