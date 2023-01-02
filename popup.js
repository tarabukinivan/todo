

function delli(varib){
    var delel='undefined';    
    spisok.map((val,i)=>{        
        if(val.index == varib){
            delel=i;
        } 
    })
    
    if(delel!='undefined') {
            spisok.splice(delel, 1);           
            localStorage.clear()                       
            updateLocal();
            vyvodgr()
            getList()
            delelem()
        }
    
}

window.addEventListener("load", function(){
    const perec = document.querySelector('#perec');
    perec.addEventListener('click', () => {
    var x = document.getElementById("add-del");
    if (x.classList.contains('nets')) {
        x.classList.remove('nets')
      } else {
        x.classList.add('nets')
      }
    });
    
    console.log('delelem');
    delelem()
    
});

function delelem(){
    const varibs = document.querySelectorAll('h4 > i');
    varibs.forEach(function(varib) {
        // Вешаем событие клик
        varib.addEventListener('click', function(e) {
          console.log('Button clicked'+e.target.id);
          delli(e.target.id)
        })
    })
    const varibels = document.querySelectorAll('ul > li > i');
    varibels.forEach(function(varibel) {
        // Вешаем событие клик
        varibel.addEventListener('click', function(e) {
          console.log('Button clicked'+e.target.parentNode.id);
          delli(e.target.parentNode.id)
        })
    })
}



var entityMap = {
'&': '&amp;',
'<': '&lt;',
'>': '&gt;',
'"': '&quot;',
"'": '&#39;',
'/': '&#x2F;',
'`': '&#x60;',
'=': '&#x3D;'
};

function escapeHtml(string) {
return String(string).replace(/[&<>"'`=]/g, function (s) {
    return entityMap[s];
});
}

const inpG = document.querySelector('input[name="inputNewGroup"]');
const inptask = document.querySelector('input[name="task"]');
const link = document.querySelector('input[name="tlink"]');
const selGroup = document.querySelector('select[name="selGroup"]');
const listM = document.querySelector('#listM');
//добавление в ЛС
const updateLocal = () =>{
    localStorage.setItem('DataStr',JSON.stringify(spisok))
}
//список групп
let spisok = localStorage.getItem('DataStr') ? JSON.parse(localStorage.getItem('DataStr')) : []

buttonG.addEventListener("click",()=>{
    let group=inpG.value.trim()
    if(spisok==''){       
        var indexid = 1;
    }else{       
        indexid =spisok[spisok.length-1].index+1        
    }
    var groupid = 0;
    if(group!=''){
        spisok.push(new Task(escapeHtml(group),groupid,indexid));
        inpG.value='';        
        localStorage.clear()
        document.getElementById('errspan').innerHTML=''
        updateLocal();
        vyvodgr()
        getList()
        delelem()
    }else{
        document.getElementById('errspan').innerHTML="NewGroup должно быть заполнено" 
    }
    //getList();
})
addTaskbutton.addEventListener("click",()=>{    
    let task=inptask.value.trim()
    if(selGroup.value.trim()!='' && task!='' && spisok[0]!='undefined'){
        let indexid =spisok[spisok.length-1].index+1        
        spisok.push(new Task(escapeHtml(task),selGroup.value,indexid,escapeHtml(link.value.trim())));
        inptask.value='';
        link.value='';        
        localStorage.clear()
        updateLocal();
        vyvodgr()
        document.getElementById('errspan').innerHTML=''
        getList()
        delelem()
    }else{        
        document.getElementById('errspan').innerHTML="group, name должно быть заполнено"
    }
    //getList();
})

function Task(name,group,ind,link='',child=false){
    this.index=ind;
    this.idgroup=group;
    this.taskname=name;
    this.link=link;    
}

function taskvyvod(val){    
    try {
        var taskul = document.getElementById('ul-'+val.idgroup)
        var groupicon = document.getElementById(val.idgroup)
      }
      catch(err) {
        console.log('не найден=' + val.idgroup)
      }
    const li = document.createElement('li');
    li.className="clip"
    li.setAttribute("id",val.index)
    if(val.link=='')val.link='#'
    li.innerHTML = '<i class="fa fa-times-circle-o" aria-hidden="true"></i><a target="_blank" href="' + val.link + '">' +val.taskname + '</a>'
    if(taskul && groupicon) {
        taskul.appendChild(li)
        if(!groupicon.classList.contains('nets'))groupicon.classList.add('nets');
        //spisok[val.idgroup].child =true;
    }
}

function vyvod(x,index){
    return `
    ${x.taskname}
    `
}
function vyvodgr(){
    var vsegroup ='';
    spisok.map((val,i)=>{        
        if(val.idgroup == 0){
            vsegroup += '<option value='+val.index + '>' + val.taskname + '</option>'
        } 
    })
    selGroup.innerHTML = ''
    selGroup.innerHTML = vsegroup
}

const getList = () =>{
    listM.innerHTML='';    
    if(spisok.length>0){
        //filterTask()
        spisok.map((val,index)=>{
            //listM.innerHTML+=vyvod(val,index)
            if(val.idgroup == 0) {listM.innerHTML+= '<h4 class="clip"><i class="fa fa-times-circle-o" id='+val.index+' aria-hidden="true"></i>'+ val.taskname +'</h4><ul id=ul-'+ val.index +'></ul>'}
            else{
                taskvyvod(val)
            }
        })
    }
}
vyvodgr()
getList()


