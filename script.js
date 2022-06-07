const counters = document.querySelectorAll('.counter')
const speed = 200;

counters.forEach(counter=>{
    const updateCounter = () =>{
        const target = +counter.getAttribute('data-target'); // blacklistAccountCount
        const count = +counter.innerText; //blacklistCountToShow
        const increment =  target/speed;
        if(count<target){
            counter.innerText = count + increment;
            setTimeout(updateCounter, 1);
        }
        else{
            counter.innerText = target;
        }
        console.log(target);
    }
    updateCounter();
})