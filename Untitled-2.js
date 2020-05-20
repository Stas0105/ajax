function Planets () {
    let text3 = document.createElement('ol');
    text3.classList.add('wp');
    fetch('https://swapi.dev/api/planets/')
        .then(response => response.json())
            .then(resp =>{
                for(let eatch of resp.results){
                    let lite = document.createElement('li');
                    lite.innerHTML = eatch.name;
                    text3.append(lite);
                } document.body.appendChild(text3);
            } 
                )
}

function PlanetSearch (agr){
    let qwe = document.getElementsByTagName("ul");
    if (qwe) {
        for (var i = 0, len = qwe.length; i != len; ++i) {
            qwe[0].parentNode.removeChild(qwe[0]);
        }
    }
    let text2 = document.createElement('ul')
    text2.classList.add('good');
    let input = document.getElementById('link').value;
        fetch('https://swapi.dev/api/planets/?search=' + input)
            .then(response => response.json())
                .then(res =>{
                     for(let eatch of res.results) {
                        let lit = document.createElement('li');
                        lit.innerHTML = eatch.name;
                        lit.classList.add('lishka');
                        lit.innerHTML = ('<---------------------------------!>')
                        text2.append(lit)
                            
                        for(let field in eatch) {
                            console.log(field + ':' + eatch[field])
                             let li = document.createElement('li');
                             li.innerHTML = (field + ':' + eatch[field])
                             text2.append(li);
                            
                            

                        }
                    } document.body.appendChild(text2);
             
            })
}
