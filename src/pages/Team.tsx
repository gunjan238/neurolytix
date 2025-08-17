import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/ui/footer";
import { Linkedin, Mail, Award, Users, Target } from "lucide-react";

const Team = () => {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Meet the visionary leaders driving innovation in AI and business intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-15">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>

            {/* Gunjan Kothari Profile - Single Column */}
            <div className="flex justify-center gap-8 flex-wrap">
            <Card className="card-neural mb-12 w-80 text-center mx-auto">
              <div className="flex flex-col items-center p-8 text-center space-y-6">
                <div className="aspect-square w-48 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <img
                    src="/assets/gunjan.png"
                    alt="Gunjan Kothari - Founder and CEO"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">Gunjan Kothari</h3>
                  <p className="text-primary font-semibold mb-4">Founder & CEO</p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <Badge variant="outline" className="bg-primary/10">AI Strategy</Badge>
                  <Badge variant="outline" className="bg-primary/10">Machine Learning</Badge>
                  <Badge variant="outline" className="bg-primary/10">Business Intelligence</Badge>
                  <Badge variant="outline" className="bg-primary/10">Data Science</Badge>
                </div>

                <div className="flex gap-4">
                  
                  <a
  href="https://www.linkedin.com/in/gunjan-kothari-bd290901/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" size="sm" className="flex items-center gap-2">
    <Linkedin className="w-4 h-4" />
    
  </Button>
</a>

                
                </div>
              </div>
            </Card>

            {/*Om Bhimani profile*/}
             <Card className="card-neural mb-12 w-80 text-center mx-auto">
              <div className="flex flex-col items-center p-8 text-center space-y-6">
                <div className="aspect-square w-48 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <img
                    src="assets\Om bhimani.jpg"
                    alt="Om Bhimani- Co-Founder"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">Om Bhimani</h3>
                  <p className="text-primary font-semibold mb-4">Co-Founder</p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <Badge variant="outline" className="bg-primary/10">Azure Data Engineer</Badge>
                  <Badge variant="outline" className="bg-primary/10">Delta Lake & Databricks</Badge>
                  <Badge variant="outline" className="bg-primary/10">Data Analyst</Badge>
                  {/* <Badge variant="outline" className="bg-primary/10"></Badge> */}
                </div>

                <div className="flex gap-4">
                  
                  <a
  href="https://www.linkedin.com/in/ombhimani/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" size="sm" className="flex items-center gap-2">
    <Linkedin className="w-4 h-4" />
    
  </Button>
</a>

                  {/* <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    
                  </Button> */}
                </div>
              </div>
            </Card>
            </div>
          </div>
        </div>


        
      </section>

      {/* Company Values in Action */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Principles</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-neural text-center">
                <CardHeader>
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We maintain the highest standards in every project, delivering solutions that exceed expectations 
                    and drive measurable business value.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-neural text-center">
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We believe in the power of partnership, working closely with our clients to understand their 
                    unique challenges and co-create innovative solutions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-neural text-center">
                <CardHeader>
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our focus is on delivering tangible outcomes that transform businesses and create lasting 
                    competitive advantages through intelligent technology.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Growing Team</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Are you passionate about AI, machine learning, and driving business transformation? 
              We're always looking for talented individuals to join our mission.
            </p>
            <Button variant="neural" size="lg">
              Explore Opportunities
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
