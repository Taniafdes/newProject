
module.exports = {
    modules: true,
    images: {
        //domains: ['localhost'],
        
        loader: "default",
        domains: ["res.cloudinary.com","speedtrack.co.in"],

    },
    env:{
        // API_PATH:"http://localhost:1339",
        API_PATH:"https://speedtrack.co.in/wp-vp-taleigao/wp-json/wp/v2/",
        JWT_TOKEN:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY1NzU1ODkxNCwiZXhwIjoxODE1MjM4OTE0fQ.kg71BT59KvKXpk6w0i-rBdx_At1NQWthSgmyXieYjiA',

        

    },
    // Uncomment the line below to enable basePath, pages and
    // redirects will then have a path prefix (`/app` in this case)
    //
    // basePath: '/app',

    
}