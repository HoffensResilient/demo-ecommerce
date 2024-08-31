function showleftsidebar() {
    const leftsidebar = document.querySelector('.leftsidebar');
    leftsidebar.style.display = 'flex';
  }
  
  function showrightsidebar() {
    const rightsidebar = document.querySelector('.rightsidebar');
    rightsidebar.style.display = 'flex';
  }
  
  function closebar() {
    const leftsidebar = document.querySelector('.leftsidebar');
    const rightsidebar = document.querySelector('.rightsidebar');
    leftsidebar.style.display = 'none';
    rightsidebar.style.display = 'none';
  }