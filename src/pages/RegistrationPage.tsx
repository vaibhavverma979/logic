import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Heart, 
  School, 
  UserCog,
  Mail,
  Lock,
  User,
  Phone,
  ArrowLeft
} from "lucide-react";

const roleConfig = {
  student: {
    icon: GraduationCap,
    title: "Student Registration",
    gradient: "from-primary to-primary-light",
    fields: ["name", "email", "password", "phone", "school", "grade", "address"]
  },
  teacher: {
    icon: BookOpen,
    title: "Teacher Registration", 
    gradient: "from-secondary to-secondary-light",
    fields: ["name", "email", "password", "phone", "school", "subjects", "experience", "personalIdentity", "nationalId", "teacherTrainingDegree", "degreeCertificates"]
  },
  counsellor: {
    icon: Users,
    title: "Counsellor Registration",
    gradient: "from-accent to-accent-light", 
    fields: ["name", "email", "password", "phone", "organization", "specialization", "experience", "governmentIdProof", "academicCredential", "proofOfExperience"]
  },
  ngo: {
    icon: Heart,
    title: "NGO Registration",
    gradient: "from-success to-success-light",
    fields: ["organizationName", "email", "password", "phone", "address", "description", "focusArea", "registrationDocument", "darpanId"]
  },
  college: {
    icon: School,
    title: "College Registration",
    gradient: "from-primary to-primary-light",
    fields: ["collegeName", "email", "password", "phone", "address", "courses", "accreditation", "aisheCode"]
  }
};

