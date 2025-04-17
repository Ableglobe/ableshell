import { FileSystem } from 'javascript-terminal-turtle';

// File contents
const experienceContent = {
  content: "Security Innovation - Remote - Pentester\n-> August 2023 - Present\n\nSecurity Innovation - Seattle, WA - Security Engineer Intern\n-> May 2023 - August 2023\n\nPurdue University - West Lafayette, IN - Windows System Administration TA\n-> August 2021 - May 2023\n\nDonaldson - Minneapolis, MN - SOC Intern\n-> June 2022 - August 2022"
};

const aboutContent = {
  content: "Hi, I'm Liam.\n\nI started my education at the University of Washington in Seattle. In 2020, I transferred to Purdue University \nto pursue Cybersecurity in the Dept. of Computer & Information Technology, where I earned my bachelors.\n\nI currently work as a penetration tester for Security Innovation. I primarily work on web applications, but my\ninterests in the field include AD, network, IoT, and hardware hacking."
};

const personalContent = {
  content: "HackTheBox - Online Cybersecurity CTF\n-> Peaked top 10 in the US, top 80 globally (100+ solved machines)\n\nHackTheBox - Pro Labs\n-> Cybernetics (28 machines, Red Team Operator L2)\n-> Offshore (21 machines, Pentester L3)\n-> Zephyr (17 machines, Red Team Operator L1)\n-> Dante (14 machines, Pentester L2)\n\nVulnLab - Cybersecurity Labs\n-> Completed standalone machines, AD chains, and Wutai Lab\n\nNational Cyber League Spring 2022 CTF\n-> 1st in Web App Exploitation, 17th overall\n\nTracerFire 2022 CTF - Purdue University\n-> 1st Place"
};

// Directory structure
const fileSystemStructure = {
  "/home": {
    "liam": {
      "about.txt": aboutContent,
      "personal.txt": personalContent,
      "experience.txt": experienceContent
    },
    "lawrence": {},
    "ted": {},
    "jenny": {}
  },
  "/etc": {},
  "/var": {},
  "/vghs": {}
};

// Create and export the filesystem
const fileSystem = FileSystem.create(fileSystemStructure);
export default fileSystem;
