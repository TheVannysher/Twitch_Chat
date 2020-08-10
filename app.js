const channelName = 'armadwarf'
const rootElement = document.getElementById('root');


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
    console.log(tags);
    console.log(new Date());
    tags['color'] = true;
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    
    const cardTitle = document.createElement('div');
    cardTitle.className = 'card-header';
    cardTitle.innerHTML = `${tags['display-name']}`;
    cardTitle.style.color = randomColor();
    
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
    rootElement.appendChild(cardElement);

});



randomColor = () => {
    return `#${Math.floor(Math.random() * 255).toString(16)}${Math.floor(Math.random() * 255).toString(16)}${Math.floor(Math.random() * 255).toString(16)}`
}
		