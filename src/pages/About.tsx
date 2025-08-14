import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import { Brain, Target, Eye, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              About NuroLytix
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Pioneering the future of intelligent business solutions through advanced neural networks and data analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Why NuroLytix Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why NuroLytix?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                The name "NuroLytix" perfectly embodies our core mission and expertise. "Neuro" represents our deep 
                focus on neural networks, artificial intelligence, and brain-inspired computing solutions. "Lytix" 
                combines "Analytics" with a modern tech edge, highlighting our commitment to transforming raw data 
                into actionable insights.
              </p>
              <p className="mb-6">
                Just as neural networks mirror the interconnected nature of the human brain, our approach to business 
                intelligence creates intelligent connections between disparate data sources, revealing patterns and 
                opportunities that traditional analytics miss. We don't just analyze data – we make it think.
              </p>
              <p>
                Our brand represents the convergence of neuroscience-inspired technology and practical business 
                analytics, positioning us as leaders in the next generation of intelligent business solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-neural">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Eye className="w-6 h-6 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To be the global leader in neural-inspired business intelligence, transforming how organizations 
                  understand and leverage their data through advanced AI and machine learning technologies. We envision 
                  a future where every business decision is powered by intelligent, predictive analytics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-neural">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To democratize advanced AI and machine learning technologies by providing accessible, scalable, and 
                  intelligent solutions that empower businesses across all industries to unlock the full potential of 
                  their data and drive innovation in their respective markets.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-neural text-center">
              <CardHeader>
                <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We constantly push the boundaries of what's possible with AI and machine learning, 
                  staying at the forefront of technological advancement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-neural text-center">
              <CardHeader>
                <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every solution we deliver is designed to be smarter, faster, and more intuitive than 
                  traditional approaches to business intelligence.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-neural text-center">
              <CardHeader>
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We measure our success by the tangible business value we create for our clients, 
                  driving real results through intelligent technology.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;