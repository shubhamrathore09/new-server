// let obj;
submit=async()=>{
    let obj={
        mname:document.getElementById("mname").value,
        wname:document.getElementById("wname").value,
    }
    let res=await fetch('http://localhost:3000/posts',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json',
        }
    });
    localStorage.setItem("newname",JSON.stringify(obj));
    let data=await res.json();
    // console.log(data)
    getdata();
    check(obj);
}


async function dele(){
    let res=await fetch('http://localhost:3000/posts/10',{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
        }
    });
    let data=await res.json()
}

//  dele()

async function getdata(){
    let res=await fetch('http://localhost:3000/posts',{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        }
    })
    let data=await res.json();
    console.log(data)
}

let result=document.getElementById("result");
function check(obj){
    let newvalue
    let val;
    let {mname,wname}=obj;
    if(mname.length<=3 && wname.length<=3){
       val= "not proper name"
    }
    else if(mname=="abc" || wname=="abc"){
       vsl= "this is not name"
    }
   else{
   newvalue= Math.random()*100;
   val= newvalue.toFixed(2);
   }
   result.innerText=val+"%"
}