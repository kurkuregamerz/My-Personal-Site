export function navbar_creator() {
    return `<nav id="navbar_main">
                <ul class="navbar_navigation_buttons_box">
                    <li id="navbar_logo_text">Portfolio@</li>
                    <li class="navbar_navigation_buttons" id="navbar_home_navigation_button" ><a href="/src/pages/home_page.html">Home</a></li>
                    <li class="navbar_navigation_buttons" id="navbar_about_navigation_button"><a href="/src/pages/about_page.html">About</a></li>
                    <li class="navbar_navigation_buttons" id="navbar_services_navigation_button"><a href="/src/pages/services_page.html">Services</a></li>
                    <li class="navbar_navigation_buttons" id="navbar_contact_navigation_button"><a href="/src/pages/contact_page.html">Contact</a></li>
                </ul>
            </nav>`;
}