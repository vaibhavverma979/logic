import { GraduationCap, Users, Target, Heart, Star, BookOpen } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-white">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-accent">CareerPath</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Empowering students to discover their potential and build meaningful careers through AI-powered guidance and expert support
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold gradient-text mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At CareerPath, we believe every student deserves access to quality career guidance and educational resources. Our mission is to bridge the gap between students' aspirations and their career achievements through innovative technology and expert mentorship.
              </p>
              <p className="text-lg text-muted-foreground">
                We combine the power of artificial intelligence with human expertise to provide personalized career recommendations, scholarship opportunities, and educational pathways that align with each student's unique strengths and interests.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="feature-card text-center">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Personalized Guidance</h3>
                <p className="text-sm text-muted-foreground">Tailored career paths for every student</p>
              </div>
              <div className="feature-card text-center">
                <div className="p-4 bg-secondary/10 rounded-full w-fit mx-auto mb-4">
                  <Star className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Expert Network</h3>
                <p className="text-sm text-muted-foreground">Connect with professional counselors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card text-center">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Education First</h3>
              <p className="text-muted-foreground">
                We prioritize educational excellence and believe in the transformative power of quality education for all students.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="p-4 bg-secondary/10 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                Building bridges between students, educators, counselors, and institutions to create a supportive ecosystem.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="p-4 bg-accent/10 rounded-full w-fit mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inclusive Growth</h3>
              <p className="text-muted-foreground">
                Ensuring equal opportunities for students from all backgrounds to access quality career guidance and resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-background">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold gradient-text mb-8">Our Vision</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8">
              To become the leading platform that transforms how students discover and pursue their career paths, making quality career guidance accessible to every student regardless of their location or background.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">For Students</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AI-powered career recommendations</li>
                  <li>• Access to scholarship opportunities</li>
                  <li>• Direct connection with expert counselors</li>
                  <li>• Comprehensive college and university database</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">For Educators</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Platform to share knowledge and resources</li>
                  <li>• Tools for student progress tracking</li>
                  <li>• Community of education professionals</li>
                  <li>• Administrative support and analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold gradient-text mb-8">Built by Experts</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            CareerPath is developed by a team of education professionals, career counselors, and technology experts who are passionate about transforming the career guidance landscape.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education Specialists</h3>
              <p className="text-muted-foreground">Experts in curriculum development and educational psychology</p>
            </div>
            <div className="feature-card">
              <div className="p-4 bg-secondary/10 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Counselors</h3>
              <p className="text-muted-foreground">Licensed professionals with years of guidance experience</p>
            </div>
            <div className="feature-card">
              <div className="p-4 bg-accent/10 rounded-full w-fit mx-auto mb-4">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tech Innovators</h3>
              <p className="text-muted-foreground">AI and software development experts building the future</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;