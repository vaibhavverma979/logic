import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/LoginPage";
import RegistrationPage from "@/pages/RegistrationPage";
import StudentDashboard from "@/pages/StudentDashboard";
import NGODashboard from "@/pages/NGODashboard";
import CounselorDashboard from "@/pages/CounselorDashboard";
import TeacherDashboard from "@/pages/TeacherDashboard";
import AdminDashboard from "@/pages/AdminDashboard";
import CollegeDashboard from "@/pages/CollegeDashboard";
import AICareerChat from "@/pages/AICareerChat";
import ScholarshipAI from "@/pages/Scholarshipaii";
import CollegeSearch from "@/pages/CollegeSearch";
import StreamInformation from "@/pages/StreamInformation";
import Counsellors from "@/pages/Counsellors";
import ScholarshipRecommendations from "@/pages/ScholarshipRecommendations";
import AptitudeTest from "@/pages/AptitudeTest";
import CollegeRecommendations from "@/pages/CollegeRecommendations";
import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/login/:role" element={<LoginPage />} />
              <Route path="/register/:role" element={<RegistrationPage />} />
              <Route path="/student/dashboard" element={<StudentDashboard />} />
              <Route path="/ngo/dashboard" element={<NGODashboard />} />
              <Route path="/counselor/dashboard" element={<CounselorDashboard />} />
              <Route path="/counsellor/dashboard" element={<CounselorDashboard />} />
              <Route path="/counsellour/dashboard" element={<Navigate to="/counsellour/dashboard" replace />} />
              <Route path="/counsellr/dashboard" element={<Navigate to="/counsellour/dashboard" replace />} />
              <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/college/dashboard" element={<CollegeDashboard />} />
              <Route path="/student/career-ai" element={<AICareerChat />} />
              <Route path="/student/scholarship-ai" element={<ScholarshipAI />} />
              <Route path="/student/scholarship-recommendations" element={<ScholarshipRecommendations />} />
              <Route path="/student/aptitude-test" element={<AptitudeTest />} />
              <Route path="/student/college-recommendations" element={<CollegeRecommendations />} />
              <Route path="/student/colleges" element={<CollegeSearch />} />
              <Route path="/student/streams" element={<StreamInformation />} />
              <Route path="/student/counsellors" element={<Counsellors />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
