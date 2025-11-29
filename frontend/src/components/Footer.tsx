import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Contact Information */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Contact Us</h3>
            <ul className={styles.list}>
              <li>Email: info@envision-ad.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Main Street, City, State 12345</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Follow Us</h3>
            <ul className={styles.list}>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Legal</h3>
            <ul className={styles.list}>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>
            &copy; {new Date().getFullYear()} Envision AD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
