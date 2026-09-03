export function footer_creator() {
  let footer = document.createElement("footer")
  footer.setAttribute("id", "footer_main")

  main.append(footer)
    footer.innerHTML = `
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
            <a href="contact_page.html">Contact</a>
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
      <div class="scroll_animation_excluded_footer_main" id="credits_footer_main"><div class="scroll_animation_excluded_footer_main" id="developer_name_credits_footer"> Developed by Ishan Karar </div> <div class="scroll_animation_excluded_footer_main"  id="design_inspiration_credits_footer"> Design Inspired from SK Nahid Hasan on Dribble</div></div>
    `
  const css_file_link_footer = `<link rel="stylesheet" href="../components/footer/footer_style.css"></link>`
  document.head.innerHTML += css_file_link_footer
}
