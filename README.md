# $\definecolor{cf-orange}{RGB}{246, 130, 31}\definecolor{cf-blue}{RGB}{0, 85, 220}\textcolor{cf-orange}{\textsf{Assignment  6}}$ - Create A Pages Website

Copy, Configure and Deploy a Pages website that showcases Workers you’ve created.
 1. Clone the pages-blog-template repository. (click: ```Use this template```)
 1. Run ```npm install``` inside of the cloned repository’s directory
 1. Create triggers for each of your workers:
    - $[\textcolor{cf-orange}{\textsf{WORKER NAME}}].[\textcolor{cf-blue}{\textsf{BASE DOMAIN}}]$  (e.g. $\textcolor{cf-orange}{\textsf{code-club-3}}.\textcolor{cf-blue}{\textsf{example.com}}$)
 3. In the cloned repository add a ```.env``` file (or modify existing) so that the base domain for your workers is specified.
    - ```BASE_DOMAIN=example.com```
 5. Check in the updated repository to GitHub using Git.
 6. Deploy the pages site specifying the GitHub repository you created. And the following settings:
    - Framework preset: Nuxt.js
    - Environmental variables:
      - ```NITRO_PRESET``` : ```cloudflare```
      - ```NODE_VERSION``` : ```16.15.1```
      - ```NPM_VERSION```  : ```8.11.0```

# 
<img width="170" height="63.163" src="https://blog-cloudflare-com-assets.storage.googleapis.com/2019/06/logo-cloudflare-dark-1.svg">
