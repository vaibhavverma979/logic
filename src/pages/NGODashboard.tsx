import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Megaphone, 
  Users, 
  Award,
  Upload,
  Edit,
  Plus,
  Calendar,
  MapPin,
  Eye,
  Trash2
} from "lucide-react";

const NGODashboard = () => {
  const [campaigns, setCampaigns] = useState([
    { id: 1, title: "Digital Literacy Campaign", status: "Active", reach: "500+", date: "2024-01-15" },
    { id: 2, title: "Environmental Awareness Drive", status: "Upcoming", reach: "300+", date: "2024-02-10" }
  ]);

  const [volunteers, setVolunteers] = useState([
    { id: 1, name: "Sarah Johnson", role: "Event Coordinator", status: "Active", hours: 45 },
    { id: 2, name: "Mike Chen", role: "Content Creator", status: "Active", hours: 32 },
    { id: 3, name: "Priya Sharma", role: "Outreach Specialist", status: "Inactive", hours: 28 }
  ]);

  const [scholarships, setScholarships] = useState([
    { id: 1, title: "Tech Education Scholarship", amount: "$5,000", applications: 25, deadline: "2024-03-15" },
    { id: 2, title: "Rural Development Grant", amount: "$3,000", applications: 12, deadline: "2024-04-01" }
  ]);

  const quickStats = [
    { label: "Active Campaigns", value: campaigns.filter(c => c.status === "Active").length.toString(), icon: Megaphone, color: "text-primary" },
    { label: "Active Volunteers", value: volunteers.filter(v => v.status === "Active").length.toString(), icon: Users, color: "text-success" },
    { label: "Scholarship Programs", value: scholarships.length.toString(), icon: Award, color: "text-secondary" },
    { label: "Total Reach", value: "800+", icon: Eye, color: "text-accent" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Welcome Section */}
      <div className="hero-gradient text-white py-12">
        <div className="section-container">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">NGO Dashboard</h1>
            <p className="text-white/90 text-lg">Manage your awareness campaigns, volunteers, and scholarship programs</p>
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
          {/* Awareness Campaigns Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Megaphone className="mr-2 h-5 w-5 text-primary" />
                  Awareness Campaigns
                </span>
                <Button size="sm" data-testid="button-add-campaign">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Campaign
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaigns.map((campaign) => (
                  <div key={campaign.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold" data-testid={`text-campaign-title-${campaign.id}`}>{campaign.title}</h4>
                      <Badge variant={campaign.status === "Active" ? "default" : "secondary"}>
                        {campaign.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Eye className="mr-1 h-3 w-3" />
                        {campaign.reach} reached
                      </span>
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {campaign.date}
                      </span>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" variant="outline" data-testid={`button-edit-campaign-${campaign.id}`}>
                        <Edit className="mr-1 h-3 w-3" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" data-testid={`button-view-campaign-${campaign.id}`}>
                        <Eye className="mr-1 h-3 w-3" />
                        View
                      </Button>
                    </div>
                  </div>
                ))}
                <div className="p-4 border-2 border-dashed border-muted-foreground/25 rounded-lg text-center">
                  <Megaphone className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-3">Upload campaign materials or create new campaigns</p>
                  <Button variant="outline" size="sm" data-testid="button-upload-campaign">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Materials
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Volunteer Management Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-success" />
                  Volunteer Management
                </span>
                <Button size="sm" data-testid="button-add-volunteer">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Volunteer
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {volunteers.map((volunteer) => (
                  <div key={volunteer.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold" data-testid={`text-volunteer-name-${volunteer.id}`}>{volunteer.name}</h4>
                        <p className="text-sm text-muted-foreground">{volunteer.role}</p>
                      </div>
                      <Badge variant={volunteer.status === "Active" ? "default" : "secondary"}>
                        {volunteer.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <span>{volunteer.hours} hours contributed</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" data-testid={`button-edit-volunteer-${volunteer.id}`}>
                        <Edit className="mr-1 h-3 w-3" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" data-testid={`button-contact-volunteer-${volunteer.id}`}>
                        <Users className="mr-1 h-3 w-3" />
                        Contact
                      </Button>
                    </div>
                  </div>
                ))}
                <div className="p-4 border-2 border-dashed border-muted-foreground/25 rounded-lg text-center">
                  <Users className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-3">Recruit and manage volunteers for your campaigns</p>
                  <Button variant="outline" size="sm" data-testid="button-recruit-volunteers">
                    <Plus className="mr-2 h-4 w-4" />
                    Recruit Volunteers
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scholarship Campaigns Section */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Award className="mr-2 h-5 w-5 text-secondary" />
                  Scholarship Campaigns
                </span>
                <Button size="sm" data-testid="button-add-scholarship">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Scholarship
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {scholarships.map((scholarship) => (
                  <div key={scholarship.id} className="p-6 border rounded-lg">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-semibold text-lg" data-testid={`text-scholarship-title-${scholarship.id}`}>{scholarship.title}</h4>
                      <Badge variant="outline" className="text-secondary border-secondary">
                        {scholarship.amount}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center justify-between">
                        <span>Applications Received:</span>
                        <span className="font-medium" data-testid={`text-applications-${scholarship.id}`}>{scholarship.applications}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Deadline:</span>
                        <span className="font-medium">{scholarship.deadline}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" data-testid={`button-edit-scholarship-${scholarship.id}`}>
                        <Edit className="mr-1 h-3 w-3" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" data-testid={`button-view-applications-${scholarship.id}`}>
                        <Eye className="mr-1 h-3 w-3" />
                        View Applications
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 border-2 border-dashed border-muted-foreground/25 rounded-lg text-center">
                <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Create New Scholarship Program</h4>
                <p className="text-sm text-muted-foreground mb-4">Set up scholarships to support students in their educational journey</p>
                <div className="space-y-4 max-w-md mx-auto">
                  <Input placeholder="Scholarship Title" data-testid="input-scholarship-title" />
                  <Input placeholder="Amount ($)" data-testid="input-scholarship-amount" />
                  <Textarea placeholder="Description and criteria..." data-testid="textarea-scholarship-description" />
                  <Button className="w-full" data-testid="button-create-scholarship">
                    <Award className="mr-2 h-4 w-4" />
                    Create Scholarship Program
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NGODashboard;