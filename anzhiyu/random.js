var posts=["2026/06/13/anzhiyu-theme-config/","2026/06/13/hexo-github-deploy/","2026/06/13/hexo-install-guide/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };