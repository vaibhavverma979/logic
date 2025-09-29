import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  HeadphonesIcon,
  Users
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-white">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            We're here to help you on your career journey. Get in touch with our team for support, questions, or collaboration opportunities.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Have questions about our platform, need technical support, or want to explore partnership opportunities? We'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground">support@careerpath.edu</p>
                    <p className="text-muted-foreground">partnerships@careerpath.edu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-CAREER</p>
                    <p className="text-muted-foreground">Monday - Friday, 9 AM - 6 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">123 Education Drive</p>
                    <p className="text-muted-foreground">Learning City, LC 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-success/10 rounded-lg">
                    <Clock className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Support Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9 AM - 6 PM EST</p>
                    <p className="text-muted-foreground">Weekend: 10 AM - 4 PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please describe your inquiry in detail..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Other Ways to Get Help</h2>
            <p className="text-xl text-muted-foreground">
              Choose the support option that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card text-center">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
              <p className="text-muted-foreground mb-4">
                Get instant help from our support team during business hours
              </p>
              <Button variant="outline">Start Chat</Button>
            </div>

            <div className="feature-card text-center">
              <div className="p-4 bg-secondary/10 rounded-full w-fit mx-auto mb-4">
                <HeadphonesIcon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Help Center</h3>
              <p className="text-muted-foreground mb-4">
                Browse our comprehensive knowledge base and FAQ section
              </p>
              <Button variant="outline">Visit Help Center</Button>
            </div>

            <div className="feature-card text-center">
              <div className="p-4 bg-accent/10 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-muted-foreground mb-4">
                Connect with other users and share experiences in our forum
              </p>
              <Button variant="outline">Join Community</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-background">
        <div className="section-container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold gradient-text mb-6">Need Immediate Help?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              For urgent matters or technical emergencies, don't hesitate to reach out directly to our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Support
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;