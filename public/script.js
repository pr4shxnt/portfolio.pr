document.addEventListener('DOMContentLoaded', function () {
    const navBar = document.querySelector(".navbar");
    let prevScrollPos = window.scrollY;
  
    window.addEventListener("scroll", function () {
      let currScrollPos = window.scrollY;
  
      if (currScrollPos > prevScrollPos) {
        navBar.style.transform = `translateY(-105%)`;
      } else {
        navBar.style.transform = `translateY(0%)`;
      }
  
      prevScrollPos = currScrollPos;
    });
  });

  function opentab(tabId) {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => panel.hidden = true);
  
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
  
    document.getElementById(tabId).hidden = false;
    document.querySelector(`.tab[onclick="opentab('${tabId}')"]`).classList.add('active');
  }


  
