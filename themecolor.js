document.getElementById("theme-checkbox").addEventListener("click", function() {

    const colors = [
        "bg-red-50", "bg-blue-50", "bg-green-50", 
        "bg-yellow-50", "bg-purple-50","bg-blue-50"
    ];
    
     
      
    for (const color of colors){
      document.body.classList.remove(color);
    }

    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    
    document.body.classList.add(randomColor);
});


