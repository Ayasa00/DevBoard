window.onload = function(){
const container = document.getElementById("card-body3");
const currentDate = new Date().toLocaleString();

container.innerHTML = `
<p class ="font-semibold text-gray-700">${currentDate}</p>
`;
};
