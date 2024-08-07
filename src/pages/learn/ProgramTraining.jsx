import{Link as e,useParams as t}from"react-router-dom";import{training as r}from"../../AppData";export default function i(){let e=t(),i=e.name,l=r.find(e=>e.name===i);return<div className="my-10 pb-20">

    {}

    <p className="text-center font-VazirBold text-xl">آموزش برنامه ی {i}</p>

    {}

    <div className="pt-4 flex flex-col items-center justify-center gap-6 w-full child:flex-1 child:w-[70%]">

        {l.src.map((e,t)=><>

                    <div key={l.id}className="border shadow-md shadow-purple-300 bg-zinc-100 rounded-md p-3">

                        {}

                        <p className="text-center text-3xl text-blue-600 mb-3">{t+1}</p>

                        {}

                        <img src={e.picture}className="w-48 m-auto"loading="lazy"/>

                        {}

                        <p className="text-center my-3 text-blue-600 font-VazirMedium text-base">{e.title}</p>

                        {}

                        <p className="font-VazirLight font-bold text-sm tracking-wide leading-6">{e.dis}</p>

                    </div>

                    </>)}

    </div>

    {}

    <e to="/learn"className="bg-purple-500 text-white flex items-center justify-center p-1 my-5 rounded-lg">بازگشت به آموزش</e>

</div>};