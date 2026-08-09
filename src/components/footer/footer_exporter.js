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
            <a href="">Home</a>
          </li>
          <li
            class="pages_quicklink_footer_main"
            
          >
            <a href="">About Me</a>
          </li>
          <li
            class="pages_quicklink_footer_main"
            
          >
            <a href="">Services</a>
          </li>
          <li
            class="pages_quicklink_footer_main"
        
          >
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div id="visit_footer">
        <ul id="visit_list_footer">
          Visit
          <li
            class="pages_quicklink_footer_main"
          
          >
            <a href="">Instagram</a>
          </li>
          <li
            class="pages_quicklink_footer_main"
            
          >
            <a href="">Linked in</a>
          </li>
          <li
            class="pages_quicklink_footer_main"
           
          >
            <a href="">Github</a>
          </li>
        
        </ul>
      </div>
      <div id="owner_name">Ishan</div>
      <div class="scroll_animation_excluded_footer_main" id="credits_footer_main"><div class="scroll_animation_excluded_footer_main" id="developer_name_credits_footer"> Developed by Ishan Karar </div> <div class="scroll_animation_excluded_footer_main"  id="design_inspiration_credits_footer"> Design Inspired from SK Nahid Hasan on Dribble</div></div>
    `
  const css_file_link_footer = `<link rel="stylesheet" href="../components/footer/footer_style.css"></link>`
  document.head.innerHTML += css_file_link_footer
}
