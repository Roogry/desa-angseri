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

var postCount = 99;
var action = 'inactive';
const defaultThumbnail = 'assets/img/background/blog.jpg';


function getPosts(limit, start) {
   let url = `https://svbaksosti.herokuapp.com/posts?_limit=${limit}&_start=${start}`;

   if (action == 'inactive') {
      action = 'active';

      fetch(url).then(response => response.json())
         .then(function (data) {

            postCount = data.countTotal;

            let template = data.posts.map(post => {

               let fullContent = marked(post.content);
               let divHTML = $('<div>').html(fullContent);
               let pFirst = divHTML.find('p:first')[0].innerText;

               $('#load-data').html('<p class="text-center">Loading...</p>');

               if (post.thumbnail) {
                  imgUrl = data.thumbnail.formats.small.url;
               } else {
                  imgUrl = defaultThumbnail;
               }

               return `<div class="lqd-column col-md-4 col-sm-6 post-list">
                        <article class="liquid-lp mb-60">
                           <figure class="liquid-lp-media">
                              <a href="post-detail.html?s=${post.slug}">
                                 <img src="${imgUrl}" alt="Lates Post">
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

            $("#list-post").append(template);
            $('#load-data').html('');
         }).catch(function (e) {
            console.log(e);
            $("#berita").hide();
         });
      action = 'inactive';
   } else {
      $('#load-data').html('<p class="text-center">Done</p>');
   }
}

function getPost(slug) {
   let url = `https://svbaksosti.herokuapp.com/posts/${slug}`;

   fetch(url).then(response => response.json())
      .then(function (post) {
         if (post.thumbnail) {
            imgUrl = post.thumbnail.formats.small.url;
            imgUrlBig = post.thumbnail.url;
         } else {
            imgUrl = defaultThumbnail;
            imgUrlBig = defaultThumbnail;
         }

         let fullContent = marked(post.content);
         $('.blog-single-content').html(fullContent);
         $('h1.entry-title').text(post.title);
         $('time.published').text(formatDate(post.created_at));
         $('div.thumbnail').css("background-image", `url(${imgUrl})`);
         $('a.thumbnail').attr("href", imgUrlBig);
      }).catch(function (e) {
         console.log(e);
      });
}