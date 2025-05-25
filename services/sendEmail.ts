"use server";
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/services/utils";
import ContactFormEmail from "@/services/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("senderName");
  const senderEmail = formData.get("senderEmail");
  const projectDetails = formData.get("projectDetails");

  // Simple Server-Side Validation
  if (!validateString(senderName, 500)) {
    return {
      error: "Invalid Sender Name",
    };
  }
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid Sender Email",
    };
  }
  if (!validateString(projectDetails, 2000)) {
    return {
      error: "Invalid Project Details",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Lauren Website <onboarding@resend.dev>",
      to: "laurenjonesweb@gmail.com",
      subject: "New Quote Request",
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        senderName: senderName as string,
        senderEmail: senderEmail as string,
        projectDetails: projectDetails as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
