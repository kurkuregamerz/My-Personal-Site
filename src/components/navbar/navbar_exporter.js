export function navbar_creator() {
  return `<nav id="navbar_main">
                <ul class="navbar_navigation_buttons_box">
                    <li id="navbar_logo_text">Portfolio@</li>
                    <li class="navbar_navigation_buttons" id="navbar_home_navigation_button" ><a href="/src/pages/home_page.html">Home</a></li>
                    <li class="navbar_navigation_buttons" id="navbar_about_navigation_button"><a href="/src/pages/about_page.html">About</a></li>
                    <li class="navbar_navigation_buttons" id="navbar_services_navigation_button"><a href="/src/pages/services_page.html">Services</a></li>
                    <li class="navbar_navigation_buttons" id="navbar_contact_navigation_button"><a href="/src/pages/contact_page.html">Contact</a></li>
                    <li class="navbar_navigation_buttons" id="navbar_navigation_menu_button">
                    <div class="navbar_menu_button_lines"id="navbar_menu_button_line1"></div>
                    <div class="navbar_menu_button_lines"id="navbar_menu_button_line2"></div>
                    </li>
                </ul>
                 <div id="dropdown_menu_navbar">
          <div
            class="sections_dropdown_menu_navbar"
            id="section1_dropdown_menu_navbar"
          >
            <ul>
              <li
                class="pages_quicklink_section1_dropdown_nav"
                id="page_quicklink_section1_dropdown_nav"
              >
                <a href="">HOME</a>
              </li>
              <li
                class="pages_quicklink_section1_dropdown_nav"
                id="page_quicklink_section1_dropdown_nav"
              >
                <a href="">ABOUT</a>
              </li>
              <li
                class="pages_quicklink_section1_dropdown_nav"
                id="page_quicklink_section1_dropdown_nav"
              >
                <a href="">SERVICES</a>
              </li>
              <li
                class="pages_quicklink_section1_dropdown_nav"
                id="page_quicklink_section1_dropdown_nav"
              >
                <a href="">CONTACT</a>
              </li>
            </ul>
          </div>
          <div
            class="sections_dropdown_menu_navbar"
            id="section2_dropdown_menu_navbar"
          >
          <div id="contact_info_nav_dropdown">
            <div id="contact_phone_nav_dropdown">
            Contact Phone
            <a href="tel:+917003555728" id="call_nav_dropdown_section2">+91 70035 55728</a>
            </div>
            <div id="contact_phone_nav_dropdown">
            Contact Email
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=crazyatozy@gmail.com" id="email_nav_dropdown_section2">crazyatozy@gmail.com</a>
            </div>
            <div id="workplace_location_nav_dropdown">
            Workplace location
            <a href="https://maps.app.goo.gl/7BhTVsReXneY8kfs6">Kolkata, India - 711104</a>
            </div>
          </div>
          
        </div>
        </div>
            </nav>
           `;
}
export const css_file_link = `<link rel="stylesheet" href="../components/navbar/navbar_style.css">`;




export function Event_listener_config_creator_dropdown_nav() {
    
 const dropdown_menu_navbar = document.getElementById("dropdown_menu_navbar");
 

 const navbar_navigation_menu_button = document.getElementById(
  "navbar_navigation_menu_button",
);
let navbar_navigation_menu_button_click_count = 0;
    navbar_navigation_menu_button.addEventListener("click", () => {
        const navbar_menu_navigation_button_line1 = document.getElementById(
            "navbar_menu_button_line1",
        );
        const navbar_menu_navigation_button_line2 = document.getElementById(
            "navbar_menu_button_line2",
        );

        function body_event_listener_dropdownmenu_nav() {
            navbar_menu_navigation_button_line1.style.transform = `rotate(0deg)`;
            navbar_menu_navigation_button_line2.style.transform = `rotate(0deg)`;
            dropdown_menu_navbar.style.height = "0%";
            dropdown_menu_navbar.style.visibility = "hidden";
            document.body.removeEventListener(
                "click",
                body_event_listener_dropdownmenu_nav,
            );
        }
        if (navbar_navigation_menu_button_click_count == 0) {
            setTimeout(() => {
                document.body.addEventListener(
                    "click",
                    body_event_listener_dropdownmenu_nav,
                );
            }, 500);
            navbar_menu_navigation_button_line1.style.transform = `rotate(-120deg)`;
          navbar_menu_navigation_button_line2.style.transform = `rotate(120deg)`;
          if (screen.orientation.type == "portrait-primary") {
            dropdown_menu_navbar.style.height = "100%";
            
          }
          else if(screen.orientation.type == "landscape-primary") {
            dropdown_menu_navbar.style.height = "90%";
          }
          dropdown_menu_navbar.style.visibility = "visible";
            navbar_navigation_menu_button_click_count = 1;
        } else {
            document.body.removeEventListener(
                "click",
                body_event_listener_dropdownmenu_nav,
            );
            navbar_menu_navigation_button_line1.style.transform = `rotate(0deg)`;
            navbar_menu_navigation_button_line2.style.transform = `rotate(0deg)`;
            dropdown_menu_navbar.style.height = "0%";
            dropdown_menu_navbar.style.visibility = "hidden";
            navbar_navigation_menu_button_click_count = 0;
        }
    });
};

