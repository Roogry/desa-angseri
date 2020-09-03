$(document).ready(function () {

   window.onscroll = function () {
      scrollFunction();
   };

   $("#to-top").on("click", scrollTop);
})

function scrollFunction() {
   let btnToTop = $("#to-top");
   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      btnToTop.css("bottom", "40px");
   } else {
      btnToTop.css("bottom", "-60px");
   }
}

function scrollTop() {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function loadPost() {
   let url = 'https://svbaksosti.herokuapp.com/posts';

   fetch(url).then(response => response.json())
      .then(function (data) {
         var template = data.map(post => {

            let fullContent = marked(post.content);
            let divHTML = $('<div>').html(fullContent);
            let pFirst = divHTML.find('p:first')[0].innerText;

            return `<div class="lqd-column col-md-4 col-sm-6 post-list">
                        <article class="liquid-lp mb-60">
                           <figure class="liquid-lp-media">
                              <a href="post-detail.html?s=${post.slug}">
                                 <img src="${post.thumbnail.url}" alt="Lates Post">
                              </a>
                           </figure>
                           <header class="liquid-lp-header">
                              <h2 class="liquid-lp-title h4"><a href="post-detail.html">${post.title}</a></h2>
                              <time class="liquid-lp-date text-uppercase size-sm" datetime="2017-09-25">${formatDate(post.created_at)}</time>
                           </header>
                           <div class="liquid-lp-excerpt" >
                              <p>${pFirst}</p>
                           </div>
                        </article>
                     </div>
                        `;
         });

         $("#list-post").html(template);
      }).catch(function (e) {
         alert(e + " \nGagal Memuat Berita");
         $("#berita").hide();
      });
}