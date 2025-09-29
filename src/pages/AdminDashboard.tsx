import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { 
  Shield, 
  School,
  Users,
  GraduationCap,
  Heart,
  Check,
  X,
  Search,
  Filter,
  UserCheck,
  Clock,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

const AdminDashboard = () => {
  const [pendingRegistrations, setPendingRegistrations] = useState({
    colleges: [
      { id: 1, name: "MIT College of Engineering", email: "admin@mitcoe.edu", submittedDate: "2024-01-20", status: "pending", documents: "Complete" },
      { id: 2, name: "Stanford University", email: "registrar@stanford.edu", submittedDate: "2024-01-18", status: "pending", documents: "Incomplete" }
    ],
    counselors: [
      { id: 1, name: "Dr. Sarah Wilson", email: "sarah.wilson@email.com", specialization: "Career Guidance", submittedDate: "2024-01-22", status: "pending", verification: "Verified" },
      { id: 2, name: "Michael Chen", email: "m.chen@guidance.com", specialization: "Academic Counseling", submittedDate: "2024-01-19", status: "pending", verification: "Pending" }
    ],
    teachers: [
      { id: 1, name: "Prof. Emily Johnson", email: "emily.j@education.com", subject: "Mathematics", submittedDate: "2024-01-21", status: "pending", qualification: "PhD Mathematics" },
      { id: 2, name: "Dr. Rajesh Kumar", email: "rajesh.k@physics.edu", subject: "Physics", submittedDate: "2024-01-17", status: "pending", qualification: "PhD Physics" }
    ],
    ngos: [
      { id: 1, name: "Education for All Foundation", email: "contact@eduforall.org", focus: "Rural Education", submittedDate: "2024-01-23", status: "pending", registration: "501(c)(3)" },
      { id: 2, name: "Tech Learning Initiative", email: "hello@techlearn.org", focus: "Digital Literacy", submittedDate: "2024-01-16", status: "pending", registration: "Non-profit" }
    ]
  });

  const [permissionSettings, setPermissionSettings] = useState({
    autoApproveTeachers: false,
    requireDocumentVerification: true,
    allowBulkApproval: false,
    notifyOnNewRegistration: true
  });

  const quickStats = [
    { label: "Pending Colleges", value: pendingRegistrations.colleges.length.toString(), icon: School, color: "text-primary" },
    { label: "Pending Counselors", value: pendingRegistrations.counselors.length.toString(), icon: Users, color: "text-secondary" },
    { label: "Pending Teachers", value: pendingRegistrations.teachers.length.toString(), icon: GraduationCap, color: "text-accent" },
    { label: "Pending NGOs", value: pendingRegistrations.ngos.length.toString(), icon: Heart, color: "text-success" }
  ];

  const handleApprove = (type: string, id: number) => {
    setPendingRegistrations(prev => ({
      ...prev,
      [type]: prev[type as keyof typeof prev].map((item: any) => 
        item.id === id ? { ...item, status: 'approved' } : item
      )
    }));
  };

  const handleReject = (type: string, id: number) => {
    setPendingRegistrations(prev => ({
      ...prev,
      [type]: prev[type as keyof typeof prev].map((item: any) => 
        item.id === id ? { ...item, status: 'rejected' } : item
      )
    }));
  };

  const RegistrationCard = ({ item, type, onApprove, onReject }: any) => (
    <div className="p-4 border rounded-lg">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-semibold" data-testid={`text-${type}-name-${item.id}`}>{item.name}</h4>
          <p className="text-sm text-muted-foreground">{item.email}</p>
        </div>
        <Badge variant={
          item.status === 'approved' ? 'default' : 
          item.status === 'rejected' ? 'destructive' : 'secondary'
        }>
          {item.status}
        </Badge>
      </div>
      
      <div className="space-y-2 text-sm text-muted-foreground mb-3">
        <div className="flex justify-between">
          <span>Submitted:</span>
          <span>{item.submittedDate}</span>
        </div>
        {item.specialization && (
          <div className="flex justify-between">
            <span>Specialization:</span>
            <span>{item.specialization}</span>
          </div>
        )}
        {item.subject && (
          <div className="flex justify-between">
            <span>Subject:</span>
            <span>{item.subject}</span>
          </div>
        )}
        {item.focus && (
          <div className="flex justify-between">
            <span>Focus Area:</span>
            <span>{item.focus}</span>
          </div>
        )}
        {item.documents && (
          <div className="flex justify-between">
            <span>Documents:</span>
            <span className={item.documents === 'Complete' ? 'text-green-600' : 'text-red-600'}>
              {item.documents}
            </span>
          </div>
        )}
        {item.verification && (
          <div className="flex justify-between">
            <span>Verification:</span>
            <span className={item.verification === 'Verified' ? 'text-green-600' : 'text-yellow-600'}>
              {item.verification}
            </span>
          </div>
        )}
      </div>

      {item.status === 'pending' && (
        <div className="flex space-x-2">
          <Button 
            size="sm" 
            variant="outline" 
            className="text-green-600 border-green-600 hover:bg-green-50"
            onClick={() => onApprove(type, item.id)}
            data-testid={`button-approve-${type}-${item.id}`}
          >
            <Check className="mr-1 h-3 w-3" />
            Approve
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            className="text-red-600 border-red-600 hover:bg-red-50"
            onClick={() => onReject(type, item.id)}
            data-testid={`button-reject-${type}-${item.id}`}
          >
            <X className="mr-1 h-3 w-3" />
            Reject
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Welcome Section */}
      <div className="hero-gradient text-white py-12">
        <div className="section-container">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-white/90 text-lg">Manage permissions and registrations for the platform</p>
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

        {/* Permission Settings */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              Permission Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Auto-approve Teachers</h4>
                    <p className="text-sm text-muted-foreground">Automatically approve teacher registrations with complete documents</p>
                  </div>
                  <Switch
                    checked={permissionSettings.autoApproveTeachers}
                    onCheckedChange={(checked) => setPermissionSettings(prev => ({ ...prev, autoApproveTeachers: checked }))}
                    data-testid="switch-auto-approve-teachers"
                  />
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Require Document Verification</h4>
                    <p className="text-sm text-muted-foreground">Mandate document verification for all registrations</p>
                  </div>
                  <Switch
                    checked={permissionSettings.requireDocumentVerification}
                    onCheckedChange={(checked) => setPermissionSettings(prev => ({ ...prev, requireDocumentVerification: checked }))}
                    data-testid="switch-require-verification"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Allow Bulk Approval</h4>
                    <p className="text-sm text-muted-foreground">Enable bulk approval for multiple registrations</p>
                  </div>
                  <Switch
                    checked={permissionSettings.allowBulkApproval}
                    onCheckedChange={(checked) => setPermissionSettings(prev => ({ ...prev, allowBulkApproval: checked }))}
                    data-testid="switch-bulk-approval"
                  />
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Notify on New Registration</h4>
                    <p className="text-sm text-muted-foreground">Receive notifications for new registration requests</p>
                  </div>
                  <Switch
                    checked={permissionSettings.notifyOnNewRegistration}
                    onCheckedChange={(checked) => setPermissionSettings(prev => ({ ...prev, notifyOnNewRegistration: checked }))}
                    data-testid="switch-notify-registration"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Registration Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* College Registration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <School className="mr-2 h-5 w-5 text-primary" />
                  College Registration
                </span>
                <Badge variant="secondary">{pendingRegistrations.colleges.filter(c => c.status === 'pending').length} pending</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingRegistrations.colleges.map((college) => (
                  <RegistrationCard
                    key={college.id}
                    item={college}
                    type="colleges"
                    onApprove={handleApprove}
                    onReject={handleReject}
                  />
                ))}
                {pendingRegistrations.colleges.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                    <p>No pending college registrations</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Counselor Registration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-secondary" />
                  Counselor Registration
                </span>
                <Badge variant="secondary">{pendingRegistrations.counselors.filter(c => c.status === 'pending').length} pending</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingRegistrations.counselors.map((counselor) => (
                  <RegistrationCard
                    key={counselor.id}
                    item={counselor}
                    type="counselors"
                    onApprove={handleApprove}
                    onReject={handleReject}
                  />
                ))}
                {pendingRegistrations.counselors.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                    <p>No pending counselor registrations</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Teacher Registration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5 text-accent" />
                  Teacher Registration
                </span>
                <Badge variant="secondary">{pendingRegistrations.teachers.filter(t => t.status === 'pending').length} pending</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingRegistrations.teachers.map((teacher) => (
                  <RegistrationCard
                    key={teacher.id}
                    item={teacher}
                    type="teachers"
                    onApprove={handleApprove}
                    onReject={handleReject}
                  />
                ))}
                {pendingRegistrations.teachers.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                    <p>No pending teacher registrations</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* NGO Registration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Heart className="mr-2 h-5 w-5 text-success" />
                  NGO Registration
                </span>
                <Badge variant="secondary">{pendingRegistrations.ngos.filter(n => n.status === 'pending').length} pending</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingRegistrations.ngos.map((ngo) => (
                  <RegistrationCard
                    key={ngo.id}
                    item={ngo}
                    type="ngos"
                    onApprove={handleApprove}
                    onReject={handleReject}
                  />
                ))}
                {pendingRegistrations.ngos.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                    <p>No pending NGO registrations</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bulk Actions */}
        {permissionSettings.allowBulkApproval && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserCheck className="mr-2 h-5 w-5" />
                Bulk Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="text-green-600 border-green-600" data-testid="button-bulk-approve-all">
                  <Check className="mr-2 h-4 w-4" />
                  Approve All Verified
                </Button>
                <Button variant="outline" data-testid="button-bulk-export">
                  <Filter className="mr-2 h-4 w-4" />
                  Export Pending List
                </Button>
                <Button variant="outline" data-testid="button-bulk-notify">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Send Reminder Notifications
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;