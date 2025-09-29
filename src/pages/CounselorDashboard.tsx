import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  MessageCircle, 
  BookOpen, 
  FileText,
  Upload,
  Send,
  Plus,
  User,
  Clock,
  Video,
  Download,
  Edit,
  Trash2
} from "lucide-react";

const CounselorDashboard = () => {
  const [activeChat, setActiveChat] = useState(1);
  const [messageInput, setMessageInput] = useState("");
  
  const [students] = useState([
    { id: 1, name: "Alex Rodriguez", lastMessage: "Thank you for the career advice!", time: "2 min ago", unread: 2, online: true },
    { id: 2, name: "Emily Chen", lastMessage: "When is the next session?", time: "1 hour ago", unread: 0, online: false },
    { id: 3, name: "Rajesh Kumar", lastMessage: "I need help with college selection", time: "3 hours ago", unread: 1, online: true },
    { id: 4, name: "Sarah Johnson", lastMessage: "The resources were very helpful", time: "1 day ago", unread: 0, online: false }
  ]);

  const [chatMessages] = useState([
    { id: 1, studentId: 1, sender: "student", message: "Hi, I need guidance on my career path", time: "10:30 AM", isRead: true },
    { id: 2, studentId: 1, sender: "counselor", message: "Hello Alex! I'd be happy to help you with career guidance. What field are you interested in?", time: "10:32 AM", isRead: true },
    { id: 3, studentId: 1, sender: "student", message: "I'm interested in technology, especially AI and machine learning", time: "10:35 AM", isRead: true },
    { id: 4, studentId: 1, sender: "counselor", message: "That's a great field with lots of opportunities! Let me share some guidance materials with you.", time: "10:38 AM", isRead: true },
    { id: 5, studentId: 1, sender: "student", message: "Thank you for the career advice!", time: "10:45 AM", isRead: false }
  ]);

  const [lectures] = useState([
    { id: 1, title: "Career Path Planning Fundamentals", duration: "45 min", uploaded: "2024-01-15", views: 234, type: "video" },
    { id: 2, title: "College Application Process", duration: "30 min", uploaded: "2024-01-10", views: 189, type: "video" },
    { id: 3, title: "Study Skills and Time Management", duration: "25 min", uploaded: "2024-01-05", views: 156, type: "video" }
  ]);

  const [materials] = useState([
    { id: 1, title: "Career Assessment Worksheet", size: "2.3 MB", uploaded: "2024-01-20", downloads: 45, type: "pdf" },
    { id: 2, title: "College Selection Guide", size: "1.8 MB", uploaded: "2024-01-18", downloads: 67, type: "pdf" },
    { id: 3, title: "Interview Preparation Checklist", size: "890 KB", uploaded: "2024-01-15", downloads: 89, type: "pdf" },
    { id: 4, title: "Scholarship Application Template", size: "1.2 MB", uploaded: "2024-01-12", downloads: 34, type: "doc" }
  ]);

  const quickStats = [
    { label: "Active Students", value: students.filter(s => s.online).length.toString(), icon: User, color: "text-primary" },
    { label: "Unread Messages", value: students.reduce((sum, s) => sum + s.unread, 0).toString(), icon: MessageCircle, color: "text-accent" },
    { label: "Guidance Lectures", value: lectures.length.toString(), icon: Video, color: "text-secondary" },
    { label: "Study Materials", value: materials.length.toString(), icon: FileText, color: "text-success" }
  ];

  const currentStudent = students.find(s => s.id === activeChat);
  const currentMessages = chatMessages.filter(m => m.studentId === activeChat);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // In real app, would send message to backend
      setMessageInput("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Welcome Section */}
      <div className="hero-gradient text-white py-12">
        <div className="section-container">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Counselor Dashboard</h1>
            <p className="text-white/90 text-lg">Connect with students and manage your guidance resources</p>
          </div>
        </div>
      </div>

      <div className="section-container py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5 text-accent" />
                Student Chat Interface
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 h-[600px]">
                {/* Student List */}
                <div className="border-r border-border">
                  <div className="p-4 border-b border-border">
                    <h4 className="font-semibold">Students</h4>
                  </div>
                  <ScrollArea className="h-[550px]">
                    <div className="space-y-1 p-2">
                      {students.map((student) => (
                        <div
                          key={student.id}
                          className={`p-3 rounded-lg cursor-pointer transition-colors ${
                            activeChat === student.id ? 'bg-primary/10 border border-primary' : 'hover:bg-muted/50'
                          }`}
                          onClick={() => setActiveChat(student.id)}
                          data-testid={`student-chat-${student.id}`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center space-x-2">
                              <div className={`w-2 h-2 rounded-full ${student.online ? 'bg-green-500' : 'bg-gray-400'}`} />
                              <h5 className="font-medium text-sm">{student.name}</h5>
                            </div>
                            {student.unread > 0 && (
                              <Badge variant="default" className="text-xs h-5 w-5 p-0 flex items-center justify-center">
                                {student.unread}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground truncate">{student.lastMessage}</p>
                          <p className="text-xs text-muted-foreground mt-1">{student.time}</p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>

                {/* Chat Messages */}
                <div className="md:col-span-2 flex flex-col">
                  {/* Chat Header */}
                  <div className="p-4 border-b border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${currentStudent?.online ? 'bg-green-500' : 'bg-gray-400'}`} />
                        <h4 className="font-semibold" data-testid="text-current-student-name">{currentStudent?.name}</h4>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" data-testid="button-video-call">
                          <Video className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                      {currentMessages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.sender === 'counselor' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[70%] p-3 rounded-lg ${
                              message.sender === 'counselor'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted'
                            }`}
                            data-testid={`message-${message.id}`}
                          >
                            <p className="text-sm">{message.message}</p>
                            <p className={`text-xs mt-1 ${message.sender === 'counselor' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                              {message.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  {/* Message Input */}
                  <div className="p-4 border-t border-border">
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Type your message..."
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        data-testid="input-message"
                      />
                      <Button onClick={handleSendMessage} data-testid="button-send-message">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Guidance Lectures and Materials */}
          <div className="space-y-6">
            {/* Guidance Lectures */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Video className="mr-2 h-5 w-5 text-secondary" />
                    Guidance Lectures
                  </span>
                  <Button size="sm" data-testid="button-upload-lecture">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {lectures.map((lecture) => (
                    <div key={lecture.id} className="p-3 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-medium text-sm" data-testid={`text-lecture-title-${lecture.id}`}>{lecture.title}</h5>
                        <Badge variant="outline" className="text-xs">
                          {lecture.duration}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                        <span>{lecture.views} views</span>
                        <span>{lecture.uploaded}</span>
                      </div>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline" className="text-xs h-7" data-testid={`button-edit-lecture-${lecture.id}`}>
                          <Edit className="mr-1 h-3 w-3" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs h-7" data-testid={`button-share-lecture-${lecture.id}`}>
                          <Video className="mr-1 h-3 w-3" />
                          Share
                        </Button>
                      </div>
                    </div>
                  ))}
                  <div className="p-4 border-2 border-dashed border-muted-foreground/25 rounded-lg text-center">
                    <Video className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground mb-2">Upload guidance lectures for students</p>
                    <Button size="sm" variant="outline" data-testid="button-add-lecture">
                      <Plus className="mr-1 h-3 w-3" />
                      Add Lecture
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guidance Materials */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-success" />
                    Guidance Materials
                  </span>
                  <Button size="sm" data-testid="button-upload-material">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {materials.map((material) => (
                    <div key={material.id} className="p-3 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-medium text-sm" data-testid={`text-material-title-${material.id}`}>{material.title}</h5>
                        <Badge variant="outline" className="text-xs">
                          {material.size}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                        <span>{material.downloads} downloads</span>
                        <span>{material.uploaded}</span>
                      </div>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline" className="text-xs h-7" data-testid={`button-edit-material-${material.id}`}>
                          <Edit className="mr-1 h-3 w-3" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs h-7" data-testid={`button-download-material-${material.id}`}>
                          <Download className="mr-1 h-3 w-3" />
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                  <div className="p-4 border-2 border-dashed border-muted-foreground/25 rounded-lg text-center">
                    <FileText className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground mb-2">Upload guidance materials and resources</p>
                    <Button size="sm" variant="outline" data-testid="button-add-material">
                      <Plus className="mr-1 h-3 w-3" />
                      Add Material
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounselorDashboard;