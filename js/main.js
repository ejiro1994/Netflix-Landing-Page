const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item'); 


//select tab content item



//listen for tab click
 tabItems.forEach(item => item.addEventListener('click', selectItem));