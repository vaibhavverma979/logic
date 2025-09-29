import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Award, Send, Bot, User, Sparkles, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

interface ChatMessage {
  id: number;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
}

const ScholarshipAI = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      type: "ai",
      content: "Hello! I'm your AI Scholarship Advisor. I'm here to help you discover scholarship opportunities that match your profile and academic achievements. Tell me about your field of study, academic level, or any specific requirements you have.",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "I'm studying engineering, what scholarships are available?",
    "Looking for medical school scholarships",
    "Need help with undergraduate scholarships",
    "What scholarships exist for computer science students?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      id: messages.length + 1,
      type: "user",
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: messages.length + 2,
        type: "ai",
        content: generateAIResponse(message),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes("engineering") || msg.includes("tech") || msg.includes("computer science")) {
      return "Great! I found several scholarships for engineering and technology students:\n\n• National Merit Engineering Scholarship - $5,000\n• Tech Future Leaders Award - $10,000\n• Engineering Excellence Grant - $7,500\n• STEM Innovation Scholarship - $15,000\n\nWould you like to see detailed information about these scholarships? I can show you the complete recommendations with application requirements and deadlines.";
    }
    
    if (msg.includes("medical") || msg.includes("healthcare") || msg.includes("medicine")) {
      return "Excellent! Here are some medical scholarships I've found for you:\n\n• Future Doctors Scholarship - $12,000\n• Healthcare Heroes Grant - $8,000\n• Medical Excellence Award - $20,000\n• Community Health Scholarship - $6,000\n\nThese scholarships match your medical field interest. Would you like me to show you the complete scholarship details and application processes?";
    }
    
    if (msg.includes("undergraduate") || msg.includes("bachelor")) {
      return "Perfect! I've identified undergraduate scholarships for you:\n\n• Academic Achievement Award - $5,000\n• First Generation College Grant - $7,000\n• Leadership Excellence Scholarship - $10,000\n• Merit-Based Scholarship - $8,500\n\nThese are great opportunities for undergraduate students. Shall I provide you with detailed recommendations including eligibility criteria and application steps?";
    }
    
    return "Thank you for sharing your interests! Based on your profile, I've found some relevant scholarships:\n\n• General Academic Excellence Award - $6,000\n• Student Success Grant - $4,500\n• Educational Opportunity Scholarship - $8,000\n• Achievement Recognition Award - $5,500\n\nWould you like to see the complete scholarship recommendations with all the details you need to apply?";
  };
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary-light text-white py-6">
        <div className="section-container">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/student/dashboard">
                <Button variant="ghost" className="text-white hover:bg-white/20">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold flex items-center">
                  <Award className="mr-2 h-6 w-6" />
                  Scholarship AI
                </h1>
                <p className="text-white/90">Find scholarships that match your profile and achievements</p>
              </div>
            </div>
            <Badge className="bg-white/20 text-white">
              <Sparkles className="mr-1 h-3 w-3" />
              AI Powered
            </Badge>
          </div>
        </div>
      </div>

      <div className="section-container py-6">
        <div className="max-w-4xl mx-auto">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="flex-shrink-0">
              <CardTitle className="flex items-center">
                <Award className="mr-2 h-5 w-5 text-accent" />
                AI Scholarship Conversation
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.type === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.type === "ai" && (
                          <Bot className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                        )}
                        {message.type === "user" && (
                          <User className="h-4 w-4 mt-0.5 text-primary-foreground flex-shrink-0" />
                        )}
                        <div className="whitespace-pre-wrap">{message.content}</div>
                      </div>
                      <div className="text-xs opacity-70 mt-2">
                        {message.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg p-4 max-w-[80%]">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4 text-primary" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Questions */}
              {messages.length <= 1 && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-muted-foreground mb-3">Suggested questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleSendMessage(question)}
                        className="text-xs"
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="border-t p-6 flex-shrink-0">
                {messages.length > 1 && (
                  <div className="mb-4 text-center">
                    <Link to="/student/scholarship-recommendations">
                      <Button className="btn-gradient mb-2">
                        <Award className="h-4 w-4 mr-2" />
                        View Detailed Scholarship Recommendations
                      </Button>
                    </Link>
                  </div>
                )}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage(inputMessage);
                  }}
                  className="flex space-x-2"
                >
                  <Input
                    placeholder="Tell me about your field of study, academic level, or scholarship preferences..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button 
                    type="submit" 
                    disabled={!inputMessage.trim() || isTyping}
                    className="btn-gradient"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipAI;