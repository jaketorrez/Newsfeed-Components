/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

// Menu building component
function menuBuilder(menuItems) {
  let menu = document.createElement('nav')
  let navList = document.createElement('ul')
  menu.setAttribute('display', 'none')
  menu.appendChild(navList)
  menuItems.forEach(item => {
    let navItem = document.createElement('li')
    navItem.textContent = item
    navList.appendChild(navItem)
  })
  return menu
}
const menu = menuBuilder(menuItems)


// Add an event listener to the menu button to expand the menu
let menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', e => {
  if (menu.display = 'none') {
    menu.display = 'flex'
  }  else {
    menu.display = 'none'
  }
  e.stopPropagation()
})

// Adding the menu to the dom
const header = document.querySelector(".header")
header.appendChild(menu)
