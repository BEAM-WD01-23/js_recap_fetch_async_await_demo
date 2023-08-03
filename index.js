//I fetching

    // const simpleFetch = () =>{
    //     const showData = document.getElementById('showData');
    //     const url = 'https://jsonplaceholder.typicode.com/users';
    //     fetch(url)
    //     .then((res)=>res.json())
    //     .then((result)=>{
    //         console.log(result);
    //         showData.innerHTML = result[0].name;
    //     })
    //     .catch(err => err)
    // }
    // simpleFetch();
    
//II with try ... catch 
    const simpleFetch = () =>{
        const showData = document.getElementById('showData');
        try{
            const url = 'https://jsonplaceholder.typicode.com/users';
            fetch(url)
            .then((res)=>res.json())
            .then((result)=>{
                console.log(result);
                //showData.innerHTML = result[0].name;
            })
            .catch(err => err)
        }catch(err){
            console.log(err);
        }
    }
    simpleFetch();
    
//III  async ... await 
    
    async function asycFunctionExample(){
        const url = 'https://jsonplaceholder.typicode.com/users';
        const result1 = await fetch(url)
        const result2 = await result1.json()
        console.log(result2);
    }
    asycFunctionExample();
    //
//IV  async ... await with try ... catch
    async function asycFunctionExample(){
        try{
            const url = 'https://jsonplaceholder.typicode.com/users';
            const result1 = await fetch(url)
            const result2 = await result1.json()
            //console.log(result2);
            result2.forEach((item)=>{
                console.log(ite.name);//simulate error 
                console.log(item.email);
                // `<p>${item.name}</p>`
            })
        }catch(err){
            //console.log(err);
            //console.warn(err);
            //console.error(err.message);
            //console.table(err);
            console.dir(err);
        }
    }
    asycFunctionExample();
    //
//V   in-build db and async ... await 
    const datas = [
        {name: 'Ahemd', profession: 'Developper', address: 'Berlin'},
        {name: 'Marko', profession: 'Accountant', address: 'Paris'}
    ];
    //
    //console.time();
    const showData = document.getElementById('showData');
    function showResult(){
        setTimeout(()=>{
            let result = '';
            datas.forEach((item)=>{
                result += `<li>${item.name} ${item.profession} ${item.address}</li>`;
            })
            showData.innerHTML = result;
        },2000)
    }
    //console.timeEnd();
    //showResult();// prefer to call after I updated my database ...
    //
// create-data/add-data
            //console.time();
    function createData(employee){
       return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            datas.push(employee);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: problem arises!');
            }
        },3000)
       })
    }
        //console.timeEnd();
    //createData({name: 'Catarina', profession: 'Secretary', address: 'Koln'});
    //showResult();
    function showBothFunctions(){
       createData({name: 'Catarina', profession: 'Secretary', address: 'Koln'});
        showResult();
    }
    showBothFunctions();
    //
//solve issue with async ... await 
    // async function showBothFunctions(){
    //     await createData({name: 'Catarina', profession: 'Secretary', address: 'Koln'});
    //     showResult();
    // }
    // showBothFunctions();//time interval issues solved with async await regardless of the 
    //setTimeout timing ...

//dubugging...

    const clickMe = document.getElementById('clickme');
    clickMe.addEventListener('click', function(){
        console.log('clicked');
    })

