export default function t({date:t,time:e}){let l=new Date(t).toLocaleDateString("fa-IR");return<div >

  <div className="flex flex-col justify-center items-center child:font-VazirLight child:text-lg">

    <p >

    {l}

    </p>

    <p >

    {e}

    </p>

    </div>

</div>};