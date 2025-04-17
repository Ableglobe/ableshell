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

const passwdContent = {
  content: "root:x:0:0:root:/root:/usr/bin/bash\nliam:x:1000:1000:liam:/home/liam:/bin/bash\nlawrence:x:1001:1001:lawrence:/home/lawrence:/bin/bash\nted:x:1002:1002:ted:/home/ted:/bin/bash\njenny:x:1003:1003:jenny:/home/jenny:/bin/bash"
};

const hostnameContent = {
  content: "vghs"
};

const hostsContent = {
  content: "127.0.0.1\tlocalhost\n127.0.1.1\tvghs"
};

const emptyContent = {
  content: ''
};

// Directory structure
const fileSystemStructure = {
  // Home directory
  "/home": {},
  "/home/liam": {},
  "/home/liam/about.txt": aboutContent,
  "/home/liam/personal.txt": personalContent,
  "/home/liam/experience.txt": experienceContent,
  "/home/lawrence": {},
  "/home/ted": {},
  "/home/jenny": {},
  
  // System directories
  "/etc": {},
  "/etc/passwd": passwdContent,
  "/etc/hostname": hostnameContent,
  "/etc/hosts": hostsContent,
  
  // Binaries
  "/bin": {},
  "/bin/bash": emptyContent,
  "/bin/sh": emptyContent,
  "/bin/cp": emptyContent,
  "/bin/cd": emptyContent,
  "/bin/mkdir": emptyContent,
  "/bin/rmdir": emptyContent,
  "/bin/ls": emptyContent,
  "/bin/cat": emptyContent,
  "/bin/clear": emptyContent,
  "/bin/echo": emptyContent,
  "/bin/head": emptyContent,
  "/bin/history": emptyContent,
  "/bin/index": emptyContent,
  "/bin/whoami": emptyContent,
  "/bin/touch": emptyContent,
  "/bin/tail": emptyContent,
  "/bin/rm": emptyContent,
  "/bin/printenv": emptyContent,
  
  // Other directories
  "/var": {},
  "/vghs": {}
};

// Create and export the filesystem
const fileSystem = FileSystem.create(fileSystemStructure);
export default fileSystem;
