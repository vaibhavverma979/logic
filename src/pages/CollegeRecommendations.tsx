import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, School, MapPin, Users, Star, ExternalLink, GraduationCap, DollarSign, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

interface College {
  id: number;
  name: string;
  location: string;
  type: string;
  ranking: number;
  matchScore: number;
  tuitionFee: string;
  programs: string[];
  studentCount: string;
  acceptanceRate: string;
  description: string;
  highlights: string[];
}

const CollegeRecommendations = () => {
  const [selectedType, setSelectedType] = useState<string>("all");

  const colleges: College[] = [
    {
      id: 1,
      name: "bundelkhand institute of engineering and technology",
      location: "Jhansi Uttar Pradesh",
      type: "government",
      ranking: 3,
      matchScore: 95,
      tuitionFee: "$56,169/year",
      programs: ["Computer Science", "Engineering", "Business", "Medicine"],
      studentCount: "17,000",
      acceptanceRate: "4%",
      description: "World-renowned research university known for innovation in technology and entrepreneurship.",
      highlights: ["Top-ranked CS program", "Silicon Valley connections", "Strong research opportunities"]
    },
    {
      id: 2,
      name: "MIT (Massachusetts Institute of Technology)",
      location: "Cambridge, MA",
      type: "Private",
      ranking: 2,
      matchScore: 92,
      tuitionFee: "$53,790/year",
      programs: ["Engineering", "Computer Science", "Physics", "Mathematics"],
      studentCount: "11,000",
      acceptanceRate: "7%",
      description: "Leading institution for science, technology, engineering, and mathematics education.",
      highlights: ["World-class engineering", "Cutting-edge research", "Innovation hub"]
    },
    {
      id: 3,
      name: "University of California, Berkeley",
      location: "Berkeley, CA",
      type: "Public",
      ranking: 22,
      matchScore: 88,
      tuitionFee: "$14,226/year (in-state)",
      programs: ["Engineering", "Computer Science", "Business", "Sciences"],
      studentCount: "45,000",
      acceptanceRate: "17%",
      description: "Premier public research university with strong programs in technology and sciences.",
      highlights: ["Excellent value", "Diverse student body", "Research opportunities"]
    },
    {
      id: 4,
      name: "Carnegie Mellon University",
      location: "Pittsburgh, PA",
      type: "Private",
      ranking: 25,
      matchScore: 86,
      tuitionFee: "$57,560/year",
      programs: ["Computer Science", "Engineering", "Business", "Arts"],
      studentCount: "14,000",
      acceptanceRate: "15%",
      description: "Renowned for computer science, engineering, and interdisciplinary programs.",
      highlights: ["Top CS school", "Industry partnerships", "Innovation focus"]
    },
    {
      id: 5,
      name: "Georgia Institute of Technology",
      location: "Atlanta, GA",
      type: "Public",
      ranking: 35,
      matchScore: 84,
      tuitionFee: "$12,424/year (in-state)",
      programs: ["Engineering", "Computer Science", "Technology", "Business"],
      studentCount: "36,000",
      acceptanceRate: "21%",
      description: "Leading technological university with strong industry connections.",
      highlights: ["Affordable tuition", "Great job placement", "Tech industry connections"]
    },
    {
      id: 6,
      name: "University of Illinois Urbana-Champaign",
      location: "Urbana, IL",
      type: "Public",
      ranking: 47,
      matchScore: 81,
      tuitionFee: "$16,004/year (in-state)",
      programs: ["Engineering", "Computer Science", "Business", "Agriculture"],
      studentCount: "48,000",
      acceptanceRate: "60%",
      description: "Top-tier public research university with excellent engineering and CS programs.",
      highlights: ["Strong alumni network", "Research opportunities", "Diverse programs"]
    }
  ];

  const collegeTypes = ["all", "Private", "Public"];

  const filteredColleges = selectedType === "all" 
    ? colleges 
    : colleges.filter(college => college.type === selectedType);

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-blue-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getMatchScoreBg = (score: number) => {
    if (score >= 90) return "bg-green-100";
    if (score >= 80) return "bg-blue-100";
    if (score >= 70) return "bg-yellow-100";
    return "bg-red-100";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-accent text-white py-6">
        <div className="section-container">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/student/aptitude-test">
                <Button variant="ghost" className="text-white hover:bg-white/20">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Test Results
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold flex items-center">
                  <School className="mr-2 h-6 w-6" />
                  College Recommendations
                </h1>
                <p className="text-white/90">Personalized college matches based on your aptitude test</p>
              </div>
            </div>
            <Badge className="bg-white/20 text-white">
              {filteredColleges.length} Matches
            </Badge>
          </div>
        </div>
      </div>

      <div className="section-container py-8">
        {/* Summary Card */}
        <Card className="mb-6 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-primary mb-2">Your College Matches</h2>
                <p className="text-muted-foreground">
                  Based on your aptitude test results, we've found colleges that align with your interests in 
                  Engineering & Technology, Computer Science, and related fields.
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{colleges.length}</div>
                <div className="text-sm text-muted-foreground">Colleges Found</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filter by Type</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {collegeTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  onClick={() => setSelectedType(type)}
                  className="capitalize"
                >
                  {type === "all" ? "All Colleges" : type}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* College Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredColleges.map((college) => (
            <Card key={college.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{college.name}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {college.location}
                      </span>
                      <Badge variant="outline">{college.type}</Badge>
                      <span className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        #{college.ranking}
                      </span>
                    </div>
                  </div>
                  <div className={`text-center p-3 rounded-lg ${getMatchScoreBg(college.matchScore)}`}>
                    <div className={`text-2xl font-bold ${getMatchScoreColor(college.matchScore)}`}>
                      {college.matchScore}%
                    </div>
                    <div className="text-xs text-muted-foreground">Match</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{college.description}</p>
                
                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <Users className="h-5 w-5 mx-auto text-primary mb-1" />
                    <div className="text-sm font-semibold">{college.studentCount}</div>
                    <div className="text-xs text-muted-foreground">Students</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <DollarSign className="h-5 w-5 mx-auto text-primary mb-1" />
                    <div className="text-sm font-semibold">{college.tuitionFee}</div>
                    <div className="text-xs text-muted-foreground">Tuition</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <Star className="h-5 w-5 mx-auto text-primary mb-1" />
                    <div className="text-sm font-semibold">{college.acceptanceRate}</div>
                    <div className="text-xs text-muted-foreground">Acceptance</div>
                  </div>
                </div>

                {/* Programs */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Recommended Programs
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {college.programs.map((program, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {program}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="font-semibold mb-2">Why This College?</h4>
                  <ul className="space-y-1">
                    {college.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 pt-4 border-t">
                  <Button className="flex-1 btn-gradient">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Learn More
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Save College
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Next Steps */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Ready to Apply?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <GraduationCap className="h-8 w-8 mx-auto text-primary mb-2" />
                <h3 className="font-semibold mb-1">Research Programs</h3>
                <p className="text-sm text-muted-foreground">Learn more about specific degree programs</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Users className="h-8 w-8 mx-auto text-success mb-2" />
                <h3 className="font-semibold mb-1">Connect with Counselors</h3>
                <p className="text-sm text-muted-foreground">Get expert guidance on applications</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Star className="h-8 w-8 mx-auto text-accent mb-2" />
                <h3 className="font-semibold mb-1">Apply for Scholarships</h3>
                <p className="text-sm text-muted-foreground">Find funding for your education</p>
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-4">
              <Link to="/student/scholarship-ai">
                <Button variant="outline">
                  Find Scholarships
                </Button>
              </Link>
              <Link to="/student/counsellors">
                <Button className="btn-gradient">
                  Talk to Counselor
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CollegeRecommendations;