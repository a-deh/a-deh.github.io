
// this is a comment
// comments help us code.

console.log("hello world");

document.getElementById("para1").innerHTML = "linkiy link"

function myFunction() {
    //console.log("hello world in a function");

    websites = [ 
        'https://www.bouncingdvdlogo.com/',
        'http://wowenwilsonquiz.com/',
        'http://buildshruggie.com/',
        'https://loopedforinfinity.com/',
        'https://dadlaughbutton.com/',
        'https://findtheinvisiblecow.com/',
        'https://heeeeeeeey.com/',
        'https://longdogechallenge.com/'
    ]

    
    random_number = Math.floor(Math.random() * (websites.length));

    redirect_to =  websites[ random_number ];

    location.href = redirect_to;


  
}