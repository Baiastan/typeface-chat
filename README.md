-------PREREQUISITES---------
Before you begin, ensure you have Node.js installed on your system. This project requires Node.js (which includes npm) to run and build.

-----Installing Node.js ------

Download Node.js: Visit the official Node.js website to download the installer for your operating system.
Install Node.js: Run the downloaded installer, following the prompts to install Node.js and npm. The default settings are recommended for most users.

Verify Installation: Open your terminal or command prompt and run the following commands to check that Node.js and npm are installed correctly.

in terminal enter:

---

node --version
npm --version

---

-------Node Version must be above than 18.0 version!!!---------
Follow below instructions if your node version is below 18.0

Installing NVM
If you haven't installed NVM yet, follow these installation instructions:

On Linux and macOS, open your terminal and run:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

Using NVM to Change Node.js Version

1.Open your terminal.
2.Check the available Node.js versions by running:

This command shows a list of all available Node.js versions.

3.Install Node.js version 18 (you can replace 18.x with the latest or specific minor version of Node 18 you want):

nvm install 20

NVM will download and install Node.js version 18 and the corresponding npm version.

4. Switch to the newly installed version:

nvm use 20

5.Verify the current version of Node.js:

node --version

You should see the version numbers for both Node.js and npm if the installation was successful.

---

--------SETTING UP THE PROJECTå---------

Follow these steps to get your development environment running.

1. Clone the Repository (skip if you already have the project on your machine):

in termninal enter:

---

git clone https://github.com/Baiastan/typeface-chat.git
cd your-project-name

---

--------Install Project Dependencies --------

2. Navigate to the project directory and run:

in terminal enter:

---

npm install

---

--------Running the Application--------

3. To start the application in development mode, run the following command in the project directory:

in terminal enter:

---

npm run dev

---
