// Player Factory Function
const Player = (name,marker) => {
    return {name, marker};
};
// DOM Logic in each Grid
(function() {
    const gridRow = document.querySelectorAll(".gridRow");
    gridRow.forEach((row) => {
        const childNodes = row.childNodes;
        childNodes.forEach((child) => {
            child.addEventListener('click', () => {
                child.textContent = 'X';
            })
        });
    });
})();
    
