export default function colorChange(){
    
    window.onload = () => {
        const svg = document.querySelector("svg");

        const tileCount = svg.childNodes.length;

        const intvl = 100;

        const colors = [];

        let loaded = 0;

        setTimeout(() => {
            const svgDiv = document.getElementById("loadingSvg");
            const width = svg.getAttribute("width");
            const height = svg.getAttribute("height");

            svg.setAttribute("width", width/2);
            svg.setAttribute("height", height/2);

            loaded = 1;

        }, 5000);

        for(let i = 0; i < tileCount; i++){

            const tileColor = svg.childNodes[i].getAttribute("fill");

            colors.push(tileColor);

        }

        try{
            decolorize();
        }
        catch (e) {
            console.log(e);
        }
        
        async function decolorize(over){

            const bodyColor = document.querySelector("body").style.backgroundColor;

            for(let i = 0; i < tileCount; i++){
                
                await sleep(intvl);
                svg.childNodes[i].setAttribute("fill", `${bodyColor}`);
                if(i+1 === tileCount){
                    colorize();
                }
    
            }

        }

        async function colorize(){

            for(let i = 0; i < tileCount; i++){
                
                await sleep(intvl);
                svg.childNodes[i].setAttribute("fill", `${colors[i]}`);
                if(i+1 === tileCount){
                    if(!loaded){
                        decolorize();
                    }
                }
            }

        }

    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}