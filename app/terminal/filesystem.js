import { FileSystem } from 'javascript-terminal-turtle';

// File contents
const experienceContent = {
  content: "Purdue University - West Lafayette, IN\n-> Undergraduate in Cybersecurity; Minor in Communications August 2021 - Present\n\nKimball Electronics - Indianapolis, IN - IT Client and Infrastructure Support Intern\n-> May 2025 - August 2025\n\nRovercode - Indianapolis, IN - Frontend Web Dev Intern\n-> July 2019 - Febuary 2020"
};

const aboutContent = {
  content: "Hi, I'm Liam.\n\nI started my education at Purdue University in West Lafayette, Indiana, in 2021. My interests range from everything from Penetration Testing (Red Team), Defense (Blue Team), to hiking and camping!\n\nDuring my time at Purdue I've had classes that tested my limits and improved my skills.\nI've taken Digital Forensics courses, Linux and Windows System Admin courses, Cryptography courses, and much more.\nI've started on my networking classes this Fall semester 2025. With DNS, IP Addressing, and Subnetting as well as specific protocols.\n\nI'm excited to get into the professional world and gain expereince.\n\nHere's a link to my Hiking/Camping Photos!\nhttps://ableglobe.pixieset.com/hikingcamping/"
};

const personalContent = {
  content: "TurtleCTF - Purdue University Student Made CTF\n-> #1 in current leaderboard (5 boxes)\n\nGoogle Cybersecurity Certification\n-> December 2024\n\nISC2 Candidate\n-> December 2024\n\nWorking towards CompTIA Network+/Security+/A+\n->January 2025 - Present"
};

const passwdContent = {
  content: "root:x:0:0:root:/root:/usr/bin/bash\nliam:x:1000:1000:liam:/home/liam:/bin/bash\nlawrence:x:1001:1001:lawrence:/home/lawrence:/bin/bash\nted:x:1002:1002:ted:/home/ted:/bin/bash\njenny:x:1003:1003:jenny:/home/jenny:/bin/bash"
};

const hostnameContent = {
  content: "vghs\nhttps://www.youtube.com/playlist?list=PLsMtUWKCmBPRFzqglpk4YQlNFy8wzSXBN\nBrian D IS GOING ALLLLLLLLL THEEEEEEEE WAYYYYYYYYYY!!!"
};

const hostsContent = {
  content: "127.0.0.1\tlocalhost\n127.0.1.1\tvghs"
};

const lawrenceContent = {
  content: "Lawrence Pemberton\nLet's hanglide out of this looser emporium!"
};

const tedContent = {
  content: "Ted Wong or Theodore Wong\nI don't have butterflies, I have DRAGONFLIES."
};

const resolvContent = {
  content: "Why are cybersec people so lonely?\nThey're afraid of attachments."
};

// Directory structure with full paths
const fileSystemStructure = {
  "/home": {},
  "/home/liam": {},
  "/home/liam/about.txt": aboutContent,
  "/home/liam/personal.txt": personalContent,
  "/home/liam/experience.txt": experienceContent,
  "/home/lawrence": {},
  "/home/lawrence/name.txt": lawrenceContent,
  "/home/ted": {},
  "/home/ted/name.txt": tedContent,
  "/home/jenny": {},
  
  "/etc": {},
  "/etc/passwd": passwdContent,
  "/etc/hostname": hostnameContent,
  "/etc/hosts": hostsContent,
  "/etc/resolv.conf": resolvContent,
  
  "/var": {},
  "/vghs": {}
};

// Create and export the filesystem
const fileSystem = FileSystem.create(fileSystemStructure);
export default fileSystem;