const RegistrationPage = () => {
  const { role } = useParams<{ role: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    school: "",
    grade: "",
    subjects: "",
    experience: "",
    organization: "",
    specialization: "",
    organizationName: "",
    address: "",
    description: "",
    focusArea: "",
    collegeName: "",
    courses: "",
    accreditation: "",
    // Teacher fields
    personalIdentity: "",
    nationalId: "",
    teacherTrainingDegree: "",
    degreeCertificates: "",
    // Counsellor fields
    governmentIdProof: "",
    academicCredential: "",
    proofOfExperience: "",
    // NGO fields
    registrationDocument: "",
    darpanId: "",
    // College fields
    aisheCode: ""
  });

  const config = roleConfig[role as keyof typeof roleConfig];
  
  // Admin users cannot register - they are created by system administrators
  if (role === "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <p className="text-center mb-4">Admin accounts cannot be registered through this portal.</p>
            <p className="text-center text-muted-foreground mb-4">
              Admin accounts are created by system administrators only.
            </p>
            <div className="flex gap-2 justify-center">
              <Button onClick={() => navigate("/login/admin")} variant="default">
                Admin Login
              </Button>
              <Button onClick={() => navigate("/")} variant="outline">
                Go Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <p>Invalid role selected. Please return to the homepage.</p>
            <Button onClick={() => navigate("/")} className="mt-4">
              Go Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Mock registration - in real app this would create account
    navigate(`/login/${role}`);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className={`bg-gradient-to-br ${config.gradient} text-white py-8`}>
        <div className="section-container">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-white hover:bg-white/20 mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="p-4 bg-white/20 rounded-full w-fit mx-auto mb-4">
                <Icon className="h-12 w-12" />
              </div>
              <h1 className="text-3xl font-bold">{config.title}</h1>
              <p className="text-white/90 mt-2">
                Join our platform and get started today
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="section-container py-12">
        <div className="max-w-md mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Create Account</CardTitle>
              <p className="text-center text-muted-foreground">
                Fill in your details to get started
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                {(config.fields.includes("name") || config.fields.includes("organizationName") || config.fields.includes("collegeName")) && (
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      {role === "ngo" ? "Organization Name" : role === "college" ? "College Name" : "Full Name"}
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder={`Enter ${role === "ngo" ? "organization" : role === "college" ? "college" : "your"} name`}
                        value={role === "ngo" ? formData.organizationName : role === "college" ? formData.collegeName : formData.name}
                        onChange={(e) => handleInputChange(
                          role === "ngo" ? "organizationName" : role === "college" ? "collegeName" : "name", 
                          e.target.value
                        )}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Phone Field */}
                {config.fields.includes("phone") && (
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Password Fields */}
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Role-specific fields */}
                {role === "student" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="school">School</Label>
                      <Input
                        id="school"
                        type="text"
                        placeholder="Enter your school name"
                        value={formData.school}
                        onChange={(e) => handleInputChange("school", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="grade">Grade/Class</Label>
                      <Input
                        id="grade"
                        type="text"
                        placeholder="Enter your grade/class"
                        value={formData.grade}
                        onChange={(e) => handleInputChange("grade", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea
                        id="address"
                        placeholder="Enter your full address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        required
                      />
                    </div>
                  </>
                )}

                {role === "teacher" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="subjects">Subjects</Label>
                      <Input
                        id="subjects"
                        type="text"
                        placeholder="Enter subjects you teach"
                        value={formData.subjects}
                        onChange={(e) => handleInputChange("subjects", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Experience (years)</Label>
                      <Input
                        id="experience"
                        type="number"
                        placeholder="Years of teaching experience"
                        value={formData.experience}
                        onChange={(e) => handleInputChange("experience", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="personalIdentity">Personal Identity (Aadhar Card)</Label>
                      <Input
                        id="personalIdentity"
                        type="text"
                        placeholder="Enter your Aadhar card number"
                        value={formData.personalIdentity}
                        onChange={(e) => handleInputChange("personalIdentity", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nationalId">National ID</Label>
                      <Input
                        id="nationalId"
                        type="text"
                        placeholder="Enter your National ID"
                        value={formData.nationalId}
                        onChange={(e) => handleInputChange("nationalId", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="teacherTrainingDegree">Teacher Training Degree</Label>
                      <Input
                        id="teacherTrainingDegree"
                        type="text"
                        placeholder="Enter your Teacher Training Degree details"
                        value={formData.teacherTrainingDegree}
                        onChange={(e) => handleInputChange("teacherTrainingDegree", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="degreeCertificates">Degree/Diploma Certificates</Label>
                      <Textarea
                        id="degreeCertificates"
                        placeholder="List your degree and diploma certificates"
                        value={formData.degreeCertificates}
                        onChange={(e) => handleInputChange("degreeCertificates", e.target.value)}
                        required
                      />
                    </div>
                  </>
                )}

                {role === "counsellor" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input
                        id="organization"
                        type="text"
                        placeholder="Enter your organization"
                        value={formData.organization}
                        onChange={(e) => handleInputChange("organization", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialization">Specialization</Label>
                      <Input
                        id="specialization"
                        type="text"
                        placeholder="Enter your specialization"
                        value={formData.specialization}
                        onChange={(e) => handleInputChange("specialization", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="governmentIdProof">Government ID Proof</Label>
                      <Input
                        id="governmentIdProof"
                        type="text"
                        placeholder="Enter your Government ID Proof details"
                        value={formData.governmentIdProof}
                        onChange={(e) => handleInputChange("governmentIdProof", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="academicCredential">Academic Credential</Label>
                      <Input
                        id="academicCredential"
                        type="text"
                        placeholder="Enter your Academic Credential details"
                        value={formData.academicCredential}
                        onChange={(e) => handleInputChange("academicCredential", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="proofOfExperience">Proof of Experience</Label>
                      <Textarea
                        id="proofOfExperience"
                        placeholder="Enter your Proof of Experience details"
                        value={formData.proofOfExperience}
                        onChange={(e) => handleInputChange("proofOfExperience", e.target.value)}
                        required
                      />
                    </div>
                  </>
                )}

                {role === "ngo" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea
                        id="address"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your NGO"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="focusArea">Focus Area</Label>
                      <Input
                        id="focusArea"
                        type="text"
                        placeholder="Enter your NGO's focus area"
                        value={formData.focusArea}
                        onChange={(e) => handleInputChange("focusArea", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registrationDocument">Registration Document</Label>
                      <Input
                        id="registrationDocument"
                        type="text"
                        placeholder="Trust Deed/Society Registration Certificate/Certificate of Incorporation"
                        value={formData.registrationDocument}
                        onChange={(e) => handleInputChange("registrationDocument", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="darpanId">Unique Darpan ID</Label>
                      <Input
                        id="darpanId"
                        type="text"
                        placeholder="Enter your Unique Darpan ID"
                        value={formData.darpanId}
                        onChange={(e) => handleInputChange("darpanId", e.target.value)}
                        required
                      />
                    </div>
                  </>
                )}

                {role === "college" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea
                        id="address"
                        placeholder="Enter your college address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your college"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="courses">Courses</Label>
                      <Input
                        id="courses"
                        type="text"
                        placeholder="Enter courses offered"
                        value={formData.courses}
                        onChange={(e) => handleInputChange("courses", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="accreditation">Accreditation</Label>
                      <Input
                        id="accreditation"
                        type="text"
                        placeholder="Enter accreditation details"
                        value={formData.accreditation}
                        onChange={(e) => handleInputChange("accreditation", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="aisheCode">AISHE Code</Label>
                      <Input
                        id="aisheCode"
                        type="text"
                        placeholder="Enter your AISHE Code"
                        value={formData.aisheCode}
                        onChange={(e) => handleInputChange("aisheCode", e.target.value)}
                        required
                      />
                    </div>
                  </>
                )}

                <Button type="submit" className="w-full btn-gradient">
                  Create Account
                </Button>
              </form>

              <Separator className="my-6" />

              <div className="text-center text-sm">
                <span className="text-muted-foreground">Already have an account? </span>
                <Link 
                  to={`/login/${role}`}
                  className="text-primary hover:underline font-medium"
                >
                  Sign in here
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;