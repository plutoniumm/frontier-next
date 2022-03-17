import{O as i}from"./vendor.24987766.js";const o=async t=>await(await fetch(`https://api.nukes.in/frontier${t}`)).json(),c={type:async t=>await o(`/type?q=${t}`),list:async()=>await o("/all"),get:async t=>await o(`/get?id=${t}`),related:async t=>await o(`/related?id=${t}`)},l=t=>t.map(e=>e.url).map(e=>({url:e,key:e.split("/").pop()})),p=t=>`https://nukescdn.sirv.com/frontier/${Math.ceil(t/100)*100}/geovec/${t}.svg`,d={weekday:"short",year:"2-digit",month:"short",day:"2-digit"},y={format:t=>new Date(parseInt(t.split("-")[0],36)).toLocaleString("en-GB",d),math:t=>+new Date(parseInt(t.split("-")[0],36))},f=(t,e)=>{const s=r=>+r.split("-")[1].slice(3);t=t.sort((r,a)=>s(r)-s(a));const n=t.indexOf(e);return{prev:t[n-1]||null,next:t[n+1]||null}},{F:v}=i,u=(t,e)=>{window.fr_overlay||(window.fr_overlay=v("#overlay"));{const s=getComputedStyle(e).getPropertyValue("--bg").split('"')[1].split('"')[0],n=e.innerText,r=`<img width="80%" src="${s}" />`;fr_overlay.classList.remove("d-n"),fr_overlay.innerHTML=`<div class="w-100 h-100 blur \u2020c" style="padding-top:10vh;color:#fff;">
            <div
                class="p-abs p20"
                style="top:1em;right:1em;cursor:pointer;"
                onclick="fr_overlay.classList.add( 'd-n');this.parentElement.remove()">
                \u2715
            </div>
            ${r}
            <div class="fw3 p20" style="font-size:1.25rem;">${n}</div>
        </div>`}return 0},g=c,h={url:l,image:p,date:y,related:f},w={overlay:u};export{g as d,w as h,h as p};
