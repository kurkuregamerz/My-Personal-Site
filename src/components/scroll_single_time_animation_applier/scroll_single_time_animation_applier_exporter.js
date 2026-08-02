export function scroll_single_time_animation_applier(element, class_to_add, options = {}
) {
    if(!element) return
  let observer = new IntersectionObserver((entries, observer) => {
    
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(class_to_add)
        observer.unobserve
       
      }
    })
  }, {
     
       ...options
  })
  Array.from(element).forEach(el => observer.observe(el));
}