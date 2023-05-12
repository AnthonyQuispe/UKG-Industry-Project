import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import "./Chatgpt.scss";
import CloseOut from "../../assets/icons/CloseOut.png";
import Send from "../../assets/icons/Send.png";
import ProfileImg from "../../assets/eve.png";

import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = process.env.REACT_APP_ChatGpt_API_KEY;
// "Explain things like you would to a 10 year old learning how to code."
const systemMessage = {
  //  Explain things like you're talking to a software professional with 5 years of experience.
  role: "system",
  content:
    "Explain things like you're talking as an HR AI assistant with years of experience to a UKG empolyee.",
};

function ChatGPT({ setShowCeciBotModal }) {
  const handleCloseoutCeciBot = () => {
    setShowCeciBotModal(false);
  };

  const [messages, setMessages] = useState([
    {
      message:
        "Hi there! I am Ceci working for UKG. Thank you for letting me know how you are feeling today, please tell me what caused you to feel this way?",
      sentTime: "just now",
      sender: "CeciAi",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act.
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage, // The system message DEFINES the logic of our chatGPT
        ...apiMessages, // The messages from our chat with ChatGPT
      ],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "Ceci",
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <div className="App">
      <div className="Profile-container">
        <div className="profile-img-chat">
          <img src={ProfileImg} alt="profile" className="profile-img"></img>
          <h2 className="profle-h1"> chat with us!</h2>
          <img
            src={CloseOut}
            alt="profile"
            className="closeout-img"
            onClick={handleCloseoutCeciBot}
          ></img>
        </div>
        <h2>We're online !</h2>
        <div style={{ position: "relative", width: "700px" }}>
          <MainContainer>
            <ChatContainer>
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={
                  isTyping ? <TypingIndicator content="Ceci is typing" /> : null
                }
              >
                {messages.map((message, i) => {
                  console.log(message);
                  return <Message key={i} model={message} />;
                })}
              </MessageList>
              <MessageInput
                placeholder="Enter your message here"
                onSend={handleSend}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </div>
  );
}

export default ChatGPT;
