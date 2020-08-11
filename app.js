const channelName = 'sashagrey'
const rootElement = document.getElementById('root');
const card_remove_timeout = 8000;


let chatList = [];

const client = new tmi.Client({
	connection: {
		secure: true,
		reconnect: true
	},
	channels: [ channelName || 'armadwarf' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    // "Alca: Hello, World!"
    const randomColor = "#"+(
        pick = (s, c) => {
            return  s[Math.floor(Math.random() * s.length)] + (c && pick(s, c - 1));
    })('56789ABCDEF', 4);

    tags['color'] = true;
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    
    const cardTitle = document.createElement('div');
    cardTitle.className = 'card-header';
    cardTitle.innerHTML = `${tags['display-name']}`;
    cardTitle.style.color = randomColor;
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const messageContainer = document.createElement('blockquote');
    messageContainer.className = 'blockquote mb-0';

    const messageElement = document.createElement('p');
    messageElement.innerHTML = message;
    const messageTime = document.createElement('footer');
    messageTime.className = 'blockquote-footer';
    messageTime.innerHTML = `message written ${new Date()}`;

    cardElement.appendChild(cardTitle);
    cardElement.appendChild(cardBody);
    cardBody.appendChild(messageContainer);
    messageContainer.appendChild(messageElement);
    messageContainer.appendChild(messageTime);


    
    setTimeout(()=>{
        removeCard(rootElement, cardElement);
    }, card_remove_timeout);
    addCard(rootElement, cardElement);
});


removeCard = (parent, nested) => { 
    nested.style.transition = 'all 0.4s ease-in-out';
    nested.style.opacity = 0;  
    setTimeout(()=>{
        chatList.splice(chatList.indexOf(nested), 1);
        parent.removeChild(nested);
    },450);
}
addCard = (parent, nested) => {
    parent.insertBefore(nested, parent.firstChild);
    chatList.push(nested);
}

		