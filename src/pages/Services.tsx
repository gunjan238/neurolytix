import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/ui/footer";
import { useNavigate } from "react-router-dom";
import { 
  Brain, 
  BarChart3, 
  Code, 
  Database, 
  Factory, 
  Heart, 
  ShoppingCart, 
  Building, 
  Car,
  GraduationCap,
  Landmark,
  Shield
} from "lucide-react";

const Services = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate function

  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced neural networks, deep learning models, natural language processing, and predictive analytics solutions tailored to your business needs.",
      features: ["Neural Network Development", "NLP Solutions", "Predictive Analytics", "Computer Vision", "Recommendation Systems"]
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Transform your data into actionable insights with comprehensive BI solutions, real-time dashboards, and intelligent reporting systems.",
      features: ["Real-time Dashboards", "Data Visualization", "KPI Monitoring", "Executive Reporting", "Self-Service Analytics"]
    },
    {
      icon: Code,
      title: "Software & Application Development",
      description: "Custom software solutions built with cutting-edge technologies, scalable architectures, and user-centric design principles.",
      features: ["Web Applications", "Mobile Apps", "API Development", "Cloud Solutions", "System Integration"]
    },
    {
      icon: Database,
      title: "Data Consultancy",
      description: "Strategic data architecture, governance, and optimization services to maximize the value of your data assets.",
      features: ["Data Strategy", "Architecture Design", "Data Governance", "ETL Pipelines", "Data Lake Implementation"]
    }
  ];

  const industries = [
    { icon: Factory, name: "Manufacturing", description: "Predictive maintenance, quality control, supply chain optimization" },
    { icon: Heart, name: "Healthcare", description: "Patient analytics, diagnostic AI, treatment optimization" },
    { icon: ShoppingCart, name: "Retail & E-commerce", description: "Customer behavior analysis, inventory optimization, personalization" },
    { icon: Building, name: "Real Estate", description: "Property valuation, market analysis, investment insights" },
    { icon: Car, name: "Automotive", description: "Autonomous systems, predictive maintenance, customer insights" },
    { icon: GraduationCap, name: "Education", description: "Learning analytics, student performance prediction, curriculum optimization" },
    { icon: Landmark, name: "Financial Services", description: "Risk assessment, fraud detection, algorithmic trading" },
    { icon: Shield, name: "Government", description: "Public safety analytics, resource optimization, citizen services" }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive AI and data solutions designed to transform your business and drive intelligent growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-neural h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg neural-pulse">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-primary">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="bg-secondary/50">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our expertise spans across all major industry sectors, delivering tailored solutions that address 
              specific challenges and opportunities in each domain.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="card-neural text-center group cursor-pointer">
                <CardHeader className="pb-4">
                  <industry.icon className="w-10 h-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and data solutions can drive innovation and growth in your organization.
            </p>
            <Button variant="neural" size="lg"  onClick={() => navigate("/contact")}>
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;