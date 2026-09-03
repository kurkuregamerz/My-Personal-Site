export function zero_to_target_number(element,  after_number) {
  
  if (!element) {
    console.log("Target container doesn't exist")
    return
  }

         
          
  let observer = new IntersectionObserver(async (entries) => {
    
    entries.forEach(async (entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        
        
        let target_number = parseInt(element[0].innerHTML) 
        let i = target_number - 30
          if (i < 0) {
            i = 0;
          }
        for (i = i ; i = target_number; i++) {
          

            
          element[0].innerHTML = i+after_number;
          await sleep(20);
            
        }
        
        
       
      } 
      
    }, {
      threashold: 1
  });
      
   
  }
  )
  Array.from(element).forEach(el => observer.observe(el));
  
}