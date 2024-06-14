const nav=document.querySelector('.navbar')
const mous=function(e,opacity){
    if(e.target.classList.contains('link__items')){
        const click=e.target
        if(!click) return;
        const siblings=click.closest('.links').querySelectorAll('.link__items')
        const logo=click.closest('.navbar').querySelector('.logo')
        const svg=click.closest('.navbar').querySelector('.svg-op')
        siblings.forEach(El=>{
            if(El!==click){
                El.style.opacity=opacity
            }
        
             })

logo.style.opacity=opacity
svg.style.opacity=opacity       
    }
   
    }
    

    nav.addEventListener('mouseover', function(e) {
        mous(e, 0.5); // Reset opacity to 1 on mouse out

    });
    
    nav.addEventListener('mouseout', function(e) {
        mous(e, 1); // Reset opacity to 1 on mouse out
    });