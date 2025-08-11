import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NeuralBackground from "@/components/neural-background";
import Footer from "@/components/ui/footer";
import { Link } from "react-router-dom";
import { 
  Brain, 
  BarChart3, 
  Code, 
  Database, 
  ArrowRight, 
  Zap, 
  Shield, 
  Globe,
  ChevronRight
} from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced neural networks and predictive analytics to unlock intelligent insights from your data.",
      features: ["Neural Networks", "NLP", "Computer Vision"]
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with comprehensive BI solutions and real-time dashboards.",
      features: ["Real-time Dashboards", "KPI Monitoring", "Executive Reporting"]
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom applications built with cutting-edge technologies and scalable architectures.",
      features: ["Web Applications", "Mobile Apps", "API Development"]
    },
    {
      icon: Database,
      title: "Data Consultancy",
      description: "Strategic data architecture and optimization services to maximize your data assets.",
      features: ["Data Strategy", "Architecture Design", "ETL Pipelines"]
    }
  ];

  // const stats = [
  //   { number: "100+", label: "Projects Delivered" },
  //   { number: "50+", label: "Happy Clients" },
  //   { number: "24/7", label: "Support" },
  //   { number: "99%", label: "Success Rate" }
  // ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Neural Background */}
        <div className="absolute inset-0 neural-circuit">
          <NeuralBackground />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <Badge variant="outline" className="mb-6 bg-primary/10 border-primary/20 text-primary">
              <Zap className="w-4 h-4 mr-2" />
              Neural Intelligence Technology
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">NeuroLytix</span>
              <br />
              <span className="text-foreground">Intelligent Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your business with AI-powered analytics, machine learning, and intelligent data solutions 
              that drive real results across all industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="neural" size="lg" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {/* {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI and data solutions designed to transform your business operations and drive intelligent growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-neural group cursor-pointer h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto p-4 bg-primary/10 rounded-xl mb-4 group-hover:neural-pulse">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs bg-secondary/50">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why <span className="text-gradient">NeuroLytix</span>?
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  The name "NeuroLytix" embodies our core mission: combining neural network intelligence with 
                  advanced analytics to create smarter business solutions. Just as neural networks mirror the 
                  interconnected nature of the human brain, our approach creates intelligent connections between 
                  disparate data sources.
                </p>
                <p>
                  We don't just analyze data – we make it think. Our AI-powered solutions reveal patterns and 
                  opportunities that traditional analytics miss, positioning your business at the forefront of 
                  intelligent decision-making.
                </p>
              </div>
              <Button variant="outline" size="lg" className="mt-8" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="card-neural text-center">
                <CardHeader>
                  <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg">Trusted</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    Enterprise-grade security and reliability you can depend on.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="card-neural text-center">
                <CardHeader>
                  <Globe className="w-10 h-10 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg">Global</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    Serving clients across all industries and geographic regions.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="card-neural text-center">
                <CardHeader>
                  <Brain className="w-10 h-10 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg">Intelligent</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    AI-first approach to solving complex business challenges.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="card-neural text-center">
                <CardHeader>
                  <Zap className="w-10 h-10 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg">Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    Rapid deployment and quick time-to-value for all solutions.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your business with intelligent AI solutions. Contact us today for a free consultation.
          </p>
          <Button variant="neural" size="lg" asChild>
            <Link to="/contact">
              Contact NeuroLytix
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
