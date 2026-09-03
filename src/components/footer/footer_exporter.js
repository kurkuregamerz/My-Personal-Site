export function footer_creator() {
   
  let footer = document.createElement("footer")
  footer.setAttribute("id", "footer_main")

  main.append(footer)
  footer.innerHTML = `
   <div id="reach_out_to_me_footer">
       <div class="largetext_main" id="largetext_reach_out_to_me_main">
         <div class="section_name_marking" id="section_why_choose_me_marking">
        <div class="bulleting_logo"></div>
        <div class="section_name">Contact Me</div>
      </div>
      </div>
      <div id="form_and_name_container">
      <div id="name_container">ISHAN</div>
      <div id="form_container">
       
        <form action="https://api.web3forms.com/submit" method="POST">
           <div id="form_container_heading">Reach Out to Me</div>
          <input type="hidden" name="access_key" value="a064084d-8959-4bbc-9b7c-915147598eaf">
          Name
          <input type="text" placeholder="Enter your Name"name="name" required>
          Email
          <input type="email" placeholder="Enter your Email" name="email" required>
          Message
          <textarea name="message" placeholder="Write your Message"required></textarea>
          <button type="submit">Submit Your Message</button>
        </form>
      </div>
      </div>
    </div>
      <div id="quote_container_footer">An Website is not just a page on internet. Its a place where a business and a customer connects.</div>
      <div id="contact_information_container_footer"><div id="phone_number_footer_contact_information_container">+91 7003555728</div><div id="email_footer_contact_information_container">crazyatozy@gmail.com</div></div>
      <form id="send_email_box_footer" method="POST" >
      Get in Touch
      <input type="text" placeholder="Enter your message" name="email_footer" id="email_footer_contact_information_container_input" required><button id="send_button_email_footer">SEND YOUR MESSAGE</button></form>
      <div id="navigation_footer">
        
        <ul id="navigation_pages_list_footer">
          Navigation
          <li
            class="pages_quicklink_footer_main"
          
          >
            <a href="./home_page.html">Home</a>
          </li>
          <li
            class="pages_quicklink_footer_main"
            
          >
            <a href="./about_page.html">About Me</a>
          </li>
          <li
            class="pages_quicklink_footer_main"
            
          >
            <a href="./services_page.html">Services</a>
          </li>
          <li
            class="pages_quicklink_footer_main"
        
          >
            <a href="./contact_page.html">Contact</a>
          </li>
        </ul>
      </div>
      <div id="visit_footer">
        <ul id="visit_list_footer">
          Visit
          <li
            class="pages_quicklink_footer_main"
          
          >
            <a href="https://www.instagram.com/ishan.undefined?igsi=eGVmdmppbWR6MGk3">Instagram</a>
          </li>
          <li
            class="pages_quicklink_footer_main"
          >
            <a href="https://youtube.com/@bugged_reality_26?si=DFbC3Ejl65q0aAM">Youtube</a>
          </li>
          <li
            class="pages_quicklink_footer_main"
           
          >
            <a href="https://github.com/kurkuregamerz/Introducing-myself">Github</a>
          </li>
        
        </ul>
      </div>
      <div id="owner_name">Ishan</div>
      <div class="scroll_animation_excluded_footer_main" id="credits_footer_main"><div class="scroll_animation_excluded_footer_main" id="developer_name_credits_footer"> Developed by Ishan Karar </div> <div class="scroll_animation_excluded_footer_main"  id="design_inspiration_credits_footer"> Design Inspiration from Dribble</div></div>
    `
  const css_file_link_footer = `<link rel="stylesheet" href="../components/footer/footer_style.css"></link>`
  document.head.innerHTML += css_file_link_footer
  document.getElementById("send_button_email_footer").addEventListener("click",(e)=> {
    e.preventDefault()


  
  const message = document.getElementById("email_footer_contact_information_container_input").value;


  const body = encodeURIComponent(message);

    window.location.href =
      `https://mail.google.com/mail/?view=cm&fs=1&to=crazyatozy@gmail.com&su=Let's%20Connect!%20(Porfolio%20Enquiry)&body=${body}`;
     
  });

 function text_adder(element, text) {
  if(!element) return
  const arrayofwords = text.split(" ");
  arrayofwords.forEach(word => {
    element.innerHTML += `<span class="`+element+`_text_inside">`+ word +`</span>`;
  });
  
  } 
  text_adder(
  document.getElementById("largetext_reach_out_to_me_main"),
  "Let's Create Together",
  );
  function scroll_single_time_animation_applier(element, class_to_add, options = {}
) {
    if(!element) return
  let observer = new IntersectionObserver((entries) => {
    
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
  scroll_single_time_animation_applier(
  document.querySelectorAll("#form_and_name_container"),
  "small_to_normal_image_animation_for_projects_containers_applied_elements",
);

}

