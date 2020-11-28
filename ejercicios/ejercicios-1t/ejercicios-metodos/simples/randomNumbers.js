
const randomNumbers = () => {
    const numbers = [];
    
    for (let i = 0; i < 100; i++) {
        let random = Math.floor(Math.random() * 1000) + 1;
        while(numbers.includes(random)) {
            random = Math.floor(Math.random() * 1000) + 1;
        }
        numbers.push(random);
    }

    const container = document.createElement('ol');

    numbers.map(number => {
        const child = document.createElement('li');

        const content = document.createElement('span');
        const text = document.createTextNode(number);

        content.appendChild(text)
        content.style.fontWeight = "bold";
        
        child.appendChild(content);
        container.appendChild(child);
    })

    document.write(container.outerHTML);
    
}

randomNumbers();