import { useState } from "react";
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import axios from "axios";

interface ChatMessage {
  sender: "client" | "ai";
  message: string;
}

const ChatModal = () => {
  const [messages, setMessages] = useState<ChatMessage[] | any>([]);
  const [input, setInput] = useState<string>("");

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { sender: "client", message: input }];
    setMessages(newMessages);
    setInput("");

    // Simulating AI response
    const aiResponse = await getAIResponse(input);
    setMessages([...newMessages, { sender: "ai", message: aiResponse }]);
  };

  const getAIResponse = async (message: string) => {
    try {
      // Replace with actual API request
      const response = await axios.post("https://api.openai.com/v1/chat/completions", { message });
      return response.data.reply;
    } catch (error) {
      console.error("Error fetching AI response:", error);
      return "Sorry, something went wrong.";
    }
  };

  return (
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">Chat with Us</ModalHeader>
          <ModalBody>
            <div className="chatbox h-[400px] max-h-[400px] overflow-y-auto p-5 bg-red-50">
              {messages.map((msg: any, index: any) => (
                <div key={index} className={`message ${msg.sender} mt-5`}>
                  <strong>{msg.sender === "client" ? "You" : "AI"}:</strong> {msg.message}
                </div>
              ))}
            </div>
            <Input
              fullWidth
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={onClose}>
              Action
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  );
};

export default ChatModal;
