import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-yuga-charcoal border-t border-border">
      <div className="container-editorial section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">YUGA</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ancient Stories.<br />New Streets.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-editorial text-foreground mb-6">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/collection" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  New Drop
                </Link>
              </li>
              <li>
                <Link to="/collection?category=tees" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link to="/collection?category=hoodies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link to="/collection?category=bottoms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Bottomwear
                </Link>
              </li>
            </ul>
          </div>

          {/* Story */}
          <div>
            <h4 className="text-editorial text-foreground mb-6">Story</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/story" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About YUGA
                </Link>
              </li>
              <li>
                <Link to="/story#yuga" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  What is a Yuga?
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-editorial text-foreground mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/size-guide" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 YUGA. All rights reserved.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
