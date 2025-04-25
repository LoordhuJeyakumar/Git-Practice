const navlinks = [
    {
        title: "Home",
        path: "/",
        isDropdown: false
    },
    {
        title: "Services",
        path: "/services",
        isDropdown: true,
        dropdownItems: [
            {
                title: "Web Development",
                path: "/services/web-development"
            },
            {
                title: "Mobile Development",
                path: "/services/mobile-development"
            },
            {
                title: "UI/UX Design",
                path: "/services/ui-ux-design"
            }
        ]
    },
    
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Contact",
        path: "/contact"
    }
]


let dynamicNavbar = document.getElementById("dynamic-navbar");

dynamicNavbar.setAttribute('class',"flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700");


const arrow_icon = `
<svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
`


navlinks.forEach((link) => {
    
    
    const li = document.createElement("li");
 
    
    const a = document.createElement("a");
    a.href = link.path;
    a.innerText = link.title;
    a.setAttribute("class", "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700");
    li.appendChild(a);
    dynamicNavbar.appendChild(li);
    if (link.isDropdown) {
        const dropDownBUtton = document.createElement("button");
        dropDownBUtton.setAttribute("id", "dropdownNavbarLink");
        dropDownBUtton.setAttribute("data-dropdown-toggle", "dropdownNavbar");
        dropDownBUtton.innerHTML = link.title + arrow_icon;
        dropDownBUtton.setAttribute("class", "flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 md:dark:hover:bg-transparent");
        const innerContainer = document.createElement("div");
        innerContainer.setAttribute("id", "dropdownNavbar");
        innerContainer.setAttribute("class", "z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600");
        
        const innerNav = document.createElement("ul");

        link.dropdownItems.forEach((item) => {
            const innerLi = document.createElement("li");
            const innerA = document.createElement("a");
            innerA.href = item.path;
            innerA.innerText = item.title;
            innerA.setAttribute("class", "block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white");
            innerLi.appendChild(innerA);
            innerNav.appendChild(innerLi);
        });
        innerContainer.appendChild(innerNav);
        li.appendChild(dropDownBUtton);
        li.appendChild(innerContainer);
    }
    dynamicNavbar.appendChild(li);
});
