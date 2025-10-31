import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">About Roots Reconnect</h4>
            <p className="text-muted-foreground leading-relaxed">
              Preserving and celebrating traditional art, folklore, and cultural values 
              for future generations.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/explore" className="block text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-explore">
                Explore Heritage
              </Link>
              <Link href="/stories" className="block text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-stories">
                Folk Stories
              </Link>
              <Link href="/quiz" className="block text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-quiz">
                Cultural Quiz
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">
                Share Your Story
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-2 mb-4">
              <Button size="icon" variant="ghost" data-testid="button-social-facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-social-twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-social-instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-social-mail">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Join our community in celebrating cultural heritage
            </p>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Roots Reconnect. Honoring traditions, inspiring futures.</p>
        </div>
      </div>
    </footer>
  );
}
