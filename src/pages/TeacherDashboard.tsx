import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  BookOpen, 
  Video,
  Upload,
  Plus,
  Edit,
  Download,
  Eye,
  Users,
  Clock,
  FileText,
  PlayCircle,
  Calendar
} from "lucide-react";

const TeacherDashboard = () => {
  const [studyMaterials, setStudyMaterials] = useState([
    { id: 1, title: "Introduction to Mathematics", subject: "Mathematics", grade: "Grade 10", size: "3.2 MB", uploaded: "2024-01-20", downloads: 89, type: "pdf" },
    { id: 2, title: "Physics Lab Manual", subject: "Physics", grade: "Grade 11", size: "5.1 MB", uploaded: "2024-01-18", downloads: 67, type: "pdf" },
    { id: 3, title: "Chemistry Formula Sheet", subject: "Chemistry", grade: "Grade 12", size: "1.8 MB", uploaded: "2024-01-15", downloads: 123, type: "pdf" },
    { id: 4, title: "English Literature Notes", subject: "English", grade: "Grade 11", size: "2.4 MB", uploaded: "2024-01-12", downloads: 45, type: "doc" }
  ]);

  const [lectures, setLectures] = useState([
    { id: 1, title: "Calculus Fundamentals", subject: "Mathematics", grade: "Grade 12", duration: "45 min", uploaded: "2024-01-22", views: 234, type: "video", status: "Published" },
    { id: 2, title: "Organic Chemistry Basics", subject: "Chemistry", grade: "Grade 11", duration: "38 min", uploaded: "2024-01-20", views: 189, type: "video", status: "Published" },
    { id: 3, title: "World War II History", subject: "History", grade: "Grade 10", duration: "52 min", uploaded: "2024-01-18", views: 156, type: "video", status: "Draft" },
    { id: 4, title: "Shakespeare's Sonnets", subject: "English", grade: "Grade 11", duration: "30 min", uploaded: "2024-01-15", views: 178, type: "video", status: "Published" }
  ]);

  const quickStats = [
    { label: "Study Materials", value: studyMaterials.length.toString(), icon: BookOpen, color: "text-primary" },
    { label: "Video Lectures", value: lectures.length.toString(), icon: Video, color: "text-secondary" },
    { label: "Total Downloads", value: studyMaterials.reduce((sum, m) => sum + m.downloads, 0).toString(), icon: Download, color: "text-success" },
    { label: "Total Views", value: lectures.reduce((sum, l) => sum + l.views, 0).toString(), icon: Eye, color: "text-accent" }
  ];

  const subjects = ["Mathematics", "Physics", "Chemistry", "English", "History", "Biology"];
  const grades = ["Grade 9", "Grade 10", "Grade 11", "Grade 12"];

  return (
    <div className="min-h-screen bg-background">
      {/* Welcome Section */}
      <div className="hero-gradient text-white py-12">
        <div className="section-container">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Teacher Dashboard</h1>
            <p className="text-white/90 text-lg">Create and manage study materials and lectures for your students</p>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Study Materials Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-primary" />
                  Study Materials
                </span>
                <Button size="sm" data-testid="button-upload-material">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Material
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studyMaterials.map((material) => (
                  <div key={material.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold" data-testid={`text-material-title-${material.id}`}>{material.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {material.size}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center">
                        <FileText className="mr-1 h-3 w-3" />
                        {material.subject}
                      </span>
                      <span>{material.grade}</span>
                      <span className="flex items-center">
                        <Download className="mr-1 h-3 w-3" />
                        {material.downloads} downloads
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Uploaded: {material.uploaded}</span>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" data-testid={`button-edit-material-${material.id}`}>
                          <Edit className="mr-1 h-3 w-3" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" data-testid={`button-download-material-${material.id}`}>
                          <Download className="mr-1 h-3 w-3" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Upload New Material */}
                <div className="p-6 border-2 border-dashed border-muted-foreground/25 rounded-lg">
                  <div className="text-center mb-4">
                    <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Upload New Study Material</h4>
                    <p className="text-sm text-muted-foreground mb-4">Add educational resources for your students</p>
                  </div>
                  <div className="space-y-4">
                    <Input placeholder="Material Title" data-testid="input-material-title" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Select>
                        <SelectTrigger data-testid="select-material-subject">
                          <SelectValue placeholder="Select Subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((subject) => (
                            <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger data-testid="select-material-grade">
                          <SelectValue placeholder="Select Grade" />
                        </SelectTrigger>
                        <SelectContent>
                          {grades.map((grade) => (
                            <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Textarea placeholder="Description (optional)" data-testid="textarea-material-description" />
                    <Button className="w-full" data-testid="button-upload-new-material">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Study Material
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lectures Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Video className="mr-2 h-5 w-5 text-secondary" />
                  Video Lectures
                </span>
                <Button size="sm" data-testid="button-upload-lecture">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Lecture
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lectures.map((lecture) => (
                  <div key={lecture.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold" data-testid={`text-lecture-title-${lecture.id}`}>{lecture.title}</h4>
                      <div className="flex items-center space-x-2">
                        <Badge variant={lecture.status === "Published" ? "default" : "secondary"} className="text-xs">
                          {lecture.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {lecture.duration}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center">
                        <PlayCircle className="mr-1 h-3 w-3" />
                        {lecture.subject}
                      </span>
                      <span>{lecture.grade}</span>
                      <span className="flex items-center">
                        <Eye className="mr-1 h-3 w-3" />
                        {lecture.views} views
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Uploaded: {lecture.uploaded}</span>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" data-testid={`button-edit-lecture-${lecture.id}`}>
                          <Edit className="mr-1 h-3 w-3" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" data-testid={`button-view-lecture-${lecture.id}`}>
                          <Eye className="mr-1 h-3 w-3" />
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Upload New Lecture */}
                <div className="p-6 border-2 border-dashed border-muted-foreground/25 rounded-lg">
                  <div className="text-center mb-4">
                    <Video className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Upload New Lecture</h4>
                    <p className="text-sm text-muted-foreground mb-4">Share video lectures with your students</p>
                  </div>
                  <div className="space-y-4">
                    <Input placeholder="Lecture Title" data-testid="input-lecture-title" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Select>
                        <SelectTrigger data-testid="select-lecture-subject">
                          <SelectValue placeholder="Select Subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((subject) => (
                            <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger data-testid="select-lecture-grade">
                          <SelectValue placeholder="Select Grade" />
                        </SelectTrigger>
                        <SelectContent>
                          {grades.map((grade) => (
                            <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Textarea placeholder="Lecture description and learning objectives" data-testid="textarea-lecture-description" />
                    <Button className="w-full" data-testid="button-upload-new-lecture">
                      <Video className="mr-2 h-4 w-4" />
                      Upload Video Lecture
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-primary/5">
                <h4 className="font-semibold text-primary mb-2">Materials This Week</h4>
                <p className="text-2xl font-bold">{studyMaterials.filter(m => new Date(m.uploaded) > new Date(Date.now() - 7*24*60*60*1000)).length}</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/5">
                <h4 className="font-semibold text-secondary mb-2">Lectures This Week</h4>
                <p className="text-2xl font-bold">{lectures.filter(l => new Date(l.uploaded) > new Date(Date.now() - 7*24*60*60*1000)).length}</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-success/5">
                <h4 className="font-semibold text-success mb-2">Total Engagement</h4>
                <p className="text-2xl font-bold">{(studyMaterials.reduce((sum, m) => sum + m.downloads, 0) + lectures.reduce((sum, l) => sum + l.views, 0)).toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherDashboard;