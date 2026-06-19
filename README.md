MailMind AI - Intelligent Email Assistant
Project Overview

MailMind AI is an AI-powered email assistant designed to simplify Gmail management using natural language commands. The core AI workflow was initially designed and built using n8n, where multiple Gmail automation tools were integrated with the Google Gemini AI Agent.

The assistant can understand user requests and perform Gmail operations such as:

Reading received emails
Sending new emails
Creating draft emails
Replying to existing emails
Managing Gmail labels
Marking emails as unread
Summarizing emails (currently under development and not fully functional)

Most of the email management features are working successfully and can be tested through the web application.

AI Workflow Architecture

The backend automation was developed using n8n. Initially, the workflow was tested using the internal n8n chat interface. Later, the chat trigger was replaced with a Webhook so that the AI workflow could communicate with an external website.

The complete flow is:

User → MailMind AI Website → n8n Webhook → Gemini AI Agent → Gmail Tools → Response → Website
Website Development

To make the AI assistant easy to use, a user-friendly web application was developed using React, TypeScript, and Vite. The initial website structure and interface were created using Cursor AI.

Later, the complete project was shifted to VS Code for manual development, final modifications, and integration with the n8n Webhook.

The website provides:

Secure login interface
Dashboard for the user
Chat-based AI assistant
Clean and interactive user interface
How to Access the Website

The application has been deployed using Vercel and can be accessed using the deployment link below:

Website Link:

repeatless-mailmindai-git-main-naswa.vercel.app

Login Credentials

Use the following credentials to access the application:

Email ID:
mankusaidurga@gmail.com

Password:
123456

After logging in, you can interact with MailMind AI through the chat interface and give commands related to Gmail operations.

Technologies Used
Frontend
React
TypeScript
Vite
HTML
CSS
AI & Automation
n8n
Google Gemini AI
Gmail API
Webhooks
Development Tools
Cursor AI
Visual Studio Code
GitHub
Vercel
Project Journey

The development journey of MailMind AI involved multiple stages:

Designed and built the complete AI email automation workflow in n8n.
Integrated Google Gemini with Gmail tools to perform email-related tasks.
Tested the AI assistant using the internal n8n chat interface.
Developed the frontend website using Cursor AI.
Migrated the codebase to VS Code for further development.
Connected the website and n8n workflow using Webhooks.
Deployed the final application using Vercel.
Future Improvements
Improve the email summarization feature.
Enhance conversation memory.
Add more advanced email insights and management features.
Improve UI and user experience.
Author



This format is better for an evaluator because it explains what you built, how you built it, what works, current limitations, how to test it, and the complete development journey.
