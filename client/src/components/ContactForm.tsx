import { Card, CardContent, CardHeader, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    region: "",
    category: "",
    story: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Thank you for sharing!",
      description: "Your cultural story has been submitted successfully.",
    });
    setFormData({ name: "", email: "", region: "", category: "", story: "" });
  };

  return (
    <Card data-testid="card-contact-form">
      <CardHeader>
        <h3 className="text-3xl font-semibold">Share Your Story</h3>
        <CardDescription className="text-base">
          Help preserve cultural heritage by sharing your family traditions and local stories.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                data-testid="input-name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                data-testid="input-email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="region">Region/Country</Label>
              <Input
                id="region"
                value={formData.region}
                onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                placeholder="e.g., Kerala, India"
                required
                data-testid="input-region"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                <SelectTrigger id="category" data-testid="select-category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="folklore">Folklore</SelectItem>
                  <SelectItem value="festival">Festival</SelectItem>
                  <SelectItem value="art">Traditional Art</SelectItem>
                  <SelectItem value="craft">Handicraft</SelectItem>
                  <SelectItem value="music">Music & Dance</SelectItem>
                  <SelectItem value="food">Culinary Tradition</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="story">Your Cultural Story</Label>
            <Textarea
              id="story"
              value={formData.story}
              onChange={(e) => setFormData({ ...formData, story: e.target.value })}
              placeholder="Share your family tradition, local folklore, or cultural practice..."
              className="min-h-32 resize-none"
              required
              data-testid="textarea-story"
            />
            <p className="text-sm text-muted-foreground">
              {formData.story.length} characters
            </p>
          </div>

          <Button type="submit" size="lg" className="w-full md:w-auto" data-testid="button-submit">
            Submit Story
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
