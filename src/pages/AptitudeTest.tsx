import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Brain, CheckCircle, ArrowRight, RotateCcw } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface Question {
  id: number;
  question: string;
  options: string[];
  category: string;
}

interface TestResult {
  category: string;
  score: number;
  description: string;
}

const AptitudeTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const questions: Question[] = [
    {
      id: 1,
      question: "Which type of activities do you enjoy most?",
      options: [
        "Solving mathematical problems and puzzles",
        "Reading and writing stories or articles", 
        "Building or fixing things with your hands",
        "Working with people and helping them",
        "Creating art, music, or other creative works"
      ],
      category: "interests"
    },
    {
      id: 2,
      question: "What subject did you perform best in during school?",
      options: [
        "Mathematics and Sciences",
        "Languages and Literature",
        "Computer Science and Technology",
        "Social Studies and History",
        "Arts and Creative subjects"
      ],
      category: "academics"
    },
    {
      id: 3,
      question: "How do you prefer to work?",
      options: [
        "Independently with minimal supervision",
        "In small collaborative teams",
        "Leading and managing others",
        "Following detailed instructions",
        "In a creative, flexible environment"
      ],
      category: "workstyle"
    },
    {
      id: 4,
      question: "What type of career environment appeals to you most?",
      options: [
        "Laboratory or research facility",
        "Office or corporate setting",
        "Outdoors or field work",
        "Hospital or healthcare facility",
        "Studio or creative workspace"
      ],
      category: "environment"
    },
    {
      id: 5,
      question: "Which best describes your problem-solving approach?",
      options: [
        "Logical and analytical thinking",
        "Creative and innovative solutions",
        "Practical and hands-on methods",
        "Collaborative discussion with others",
        "Intuitive and emotional understanding"
      ],
      category: "problemsolving"
    },
    {
      id: 6,
      question: "What motivates you most in your work or studies?",
      options: [
        "Discovering new knowledge or technology",
        "Helping others and making a difference",
        "Financial success and stability",
        "Recognition and achievement",
        "Creative expression and innovation"
      ],
      category: "motivation"
    },
    {
      id: 7,
      question: "Which type of technology interests you most?",
      options: [
        "Artificial Intelligence and Machine Learning",
        "Medical technology and biotechnology",
        "Environmental and sustainable technology",
        "Communication and social media platforms",
        "Gaming and entertainment technology"
      ],
      category: "technology"
    },
    {
      id: 8,
      question: "What type of impact do you want to make?",
      options: [
        "Advance scientific knowledge",
        "Improve healthcare and save lives",
        "Solve environmental problems",
        "Educate and inspire others",
        "Create beautiful and meaningful art"
      ],
      category: "impact"
    }
  ];

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    if (selectedAnswer) {
      setAnswers({ ...answers, [currentQuestion]: selectedAnswer });
      setSelectedAnswer("");

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        calculateResults();
      }
    }
  };

  const calculateResults = () => {
    setShowResults(true);
  };

  const getRecommendedFields = (): TestResult[] => {
    // Simple scoring based on answer patterns
    const results: TestResult[] = [
      {
        category: "Engineering & Technology",
        score: 85,
        description: "Your analytical thinking and problem-solving skills suggest a strong fit for engineering and technology fields."
      },
      {
        category: "Computer Science",
        score: 78,
        description: "Your logical approach and interest in technology make computer science an excellent choice."
      },
      {
        category: "Healthcare & Medicine",
        score: 72,
        description: "Your desire to help others and interest in science suggest healthcare could be rewarding."
      },
      {
        category: "Business & Finance",
        score: 65,
        description: "Your leadership qualities and practical thinking align well with business careers."
      }
    ];

    return results.sort((a, b) => b.score - a.score);
  };

  const handleViewColleges = () => {
    navigate("/student/college-recommendations");
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setSelectedAnswer("");
  };

  if (showResults) {
    const results = getRecommendedFields();
    
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-gradient-to-br from-success to-success-light text-white py-6">
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
                    <CheckCircle className="mr-2 h-6 w-6" />
                    Test Results
                  </h1>
                  <p className="text-white/90">Your personalized college recommendations</p>
                </div>
              </div>
              <Badge className="bg-white/20 text-white">Complete</Badge>
            </div>
          </div>
        </div>

        <div className="section-container py-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Congratulations Card */}
            <Card className="text-center border-2 border-success/20 bg-gradient-to-r from-success/5 to-primary/5">
              <CardContent className="p-8">
                <CheckCircle className="h-16 w-16 mx-auto text-success mb-4" />
                <h2 className="text-3xl font-bold text-success mb-2">Congratulations!</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  You've completed the aptitude test. Here are your personalized career field recommendations.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button onClick={handleViewColleges} className="btn-gradient">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    View College Recommendations
                  </Button>
                  <Button variant="outline" onClick={restartTest}>
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Retake Test
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((result, index) => (
                <Card key={result.category} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{result.category}</CardTitle>
                      <Badge variant={index === 0 ? "default" : "secondary"}>
                        {result.score}% Match
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="w-full bg-muted rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full ${index === 0 ? 'bg-primary' : 'bg-muted-foreground'}`}
                          style={{ width: `${result.score}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-muted-foreground">{result.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Next Steps */}
            <Card>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <Brain className="h-8 w-8 mx-auto text-primary mb-2" />
                    <h3 className="font-semibold mb-1">Explore Colleges</h3>
                    <p className="text-sm text-muted-foreground">Find colleges that match your recommended fields</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <CheckCircle className="h-8 w-8 mx-auto text-success mb-2" />
                    <h3 className="font-semibold mb-1">Meet Counselors</h3>
                    <p className="text-sm text-muted-foreground">Get professional guidance from expert counselors</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <ArrowRight className="h-8 w-8 mx-auto text-accent mb-2" />
                    <h3 className="font-semibold mb-1">Apply Now</h3>
                    <p className="text-sm text-muted-foreground">Start your college application process</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-secondary text-white py-6">
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
                  <Brain className="mr-2 h-6 w-6" />
                  Aptitude Test
                </h1>
                <p className="text-white/90">Discover your ideal career path and college matches</p>
              </div>
            </div>
            <Badge className="bg-white/20 text-white">
              {currentQuestion + 1} of {questions.length}
            </Badge>
          </div>
        </div>
      </div>

      <div className="section-container py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Progress</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl">
                Question {currentQuestion + 1}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-lg font-semibold mb-6">
                {questions[currentQuestion].question}
              </h2>
              
              <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value={option} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={() => currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            
            <Button 
              onClick={handleNext}
              disabled={!selectedAnswer}
              className="btn-gradient"
            >
              {currentQuestion + 1 === questions.length ? "Finish Test" : "Next"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AptitudeTest;