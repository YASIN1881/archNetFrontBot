import{useState as e}from"react";import{Divider as t,Table as r,Button as i,Modal as $,Select as l}from"antd";import{MdOutlineFactCheck as n}from"react-icons/md";import{BsBasket3 as o}from"react-icons/bs";import a from"../../components/persianDate&Time/PersianDate&Time";import d from"../../components/persianNumber/PersianNumber";import _ from"../../components/statusBtn/StatusBtn";export default function s(){let[t,r]=e(!1),[i,$]=e(!1),[l,n]=e(1),[o,a]=e(10),d=e=>{a(e)},_="پرداخت شده",s=[{key:"1",loading:!0,button:<>

  <i className="bg-purple-500"open={t}type="primary"onClick={()=>r(!0)}>

  <span >فاکتور</span>

  <n />

</i>

<$ open={t}footer={null}onCancel={()=>r(!1)}>

    <div >

      {}

      <div className="custom-shape-divider-top-1721471154">

        <svg data-name="Layer 1"xmlns="http://www.w3.org/2000/svg"viewBox="0 0 1200 120"preserveAspectRatio="none"fill="#c084fc">

        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"className="shape-fill"></path>

        </svg>

      </div>

      {}

      <div className="pt-11 flex justify-center">

        <t >

        <o size={20}/>

        </t>

      </div>

        <div className="flex justify-center flex-col items-center">

          {}

          <p className="text-lg font-bold">20GB - 1 IP LIMIT</p>

          {}

          <p className="text-sm font-light"dir="rtl">#JEPKMOBBRX8YP1F</p>

        </div>

      {}

      <div className="flex justify-between pt-5 flex-row-reverse items-center child:flex child:flex-col child:items-center child:justify-between child:gap-2"style={{alignItems:"stretch"}}>

        {}

        <div >

          <p className="font-VazirLight font-extrabold text-sm">: تاریخ و زمان</p>

          <a date={"2024/7/21"}time={null}/>

        </div>

        {}

        <div >

          <p className="font-VazirLight font-extrabold text-sm">: وضعیت</p>

          {}

          <p className="py-1 px-2 rounded-md bg-green-100 text-green-600">پرداخت شده</p>

        </div>

        {}

        <div >

          <p className="font-VazirLight font-extrabold text-sm">: درگاه</p>

          <p className="font-VazirLight text-lg">درگاه پرداخت(ریالی)</p>

        </div>

      </div>

      {}

      <div className="pt-5">

        {}

        <p className="text-right font-VazirMedium text-base">صورت حساب</p>

        {}

        <div className="border-2 border-[#efeff6] rounded-lg mt-2 child:flex child:justify-between child:flex-row-reverse child:px-2 child:py-2 child:border-b-2 child-last:border-b-0 child:font-VazirMedium child:text-base">

          <div >

            <p className="font-VazirMedium text-base">مبلغ</p>

            <d number={22e4}/>

          </div>

          <div >

            <p >تخفیف</p>

            <d number={0}/>

          </div>

          <div >

            <p >کارمزد درگاه</p>

            <d number={0}/>

          </div>

          <div >

            <p >مبلغ پرداخت شده</p>

            <d number={22e4}/>

          </div>

        </div>

      </div>

    </div>

  </$>

  </>,data:<a date={"2024/7/21"}time={"۱۶:۲۳:۲۰"}/>,subscriptionStatus:"پرداخت شده"===_&&<_ title={"پرداخت شده"}bg={"green-100"}text={"green-600"}/>||"در حال انتظار"===_&&<_ title={"در حال انتظار"}bg={"blue-100"}text={"blue-600"}/>||"لغو شده"===_&&<_ title={"لغو شده"}bg={"red-100"}text={"red-600"}/>},],c=[{align:"center",title:"#",dataIndex:"button",filtered:!0,key:"1"},{align:"center",title:"تاریخ ایجاد",dataIndex:"data",key:"2"},{align:"center",title:"وضعیت",dataIndex:"subscriptionStatus",key:"3"},].map(e=>({...e}));return<div className="h-screen">

 <t className="font-VazirMedium text-xl">

  سوابق سفارشات

 </t>

 <l direction="rtl"defaultValue={o}style={{width:120}}onChange={d}options={[{value:"10",label:"10"},{value:"25",label:"25"},{value:"50",label:"50"},{value:"100",label:"100"},]}/>



  <r loading={i}columns={c}scroll={{x:!0}}pagination={{style:{direction:"ltr"},current:l,pageSize:o,onChange(e,t){n(e),a(t)}}}dataSource={s}style={{marginTop:24}}/>

</div>};