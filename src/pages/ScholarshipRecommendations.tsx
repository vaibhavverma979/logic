import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Award, DollarSign, Calendar, ExternalLink, GraduationCap, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface Scholarship {
  id: number;
  name: string;
  amount: string;
  provider: string;
  deadline: string;
  eligibility: string[];
  description: string;
  category: string;
  location: string;
  requirements: string[];
}

const ScholarshipRecommendations = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const scholarships: Scholarship[] = [
    {
      id: 1,
      name: "National Merit Engineering Scholarship",
      amount: "$5,000",
      provider: "Engineering Foundation",
      deadline: "March 15, 2024",
      eligibility: ["Engineering major", "3.5+ GPA", "US citizen"],
      description: "Supporting outstanding engineering students who demonstrate academic excellence and innovation potential.",
      category: "Engineering",
      location: "Nationwide",
      requirements: ["Transcript", "Essay", "2 Recommendations"]
    },
    {
      id: 2,
      name: "Tech Future Leaders Award",
      amount: "$10,000",
      provider: "TechCorp Foundation",
      deadline: "April 30, 2024",
      eligibility: ["Computer Science major", "Leadership experience", "3.0+ GPA"],
      description: "Empowering the next generation of technology leaders through financial support and mentorship.",
      category: "Technology",
      location: "Nationwide",
      requirements: ["Portfolio", "Leadership essays", "Interview"]
    },
    {
      id: 3,
      name: "Future Doctors Scholarship",
      amount: "$12,000",
      provider: "Medical Association",
      deadline: "February 28, 2024",
      eligibility: ["Pre-med or Medical student", "3.7+ GPA", "Community service"],
      description: "Supporting aspiring physicians who show commitment to serving communities in need.",
      category: "Medicine",
      location: "Nationwide",
      requirements: ["Medical school acceptance", "Service hours", "Personal statement"]
    },
    {
      id: 4,
      name: "Academic Achievement Award",
      amount: "$5,000",
      provider: "Education Trust",
      deadline: "May 15, 2024",
      eligibility: ["Any major", "3.5+ GPA", "Financial need"],
      description: "Recognizing academic excellence across all fields of study for deserving students.",
      category: "General",
      location: "Nationwide",
      requirements: ["Financial aid forms", "Academic records", "Essay"]
    }
  ];

  const categories = ["all", "Engineering", "Technology", "Medicine", "General"];

  const filteredScholarships = selectedCategory === "all" 
    ? scholarships 
    : scholarships.filter(scholarship => scholarship.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-secondary to-secondary-light text-white py-6">
        <div className="section-container">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/student/scholarship-ai">
                <Button variant="ghost" className="text-white hover:bg-white/20">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Chat
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold flex items-center">
                  <Award className="mr-2 h-6 w-6" />
                  Scholarship Recommendations
                </h1>
                <p className="text-white/90">Personalized scholarships based on your profile</p>
              </div>
            </div>
            <Badge className="bg-white/20 text-white">
              {filteredScholarships.length} Found
            </Badge>
          </div>
        </div>
      </div>

      <div className="section-container py-8">
        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filter by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category === "all" ? "All Categories" : category}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Scholarship Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredScholarships.map((scholarship) => (
            <Card key={scholarship.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{scholarship.name}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {scholarship.amount}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {scholarship.deadline}
                      </span>
                    </div>
                  </div>
                  <Badge variant="secondary">{scholarship.category}</Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{scholarship.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Eligibility Requirements
                  </h4>
                  <ul className="space-y-1">
                    {scholarship.eligibility.map((req, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Application Requirements
                  </h4>
                  <ul className="space-y-1">
                    {scholarship.requirements.map((req, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {scholarship.location}
                    </span>
                    <span className="text-xs">Provider: {scholarship.provider}</span>
                  </div>
                  <Button className="btn-gradient">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredScholarships.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Award className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No scholarships found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or go back to chat for more recommendations.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ScholarshipRecommendations;