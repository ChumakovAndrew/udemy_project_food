function tabs() {
	let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

  
  const defaultTab = 0  // указывает какой таб показывать по умолчанию
  
  
        
  function activeClassTab(i) {  // добавляет и удаляет класс активности
    
    tabs.forEach((item,) => {
      item.classList.remove('tabheader__item_active')
    })
  
    tabs[i].classList.add('tabheader__item_active')
  }
        
        
  function showTab(i = 0) {  // скрывает все табы, а после этого показывает таб заданный по умолчанию либо тот на который кликнули
    
    tabsContent.forEach((item,) => {
      item.style.display = 'none'
    })
  
    tabsContent[i].style.display = 'block'
    activeClassTab(i)
  
  }
  
  
  
  
  showTab(defaultTab)
  
  tabsParent.addEventListener('click', event => {   // слушает клики и открывает нужный таб по индексу
    const target = event.target
  
    tabs.forEach((item, i) => {
      if(item === target){
        showTab(i)
        activeClassTab(i)
      }
    })
  })
  
}

export default tabs;