import{Button as e,Modal as t,Collapse as r,Select as o}from"antd";import{MdSwitchAccount as l}from"react-icons/md";import{GrUserExpert as i}from"react-icons/gr";import{FaTelegram as a}from"react-icons/fa";import{MdOutlinePassword as n}from"react-icons/md";import{FaArrowsRotate as f}from"react-icons/fa6";import{ImWarning as d}from"react-icons/im";export default function m(){let{confirm:e}=t,r=e=>{let t=e.target.value;navigator.clipboard.writeText(t)},o=()=>{e({icon:null,title:<div className="flex items-center justify-center">

  <d size={30}color="orange"/>

</div>,content:<p className="font-VazirLight text-base text-center">

  هشدار: پس از بازنشانی لینک اشتراک، لینک اتصال در همه دستگاه‌های شما بلافاصله نامعتبر می‌شود و نمی‌توان آن را به‌روزرسانی کرد. باید لینک اشتراک را دوباره در همه دستگاه های خود اصلاح کنید. آیا مطمئن هستید که می خواهید لینک اشتراک را بازنشانی کنید؟

</p>,okText:"ادامه",okType:"danger",cancelText:"لغو",onOk(){console.log("OK")}})},l=[{label:<div className="flex items-center gap-2">

  <l size={20}/>

  <p className="font-VazirMedium font-extrabold text-lg">اکانت های من</p>

</div>,children:<div >

  {<div className="flex flex-col gap-4 child:font-VazirBold child:text-base">

    {}

    <div className="flex items-center justify-between">

      <p className="font-VazirRegular font-extrabold">اکانت فعال </p>

      <input type="text"defaultValue={"test"}onClick={r}className="font-VazirLight font-medium border rounded-md pr-3"/>

    </div>

    {}

    {<div className="flex items-center justify-between">

        <p className="font-VazirRegular font-extrabold">سایر اکانت ها</p>

        <o showSearchstyle={{width:200}}placeholder="Search to Select"filterSort={(e,t)=>(e?.label??"").toLowerCase().localeCompare((t?.label??"").toLowerCase())}options={[{key:1,label:"test1"},{key:2,label:"test2"},{key:3,label:"test3"},{key:4,label:"test4"},{key:5,label:"test5"},]}/>

      </div>}

    <e type="primary"className="font-VazirLight font-medium">ساخت اکانت جدید</e>

  </div>}

</div>,showArrow:!1}],i=[{key:0,label:<div className="flex items-center gap-2">

  <i size={20}/>

  <p className="font-VazirMedium font-extrabold text-lg">حساب کاربری فعال</p>

</div>,children:<div className="flex flex-col gap-4">

  {}

  <div className="flex justify-between">

    <p className="font-VazirRegular font-extrabold">نام کاربری</p>

    <input type="text"defaultValue={"test"}onClick={r}className="font-VazirLight font-medium border rounded-md pr-3"/>

  </div>

  {}

  <div className="flex justify-between">

  <p className="font-VazirRegular font-extrabold">ایمیل</p>

  <input type="text"defaultValue={"archnet@gmail.com"}onClick={r}className="font-VazirLight font-medium border rounded-md pr-3"/>

  </div>

  <r items={l}/>

</div>,showArrow:!1}],a=[{key:1,label:<div className="flex items-center gap-2">

  <a size={20}/> color='blue'

  <p className="font-VazirMedium font-extrabold text-lg">حساب کاربری تلگرام</p>

</div>,children:<div className="flex flex-col gap-4">

  {}

  <div className="flex justify-between">

    <p className="font-VazirRegular font-extrabold">آیدی تلگرام</p>

    <input type="text"defaultValue={23495234}onClick={r}className="font-VazirLight font-medium border rounded-md pr-3"/>

  </div>

  {}

  <div className="flex justify-between">

  <p className="font-VazirRegular font-extrabold">نام کاربری تلگرام </p>

  <input type="text"defaultValue={23495234}onClick={r}className="font-VazirLight font-medium border rounded-md pr-3"/>

  </div>

</div>,showArrow:!1},],n=[{key:2,label:<div className="flex items-center gap-2">

  <n size={20}/> color='gray'

  <p className="font-VazirMedium font-extrabold text-lg">تغییر رمز عبور</p>

</div>,children:<div >

<div className="flex flex-col gap-4 child:flex child:flex-col child:gap-4 child:font-VazirBold child:text-base">

  {}

  <div >

    <p className="font-VazirRegular font-extrabold">رمز عبور جدید</p>

    <input type="text"placeholder="رمز عبور جدید را وارد کنید"className="border rounded-md p-3"/>

  </div>

  {}

  <div >

  <p className="font-VazirRegular font-extrabold">تکرار رمز عبور جدید</p>

  <input type="text"placeholder="رمز عبور جدید خود را تکرار کنید"className="border rounded-md p-3"/>

  </div>

</div>

<e className="font-VazirLight font-medium flex w-full mt-3"type="primary">

  بروز رسانی

</e>

</div>,showArrow:!1}],f=[{key:3,label:<div className="flex items-center gap-2">

  <f size={20}/> color='red'

  <p className="font-VazirMedium font-extrabold text-lg"> بازنشانی لینک</p>

</div>,children:<div >

  <e className="font-VazirLight font-medium border py-3 w-full bg-red-500 text-white"onClick={o}>بازنشانی لینک</e>

</div>,showArrow:!1}];return<div className="pt-10 pb-20 child:mb-10">

{}

<r accordion={!0}activeKey={0}items={i}/>

{}

<r accordion={!0}activeKey={1}items={a}/>

{}

<r accordion={!0}activeKey={2}items={n}/>

{}

<r accordion={!0}activeKey={3}items={f}/>

</div>};