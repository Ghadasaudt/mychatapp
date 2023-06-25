<!DOCTYPE html>
<html>
<head>
 <meta charset="UTF-8">
 <title>Interactive Chat Rooms</title>
 <style>
  body {
   font-family: Arial, sans-serif;
   background-color: #f2f2f2;
  }
  
  .container {
   max-width: 800px;
   margin: 0 auto;
   padding: 20px;
   background-color: #fff;
   box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
   border-radius: 5px;
   overflow: hidden;
  }
  
  h1 {
   text-align: center;
   margin-top: 0;
  }
  
  .chat-room {
   margin-bottom: 20px;
   background-color: #f9f9f9;
   border: 1px solid #ddd;
   border-radius: 5px;
   overflow: hidden;
  }
  
  .chat-header {
   background-color: #ddd;
   padding: 10px;
   font-weight: bold;
   color: #333;
  }
  
  .chat-messages {
   padding: 10px;
   height: 300px;
   overflow-y: scroll;
  }
  
  .chat-input {
   display: flex;
   align-items: center;
   padding: 10px;
   background-color: #f2f2f2;
   border-top: 1px solid #ddd;
  }
  
  .chat-input input[type="text"] {
   flex: 1;
   padding: 10px;
   border: none;
   border-radius: 5px;
   margin-right: 10px;
  }
  
  .chat-input button {
   padding: 10px;
   background-color: #4CAF50;
   color: #fff;
   border: none;
   border-radius: 5px;
   cursor: pointer;
  }
  
  .chat-message {
   margin-bottom: 10px;
   padding: 5px;
   background-color: #fff;
   border: 1px solid #ddd;
   border-radius: 5px;
  }
  
  .chat-message span {
   font-weight: bold;
   color: #333;
  }
  
  .chat-message p {
   margin: 0;
  }
 </style>
</head>
<body>
 <div class="container">
  <h1>Interactive Chat Rooms</h1>
  
  <div class="chat-room">
   <div class="chat-header">Chat Room 1</div>
   <div class="chat-messages"></div>
   <div class="chat-input">
    <input type="text" placeholder="Type your message...">
    <button>Send</button>
   </div>
  </div>
  
  <div class="chat-room">
   <div class="chat-header">Chat Room 2</div>
   <div class="chat-messages"></div>
   <div class="chat-input">
    <input type="text" placeholder="Type your message...">
    <button>Send</button>
   </div>
  </div>
  
  <div class="chat-room">
   <div class="chat-header">Chat Room 3</div>
   <div class="chat-messages"></div>
   <div class="chat-input">
    <input type="text" placeholder="Type your message...">
    <button>Send</button>
   </div>
  </div>
 </div>
 
 <script>
  // Add event listeners to all chat room "Send" buttons
  const chatInputButtons = document.querySelectorAll('.chat-input button');
  chatInputButtons.forEach(button => {
   button.addEventListener('click', () => {
    const chatRoom = button.parentNode.parentNode;
    const input = chatRoom.querySelector('.chat-input input[type="text"]');
    const messages = chatRoom.querySelector('.chat-messages');
    
    if (input.value.trim() !== '') {
     const message = document.createElement('div');
     message.classList.add('chat-message');
     message.innerHTML = '<span>You:</span> <p>' + input.value.trim() + '</p>';
     messages.appendChild(message);
     input.value = '';
    }
   });
  });
 </script>
</body>
</html>


