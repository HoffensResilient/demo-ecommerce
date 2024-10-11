// function showleftsidebar() {
//     const leftsidebar = document.querySelector('.leftsidebar');
//     leftsidebar.style.display = 'flex'; // Show the sidebar
//     body.classList.add('no-scroll');     // Add class to disable scrolling
//   }
  
//   function showrightsidebar() {
//     const rightsidebar = document.querySelector('.rightsidebar');
//     rightsidebar.style.display = 'flex'; // Show the sidebar
//   }
  
//   function closebar() {
//     const leftsidebar = document.querySelector('.leftsidebar');
//     const rightsidebar = document.querySelector('.rightsidebar');
//     leftsidebar.style.display = 'none';
//     rightsidebar.style.display = 'none';
//   }

// *** New Code for Sidebar, no-scroll & sliding bar updates*** //

// Function to show the left sidebar
function showleftsidebar() {
  const leftsidebar = document.querySelector('.leftsidebar');
  leftsidebar.style.display = 'flex'; // Open the sidebar
  // leftsidebar.style.transform = 'translateX(0)'; // Slide in effect
  setTimeout(() => {
  leftsidebar.style.transform = 'translateX(0)'; // Slide in effect
  }, 1); // Small timeout to allow display to take effect
  document.body.style.overflow = 'hidden'; // Disable scrolling
}

// Function to close the left sidebar
function closeleftbar() {
  const leftsidebar = document.querySelector('.leftsidebar');
  leftsidebar.style.transform = 'translateX(-100%)'; // Slide out effect
  setTimeout(() => {
      leftsidebar.style.display = 'none'; // Close the sidebar after animation
      document.body.style.overflow = 'auto'; // Re-enable scrolling
  }, 300); // Match the timeout duration to your CSS transition duration
}

// Function to show the right sidebar
function showrightsidebar() {
  const rightsiderbar = document.querySelector('.rightsidebar');
  rightsiderbar.style.display = 'flex'; // Open the sidebar
  // rightsiderbar.style.transform = 'translateX(0)'; // Slide in effect
  setTimeout(() => {
  rightsiderbar.style.transform = 'translateX(0)'; // Slide in effect
  }, 1);
  document.body.style.overflow = 'hidden'; // Disable scrolling
}

// Function to close the right sidebar
function closerightbar() {
  const rightsiderbar = document.querySelector('.rightsidebar');
  rightsiderbar.style.transform = 'translateX(100%)'; // Slide out effect
  setTimeout(() => {
      rightsiderbar.style.display = 'none'; // Close the sidebar after animation
      document.body.style.overflow = 'auto'; // Re-enable scrolling
  }, 300); // Match the timeout duration to your CSS transition duration
}



