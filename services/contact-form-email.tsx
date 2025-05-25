import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Img,
  Link,
  Row,
  Button,
  Column
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import { CSSProperties } from "react";

type ContactFormEmailProps = {
  senderName: string;
  senderEmail: string;
  projectDetails: string;
};

interface ArtistWelcomeEmailProps {
  steps?: {
    id: number;
    description: React.ReactNode;
  }[];
  links?: string[];
}

type CombinedEmailProps = ContactFormEmailProps & ArtistWelcomeEmailProps;

const ContactFormEmail = ({
  senderName,
  projectDetails,
  senderEmail,
  steps,
  links,
}: CombinedEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>🎨 You've got a new message from your site!</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#121212",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <Container className="bg-white p-45">
            <Section>
              <Row>
                <Text className="text-base">
                  Hey there 🖌️,
                </Text>
                <Text className="text-base">
                  ✨ A new creative soul just reached out through your site! ✨
                </Text> 
                <Text className="text-base text-center">
                  <strong>👤 Name:</strong> {senderName} <br />
                  <strong>📧 Email:</strong> {senderEmail} <br />
                  <strong>📝 Message:</strong> {projectDetails}
                </Text>
                <Text className="text-base">Stay inspired, <br />🎭 The Studio</Text>
              </Row>
            </Section>

            {links?.length ? (
              <Section className="mt-45">
                <Row>
                  {links.map((link) => (
                    <Column key={link}>
                      <Link className="text-black underline font-bold">
                        {link}
                      </Link>{" "}
                      <span className="text-pink-500">🎨</span>
                    </Column>
                  ))}
                </Row>
              </Section>
            ) : null}
          </Container>

          <Container className="mt-20">
            <Text className="text-center text-gray-400 mb-45">
              © 2024 Your Artist Name or Studio. All rights reserved.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const styles: { [key: string]: CSSProperties } = {
  main: {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  container: {
    margin: "0 auto",
    padding: "20px",
    maxWidth: "600px",
  },
  logoHeader: {
    textAlign: "center",
    marginBottom: "20px",
  },
  logo: {
    width: "150px",
    height: "auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  h1: {
    color: "#1d1c1d",
    fontSize: "24px",
    fontWeight: "700",
    margin: "20px 0",
    lineHeight: "30px",
  },
  content: {
    padding: "20px",
    backgroundColor: "#f9fafb",
    borderRadius: "8px",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "10px",
  },
  footer: {
    textAlign: "center",
    marginTop: "20px",
  },
  footerText: {
    fontSize: "14px",
    color: "#888888",
  },
};

export default ContactFormEmail;
