document.getElementById('blog').addEventListener('change',function(){
const blogIcon = document.getElementById('BlogIcon');
const blogpage = document.getElementById('blog1');
const page = document.getElementById('homepage');
const para = document.getElementById('para');
if(this.checked){
blogIcon.classList.remove('fa-regular');
blogIcon.classList.remove('fa-files-lines');
blogIcon.classList.add('fa-solid');
blogIcon.classList.add('fa-arrow-left');
page.style.display = 'none';
para.textContent = 'back';
blogpage.style.display = 'flex';
} else{
  blogIcon.classList.remove('fa-solid');
  blogIcon.classList.remove('fa-arrow-left');
  blogIcon.classList.add('fa-regular');
  blogIcon.classList.add('fa-files-lines');
  para.textContent = 'blogs';
  page.style.display = '';
  blogpage.style.display = 'none';
}
const iconElements = document.getElementsByClassName('icon');
  for (var i = 0; i < iconElements.length - 3; i++) {
    iconElements[i].style.display = this.checked ? 'none' : '';
  }
}
);

document.getElementById('iconToggle').addEventListener('change', function() {
    var moonIcon = document.getElementById('moonIcon');
   var img = document.getElementById('imgo');

    if (this.checked) {

        img.style.display = 'none';
      moonIcon.classList.remove('fa-moon');
      moonIcon.classList.add('fa-sun'); 
    } else {
    
      moonIcon.classList.remove('fa-sun');
      moonIcon.classList.add('fa-moon');
    }
    const iconElements = document.getElementsByClassName('icon');
    for (var i = 0; i < iconElements.length; i++) {
      iconElements[i].style.color = this.checked ? 'black' : '';
    }
    var rootStyle = document.documentElement.style;
    rootStyle.setProperty('--main-color', this.checked ? 'black' : '');
    rootStyle.setProperty('--background-color', this.checked ? 'white' : '');
    rootStyle.setProperty('--logo-color', this.checked ? 'black' : '');
   rootStyle.setProperty('--border-color', this.checked ? 'red' : '');
  
  }
  );
