(function(){

    "use strict";
     
    // let allBtn= document.querySelector('#all')
    // let chunkBtn = document.querySelector('#chunk')
    // let breakfastBtn =document.querySelector('#break')
    // let shakesBtn =document.querySelector('#shake')

    let links =document.querySelectorAll('.links')


    links.forEach((link)=>{
        link.addEventListener ('click', (e)=>{

            let thisLink =link.getAttribute('id')

            //select all
            if (thisLink==='all' ) {

                let grp = document.querySelectorAll('.box')
                console.log('the button all was pressed')

                grp.forEach((each)=>{
                    each.style.display = 'none'
                    each.style.display = 'flex'
                })
                
            } 


            //select all chunk
            else if(thisLink==='chunk') {

                let grp = document.querySelectorAll('.box')
                grp.forEach((each)=>{
                    each.style.display = 'none'
                    
                    grp = document.querySelectorAll('.chunks')
                    grp.forEach((each)=>{
                        each.style.display = 'flex'
                    })
                })

            }


            //select breakfast
            else if(thisLink==='break') {

                let grp = document.querySelectorAll('.box')
                grp.forEach((each)=>{
                    each.style.display = 'none'
                    
                    grp = document.querySelectorAll('.breakfast')
                    grp.forEach((each)=>{
                        each.style.display = 'flex'
                    })
                })

            }



            //select shakes
            else{

                let grp = document.querySelectorAll('.box')
                grp.forEach((each)=>{
                    each.style.display = 'none'
                    
                    grp = document.querySelectorAll('.shakes')
                    grp.forEach((each)=>{
                        each.style.display = 'flex'
                    })
                })
            }

        })  
    })


})();
